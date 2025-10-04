import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>FGV | Justificativa – Lojas Cem</title>
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
            <h1 className="text-lg md:text-xl font-extrabold" style={{color:"var(--ink)"}}>Justificativa</h1>
            <Link href="/" className="btn">Voltar</Link>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8">
          <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: `<h3 class='text-2xl font-bold text-[#023047] mb-4'>2. Justificativa para novos canais</h3>
<h4 class='mt-4 font-semibold'>Nível de Serviço</h4>
<p>Disponibilidade 24/7, transparência de estoque e rastreamento elevam valor de tempo e informação (p. 13, 42, 56, 64).</p>
<h4 class='mt-4 font-semibold'>Mudanças nas Preferências</h4>
<p>86,6% dos brasileiros online ~9h/dia; não estar no digital exclui a marca da árvore de decisão (p. 25, 110, 134).</p>
<h4 class='mt-4 font-semibold'>Novos Mercados</h4>
<p>E-commerce rompe barreiras geográficas e de capital; valida demanda com menor custo (p. 14, 26, 120).</p>
` }} />
        </main>
      </div>
    </>
  );
}
