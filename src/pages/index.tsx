import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Minha Página</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="scroll-smooth" lang="pt-BR">
        <h1>Bem-vindo!</h1>
        <p>Seu conteúdo aqui.</p>
      </main>
    </>
  );
}
