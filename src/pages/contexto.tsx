import Head from "next/head";
import { useEffect, useMemo, useRef, useState, type RefObject } from "react";

type Key =
  | "natura"
  | "boticario"
  | "acessibilidade"
  | "confianca"
  | "consultivo"
  | "cenario";

type Card = {
  key: Key;
  titulo: string;
  subtitulo: string;
  emoji: string;
  targetId: string;
  html: string; // conteúdo fiel para o modal
};

const CARDS: Card[] = [
  {
    key: "natura",
    titulo: "Análise dos Cases – Natura",
    subtitulo: "Relacionamento como Canal",
    emoji: "🍃",
    targetId: "sec-natura",
    html: `
      <h3>Análise dos Cases (Natura)</h3>
      <p>A história da Natura é um exemplo notável de como o modelo de vendas diretas, fundamentado no relacionamento pessoal de suas consultoras, evoluiu para canais digitais mantendo a essência da conexão humana. O sucesso da Natura ilustra que a confiança e a recomendação pessoal — pilares do ’comércio raiz’ da Lojas Cem — podem ser replicadas e ampliadas em escala no ambiente digital. A interação com uma pessoa de confiança ativa a liberação de oxitocina, o ’hormônio da confiança’, criando um poderoso senso de reciprocidade. <em>(EXAME, 2021; NATURA, s.d.)</em></p>
    `,
  },
  {
    key: "boticario",
    titulo: "Análise dos Cases – O Boticário",
    subtitulo: "Sinergia de Canais",
    emoji: "🧴",
    targetId: "sec-boticario",
    html: `
      <h3>Análise dos Cases (O Boticário)</h3>
      <p>A expansão nacional do Boticário, integrando lojas físicas, franquias, venda direta e e-commerce, demonstrou que a digitalização pode fortalecer a essência relacional da marca, oferecendo conveniência digital sem abrir mão do toque humano e da experiência sensorial. Ambos os cases provam que a integração de canais pode ser feita de forma a amplificar os pontos fortes tradicionais. <em>(VALOR ECONÔMICO, 2022)</em></p>
    `,
  },
  {
    key: "acessibilidade",
    titulo: "Acessibilidade Financeira",
    subtitulo: "Crediário como redutor de risco",
    emoji: "💳",
    targetId: "sec-acessibilidade",
    html: `
      <h3>Análise Detalhada (Acessibilidade Financeira)</h3>
      <p>O robusto sistema de crediário próprio, com carnê e condições facilitadas, democratiza o acesso a bens duráveis. Este mecanismo opera como um potente redutor de aversão à perda e ao risco financeiro, ativando áreas do cérebro associadas à segurança e recompensa de longo prazo. Esta característica alinha-se à importância do financiamento nos fluxos distributivos. <em>(DComércio, 2023; Seabra & Paula, 2025, p. 61)</em>.</p>
    `,
  },
  {
    key: "confianca",
    titulo: "Confiança e Tradição",
    subtitulo: "Pertencimento e lealdade",
    emoji: "🏛️",
    targetId: "sec-confianca",
    html: `
      <h3>Análise Detalhada (Confiança e Tradição)</h3>
      <p>Uma reputação de solidez e proximidade construída em mais de sete décadas gera forte lealdade e reconhecimento. A familiaridade reduz a carga cognitiva na tomada de decisão e ativa o circuito de segurança e pertencimento no cérebro límbico, elementos cruciais para a fidelização. <em>(Mundo das Marcas, 2022)</em>.</p>
    `,
  },
  {
    key: "consultivo",
    titulo: "Atendimento Consultivo",
    subtitulo: "O humano que converte",
    emoji: "🤝",
    targetId: "sec-consultivo",
    html: `
      <h3>Análise Detalhada (Atendimento Consultivo)</h3>
      <p>Vendedores que estabelecem uma relação próxima e consultiva oferecem um serviço personalizado que transcende a transação. Esta interação humana ativa a liberação de oxitocina, o hormônio da confiança e conexão social, gerando um poderoso senso de reciprocidade e bem-estar, que é profundamente gravado na memória afetiva do cliente.</p>
    `,
  },
  {
    key: "cenario",
    titulo: "Cenário Atual",
    subtitulo: "Risco da ausência digital",
    emoji: "📉",
    targetId: "sec-cenario",
    html: `
      <h3>Análise e Fonte (Cenário Atual)</h3>
      <p>A ausência de uma presença digital transacional impõe um limite tácito ao potencial de expansão e expõe a empresa a vulnerabilidades. Conforme Seabra e De Paula (2025, p. 24) apontam, o mercado atual é caracterizado por ’mudanças significativas’ impulsionadas pela ’multiplicação das mídias’, ’tecnologia’ e ’comportamento do consumidor’. Ignorar essa transformação significa falhar em interceptar e influenciar o cliente nos estágios iniciais de sua jornada de compra neurodigital. <em>(DComércio, 2023; Lojas Cem, 2022b)</em>.</p>
    `,
  },
];

