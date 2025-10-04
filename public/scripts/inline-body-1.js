(() => {
    const toTitleCase = (value) => value.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()).trim();

    const normaliseTitle = (rawTitle, isFundamento = false) => {
        if (!rawTitle) return '';
        const cleaned = rawTitle.replace(/\s+/g, ' ').trim();
        return isFundamento ? toTitleCase(cleaned) : cleaned;
    };

    const createInsightCardElement = (id, title, content) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.id = id;
        button.className = 'insight-card focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0077b6]/40';
        button.setAttribute('aria-expanded', 'false');

        const inner = document.createElement('div');
        inner.className = 'insight-card-inner';

        const front = document.createElement('div');
        front.className = 'insight-card-face insight-card-front';
        front.innerHTML = `
            <span class="insight-card-badge">Insight Neuro</span>
            <h6 class="insight-card-title">${title}</h6>
            <p class="insight-card-hint">Clique para ver a análise completa</p>
        `;

        const back = document.createElement('div');
        back.className = 'insight-card-face insight-card-back';
        back.innerHTML = `
            <h6 class="insight-card-title-back">${title}</h6>
            <div class="insight-card-content">${content}</div>
            <p class="insight-card-hint-back">Clique para voltar</p>
        `;

        inner.append(front, back);
        button.appendChild(inner);

        return button;
    };

    const initializeExperience = () => {
        const setupInsightCards = () => {
            const sections = Array.from(document.querySelectorAll('main section'));

            sections.forEach((section, sectionIndex) => {
                const triggers = Array.from(section.querySelectorAll('.neuro-insight, .rich-nav-icon'));
                if (!triggers.length) return;

                const cardGrid = document.createElement('div');
                cardGrid.className = 'insight-card-grid reveal mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3';

                const cardsByKey = new Map();
                const cardRecords = [];
                let cardCounter = 0;

                const closeOtherCards = (currentCard) => {
                    cardRecords.forEach(({ card }) => {
                        if (card !== currentCard) {
                            card.classList.remove('flipped');
                            card.setAttribute('aria-expanded', 'false');
                        }
                    });
                };

                triggers.forEach((trigger, triggerIndex) => {
                    const data = trigger.dataset;
                    const hasFundamento = Boolean(data.fundamento);
                    const rawTitle = data.title || data.fundamento || trigger.closest('h2, h3, h4, h5, h6')?.textContent || `Insight ${triggerIndex + 1}`;
                    const formattedTitle = normaliseTitle(rawTitle, hasFundamento && !data.title);

                    let content = data.content;
                    if (!content && data.fundamento) {
                        const hidden = document.getElementById(`fundamento-${data.fundamento}`);
                        if (hidden) {
                            content = hidden.innerHTML;
                        }
                    }

                    if (!content) return;

                    const keyBase = data.title || data.fundamento || `${sectionIndex}-${triggerIndex}`;
                    let key = keyBase;
                    while (cardsByKey.has(key)) {
                        key = `${keyBase}-${cardCounter + 1}`;
                    }

                    if (!cardsByKey.has(key)) {
                        const cardId = `insight-card-${sectionIndex}-${cardCounter++}`;
                        const card = createInsightCardElement(cardId, formattedTitle, content);
                        cardGrid.appendChild(card);

                        const record = { card, title: formattedTitle };
                        cardsByKey.set(key, record);
                        cardRecords.push(record);

                        card.addEventListener('click', () => {
                            const willOpen = !card.classList.contains('flipped');
                            closeOtherCards(card);
                            if (willOpen) {
                                card.classList.add('flipped');
                                card.setAttribute('aria-expanded', 'true');
                            } else {
                                card.classList.remove('flipped');
                                card.setAttribute('aria-expanded', 'false');
                            }
                        });

                        card.addEventListener('keydown', (event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault();
                                card.click();
                            }
                        });
                    }

                    const record = cardsByKey.get(key);
                    if (!record) return;

                    const focusCard = () => {
                        closeOtherCards(record.card);
                        record.card.classList.add('flipped');
                        record.card.setAttribute('aria-expanded', 'true');
                        record.card.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
                        record.card.focus({ preventScroll: true });
                    };

                    trigger.setAttribute('role', 'button');
                    trigger.setAttribute('tabindex', '0');
                    trigger.setAttribute('aria-controls', record.card.id);
                    trigger.setAttribute('aria-label', `Abrir insight: ${record.title}`);

                    trigger.addEventListener('click', (event) => {
                        event.preventDefault();
                        focusCard();
                    });

                    trigger.addEventListener('keydown', (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            focusCard();
                        }
                    });
                });

                if (cardRecords.length) {
                    section.appendChild(cardGrid);
                }
            });
        };

        setupInsightCards();

        // ScrollReveal Animations
        ScrollReveal().reveal('.reveal', {
            delay: 200,
            distance: '40px',
            origin: 'bottom',
            duration: 800,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            interval: 150
        });

        // --- Navigation highlighting ---
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('main section');
        const headerHeight = document.getElementById('header').offsetHeight;

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${entry.target.id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: `-${headerHeight}px 0px -40% 0px` });

        sections.forEach(section => sectionObserver.observe(section));

        // --- Charts ---
        const chartObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const canvas = entry.target;
                    const chartId = canvas.id;
                    if (!canvas.chart) {
                        if (chartId === 'chart1') {
                            const chart1Config = {
                                type: 'bar',
                                data: { labels: ['Nível de Serviço Percebido'], datasets: [{ label: 'Atual vs. Potencial', data: [75, 100], backgroundColor: ['#0096c7', '#0077b6'] }] },
                                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true }, x: { grid: { display: false } } } }
                            };
                            canvas.chart = new Chart(canvas.getContext('2d'), chart1Config);
                        } else if (chartId === 'chart2') {
                            const chart2Config = {
                                type: 'line',
                                data: { labels: ['2022', '2023', '2024', '2025'], datasets: [{ label: 'Crescimento da Preferência Digital (%)', data: [45, 55, 70, 87], backgroundColor: '#ade8f4', borderColor: '#0096c7', borderWidth: 2, tension: 0.4, pointBackgroundColor: '#0077b6' }] },
                                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true }, x: { grid: { display: false } } } }
                            };
                            canvas.chart = new Chart(canvas.getContext('2d'), chart2Config);
                        }
                    }
                    observer.unobserve(canvas);
                }
            });
        }, { threshold: 0.5 });
        document.querySelectorAll('.chart-container canvas').forEach(canvas => chartObserver.observe(canvas));

        // --- Tabs ---
        document.querySelectorAll('[data-tab-group]').forEach(group => {
            const buttons = group.querySelectorAll('.tab-button');
            const contents = group.querySelectorAll('.tab-content');
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const targetId = button.dataset.tab;

                    buttons.forEach(b => b.classList.remove('active'));
                    button.classList.add('active');

                    contents.forEach(content => {
                        if (content.id === targetId) {
                            content.classList.add('active');
                            content.classList.remove('hidden');
                        } else {
                            content.classList.remove('active');
                            content.classList.add('hidden');
                        }
                    });
                });
            });
        });

        // --- Generic Modal Logic ---
        const setupModal = (modalId, openBtnId, closeBtnId) => {
            const modal = document.getElementById(modalId);
            if (!modal) return;
            const openBtn = document.getElementById(openBtnId);
            const closeBtn = document.getElementById(closeBtnId);
            const modalContent = modal.querySelector('.modal-content');
            if (!modalContent) return;

            const openModal = () => {
                modal.classList.remove('opacity-0', 'pointer-events-none');
                modal.style.opacity = '1';
                modal.style.pointerEvents = 'auto';
                setTimeout(() => modalContent.classList.remove('scale-95'), 10);
            };

            const closeModal = () => {
                modalContent.classList.add('scale-95');
                modal.style.opacity = '0';
                modal.style.pointerEvents = 'none';
                setTimeout(() => {
                    modal.classList.add('opacity-0', 'pointer-events-none');
                    modal.style.opacity = '';
                    modal.style.pointerEvents = '';
                }, 300);
            };

            if (openBtn) openBtn.addEventListener('click', openModal);
            if (closeBtn) closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', e => {
                if (e.target === modal) closeModal();
            });
            document.addEventListener('keydown', e => {
                if (e.key === 'Escape' && modal && !modal.classList.contains('opacity-0')) closeModal();
            });
        };

        // --- Setup Modals ---
        setupModal('justificativa-modal', 'open-justificativa-modal', 'close-justificativa-modal');

        // --- IA Section Logic ---
        const callGeminiAPI = async (prompt, systemPrompt, resultElement, spinnerElement, containerElement) => {
            containerElement.classList.remove('hidden');
            resultElement.textContent = '';
            resultElement.classList.add('hidden');
            spinnerElement.classList.remove('hidden');

            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

            try {
                await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }],
                        systemInstruction: { parts: [{ text: systemPrompt }] },
                    })
                });

                if (!response.ok) throw new Error(`API error: ${response.status}`);

                const result = await response.json();
                const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
                resultElement.textContent = text || "Não foi possível gerar o conteúdo. Tente novamente.";
            } catch (error) {
                console.error("Error calling Gemini API:", error);
                resultElement.textContent = "Ocorreu um erro ao gerar o conteúdo. Por favor, verifique o console para mais detalhes.";
            } finally {
                spinnerElement.classList.add('hidden');
                resultElement.classList.remove('hidden');
            }
        };

        const wireUpGeminiButton = (buttonId, promptBuilder, systemPrompt, resultPId, spinnerId, containerId) => {
            const button = document.getElementById(buttonId);
            if (button) {
                button.addEventListener('click', () => {
                    const prompt = promptBuilder();
                    if (prompt) {
                        callGeminiAPI(prompt, systemPrompt, document.getElementById(resultPId), document.getElementById(spinnerId), document.getElementById(containerId));
                    }
                });
            }
        };

        // Wire up all Gemini buttons
        const salesSystemPrompt = "Você é um assistente de vendas da Lojas Cem, uma varejista tradicional e confiável do Brasil, conhecida como 'A Loja da Família Brasileira'. Seu tom é amigável, prestativo e focado em ajudar o cliente a fazer a melhor escolha, destacando os benefícios do produto de forma clara e honesta, sempre com o crediário da loja como um diferencial. Evite usar jargões técnicos. Gere apenas o texto solicitado, sem introduções ou saudações.";
        wireUpGeminiButton('gemini-generate-pitch-btn', () => `Crie um pitch de venda curto e persuasivo para um(a) ${document.getElementById('gemini-profile').value} interessado(a) em uma ${document.getElementById('gemini-product').value}. Destaque 2 ou 3 benefícios principais que sejam relevantes para esse perfil.`, salesSystemPrompt, 'gemini-result', 'gemini-spinner', 'gemini-result-container');
        wireUpGeminiButton('gemini-generate-post-btn', () => `Crie um post para as redes sociais (Instagram/Facebook) da Lojas Cem sobre uma ${document.getElementById('gemini-product').value}, com foco em um(a) ${document.getElementById('gemini-profile').value}. O post deve ser cativante, usar emojis e terminar com uma chamada para ação convidando o cliente a conversar com um consultor ou visitar a loja.`, salesSystemPrompt, 'gemini-result', 'gemini-spinner', 'gemini-result-container');

        const logisticsSystemPrompt = "Você é um consultor sênior de logística para o varejo, especializado em operações omnichannel. Seu tom é estratégico, direto e focado em soluções práticas e eficientes. Você está apresentando um plano para a diretoria da Lojas Cem.";
        wireUpGeminiButton('gemini-generate-logistics-btn', () => `Como um especialista em logística de varejo, elabore uma estratégia inicial em 3 a 4 pontos-chave para resolver o seguinte desafio para a Lojas Cem: '${document.getElementById('logistics-challenge-select').value}'. Considere o uso de tecnologia, otimização de processos e o impacto na experiência do cliente.`, logisticsSystemPrompt, 'gemini-logistics-result', 'gemini-logistics-spinner', 'gemini-logistics-result-container');

        const routeSystemPrompt = "Você é um assistente da Lojas Cem que ajuda clientes a se conectarem com a loja física mais próxima. Seja prestativo e forneça informações claras e diretas. Para fins de demonstração, sempre encontre uma loja fictícia no centro da cidade correspondente ao CEP.";
        wireUpGeminiButton('gemini-generate-route-btn', () => {
            const cep = document.getElementById('cep-input').value;
            if (!cep || cep.replace(/\D/g, '').length !== 8) {
                document.getElementById('gemini-route-result-container').classList.remove('hidden');
                document.getElementById('gemini-route-result').textContent = 'Por favor, insira um CEP válido com 8 dígitos.';
                return null;
            }
            return `Para o CEP ${cep}, encontre a loja Lojas Cem mais próxima (considere que há uma loja fictícia no centro de cada cidade principal, como a de Salto, SP na Rua 9 de Julho, 1000). Além disso, sugira um "Consultor Digital" fictício (ex: João Silva) com um número de WhatsApp fictício para contato na região. Apresente a informação de forma clara, amigável e útil para o cliente.`;
        }, routeSystemPrompt, 'gemini-route-result', 'gemini-route-spinner', 'gemini-route-result-container');

        const solutionSystemPrompt = "Você é um consultor virtual da Lojas Cem, 'A Loja da Família Brasileira'. Seu objetivo é ajudar as pessoas a resolverem problemas do dia a dia em suas casas. Seja amigável, prático e ofereça soluções genuínas, recomendando produtos de forma natural e útil.";
        wireUpGeminiButton('gemini-generate-solution-btn', () => {
            const problem = document.getElementById('gemini-solution-input').value;
            if (!problem) {
                document.getElementById('gemini-solution-result-container').classList.remove('hidden');
                document.getElementById('gemini-solution-result').textContent = 'Por favor, descreva seu desafio.';
                return null;
            }
            return `Como um consultor especialista da Lojas Cem, ofereça uma solução para o seguinte desafio doméstico de um cliente: '${problem}'. Sua resposta deve ser útil, empática e, quando apropriado, sugerir 2-3 tipos de produtos ou soluções que a Lojas Cem vende e que poderiam ajudar, explicando brevemente o benefício de cada um.`;
        }, solutionSystemPrompt, 'gemini-solution-result', 'gemini-solution-spinner', 'gemini-solution-result-container');

        const supportSystemPrompt = "Você é um chatbot de suporte da Lojas Cem. Seu tom é calmo, paciente e extremamente prestativo. Seu objetivo é ajudar o cliente a resolver problemas com produtos já comprados. Use uma linguagem simples e um formato de passo a passo (1, 2, 3...) para facilitar o entendimento.";
        wireUpGeminiButton('gemini-generate-support-btn', () => {
            const problem = document.getElementById('gemini-support-input').value;
            if (!problem) {
                document.getElementById('gemini-support-result-container').classList.remove('hidden');
                document.getElementById('gemini-support-result').textContent = 'Por favor, descreva seu problema.';
                return null;
            }
            return `Como um chatbot de suporte técnico da Lojas Cem, forneça uma solução clara, em passos simples, para o seguinte problema do cliente: '${problem}'. Comece com calma e segurança, e termine oferecendo o contato de um consultor humano caso o problema persista.`;
        }, supportSystemPrompt, 'gemini-support-result', 'gemini-support-spinner', 'gemini-support-result-container');

        const freteSystemPrompt = "Você é um especialista em logística omnichannel da Lojas Cem. Sua função é analisar em tempo real as opções de frete para oferecer ao cliente a melhor combinação de custo e prazo, utilizando a rede de lojas como vantagem competitiva.";
        wireUpGeminiButton('gemini-generate-frete-btn', () => {
            const product = document.getElementById('frete-product').value;
            const cep = document.getElementById('frete-cep-input').value;
            if (!cep || cep.replace(/\D/g, '').length !== 8) {
                document.getElementById('gemini-frete-result-container').classList.remove('hidden');
                document.getElementById('gemini-frete-result').textContent = 'Por favor, insira um CEP válido com 8 dígitos.';
                return null;
            }
            return `Analise a melhor opção de frete para entregar uma '${product}' no CEP '${cep}'. Considere que a Lojas Cem possui um estoque unificado entre Centros de Distribuição e mais de 300 lojas. Simule uma busca entre 3 transportadoras parceiras (fictícias: 'RápidoLog', 'BrasilEntrega', 'TranspoCem') e a opção de 'ship-from-store' (envio a partir da loja mais próxima com estoque). Apresente a opção mais barata e a mais rápida, justificando a escolha (ex: 'Mais barata: R$ 50,00 - Enviado da loja de Sorocaba, a 50km de distância.').`;
        }, freteSystemPrompt, 'gemini-frete-result', 'gemini-frete-spinner', 'gemini-frete-result-container');

        const tradeSystemPrompt = "Você é um especialista em trade marketing e neuromarketing. Seu tom é criativo, estratégico e focado em resultados. Você está a fazer um brainstorming de ações para encantar o shopper da Lojas Cem. Seja específico nas suas sugestões.";
        wireUpGeminiButton('gemini-generate-trade-btn', () => `Como um especialista em trade marketing e neuromarketing, crie um plano de ação com 3 a 4 táticas concretas para o seguinte cenário na Lojas Cem: Canal: '${document.getElementById('trade-channel').value}', Ambiente: '${document.getElementById('trade-category').value}', com o objetivo de ativar o gatilho neural de '${document.getElementById('trade-trigger').value}'.`, tradeSystemPrompt, 'gemini-trade-result', 'gemini-trade-spinner', 'gemini-trade-result-container');

        const roiSystemPrompt = "Você é um analista financeiro sênior especializado em varejo. Seu tom é objetivo, baseado em dados e focado em resultados. Você está a apresentar uma projeção de ROI para a diretoria da Lojas Cem. Seja claro, convincente e use os dados fornecidos para construir um argumento financeiro sólido.";
        wireUpGeminiButton('gemini-generate-roi-btn', () => `Analise o potencial Retorno Sobre o Investimento (ROI) de uma estratégia omnichannel para a Lojas Cem com base nos seguintes dados: Aumento esperado na taxa de retenção de clientes: ${document.getElementById('roi-retention').value}%. Aumento esperado no Lifetime Value (LTV) dos clientes: ${document.getElementById('roi-ltv').value}%. Investimento inicial estimado: R$ ${document.getElementById('roi-investment').value}. Em sua análise, cite dados de mercado como 'clientes omnichannel têm uma taxa de retenção 90% maior e gastam até 10x mais que clientes de um único canal'. Apresente uma conclusão clara sobre a viabilidade do investimento.`, roiSystemPrompt, 'gemini-roi-result', 'gemini-roi-spinner', 'gemini-roi-result-container');
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeExperience, { once: true });
    } else {
        initializeExperience();
    }
})();
