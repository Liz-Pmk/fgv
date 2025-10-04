import { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";

type Key =
  | "contexto"
  | "empresa"
  | "justificativa"
  | "canais"
  | "estrategia"
  | "logistica"
  | "shopper"
  | "trade"
  | "conclusao"
  | "analises";

type Section = { key: Key; title: string; icon: string; html: string; href: string };

const CONTENT: Record<Key, string> = {
  contexto: `
    <h3 class="text-2xl font-bold text-[#023047] mb-4">Contextualização Estratégica</h3>
    <p>Este documento reúne análises e referências que fundamentam a Proposta Estratégica Omnichannel para as Lojas Cem.</p>
    <h4 class="mt-6 font-semibold">Análise dos Cases – Natura</h4>
    <p>O modelo de vendas diretas evoluiu para canais digitais mantendo a essência relacional, replicando confiança (oxitocina) e prova social em escala.</p>
    <h4 class="mt-6 font-semibold">Análise dos Cases – O Boticário</h4>
    <p>Integração lojas, franquias, venda direta e e-commerce fortaleceu a essência relacional com conveniência digital.</p>
  `,
  empresa: `
    <h3 class="text-2xl font-bold text-[#023047] mb-4">1. Informações sobre a empresa</h3>
    <h4 class="mt-4 font-semibold">Acessibilidade Financeira</h4>
    <p>Crediário próprio democratiza acesso e reduz aversão ao risco (DComércio, 2023; Seabra & Paula, 2025, p. 61).</p>
    <h4 class="mt-4 font-semibold">Confiança e Tradição</h4>
    <p>História e familiaridade geram lealdade e pertencimento (Mundo das Marcas, 2022).</p>
    <h4 class="mt-4 font-semibold">Atendimento Consultivo</h4>
    <p>Interação próxima ativa oxitocina (confiança), gerando reciprocidade e bem-estar.</p>
    <h4 class="mt-4 font-semibold">Cenário Atual</h4>
    <p>Sem canal digital transacional, há limite de expansão e vulnerabilidades (Seabra & De Paula, 2025, p. 24).</p>
  `,
  justificativa: `
    <h3 class="text-2xl font-bold text-[#023047] mb-4">2. Justificativa para novos canais</h3>
    <h4 class="mt-4 font-semibold">Nível de Serviço</h4>
    <p>Disponibilidade 24/7, transparência de estoque e rastreamento elevam valor de tempo e informação (p. 13, 42, 56, 64).</p>
    <h4 class="mt-4 font-semibold">Mudanças nas Preferências</h4>
    <p>86,6% dos brasileiros online ~9h/dia; não estar no digital exclui a marca da árvore de decisão (p. 25, 110, 134).</p>
    <h4 class="mt-4 font-semibold">Novos Mercados</h4>
    <p>E-commerce rompe barreiras geográficas e de capital; valida demanda com menor custo (p. 14, 26, 120).</p>
  `,
  canais: `
    <h3 class="text-2xl font-bold text-[#023047] mb-4">3. Proposta de canais digitais</h3>
    <h4 class="mt-4 font-semibold">Site Próprio</h4>
    <ul class="list-disc pl-5">
      <li>Soberania da marca; crediário digital; dados primários para CRM; preservação de margem.</li>
    </ul>
    <p class="mt-2 text-sm text-gray-600">Desafio: investimento inicial e tráfego.</p>
    <h4 class="mt-4 font-semibold">Redes Sociais</h4>
    <ul class="list-disc pl-5">
      <li>Capilaridade e prova social local; lives reduzem lacuna sensorial.</li>
    </ul>
    <p class="mt-2 text-sm text-gray-600">Desafio: governança e capacitação.</p>
    <h4 class="mt-4 font-semibold">WhatsApp</h4>
    <ul class="list-disc pl-5">
      <li>Confiança e atendimento em escala; eficiência no pós-venda.</li>
    </ul>
    <p class="mt-2 text-sm text-gray-600">Desafio: escalabilidade e dependência.</p>
    <h4 class="mt-4 font-semibold">Canal de IA</h4>
    <ul class="list-disc pl-5">
      <li>Personalização preditiva; 24/7; unificação omnichannel; otimização do funil.</li>
    </ul>
    <p class="mt-2 text-sm text-gray-600">Desafios: investimento, evitar desumanização, dados de qualidade, melhoria contínua.</p>
  `,
  estrategia: `
    <h3 class="text-2xl font-bold text-[#023047] mb-4">4. Estratégia: Social Selling Relacional</h3>
    <p><strong>Omnichannel:</strong> cliente no centro e integração fluida (Seabra & Paula, 2025, p. 133).</p>
    <p><strong>Consultor Digital:</strong> humaniza o digital, reduz risco percebido e ativa confiança (oxitocina).</p>
  `,
  logistica: `
    <h3 class="text-2xl font-bold text-[#023047] mb-4">5. Desafios Logísticos</h3>
    <p><strong>Transporte:</strong> last mile de volumosos; transporte até 70% do custo (p. 19, 122).</p>
    <p><strong>Armazenagem:</strong> visibilidade de estoque para evitar ruptura virtual/estoque parado (p. 42, 56).</p>
    <p><strong>Tecnologia:</strong> APIs/headless conectam sistemas; IA acelera transformação (p. 26, 37).</p>
    <p><strong>Conexão Inteligente:</strong> prova social local via consultor eleva conversão.</p>
  `,
  shopper: `
    <h3 class="text-2xl font-bold text-[#023047] mb-4">6. Estímulo ao Cliente (Shopper)</h3>
    <p><strong>BOPIS 2h (leves) e Retira Programada (volumosos):</strong> redução de risco e gratificação (p. 122).</p>
    <p><strong>Clube Lojas Cem:</strong> gamificação e pertencimento (p. 82, 136).</p>
    <p><strong>Live Commerce:</strong> FOMO e prova social (p. 142).</p>
    <p><strong>Otimizador de Frete:</strong> transparência e ship-from-store (p. 19, 64).</p>
  `,
  trade: `
    <h3 class="text-2xl font-bold text-[#023047] mb-4">7. Trade Marketing</h3>
    <p><strong>Vitrine Cognitiva:</strong> GC digital + IA reduz Paradoxo da Escolha; 360º/AR geram confiança (p. 25, 116).</p>
    <p><strong>Showroom Límbico:</strong> design sensorial e exibitécnica (p. 79, 98, 100).</p>
    <p><strong>Ações Neurais:</strong> fidelidade e lives com urgência/prova social.</p>
  `,
  conclusao: `
    <h3 class="text-2xl font-bold text-[#023047] mb-4">Conclusão</h3>
    <p>Omnichannel como necessidade; capital relacional vira vantagem; execução requer disciplina, tecnologia, pessoas e visibilidade de estoque (p. 131–133, 143, 144).</p>
  `,
  analises: `
    <h3 class="text-2xl font-bold text-[#023047] mb-4">Compilado de Análises Aprofundadas</h3>
    <p>Resumo integrado das análises, fundamentos e referências utilizadas em toda a proposta.</p>
  `,
};

const CARDS: Section[] = [
  { key: "contexto",     title: "Contextualização",      icon: "🧭", html: CONTENT.contexto,     href: "/contexto" },
  { key: "empresa",      title: "Empresa",               icon: "🏢", html: CONTENT.empresa,      href: "/empresa" },
  { key: "justificativa",title: "Justificativa",         icon: "📌", html: CONTENT.justificativa, href: "/justificativa" },
  { key: "canais",       title: "Canais Digitais",       icon: "🌐", html: CONTENT.canais,        href: "/canais" },
  { key: "estrategia",   title: "Estratégia",            icon: "🎯", html: CONTENT.estrategia,    href: "/estrategia" },
  { key: "logistica",    title: "Logística",             icon: "🚚", html: CONTENT.logistica,     href: "/logistica" },
  { key: "shopper",      title: "Shopper",               icon: "🛍️", html: CONTENT.shopper,      href: "/shopper" },
  { key: "trade",        title: "Trade Marketing",       icon: "🧩", html: CONTENT.trade,         href: "/trade" },
  { key: "conclusao",    title: "Conclusão",             icon: "✅", html: CONTENT.conclusao,     href: "/conclusao" },
  { key: "analises",     title: "Compilado de Análises", icon: "📚", html: CONTENT.analises,      href: "/analises" },
];

export default function IndexPage() {
  const [open, setOpen] = useState<Key | null>(null);
  const current = useMemo(() => CARDS.find(c => c.key === open), [open]);

  return (
    <>
      <Head>
        <title>FGV | Compilado de Análises – Lojas Cem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          :root { --brand:#0077b6; --ink:#023047; }
          html, body { font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
          .card { transition: transform .25s ease, box-shadow .25s ease; }
          .card:hover { transform: translateY(-6px); box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }
          .prose h3, .prose h4 { color: var(--ink); }
          .btn { background: var(--brand); color: #fff; font-weight: 700; padding: .75rem 1.25rem; border-radius: .75rem; }
          .btn:hover { filter: brightness(.95); }
        `}</style>
      </Head>

      <div className="min-h-screen bg-[#f8f9fa] text-[#212529]">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-extrabold" style={{color:"var(--ink)"}}>Compilado de Análises – Lojas Cem</h1>
            <a className="btn hidden md:inline-block" href="#cards">Ver Cards</a>
          </div>
        </header>

        <section className="relative py-12 md:py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold" style={{color:"var(--ink)"}}>Cards premium + rotas por assunto</h2>
            <p className="mt-4 text-gray-600">Clique no card para abrir um modal rápido ou navegue para a página do assunto.</p>
          </div>
        </section>

        <section id="cards" className="pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CARDS.map((c) => (
                <div key={c.key} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="text-lg font-bold" style={{color:"var(--ink)"}}>{c.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">Escolha como visualizar:</p>
                  <div className="mt-4 flex gap-2">
                    <button
                      className="card flex-1 text-left rounded-xl border px-4 py-2 hover:shadow"
                      onClick={() => setOpen(c.key)}
                    >
                      Modal
                    </button>
                    <Link className="card flex-1 text-center rounded-xl border px-4 py-2 hover:shadow" href={c.href}>
                      Página
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(null)}
      />

      {/* Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className={`w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl transform transition-all ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b flex items-center justify-between p-4">
            <h4 className="text-lg font-bold" style={{color:"var(--ink)"}}>{current?.title ?? "Assunto"}</h4>
            <button
              onClick={() => setOpen(null)}
              className="w-9 h-9 rounded-full grid place-items-center border hover:shadow hover:bg-gray-50"
              aria-label="Fechar"
              title="Fechar"
            >
              ✕
            </button>
          </div>
          <div className="p-4 md:p-6">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: current?.html ?? "" }} />
          </div>
        </div>
      </div>
    </>
  );
}
