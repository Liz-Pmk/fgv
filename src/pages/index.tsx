import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import path from 'path';
import fs from 'fs/promises';

interface HomeProps {
  bodyContent: string;
  inlineScript: string;
  styleContent: string;
}

const externalScripts: Array<{ src: string; strategy: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload' }> = [
  { src: 'https://cdn.tailwindcss.com', strategy: 'beforeInteractive' },
  { src: 'https://cdn.jsdelivr.net/npm/chart.js', strategy: 'beforeInteractive' },
  { src: 'https://unpkg.com/scrollreveal', strategy: 'beforeInteractive' },
  { src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', strategy: 'beforeInteractive' }
];

const Home: NextPage<HomeProps> = ({ bodyContent, inlineScript, styleContent }) => {
  return (
    <>
      <Head>
        <title>Proposta Estratégica Omnichannel | Lojas Cem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {styleContent ? <style dangerouslySetInnerHTML={{ __html: styleContent }} /> : null}
      </Head>

      {externalScripts.map((script) => (
        <Script key={script.src} src={script.src} strategy={script.strategy} />
      ))}

      <main dangerouslySetInnerHTML={{ __html: bodyContent }} />

      {inlineScript ? (
        <Script id="paginainicial-inline" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: inlineScript }} />
      ) : null}
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const htmlPath = path.join(process.cwd(), 'content', 'paginainicial');
  const rawHtml = await fs.readFile(htmlPath, 'utf-8');

  const styleMatch = rawHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const styleContent = styleMatch ? styleMatch[1].trim() : '';

  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1].trim() : rawHtml;

  let inlineScript = '';
  const scriptMatch = bodyContent.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
  if (scriptMatch) {
    inlineScript = scriptMatch[1].trim();
    bodyContent = bodyContent.replace(scriptMatch[0], '').trim();
  }

  return {
    props: {
      bodyContent,
      inlineScript,
      styleContent
    }
  };
};

export default Home;
