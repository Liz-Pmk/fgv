# fgv

Trabalhos FGV

## Estrutura do projeto
- `public/`: arquivos estáticos a serem servidos diretamente.
- `src/pages/`: páginas da aplicação (por exemplo, Next.js).
- `src/components/`: componentes reutilizáveis.
- `src/styles/`: arquivos de estilo compartilhados.
- `src/lib/`: funções auxiliares e utilitários.
- `content/`: espaço para colar os arquivos `.txt` com o conteúdo inicial do site.

## Automação entre Codex, GitHub e Vercel
As GitHub Actions configuradas permitem que o fluxo de trabalho da Codex (assistente), do GitHub e da Vercel funcione de forma integrada:

1. **`PR Checks`** (`.github/workflows/pr-checks.yml`): executa automaticamente em _pull requests_ direcionados para `main`, garantindo que comandos de lint, testes ou _build_ definidos no `package.json` sejam executados. Use este fluxo para validar as alterações sugeridas pela Codex antes de mesclar.
2. **`Auto merge PRs`** (`.github/workflows/auto-merge.yml`): adicione o rótulo `automerge` ao PR depois que as verificações passarem para que o GitHub habilite a mesclagem automática (modo _squash_). Remover o rótulo cancela a mesclagem automática.
3. **`Deploy to Vercel`** (`.github/workflows/vercel-deploy.yml`): publica o site na Vercel sempre que houver _push_ na branch `main`, desde que os segredos necessários estejam configurados.

### Configurando os segredos da Vercel
Defina os seguintes segredos no repositório (`Settings` > `Secrets and variables` > `Actions`):
- `VERCEL_TOKEN`: token de acesso gerado na sua conta Vercel.
- `VERCEL_ORG_ID`: ID da organização (ou usuário) na Vercel.
- `VERCEL_PROJECT_ID`: ID do projeto na Vercel.

Com os segredos configurados, os deploys acontecerão automaticamente a cada alteração na branch `main`. Enquanto os segredos não estiverem presentes, o fluxo registra que estão faltando e finaliza sem falhar.
