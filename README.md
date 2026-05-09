# 🛡️ IntelliChain IP - Proteção de Propriedade Intelectual com IA & Solana

**IntelliChain IP** é uma plataforma inovadora para registro e proteção de propriedade intelectual (IP) que utiliza uma arquitetura híbrida de Inteligência Artificial local e a Blockchain Solana. O projeto foi desenvolvido para garantir que cada criação registrada seja única, combatendo o plágio de forma automatizada e transparente.

---

## 🚀 Funcionalidades Principais

- **🔍 Verificação de Originalidade via IA**: Antes do registro, o conteúdo passa por uma análise de vetores (Embeddings) que compara a nova obra com todo o banco de dados histórico.
- **⚡ Registro Imutável na Solana**: IPs aprovadas são registradas na rede Solana (via Smart Contracts Anchor), garantindo prova de anterioridade e autoria.
- **⚖️ Curadoria Humana (Human-in-the-Loop)**: Casos de alta similaridade que não são plágios óbvios são encaminhados para um painel administrativo para decisão final.
- **💎 Fluxo "Pay-to-Audit"**: O sistema permite que mesmo IPs em análise sejam gravadas na blockchain com status pendente, garantindo o hash da transação para o usuário.
- **🎨 Interface Premium**: UI moderna desenvolvida com Next.js, Framer Motion e Tailwind CSS.

---

## 🛠️ Stack Tecnológica

- **Frontend**: Next.js 14, Tailwind CSS, Lucide Icons, Framer Motion.
- **Web3**: Solana Protocol, Anchor Framework, @solana/web3.js.
- **Backend**: FastAPI (Python), Motor (MongoDB Async Driver).
- **IA/ML**: Embeddings Locais para análise de similaridade semântica.
- **Banco de Dados**: MongoDB (Persistência de metadados e vetores).

---

## 🏗️ Arquitetura do Sistema

O IntelliChain IP utiliza uma abordagem híbrida:
1. **Off-chain (Análise)**: O backend processa o texto e gera vetores matemáticos para comparação ultra-rápida.
2. **On-chain (Prova)**: Apenas o Hash do conteúdo e os metadados de autoria são gravados na Solana para manter o custo baixo e a privacidade alta.
3. **Database**: O MongoDB armazena o histórico completo e os vetores de similaridade para as próximas consultas.

---

## 🚦 Como Rodar o Projeto

### Backend (Python)
1. Certifique-se de ter o MongoDB rodando (`localhost:27017`).
2. Instale as dependências:
   ```bash
   cd backend
   pip install fastapi uvicorn motor pymongo
   ```
3. Inicie o servidor:
   ```bash
   uvicorn app.main:app --reload
   ```

### Frontend (Next.js)
1. Instale as dependências:
   ```bash
   cd frontend
   npm install
   ```
2. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

### Blockchain (Solana Local)
1. Inicie o validador: `solana-test-validator`
2. Faça o deploy do contrato: `anchor deploy`

---

## 📝 Documentação Adicional
O projeto conta com uma página dedicada de documentação técnica integrada ao frontend (`/docs`), onde detalhamos cada etapa do processo de registro e os critérios de análise da IA.

---

## 👨‍💻 Autor
Desenvolvido por **JoaoF (Falc01)** como projeto para Hackathon e PoC de integração IA + Web3.

---

*Este projeto é um MVP (Minimum Viable Product) focado na demonstração de conceitos técnicos avançados.*