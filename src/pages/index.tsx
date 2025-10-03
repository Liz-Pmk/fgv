import Head from 'next/head';
import Script from 'next/script';
import { Poppins } from 'next/font/google';
import { useEffect, useRef } from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700', '800'] });

export default function Home() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<any>(null);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-link'));
        const sections = navLinks
            .map((link) => document.querySelector<HTMLElement>(link.getAttribute('href') || ''))
            .filter((section): section is HTMLElement => !!section);

        const activateNavLink = () => {
            const scrollPos = window.scrollY + 120;
            sections.forEach((section, index) => {
                const offsetTop = section.offsetTop;
                const offsetBottom = offsetTop + section.offsetHeight;
                const link = navLinks[index];
                if (!link) return;
                if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
                    navLinks.forEach((navLink) => navLink.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', activateNavLink);
        window.addEventListener('load', activateNavLink);
        activateNavLink();

        const initializeEnhancements = () => {
            if (typeof window === 'undefined') return;

            if (window.ScrollReveal) {
                window.ScrollReveal().reveal('.reveal', {
                    distance: '30px',
                    duration: 900,
                    interval: 120,
                    easing: 'ease-out',
                    origin: 'bottom'
                });
            }

            if (window.Chart && chartRef.current) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                chartInstance.current = new window.Chart(chartRef.current, {
                    type: 'radar',
                    data: {
                        labels: ['Conversão', 'NPS', 'Ticket Médio', 'Adoção Crediário', 'SLA Logística'],
                        datasets: [
                            {
                                label: 'Base 2023',
                                data: [40, 55, 62, 20, 45],
                                borderColor: 'rgba(2, 48, 71, 0.4)',
                                backgroundColor: 'rgba(2, 48, 71, 0.1)',
                                borderWidth: 2
                            },
                            {
                                label: 'Meta 2025',
                                data: [75, 80, 78, 60, 82],
                                borderColor: 'rgba(0, 119, 182, 0.7)',
                                backgroundColor: 'rgba(0, 119, 182, 0.2)',
                                borderWidth: 2
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            r: {
                                angleLines: { color: 'rgba(2, 48, 71, 0.1)' },
                                grid: { color: 'rgba(2, 48, 71, 0.1)' },
                                suggestedMin: 0,
                                suggestedMax: 100,
                                ticks: {
                                    backdropColor: 'transparent',
                                    color: '#4b5563',
                                    showLabelBackdrop: false
                                },
                                pointLabels: {
                                    color: '#1f2937',
                                    font: {
                                        size: 12,
                                        family: 'Poppins'
                                    }
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    color: '#1f2937',
                                    font: {
                                        family: 'Poppins',
                                        size: 12
                                    }
                                }
                            }
                        }
                    }
                });
            }
        };

        const intervalId = window.setInterval(() => {
            if (window.Chart && window.ScrollReveal) {
                initializeEnhancements();
                window.clearInterval(intervalId);
            }
        }, 250);

        initializeEnhancements();

        return () => {
            window.removeEventListener('scroll', activateNavLink);
            window.removeEventListener('load', activateNavLink);
            window.clearInterval(intervalId);
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className={poppins.className}>
            <Head>
                <title>Proposta Estratégica Omnichannel | Lojas Cem</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
            <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" />
            <Script src="https://unpkg.com/scrollreveal" strategy="afterInteractive" />

            <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50 shadow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0077b6]/10 text-[#0077b6] font-extrabold">
                                LC
                            </span>
                            <h1 className="text-xl sm:text-2xl font-extrabold text-[#023047]">
                                Lojas Cem: Visão Omnichannel 2025
                            </h1>
                        </div>
                        <nav id="main-nav" className="hidden lg:flex lg:space-x-8 text-sm font-semibold text-gray-600">
                            <a href="#hero" className="nav-link">
                                Início
                            </a>
                            <a href="#resumo" className="nav-link">
                                Resumo
                            </a>
                            <a href="#pilares" className="nav-link">
                                Pilares
                            </a>
                            <a href="#jornada" className="nav-link">
                                Jornada
                            </a>
                            <a href="#implementacao" className="nav-link">
                                Implementação
                            </a>
                            <a href="#indicadores" className="nav-link">
                                KPIs
                            </a>
                            <a href="#contato" className="nav-link">
                                Próximos Passos
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            <main>
                <section id="hero" className="relative overflow-hidden">
                    <div className="gradient-bg">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center mix-blend-overlay" />
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
                            <div className="max-w-3xl reveal">
                                <span className="badge">Plano Diretor Omnichannel</span>
                                <h2 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                                    Uma jornada integrada para transformar a confiança da Lojas Cem em liderança digital
                                </h2>
                                <p className="mt-6 text-lg md:text-xl text-white/80">
                                    Revisamos a proposta estratégica com novos marcos de entrega, métricas acionáveis e uma abordagem centrada na experiência híbrida.
                                </p>
                                <div className="mt-10 flex flex-wrap items-center gap-4">
                                    <a href="#contato" className="cta-button reveal">
                                        Quero ver o roadmap completo →
                                    </a>
                                    <p className="text-white/70 text-sm reveal">Atualizado em abril/2025</p>
                                </div>
                            </div>
                            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl reveal">
                                <div className="metric rounded-2xl border border-white/20 p-6 text-white">
                                    <h3 className="text-3xl font-extrabold">+32%</h3>
                                    <p className="mt-2 text-sm text-white/80">Potencial de incremento em vendas omnichannel em 24 meses</p>
                                </div>
                                <div className="metric rounded-2xl border border-white/20 p-6 text-white">
                                    <h3 className="text-3xl font-extrabold">92%</h3>
                                    <p className="mt-2 text-sm text-white/80">Clientes dispostos a comprar de marcas com atendimento híbrido</p>
                                </div>
                                <div className="metric rounded-2xl border border-white/20 p-6 text-white">
                                    <h3 className="text-3xl font-extrabold">6 pilares</h3>
                                    <p className="mt-2 text-sm text-white/80">Framework integrado de experiência, canais e dados</p>
                                </div>
                                <div className="metric rounded-2xl border border-white/20 p-6 text-white">
                                    <h3 className="text-3xl font-extrabold">18 meses</h3>
                                    <p className="mt-2 text-sm text-white/80">Horizonte para maturidade digital com quick wins trimestrais</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="resumo" className="py-20 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="section-header p-8 rounded-lg mb-16 reveal text-center">
                            <h3 className="text-4xl font-bold text-[#023047]">Resumo Executivo Atualizado</h3>
                            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
                                O redesenho apresenta uma visão end-to-end para crescer sem perder a essência da Lojas Cem: proximidade e confiança. Cada iniciativa foi priorizada por impacto em receita, diferencial competitivo e esforço operacional.
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="card bg-white p-8 rounded-2xl shadow-lg border border-gray-100 reveal">
                                <span className="text-sm font-semibold uppercase tracking-wide text-[#0077b6]">Clientes</span>
                                <h4 className="mt-3 text-2xl font-bold text-[#023047]">Experiência contínua</h4>
                                <p className="mt-4 text-sm text-gray-600">
                                    Jornada única em todos os pontos de contato com atendimento consultivo assistido por dados e CRM unificado, garantindo consistência em cada fase da compra.
                                </p>
                            </div>
                            <div className="card bg-white p-8 rounded-2xl shadow-lg border border-gray-100 reveal">
                                <span className="text-sm font-semibold uppercase tracking-wide text-[#0077b6]">Negócio</span>
                                <h4 className="mt-3 text-2xl font-bold text-[#023047]">Modelo sustentável</h4>
                                <p className="mt-4 text-sm text-gray-600">
                                    Combinação de e-commerce, social selling e loja phygital com crediário digitalizado, além de governança para gerir margens e performance por canal.
                                </p>
                            </div>
                            <div className="card bg-white p-8 rounded-2xl shadow-lg border border-gray-100 reveal">
                                <span className="text-sm font-semibold uppercase tracking-wide text-[#0077b6]">Operações</span>
                                <h4 className="mt-3 text-2xl font-bold text-[#023047]">Eficiência ágil</h4>
                                <p className="mt-4 text-sm text-gray-600">
                                    Roadmap escalonado com squads multidisciplinares, OKRs trimestrais e centros de excelência para logística, dados e atendimento.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="pilares" className="py-20 md:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div className="reveal">
                                <h3 className="text-3xl md:text-4xl font-extrabold text-[#023047]">Pilares estratégicos revisados</h3>
                                <p className="mt-6 text-gray-600 text-base">
                                    Cada pilar recebeu objetivos mensuráveis, marcos de curto prazo e squads responsáveis. A priorização garante que cada entrega aproxime a Lojas Cem do ecossistema omnichannel completo.
                                </p>
                                <ul className="mt-8 space-y-4 text-sm text-gray-700">
                                    <li className="flex gap-3">
                                        <span className="text-[#0077b6]">◆</span> Conectamos cultura e tecnologia com rituais semanais de evolução digital nas lojas.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[#0077b6]">◆</span> Estruturamos governança de dados com CRM único, LGPD e analytics orientado a ações.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[#0077b6]">◆</span> Integramos logística para clique &amp; retire, ship-from-store e entregas regionais otimizadas.
                                    </li>
                                </ul>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2 reveal">
                                <div className="card bg-[#023047] text-white rounded-2xl p-7">
                                    <h4 className="text-xl font-bold">Presença Digital Viva</h4>
                                    <p className="mt-3 text-sm text-white/80">Novo e-commerce, catálogo phygital e motor de conteúdo social com vendedores-influenciadores.</p>
                                </div>
                                <div className="card bg-white border border-gray-100 rounded-2xl p-7">
                                    <h4 className="text-xl font-bold text-[#023047]">Crediário 360º</h4>
                                    <p className="mt-3 text-sm text-gray-600">Digitalização do crediário, onboarding remoto e oferta personalizada com algoritmos de risco.</p>
                                </div>
                                <div className="card bg-white border border-gray-100 rounded-2xl p-7">
                                    <h4 className="text-xl font-bold text-[#023047]">Atendimento Híbrido</h4>
                                    <p className="mt-3 text-sm text-gray-600">Chat consultivo, vídeo atendimento e roteiros omnichannel integrados ao ERP e CRM.</p>
                                </div>
                                <div className="card bg-[#0077b6] text-white rounded-2xl p-7">
                                    <h4 className="text-xl font-bold">Logística Inteligente</h4>
                                    <p className="mt-3 text-sm text-white/80">Torre de controle, estoques unificados e parceiros regionais para SLA sob medida.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="jornada" className="py-20 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="section-header p-8 rounded-lg mb-16 reveal text-center">
                            <h3 className="text-4xl font-bold text-[#023047]">Jornada omnichannel na visão do cliente</h3>
                            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
                                O mapa a seguir demonstra como cada ponto de contato fortalece a percepção de valor: começamos na descoberta digital, migramos para a experimentação assistida e encerramos com fidelização ativa.
                            </p>
                        </div>
                        <div className="relative timeline reveal">
                            <div className="grid gap-12">
                                <div className="timeline-step" data-step="1">
                                    <h4 className="text-xl font-bold text-[#023047]">Descoberta &amp; Inspiração</h4>
                                    <p className="mt-3 text-sm text-gray-600">Conteúdo social hiperlocal, SEO geolocalizado e mídia cooperada garantem que a Lojas Cem seja a primeira opção pesquisada.</p>
                                    <ul className="mt-3 text-sm text-gray-500 space-y-2">
                                        <li>• Lives com especialistas das lojas destacando lançamentos e crediário.</li>
                                        <li>• Landing pages dinâmicas com estoque em tempo real por cidade.</li>
                                    </ul>
                                </div>
                                <div className="timeline-step" data-step="2">
                                    <h4 className="text-xl font-bold text-[#023047]">Consideração guiada</h4>
                                    <p className="mt-3 text-sm text-gray-600">Chatbots cognitivos qualificam a demanda e direcionam para consultores humanos com histórico do cliente.</p>
                                    <ul className="mt-3 text-sm text-gray-500 space-y-2">
                                        <li>• Comparadores inteligentes e realidade aumentada para produtos âncora.</li>
                                        <li>• Ofertas personalizadas baseadas em comportamento e dados de crédito.</li>
                                    </ul>
                                </div>
                                <div className="timeline-step" data-step="3">
                                    <h4 className="text-xl font-bold text-[#023047]">Compra sem atritos</h4>
                                    <p className="mt-3 text-sm text-gray-600">Integração total do crediário ao checkout, apoio humano por vídeo e múltiplas opções logísticas.</p>
                                    <ul className="mt-3 text-sm text-gray-500 space-y-2">
                                        <li>• Clique &amp; retire com reserva instantânea e lockers parceiros.</li>
                                        <li>• Omnichannel orchestration: vendedor segue a venda mesmo no digital.</li>
                                    </ul>
                                </div>
                                <div className="timeline-step" data-step="4">
                                    <h4 className="text-xl font-bold text-[#023047]">Fidelização ativa</h4>
                                    <p className="mt-3 text-sm text-gray-600">Comunidades locais, clube de benefícios e plataforma de manutenção pós-venda.</p>
                                    <ul className="mt-3 text-sm text-gray-500 space-y-2">
                                        <li>• Jornada de onboarding pós-compra com conteúdos de uso inteligente.</li>
                                        <li>• Programa de indicações conectado ao histórico de compras.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="implementacao" className="py-20 md:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="section-header p-8 rounded-lg mb-16 reveal text-center">
                            <h3 className="text-4xl font-bold text-[#023047]">Plano de implementação &amp; governança</h3>
                            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
                                Organizamos o roadmap em ondas trimestrais. Cada onda entrega funcionalidades completas e prepara as equipes com treinamento, indicadores e feedback contínuo.
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <div className="card bg-white border border-gray-100 rounded-2xl p-7 reveal">
                                <span className="text-xs font-bold uppercase text-[#0077b6]">Q2 2024</span>
                                <h4 className="mt-3 text-xl font-bold text-[#023047]">Fundação Digital</h4>
                                <p className="mt-3 text-sm text-gray-600">Kick-off de squads, discovery de processos, arquitetura de dados e implementação do CRM unificado.</p>
                            </div>
                            <div className="card bg-white border border-gray-100 rounded-2xl p-7 reveal">
                                <span className="text-xs font-bold uppercase text-[#0077b6]">Q3 2024</span>
                                <h4 className="mt-3 text-xl font-bold text-[#023047]">Pilotos Omnichannel</h4>
                                <p className="mt-3 text-sm text-gray-600">Lançamento de e-commerce MVP, social selling estruturado e clique &amp; retire em 20 lojas.</p>
                            </div>
                            <div className="card bg-white border border-gray-100 rounded-2xl p-7 reveal">
                                <span className="text-xs font-bold uppercase text-[#0077b6]">Q4 2024</span>
                                <h4 className="mt-3 text-xl font-bold text-[#023047]">Escala Assistida</h4>
                                <p className="mt-3 text-sm text-gray-600">Expansão do crediário digital, automações de marketing e orquestração logística inteligente.</p>
                            </div>
                            <div className="card bg-white border border-gray-100 rounded-2xl p-7 reveal">
                                <span className="text-xs font-bold uppercase text-[#0077b6]">Q1 2025</span>
                                <h4 className="mt-3 text-xl font-bold text-[#023047]">Excelência Continuada</h4>
                                <p className="mt-3 text-sm text-gray-600">COE omnichannel, analytics prescritivo e programa de fidelidade integrado.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="indicadores" className="py-20 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div className="reveal">
                                <h3 className="text-3xl md:text-4xl font-extrabold text-[#023047]">
                                    Indicadores-chave para monitorar o sucesso
                                </h3>
                                <p className="mt-6 text-gray-600 text-base">
                                    Os KPIs selecionados permitem decisões rápidas. Eles unem performance comercial, eficiência operacional e experiência do cliente.
                                </p>
                                <ul className="mt-8 space-y-4 text-sm text-gray-700">
                                    <li className="flex gap-3">
                                        <span className="text-[#0077b6]">•</span> Taxa de conversão omnichannel e NPS por jornada.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[#0077b6]">•</span> Receita incremental por vendedor digital e custo de aquisição.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[#0077b6]">•</span> SLA de logística integrada e adoção do crediário digital.
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg reveal">
                                <canvas ref={chartRef} id="kpiChart" className="w-full h-80" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contato" className="py-20 md:py-24 bg-[#023047] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center" />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="badge bg-white/20 text-white">Próximos passos</span>
                            <h3 className="mt-6 text-3xl md:text-4xl font-extrabold">Prontos para liderar o varejo híbrido no Brasil</h3>
                            <p className="mt-6 text-white/80 text-base">
                                Consolidamos os aprendizados e estamos preparados para a fase de detalhamento operacional. Vamos agendar um workshop de cocriação com os times de lojas, tecnologia e finanças para definir os próximos MVPs?
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="mailto:lilian.brito@fgv.br" className="cta-button">
                                    Agendar Workshop
                                </a>
                                <a href="#hero" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
                                    Voltar ao topo ↑
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-[#011627] text-white py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
                        <p>© 2025 Lilian Brito • Pós-Graduação em Marketing - FGV</p>
                        <p>Documento interno – Uso restrito para apresentação estratégica.</p>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                body {
                    background-color: #f7f9fc;
                    color: #1f2937;
                }
                .nav-link {
                    position: relative;
                    transition: color 0.3s ease;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -6px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #0077b6;
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after,
                .nav-link.active::after {
                    width: 100%;
                }
                .nav-link.active {
                    color: #0077b6;
                }
                .gradient-bg {
                    background: linear-gradient(135deg, rgba(0, 119, 182, 0.95), rgba(2, 48, 71, 0.95));
                }
                .card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04);
                }
                .badge {
                    display: inline-flex;
                    align-items: center;
                    padding: 0.35rem 0.75rem;
                    border-radius: 9999px;
                    font-weight: 600;
                    font-size: 0.75rem;
                    background-color: rgba(255, 255, 255, 0.25);
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .timeline::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 1.25rem;
                    width: 2px;
                    background: linear-gradient(180deg, rgba(0, 119, 182, 0.2), rgba(0, 119, 182, 0));
                }
                .timeline-step {
                    position: relative;
                    padding-left: 3.5rem;
                }
                .timeline-step::before {
                    content: attr(data-step);
                    position: absolute;
                    left: 0;
                    top: 0.15rem;
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 9999px;
                    background: #fff;
                    border: 2px solid #0077b6;
                    color: #023047;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
                }
                .metric {
                    background: rgba(255, 255, 255, 0.12);
                    backdrop-filter: blur(6px);
                }
                .cta-button {
                    background: linear-gradient(135deg, #ffb703, #fb8500);
                    color: #fff;
                    border-radius: 9999px;
                    padding: 0.9rem 2.5rem;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(251, 133, 0, 0.25);
                }
                .section-header {
                    background-color: #e9f3fb;
                    border-left: 5px solid #0077b6;
                }
                .reveal {
                    visibility: hidden;
                }
                @media (max-width: 1024px) {
                    nav#main-nav {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}

declare global {
    interface Window {
        ScrollReveal?: () => {
            reveal: (selector: string, options: Record<string, unknown>) => void;
        };
        Chart?: new (ctx: HTMLCanvasElement, config: Record<string, unknown>) => {
            destroy: () => void;
        };
    }
}
