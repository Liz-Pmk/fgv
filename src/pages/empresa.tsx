import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>FGV | Empresa – Lojas Cem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          :root { --brand:#0077b6; --ink:#023047; }
          html, body { font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
          .btn { background: var(--brand); color: #fff; font-weight: 700; padding: .5rem 1rem; border-radius: .5rem; }
          .btn:hover { filter: brightness(.95); }
        `}</style>
      </Head>

      <div className="min-h-screen bg-[#f8f9fa] text-[#212529]">
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-lg md:text-xl font-extrabold" style={{color:"var(--ink)"}}>Empresa</h1>
            <Link href="/" className="btn">Voltar</Link>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8">
          <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: `<h3 class='text-2xl font-bold text-[#023047] mb-4'>1. Informações sobre a empresa</h3>
<h4 class='mt-4 font-semibold'>Acessibilidade Financeira</h4>
<p>Crediário próprio democratiza acesso e reduz aversão ao risco (DComércio, 2023; Seabra & Paula, 2025, p. 61).</p>
<h4 class='mt-4 font-semibold'>Confiança e Tradição</h4>
<p>História e familiaridade geram lealdade e pertencimento (Mundo das Marcas, 2022).</p>
<h4 class='mt-4 font-semibold'>Atendimento Consultivo</h4>
<p>Interação próxima ativa oxitocina (confiança), gerando reciprocidade e bem-estar.</p>
<h4 class='mt-4 font-semibold'>Cenário Atual</h4>
<p>Sem canal digital transacional, há limite de expansão e vulnerabilidades (Seabra & De Paula, 2025, p. 24).</p>
` }} />
        </main>
      </div>
    </>
  );
}