export default function ContextoPage() {
  const [open, setOpen] = useState<Key | null>(null);
  const current = useMemo(() => CARDS.find((c) => c.key === open) ?? null, [open]);

  // Refs para rolar até a seção correta
  const refs: Record<Key, RefObject<HTMLElement | null>> = {
    natura: useRef<HTMLElement | null>(null),
    boticario: useRef<HTMLElement | null>(null),
    acessibilidade: useRef<HTMLElement | null>(null),
    confianca: useRef<HTMLElement | null>(null),
    consultivo: useRef<HTMLElement | null>(null),
    cenario: useRef<HTMLElement | null>(null),
  };

  // ESC fecha modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function scrollToKey(key: Key) {
    const el = refs[key].current;
    setOpen(null);
    setTimeout(() => el?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  }

  return (
    <>
      <Head>
        <title>Contextualização Estratégica — Lojas Cem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet" />
        <style>{css}</style>
      </Head>

      <header className="topbar">
        <div className="container bar">
          <div className="brand">Lojas Cem: A Próxima Era</div>
          <nav className="nav">
            <a href="#sec-natura">Natura</a>
            <a href="#sec-boticario">O Boticário</a>
            <a href="#sec-acessibilidade">Acessibilidade</a>
            <a href="#sec-confianca">Confiança</a>
            <a href="#sec-consultivo">Consultivo</a>
            <a href="#sec-cenario">Cenário</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Contextualização Estratégica</h1>
          <p className="lead">
            Conteúdo fiel ao documento original, apresentado com navegação premium por cards e modais.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="container grid">
        {CARDS.map((c) => (
          <article key={c.key} className="card">
            <div className="emoji" aria-hidden>{c.emoji}</div>
            <h3>{c.titulo}</h3>
            <p className="sub">{c.subtitulo}</p>
            <div className="actions">
              <button className="btn primary" onClick={() => setOpen(c.key)}>Ver resumo</button>
              <a className="btn ghost" href={`#${c.targetId}`} onClick={(e) => { e.preventDefault(); scrollToKey(c.key); }}>Ir ao conteúdo</a>
            </div>
          </article>
        ))}
      </section>

      {/* Conteúdo detalhado – fiel ao texto */}
      <main className="container content">
        <section id="sec-natura" ref={refs.natura} className="block" aria-labelledby="h-natura">
          <h2 id="h-natura" tabIndex={-1}>Análise dos Cases (Natura)</h2>
          <p>A história da Natura é um exemplo notável de como o modelo de vendas diretas, fundamentado no relacionamento pessoal de suas consultoras, evoluiu para canais digitais mantendo a essência da conexão humana. O sucesso da Natura ilustra que a confiança e a recomendação pessoal — pilares do ’comércio raiz’ da Lojas Cem — podem ser replicadas e ampliadas em escala no ambiente digital. A interação com uma pessoa de confiança ativa a liberação de oxitocina, o ’hormônio da confiança’, criando um poderoso senso de reciprocidade. <em>(EXAME, 2021; NATURA, s.d.)</em></p>
        </section>

        <section id="sec-boticario" ref={refs.boticario} className="block" aria-labelledby="h-boticario">
          <h2 id="h-boticario" tabIndex={-1}>Análise dos Cases (O Boticário)</h2>
          <p>A expansão nacional do Boticário, integrando lojas físicas, franquias, venda direta e e-commerce, demonstrou que a digitalização pode fortalecer a essência relacional da marca, oferecendo conveniência digital sem abrir mão do toque humano e da experiência sensorial. Ambos os cases provam que a integração de canais pode ser feita de forma a amplificar os pontos fortes tradicionais. <em>(VALOR ECONÔMICO, 2022)</em></p>
        </section>

        <section id="sec-acessibilidade" ref={refs.acessibilidade} className="block" aria-labelledby="h-acessibilidade">
          <h2 id="h-acessibilidade" tabIndex={-1}>1. Informações sobre a empresa — Acessibilidade Financeira</h2>
          <p>O robusto sistema de crediário próprio, com carnê e condições facilitadas, democratiza o acesso a bens duráveis. Este mecanismo opera como um potente redutor de aversão à perda e ao risco financeiro, ativando áreas do cérebro associadas à segurança e recompensa de longo prazo. Esta característica alinha-se à importância do financiamento nos fluxos distributivos. <em>(DComércio, 2023; Seabra & Paula, 2025, p. 61)</em>.</p>
        </section>

        <section id="sec-confianca" ref={refs.confianca} className="block" aria-labelledby="h-confianca">
          <h2 id="h-confianca" tabIndex={-1}>1. Informações sobre a empresa — Confiança e Tradição</h2>
          <p>Uma reputação de solidez e proximidade construída em mais de sete décadas gera forte lealdade e reconhecimento. A familiaridade reduz a carga cognitiva na tomada de decisão e ativa o circuito de segurança e pertencimento no cérebro límbico, elementos cruciais para a fidelização. <em>(Mundo das Marcas, 2022)</em>.</p>
        </section>

        <section id="sec-consultivo" ref={refs.consultivo} className="block" aria-labelledby="h-consultivo">
          <h2 id="h-consultivo" tabIndex={-1}>1. Informações sobre a empresa — Atendimento Consultivo</h2>
          <p>Vendedores que estabelecem uma relação próxima e consultiva oferecem um serviço personalizado que transcende a transação. Esta interação humana ativa a liberação de oxitocina, o hormônio da confiança e conexão social, gerando um poderoso senso de reciprocidade e bem-estar, que é profundamente gravado na memória afetiva do cliente.</p>
        </section>

        <section id="sec-cenario" ref={refs.cenario} className="block" aria-labelledby="h-cenario">
          <h2 id="h-cenario" tabIndex={-1}>Análise e Fonte — Cenário Atual</h2>
          <p>A ausência de uma presença digital transacional impõe um limite tácito ao potencial de expansão e expõe a empresa a vulnerabilidades. Conforme Seabra e De Paula (2025, p. 24) apontam, o mercado atual é caracterizado por ’mudanças significativas’ impulsionadas pela ’multiplicação das mídias’, ’tecnologia’ e ’comportamento do consumidor’. Ignorar essa transformação significa falhar em interceptar e influenciar o cliente nos estágios iniciais de sua jornada de compra neurodigital. <em>(DComércio, 2023; Lojas Cem, 2022b)</em>.</p>
        </section>
      </main>

      {/* Modal */}
      <div className={`backdrop ${open ? "show" : ""}`} onClick={() => setOpen(null)} />
      <div role="dialog" aria-modal="true" className={`modal ${open ? "show" : ""}`}>
        <div className="modal-head">
          <h4>{current?.titulo ?? "Resumo"}</h4>
          <button className="x" aria-label="Fechar" onClick={() => setOpen(null)}>✕</button>
        </div>
        <div className="modal-body prose" dangerouslySetInnerHTML={{ __html: current?.html ?? "" }} />
        {current && (
          <div className="modal-actions">
            <button className="btn primary" onClick={() => scrollToKey(current.key)}>Ir ao conteúdo</button>
            <button className="btn ghost" onClick={() => setOpen(null)}>Fechar</button>
          </div>
        )}
      </div>
    </>
  );
}

