# Estratégia de Deploy: IntelliChain IP (Celo Edition)

Este documento detalha a arquitetura de implantação da plataforma IntelliChain IP na rede Celo. O objetivo é garantir um ambiente estável, seguro e profissional, mantendo os custos sob controle.

## 1. Por que dividir em Vercel e VPS?

Uma dúvida comum é: *"Se temos uma VPS, por que não hospedar tudo nela?"*

A resposta envolve **Segurança, UX e as regras da Celo**:
- **Carteiras Web3 (ex: MetaMask, Valora, MiniPay)**: Elas exigem conexões seguras via `HTTPS` para funcionar corretamente. 
- **O Vercel (Frontend)**: Hospeda nosso site (Next.js) de forma rápida e segura, fornece um domínio amigável (ex: `intellichain.vercel.app`) e aplica um certificado `HTTPS` automático e gratuito. Isso garante que as carteiras conectem sem erros e a interface pareça extremamente profissional.
- **A VPS (Backend + Banco + IA)**: O Vercel não suporta Inteligência Artificial rodando localmente (Ollama) nem Banco de Dados. Por isso, a VPS fará o "trabalho pesado" nos bastidores.

## 2. O Perigo Oculto: Erro de "Mixed Content"

Existe uma armadilha clássica que vamos evitar:
Se o nosso Frontend no Vercel (seguro via `HTTPS`) tentar enviar dados para o Backend na VPS usando o IP puro (inseguro via `HTTP`), os navegadores modernos bloqueiam a requisição por segurança (Mixed Content Error).

**A Solução Elegante:**
Não precisaremos comprar domínios complexos para a VPS. Utilizaremos um túnel gratuito (como **Cloudflare Tunnel** ou **Ngrok**) instalado na VPS. Ele criará instantaneamente um link `HTTPS` seguro para nossa API conversar perfeitamente com o Vercel.

---

## 3. Análise de Infraestrutura (Backend + IA)

O uso de IA não precisa ser caro. Graças à escolha do modelo `nomic-embed-text` (apenas 137M parâmetros), não precisamos de placas de vídeo (GPUs) na VPS.

**Requisito da VPS**: 
- **CPU**: 1 ou 2 vCPUs
- **RAM**: 2GB a 4GB
- **Armazenamento**: 20GB SSD

### 🏆 Hospedagem Recomendada: DigitalOcean

Para a implantação, a **DigitalOcean** é uma escolha excelente:
1. **Velocidade e Praticidade**: A interface é simples. Criamos um "Droplet" (servidor Ubuntu) rapidamente.
2. **Custo Acessível**: É possível utilizar créditos iniciais gratuitos ou usar instâncias de baixo custo ($6-$12/mês).

---

## 4. O Fluxo de Implantação (Roadmap)

Dividiremos a execução técnica nas seguintes etapas:

### Etapa 1: Smart Contract (Celo Mainnet / Testnet)
- Configurar o Hardhat com a rede Celo (`hardhat.config.js`).
- Obter saldo em CELO na carteira para pagar o gás do deploy.
- Executar o script de implantação:
  ```bash
  npx hardhat run scripts/deploy.js --network celo
  ```
- Atualizar o endereço do contrato no Frontend (`IPForm.tsx`).

### Etapa 2: Servidor (VPS DigitalOcean)
- Criar o Droplet (Ubuntu 24.04).
- Acessar o servidor via SSH.
- Clonar o repositório do projeto (`Falc01/IntelliChain_IP_celo`).
- Executar o script de inicialização do backend (Docker MongoDB + Ollama + FastAPI).
- Instalar e rodar o Cloudflare Tunnel / Ngrok para gerar o link `HTTPS` do backend.

### Etapa 3: Interface (Vercel)
- Conectar a conta do Vercel ao repositório no GitHub.
- Configurar a variável `VPS_API_URL` para fazer os rewrites automáticos de `/api/*`.
- Publicar a aplicação!
