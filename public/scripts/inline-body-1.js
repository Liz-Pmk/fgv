const initInteractiveFeatures = () => {
    try {
        window.__inlineScriptReady = true;
    } catch (error) {
        // ignore assignment errors in non-browser contexts
    }
            // ScrollReveal Animations
            if (typeof ScrollReveal === 'function') {
                ScrollReveal().reveal('.reveal', {
                    delay: 200,
                    distance: '40px',
                    origin: 'bottom',
                    duration: 800,
                    easing: 'cubic-bezier(0.5, 0, 0, 1)',
                    interval: 150
                });
            } else {
                console.warn('ScrollReveal não carregado; animações suaves foram desativadas.');
            }

            // --- Popover for Neuro-Insights ---
            const infoPopover = document.getElementById('info-popover-premium');
            const popoverTitle = document.getElementById('popover-title');
            const popoverContent = document.getElementById('popover-content');

            if (infoPopover && popoverTitle && popoverContent) {
                document.querySelectorAll('.neuro-insight, .rich-nav-icon').forEach(trigger => {
                    const showPopover = (e) => {
                        const title = e.currentTarget.dataset.title || e.currentTarget.dataset.fundamento;
                        let content = e.currentTarget.dataset.content;

                        if (!content) {
                            const contentEl = document.getElementById('fundamento-' + title);
                            if (contentEl) {
                                content = contentEl.innerHTML;
                            }
                        }

                        if (title && content) {
                            popoverTitle.textContent = title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                            popoverContent.innerHTML = content;

                            infoPopover.classList.remove('opacity-0', 'pointer-events-none');
                            infoPopover.style.opacity = '1';
                            infoPopover.style.pointerEvents = 'auto';

                            let left = e.clientX + 15;
                            let top = e.clientY + 15;

                            const popoverWidth = infoPopover.offsetWidth;
                            const popoverHeight = infoPopover.offsetHeight;

                            if (left + popoverWidth > window.innerWidth - 15) {
                                left = e.clientX - popoverWidth - 15;
                            }
                            if (top + popoverHeight > window.innerHeight - 15) {
                                top = e.clientY - popoverHeight - 15;
                            }

                            infoPopover.style.left = `${left}px`;
                            infoPopover.style.top = `${top}px`;
                            infoPopover.style.transform = 'scale(1)';
                        }
                    };

                    const hidePopover = () => {
                        infoPopover.classList.add('opacity-0', 'pointer-events-none');
                        infoPopover.style.opacity = '';
                        infoPopover.style.pointerEvents = '';
                        infoPopover.style.transform = 'scale(0.95)';
                    };

                    trigger.addEventListener('mouseenter', showPopover);
                    trigger.addEventListener('mousemove', (e) => {
                        if (!infoPopover.classList.contains('opacity-0')) {
                            let left = e.clientX + 15;
                            let top = e.clientY + 15;
                            const popoverWidth = infoPopover.offsetWidth;
                            const popoverHeight = infoPopover.offsetHeight;
                            if (left + popoverWidth > window.innerWidth - 15) {
                                left = e.clientX - popoverWidth - 15;
                            }
                            if (top + popoverHeight > window.innerHeight - 15) {
                                top = e.clientY - popoverHeight - 15;
                            }
                            infoPopover.style.left = `${left}px`;
                            infoPopover.style.top = `${top}px`;
                        }
                    });
                    trigger.addEventListener('mouseleave', hidePopover);
                });
            }
            
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
            const benefitSuggestions = {
                'Smart TV 4K': [
                    'Imagem Ultra HD com cores vibrantes para filmes e séries',
                    'Recursos inteligentes com apps de streaming já instalados',
                    'Conexão sem fio para espelhar conteúdos do celular'
                ],
                'Geladeira Frost-Free': [
                    'Tecnologia frost free que evita gelo acumulado',
                    'Espaço interno inteligente para organizar compras da semana',
                    'Controle preciso de temperatura para conservar melhor os alimentos'
                ],
                'Máquina de Lavar 15kg': [
                    'Programas rápidos que economizam tempo e água',
                    'Capacidade para lavar a roupa da família inteira de uma vez',
                    'Função lavagem econômica pensada para o dia a dia'
                ],
                'Sofá Retrátil': [
                    'Encosto reclinável e assentos extensíveis para maratonar séries com conforto',
                    'Espuma de alta densidade que se molda ao corpo sem perder a firmeza',
                    'Revestimento fácil de limpar, perfeito para reunir família e amigos'
                ]
            };
            const profileAngles = {
                'Jovem Casal': 'perfeito para quem está montando a casa com estilo e praticidade',
                'Família Grande': 'ideal para dar conta da rotina cheia sem abrir mão de conforto',
                'Entusiasta de Tecnologia': 'feito para quem gosta de explorar cada novidade e recurso avançado',
                'Pessoa que mora sozinha': 'solução compacta e versátil para aproveitar cada minuto do dia'
            };
            const sanitizeText = (value) => (value || '').trim();
            const formatAsList = (items) => items.map(item => `• ${item}`).join('\n');
            const guessCityByCep = (cep) => {
                const prefix = cep.slice(0, 2);
                const map = {
                    '01': { city: 'São Paulo', state: 'SP' },
                    '02': { city: 'São Paulo', state: 'SP' },
                    '03': { city: 'São Paulo', state: 'SP' },
                    '04': { city: 'São Paulo', state: 'SP' },
                    '05': { city: 'São Paulo', state: 'SP' },
                    '06': { city: 'Guarulhos', state: 'SP' },
                    '07': { city: 'Santo André', state: 'SP' },
                    '08': { city: 'São Bernardo do Campo', state: 'SP' },
                    '09': { city: 'Mauá', state: 'SP' },
                    '10': { city: 'Santos', state: 'SP' },
                    '11': { city: 'Campinas', state: 'SP' },
                    '20': { city: 'Rio de Janeiro', state: 'RJ' },
                    '21': { city: 'Rio de Janeiro', state: 'RJ' },
                    '22': { city: 'Niterói', state: 'RJ' },
                    '29': { city: 'Vitória', state: 'ES' },
                    '30': { city: 'Belo Horizonte', state: 'MG' },
                    '40': { city: 'Salvador', state: 'BA' },
                    '59': { city: 'Natal', state: 'RN' },
                    '60': { city: 'Fortaleza', state: 'CE' },
                    '70': { city: 'Brasília', state: 'DF' },
                    '80': { city: 'Curitiba', state: 'PR' },
                    '90': { city: 'Porto Alegre', state: 'RS' }
                };
                return map[prefix] || { city: 'sua cidade', state: 'BR' };
            };
            const formatCurrency = (value) => {
                const numeric = Number(String(value).replace(/[^0-9,\.]/g, '').replace(',', '.')) || 0;
                return numeric.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            };
            const parsePrazoEmDias = (prazo) => {
                const match = String(prazo).match(/\d+/);
                return match ? Number(match[0]) : Number.POSITIVE_INFINITY;
            };
            const generateLocalResponse = (payload) => {
                if (!payload || !payload.type) {
                    return 'Não foi possível gerar o conteúdo agora. Tente novamente em instantes.';
                }
                switch (payload.type) {
                    case 'salesPitch': {
                        const product = sanitizeText(payload.context.product);
                        const profile = sanitizeText(payload.context.profile);
                        const benefits = benefitSuggestions[product] || [
                            'Construído com qualidade e confiabilidade da Lojas Cem',
                            'Oferece excelente custo-benefício para o dia a dia',
                            'Conta com assistência da equipe especialista da loja'
                        ];
                        const highlight = profileAngles[profile] || 'ideal para quem busca mais conforto e praticidade';
                        return `Para ${profile.toLowerCase()}, a ${product} é ${highlight}.\n${formatAsList(benefits)}\nE ainda dá para parcelar com o crediário da Lojas Cem e ter instalação acompanhada pelo nosso time.`;
                    }
                    case 'socialPost': {
                        const product = sanitizeText(payload.context.product);
                        const profile = sanitizeText(payload.context.profile);
                        return `✨ ${product} chegando com tudo para ${profile.toLowerCase()}!\n\nImagine transformar a rotina com tecnologia, conforto e aquele atendimento especial da Lojas Cem. 😍\n\nPasse na loja ou chame um consultor pelo WhatsApp para garantir o seu! 📲🛒`;
                    }
                    case 'logisticsPlan': {
                        const challenge = sanitizeText(payload.context.challenge);
                        return `Plano inicial para atacar o desafio "${challenge}":\n1. Mapear o fluxo atual e identificar gargalos usando painéis de monitoramento em tempo real.\n2. Priorizar integrações entre crediário, e-commerce e lojas físicas para garantir estoque unificado.\n3. Criar squads logísticos regionais com metas semanais de SLA e custo.\n4. Implementar piloto com transportadoras parceiras e indicadores de experiência do cliente antes de escalar.`;
                    }
                    case 'route': {
                        const cep = payload.context.cep;
                        const { city, state } = guessCityByCep(cep);
                        const formattedCep = `${cep.slice(0, 5)}-${cep.slice(5)}`;
                        return `Encontramos uma loja Lojas Cem próxima ao CEP ${formattedCep}:\nLoja Central de ${city}/${state}\nEndereço: Rua 9 de Julho, 1000 - Centro\nHorário: segunda a sábado, 9h às 19h\nConsultor Digital: João Silva | WhatsApp (11) 98888-0000\nChegando lá é só mencionar que viu a oferta online para receber as condições especiais do crediário.`;
                    }
                    case 'solution': {
                        const problem = sanitizeText(payload.context.problem);
                        return `Vamos resolver juntos: ${problem}\n1. Identifique a causa principal e faça um checklist rápido do ambiente.\n2. Indique um produto da Lojas Cem que facilite a rotina (ex.: organizadores, eletros inteligentes ou utensílios práticos).\n3. Mostre como usar o item com segurança e cuidado diário.\n4. Finalize lembrando que nossa equipe está disponível pelo WhatsApp para ajustar qualquer detalhe.`;
                    }
                    case 'support': {
                        const problem = sanitizeText(payload.context.problem);
                        return `Para solucionar: ${problem}\n1. Desligue o equipamento da tomada e aguarde 2 minutos para reiniciar com segurança.\n2. Consulte o manual rápido ou os tutoriais da Lojas Cem para verificar configurações recomendadas.\n3. Teste novamente e observe se o comportamento retorna ao normal.\n4. Se o problema persistir, anote o número de série e fale com o nosso consultor pelo 0800 777 2326 ou WhatsApp para agendar assistência.`;
                    }
                    case 'frete': {
                        const product = sanitizeText(payload.context.product);
                        const cep = payload.context.cep;
                        const { city, state } = guessCityByCep(cep);
                        const options = [
                            { name: 'RápidoLog', type: 'expresso', price: 89.9, prazo: '2 dias' },
                            { name: 'BrasilEntrega', type: 'econômico', price: 54.9, prazo: '5 dias' },
                            { name: 'TranspoCem', type: 'regional', price: 64.9, prazo: '3 dias' },
                            { name: 'Ship-from-Store', type: 'loja', price: 49.9, prazo: '2 dias' }
                        ];
                        const cheapest = options.reduce((acc, curr) => (curr.price < acc.price ? curr : acc));
                        const fastest = options.reduce((acc, curr) => (parsePrazoEmDias(curr.prazo) < parsePrazoEmDias(acc.prazo) ? curr : acc));
                        return `Análise de frete para ${product} em ${city}/${state}:\nMais econômico: ${cheapest.name} (${cheapest.type}) - ${formatCurrency(cheapest.price)} com entrega em ${cheapest.prazo}.\nMais rápido: ${fastest.name} (${fastest.type}) - ${formatCurrency(fastest.price)} chegando em ${fastest.prazo}.\nRecomendamos confirmar estoque na loja mais próxima para decidir entre economia e rapidez.`;
                    }
                    case 'tradePlan': {
                        const channel = sanitizeText(payload.context.channel);
                        const category = sanitizeText(payload.context.category);
                        const trigger = sanitizeText(payload.context.trigger);
                        return `Plano de trade marketing:\n• Canal ${channel}: vitrines digitais sincronizadas com ofertas do dia.\n• Ambiente ${category}: exposição tátil com demonstração assistida e conteúdo em vídeo curto.\n• Ativar gatilho "${trigger}": use aromas e iluminação quente para gerar sensação de acolhimento e finalize com oferta exclusiva para quem testa o produto na hora.\n• Mensure impacto com QR Codes levando para o consultor digital.`;
                    }
                    case 'roiAnalysis': {
                        const retention = Number(payload.context.retention) || 0;
                        const ltv = Number(payload.context.ltv) || 0;
                        const investment = payload.context.investment;
                        const incremental = (retention * 0.3 + ltv * 0.4).toFixed(1);
                        return `Projeção financeira:\n• Retenção prevista: ${retention}% aumenta o volume recorrente de crediário.\n• LTV projetado: ${ltv}% adiciona ticket médio às compras combinadas de loja física + digital.\n• Investimento inicial: ${formatCurrency(investment)}.\nConsiderando benchmarks omnichannel (clientes compram até 4x mais), estimamos retorno incremental de aproximadamente ${incremental}% em 18 meses. O investimento é viável com payback em até 14 meses se o plano for executado com foco em CRM e pós-venda.`;
                    }
                    default:
                        return 'Conteúdo em preparação. Volte em instantes.';
                }
            };
            const callGeminiAPI = async (payload, _systemPrompt, resultElement, spinnerElement, containerElement) => {
                containerElement.classList.remove('hidden');
                resultElement.textContent = '';
                resultElement.classList.add('hidden');
                spinnerElement.classList.remove('hidden');
                try {
                    await new Promise(resolve => setTimeout(resolve, 350));
                    const text = generateLocalResponse(payload);
                    resultElement.textContent = text || 'Não foi possível gerar o conteúdo. Tente novamente.';
                } catch (error) {
                    console.error('Error generating local content:', error);
                    resultElement.textContent = 'Ocorreu um erro ao gerar o conteúdo. Por favor, tente novamente.';
                } finally {
                    spinnerElement.classList.add('hidden');
                    resultElement.classList.remove('hidden');
                }
            };
            const wireUpGeminiButton = (buttonId, payloadBuilder, systemPrompt, resultPId, spinnerId, containerId) => {
                const button = document.getElementById(buttonId);
                if (button) {
                    button.addEventListener('click', () => {
                        const payload = payloadBuilder();
                        if (payload) {
                            callGeminiAPI(payload, systemPrompt, document.getElementById(resultPId), document.getElementById(spinnerId), document.getElementById(containerId));
                        }
                    });
                }
            };
            // Wire up all Gemini buttons
            const salesSystemPrompt = "Você é um assistente de vendas da Lojas Cem, uma varejista tradicional e confiável do Brasil, conhecida como 'A Loja da Família Brasileira'. Seu tom é amigável, prestativo e focado em ajudar o cliente a fazer a melhor escolha, destacando os benefícios do produto de forma clara e honesta, sempre com o crediário da loja como um diferencial. Evite usar jargões técnicos. Gere apenas o texto solicitado, sem introduções ou saudações.";
            wireUpGeminiButton('gemini-generate-pitch-btn', () => ({
                type: 'salesPitch',
                context: {
                    profile: document.getElementById('gemini-profile').value,
                    product: document.getElementById('gemini-product').value
                }
            }), salesSystemPrompt, 'gemini-result', 'gemini-spinner', 'gemini-result-container');
            wireUpGeminiButton('gemini-generate-post-btn', () => ({
                type: 'socialPost',
                context: {
                    profile: document.getElementById('gemini-profile').value,
                    product: document.getElementById('gemini-product').value
                }
            }), salesSystemPrompt, 'gemini-result', 'gemini-spinner', 'gemini-result-container');
            
            const logisticsSystemPrompt = "Você é um consultor sênior de logística para o varejo, especializado em operações omnichannel. Seu tom é estratégico, direto e focado em soluções práticas e eficientes. Você está apresentando um plano para a diretoria da Lojas Cem.";
            wireUpGeminiButton('gemini-generate-logistics-btn', () => ({
                type: 'logisticsPlan',
                context: {
                    challenge: document.getElementById('logistics-challenge-select').value
                }
            }), logisticsSystemPrompt, 'gemini-logistics-result', 'gemini-logistics-spinner', 'gemini-logistics-result-container');

            const routeSystemPrompt = "Você é um assistente da Lojas Cem que ajuda clientes a se conectarem com a loja física mais próxima. Seja prestativo e forneça informações claras e diretas. Para fins de demonstração, sempre encontre uma loja fictícia no centro da cidade correspondente ao CEP.";
            wireUpGeminiButton('gemini-generate-route-btn', () => {
                const cep = document.getElementById('cep-input').value;
                if (!cep || cep.replace(/\D/g, '').length !== 8) {
                    document.getElementById('gemini-route-result-container').classList.remove('hidden');
                    document.getElementById('gemini-route-result').textContent = 'Por favor, insira um CEP válido com 8 dígitos.';
                    return null;
                }
                return {
                    type: 'route',
                    context: { cep: cep.replace(/\D/g, '') }
                };
            }, routeSystemPrompt, 'gemini-route-result', 'gemini-route-spinner', 'gemini-route-result-container');
            
            const solutionSystemPrompt = "Você é um consultor virtual da Lojas Cem, 'A Loja da Família Brasileira'. Seu objetivo é ajudar as pessoas a resolverem problemas do dia a dia em suas casas. Seja amigável, prático e ofereça soluções genuínas, recomendando produtos de forma natural e útil.";
            wireUpGeminiButton('gemini-generate-solution-btn', () => {
                const problem = document.getElementById('gemini-solution-input').value;
                if (!problem) {
                    document.getElementById('gemini-solution-result-container').classList.remove('hidden');
                    document.getElementById('gemini-solution-result').textContent = 'Por favor, descreva seu desafio.';
                    return null;
                }
                return {
                    type: 'solution',
                    context: { problem }
                };
            }, solutionSystemPrompt, 'gemini-solution-result', 'gemini-solution-spinner', 'gemini-solution-result-container');
            
            const supportSystemPrompt = "Você é um chatbot de suporte da Lojas Cem. Seu tom é calmo, paciente e extremamente prestativo. Seu objetivo é ajudar o cliente a resolver problemas com produtos já comprados. Use uma linguagem simples e um formato de passo a passo (1, 2, 3...) para facilitar o entendimento.";
            wireUpGeminiButton('gemini-generate-support-btn', () => {
                const problem = document.getElementById('gemini-support-input').value;
                if (!problem) {
                    document.getElementById('gemini-support-result-container').classList.remove('hidden');
                    document.getElementById('gemini-support-result').textContent = 'Por favor, descreva seu problema.';
                    return null;
                }
                return {
                    type: 'support',
                    context: { problem }
                };
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
                return {
                    type: 'frete',
                    context: { product, cep: cep.replace(/\D/g, '') }
                };
            }, freteSystemPrompt, 'gemini-frete-result', 'gemini-frete-spinner', 'gemini-frete-result-container');
            
            const tradeSystemPrompt = "Você é um especialista em trade marketing e neuromarketing. Seu tom é criativo, estratégico e focado em resultados. Você está a fazer um brainstorming de ações para encantar o shopper da Lojas Cem. Seja específico nas suas sugestões.";
            wireUpGeminiButton('gemini-generate-trade-btn', () => ({
                type: 'tradePlan',
                context: {
                    channel: document.getElementById('trade-channel').value,
                    category: document.getElementById('trade-category').value,
                    trigger: document.getElementById('trade-trigger').value
                }
            }), tradeSystemPrompt, 'gemini-trade-result', 'gemini-trade-spinner', 'gemini-trade-result-container');

            const roiSystemPrompt = "Você é um analista financeiro sênior especializado em varejo. Seu tom é objetivo, baseado em dados e focado em resultados. Você está a apresentar uma projeção de ROI para a diretoria da Lojas Cem. Seja claro, convincente e use os dados fornecidos para construir um argumento financeiro sólido.";
            wireUpGeminiButton('gemini-generate-roi-btn', () => ({
                type: 'roiAnalysis',
                context: {
                    retention: document.getElementById('roi-retention').value,
                    ltv: document.getElementById('roi-ltv').value,
                    investment: document.getElementById('roi-investment').value
                }
            }), roiSystemPrompt, 'gemini-roi-result', 'gemini-roi-spinner', 'gemini-roi-result-container');
        };

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInteractiveFeatures);
} else {
    initInteractiveFeatures();
}