/* ======== CSS premium (sem libs) ======== */
const css = `
:root{--ink:#0f2a3d;--muted:#5b6b77;--brand:#0ea5e9;--bg:#f6f8fb;--card:#fff;--ring:rgba(14,165,233,.2)}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--bg);color:#102a43;font-family:'Poppins',system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}
a{color:var(--brand)} a:hover{text-decoration:underline}
.container{max-width:1120px;margin:0 auto;padding:0 20px}
.topbar{position:sticky;top:0;background:rgba(255,255,255,.85);backdrop-filter:saturate(180%) blur(10px);border-bottom:1px solid #edf2f7;z-index:20}
.bar{height:64px;display:flex;align-items:center;justify-content:space-between}
.brand{font-weight:800;color:var(--ink)}
.nav a{margin-left:16px;color:var(--muted);text-decoration:none}
.hero{padding:48px 0 10px}
.hero h1{font-size:40px;margin:0 0 8px;color:var(--ink)}
.lead{color:var(--muted)}
.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin:18px 0 28px}
@media (max-width:960px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.grid{grid-template-columns:1fr}}
.card{background:var(--card);border:1px solid #eef2f7;border-radius:16px;padding:18px;box-shadow:0 8px 24px -12px rgba(2,8,23,.15);transition:transform .25s, box-shadow .25s}
.card:hover{transform:translateY(-4px);box-shadow:0 18px 32px -12px rgba(2,8,23,.2)}
.emoji{font-size:28px}
.card h3{margin:6px 0 4px;color:var(--ink)}
.sub{margin:0;color:var(--muted);font-size:14px}
.actions{display:flex;gap:8px;margin-top:12px}
.btn{border:1px solid #e6eef5;background:#fff;padding:10px 14px;border-radius:12px;font-weight:700;cursor:pointer}
.btn:hover{box-shadow:0 0 0 4px var(--ring)}
.btn.primary{background:linear-gradient(180deg,#38bdf8,#0ea5e9);border-color:#0ea5e9;color:#fff}
.btn.ghost{color:#075985}
.content{padding:8px 0 40px}
.block{background:var(--card);border:1px solid #eef2f7;border-radius:16px;padding:22px;margin:20px 0;box-shadow:0 10px 32px -16px rgba(2,8,23,.12)}
.block h2{margin:0 0 8px;color:var(--ink);outline:none}
.block p{color:#2e4153}
.prose h3{margin:6px 0 8px;color:var(--ink)}
.prose ul{margin:6px 0 0 18px}

/* Modal */
.backdrop{position:fixed;inset:0;background:rgba(0,0,0,.45);opacity:0;pointer-events:none;transition:opacity .2s}
.backdrop.show{opacity:1;pointer-events:auto}
.modal{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;transform:translateY(8px) scale(.98);pointer-events:none;transition:all .2s}
.modal.show{opacity:1;transform:none;pointer-events:auto}
.modal-head{display:flex;align-items:center;justify-content:space-between;background:#fff;border:1px solid #eef2f7;border-bottom:none;border-radius:16px 16px 0 0;padding:12px 16px;max-width:780px;width:calc(100% - 32px)}
.modal-body{background:#fff;border:1px solid #eef2f7;max-width:780px;width:calc(100% - 32px);max-height:70vh;overflow:auto;padding:16px}
.modal-actions{background:#fff;border:1px solid #eef2f7;border-top:none;border-radius:0 0 16px 16px;max-width:780px;width:calc(100% - 32px);padding:12px 16px;display:flex;gap:8px;justify-content:flex-end}
.x{width:36px;height:36px;border-radius:999px;border:1px solid #e6eef5;background:#fff;cursor:pointer}
.x:hover{box-shadow:0 0 0 4px var(--ring)}
`;
