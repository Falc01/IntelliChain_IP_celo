# 📝 IntelliChain IP - Notas de Desenvolvimento e Progresso

Este documento registra as decisões técnicas, correções e o estado atual do projeto IntelliChain IP.

## 📅 Última Atualização: 09/05/2026

### ✅ Concluído (Sessão Atual)

1. **Refatoração do Fluxo de Registro**:
   - Otimização da análise de similaridade: agora o sistema **não salva** nada no banco durante a consulta (`/verify`), evitando falsos positivos de 100% (auto-plágio).
   - O registro no MongoDB agora é atômico e ocorre apenas **após o sucesso** da transação na rede Solana.
   - O `tx_hash` real da blockchain agora é persistido corretamente no banco de dados junto com os metadados da IP.

2. **Inteligência Artificial (Ollama)**:
   - Implementado o uso do modelo `nomic-embed-text` para embeddings de alta precisão.
   - Adicionada verificação e download automático do modelo no script de inicialização (`start.sh`).

3. **Backend (FastAPI & MongoDB)**:
   - Corrigidos erros de referência ao `ObjectId` (ajuste nos imports do `bson`).
   - Implementada filtragem na busca de similaridade para ignorar registros que não possuem `tx_hash` (registros órfãos/falhos).
   - Adicionados logs de depuração para rastreamento de confirmações de transação.

4. **Frontend (Next.js)**:
   - Re-estruturado o componente `IPForm.tsx` para seguir o novo fluxo: Análise -> Solana -> Persistência.
   - Restaurada a lógica real do `AdminPage`, conectando o painel de curadoria à API real do backend.

5. **DevOps & Documentação**:
   - Criado script `start.sh` robusto para subir todo o ecossistema (Solana, Docker, IA, Backend, Frontend) com um único comando.
   - Criado `README.md` profissional para o GitHub.
   - Configurado repositório oficial em `https://github.com/Falc01/IntelliChain_IP.git`.

### 🛠️ Configuração do Ambiente

- **Backend**: Python 3.10+, FastAPI, Motor (Mongo Async).
- **Frontend**: Next.js 14, Tailwind, Framer Motion.
- **Blockchain**: Solana local (Anchor), cluster devnet disponível.
- **Banco de Dados**: MongoDB via Docker-Compose.

### 🚀 Próximos Passos (Sugestão)

- [ ] Implementar sistema de login real (além da conexão da carteira).
- [ ] Criar visualização de certificado de IP para download do usuário.
- [ ] Migrar para Devnet oficial para o Pitch final.

---
*Notas mantidas pela equipe de desenvolvimento (Antigravity AI).*
