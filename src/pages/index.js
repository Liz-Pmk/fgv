import Head from 'next/head';
import Script from 'next/script';
import path from 'path';
import { promises as fs } from 'fs';

export default function Home({ htmlContent, inlineScript, globalStyles }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Proposta Estratégica Omnichannel | Lojas Cem</title>
      </Head>

      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="beforeInteractive" />
      <Script src="https://unpkg.com/scrollreveal" strategy="beforeInteractive" />
      <Script
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        strategy="beforeInteractive"
      />

      {globalStyles ? <style jsx global>{globalStyles}</style> : null}

      <div dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />

      {inlineScript ? (
        <Script id="pagina-inicial-inline" strategy="afterInteractive">
          {`
            (function () {
              const run = () => {
                ${inlineScript}
              };

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', run, { once: true });
              } else {
                run();
              }
            })();
          `}
        </Script>
      ) : null}
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'pagina-inicial.html');
  const rawHtml = await fs.readFile(filePath, 'utf8');

  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const headMatch = rawHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i);

  let htmlContent = bodyMatch ? bodyMatch[1] : rawHtml;
  let inlineScript = '';

  htmlContent = htmlContent.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, (_, scriptContent) => {
    if (!inlineScript) {
      inlineScript = scriptContent
        .replace(/document\.addEventListener\('DOMContentLoaded', function \(\) \{\s*/i, '')
        .replace(/\s*\}\);\s*$/i, '')
        .trim();
    }
    return '';
  });

  const globalStyles = headMatch
    ? (headMatch[1].match(/<style[^>]*>([\s\S]*?)<\/style>/i) || [])[1] || ''
    : '';

  return {
    props: {
      htmlContent,
      inlineScript,
      globalStyles,
    },
  };
}
