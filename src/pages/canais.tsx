import Head from "next/head";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Head>
        <title>FGV | Canais Digitais – Lojas Cem</title>
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
            <h1 className="text-lg md:text-xl font-extrabold" style={{color:"var(--ink)"}}>Canais Digitais</h1>
            <Link href="/" className="btn">Voltar</Link>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8">
          <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: `<h3 class='text-2xl font-bold text-[#023047] mb-4'>3. Proposta de canais digitais</h3>
<h4 class='mt-4 font-semibold'>Site Próprio</h4>
<ul class='list-disc pl-5'>
  <li>Soberania da marca; crediário digital; dados primários para CRM; preservação de margem.</li>
</ul>
<p class='mt-2 text-sm text-gray-600'>Desafio: investimento inicial e tráfego.</p>
<h4 class='mt-4 font-semibold'>Redes Sociais</h4>
<ul class='list-disc pl-5'>
  <li>Capilaridade e prova social local; lives reduzem lacuna sensorial.</li>
</ul>
<p class='mt-2 text-sm text-gray-600'>Desafio: governança e capacitação.</p>
<h4 class='mt-4 font-semibold'>WhatsApp</h4>
<ul class='list-disc pl-5'>
  <li>Confiança e atendimento em escala; eficiência no pós-venda.</li>
</ul>
<p class='mt-2 text-sm text-gray-600'>Desafio: escalabilidade e dependência.</p>
<h4 class='mt-4 font-semibold'>Canal de IA</h4>
<ul class='list-disc pl-5'>
  <li>Personalização preditiva; 24/7; unificação omnichannel; otimização do funil.</li>
</ul>
<p class='mt-2 text-sm text-gray-600'>Desafios: investimento, evitar desumanização, dados de qualidade, melhoria contínua.</p>
` }} />
        </main>
      </div>
    </>
  );
}
