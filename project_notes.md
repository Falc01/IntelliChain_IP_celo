# 📝 IntelliChain IP - Notas de Desenvolvimento e Progresso (Celo EVM)

Este documento registra as decisões técnicas, correções e o estado atual do projeto IntelliChain IP após a migração para a Celo.

## 📅 Última Atualização: 08/06/2026

### ✅ Concluído (Deploy em Produção)

1. **Infraestrutura e Deploy (Nuvem)**:
   - **Backend (VPS DigitalOcean)**: Configurada VPS com Ubuntu, rodando FastAPI, Docker (MongoDB) e Ollama (IA).
   - **Frontend (Vercel)**: Deploy efetuado no Vercel com suporte ao Next.js 16. O frontend foi migrado de Solana para EVM utilizando a biblioteca `viem`.

2. **Arquitetura de Comunicação (Vercel Proxy)**:
   - **Problema resolvido**: O Cloudflare Tunnel (`trycloudflare`) estava bloqueando requisições da API com telas de "Anti-Bot", gerando falsos erros de CORS e `Failed to fetch`.
   - **Solução (Vercel Rewrites)**: Criado um proxy reverso no `next.config.ts`. O frontend faz chamadas para a rota relativa `/api/*`, e o servidor do Vercel redireciona secretamente a requisição para o IP público HTTP da VPS (`VPS_API_URL`). Isso eliminou 100% dos erros de CORS e Mixed Content (HTTP vs HTTPS).

3. **Internacionalização (i18n)**:
   - Traduções (PT/EN) aplicadas em todo o sistema.
   - Refatoradas as páginas estáticas (`DocsPage` e `AdminPage`) para utilizarem o `LanguageContext`, permitindo a troca dinâmica de idiomas em toda a plataforma.

4. **Refatoração do Fluxo de Registro & IA**:
   - Análise por IA ocorre primeiro; a persistência no MongoDB e a abertura da carteira Celo (MetaMask/Valora/MiniPay) ocorrem em sequência.
   - Os testes de similaridade confirmaram a detecção com alta precisão de textos plagiados (encaminhando-os para o Admin).

### 🛠️ Configuração do Ambiente Atual

- **Backend**: VPS DigitalOcean (IP Aberto porta 8000), Python 3.10+, FastAPI, Motor (Mongo Async).
- **Frontend**: Vercel (Production), Next.js 16, Tailwind, Framer Motion, Vercel Rewrites Proxy.
- **Blockchain**: Celo Mainnet Oficial (Contrato em Solidity `CopyrightRegistry` no endereço `0x004d593Be1C85b039c17bA421eb6C176bDC926b0`).
- **IA**: Ollama Local (Modelo `nomic-embed-text`).

### 🚀 Próximos Passos (Sugestão Pós-Hackathon)

- [ ] Implementar sistema de Autenticação Web3 (Sign-in with Celo).
- [ ] Criar gerador de PDF automatizado para download do certificado de IP registrado.
- [ ] Otimizar os embeddings de IA para suporte a imagens estruturadas e não apenas texto.

---
*Notas mantidas pela equipe de desenvolvimento (Antigravity AI).*
