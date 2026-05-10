# Estratégia de Deploy: IntelliChain IP (Hackathon Edition)

Este documento detalha a arquitetura de implantação da plataforma IntelliChain IP. O objetivo é garantir um ambiente estável, seguro e profissional para o Hackathon, mantendo os custos em absoluto **zero** através do uso estratégico de serviços.

## 1. Por que dividir em Vercel e VPS?

Uma dúvida comum é: *"Se temos uma VPS, por que não hospedar tudo nela?"*

A resposta envolve **Segurança, UX e as regras da Solana**:
- **Carteiras Web3 (ex: Phantom)**: Elas exigem conexões seguras via `HTTPS` para funcionar corretamente. 
- **O Vercel (Frontend)**: Hospeda nosso site (Next.js) gratuitamente, fornece um domínio amigável (ex: `intellichain.vercel.app`) e aplica um certificado `HTTPS` automático e gratuito. Isso garante que a Phantom conecte sem erros e a interface pareça extremamente profissional.
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

Para este Hackathon, a **DigitalOcean** é a nossa escolha principal por dois motivos:
1. **Velocidade e Praticidade**: A interface é incrivelmente simples. Criamos um "Droplet" (servidor Ubuntu) em menos de 1 minuto.
2. **Custo ZERO**: A DigitalOcean oferece **$200 de crédito gratuito** (válido por 60 dias) para novas contas (basta procurar um link padrão de afiliados no Google/YouTube). 

> [!TIP]
> **Ação para a Equipe:** Criem uma conta na DigitalOcean e ativem os $200 de crédito. A máquina Basic de 2GB RAM ($12/mês) será mais do que suficiente e sairá totalmente de graça.

### Alternativa 2: Hetzner Cloud (O Mais Barato 💶)
- **Instância**: CPX11 (2 vCPUs, 2GB RAM, 40GB NVMe)
- **Preço**: ~ €4.15 / mês (Menos de $5)
- **Veredito**: Se vocês não quiserem depender de créditos ou planejam manter o projeto no ar após o evento pagando do próprio bolso, a Hetzner tem o melhor preço do mercado, embora a criação da conta possa exigir verificação de identidade.

### Alternativa 3: Vultr / Linode
- **Preço/Setup**: Idêntico à DigitalOcean ($12/mês, instâncias fáceis de criar e costumam ter cupons de $100 gratuitos para teste).
- **Veredito**: Excelente plano B caso encontrem problemas para validar a conta na DigitalOcean.

---

## 4. O Fluxo de Implantação (Roadmap)

Dividiremos a execução técnica nas seguintes etapas:

### Etapa 1: Smart Contract (Solana Devnet)
- Atualizar o ambiente do Anchor para `devnet`.
- Obter Airdrop de moedas fictícias (SOL) para pagar as taxas.
- Realizar o `anchor deploy` do contrato inteligente.
- Atualizar o Frontend com o novo endereço do contrato.

### Etapa 2: Servidor (VPS DigitalOcean)
- Criar o Droplet (Ubuntu 24.04).
- Acessar o servidor via SSH.
- Clonar o repositório do projeto (`Falc01/IntelliChain_IP`).
- Executar nosso script automatizado `start.sh` (Sobe o Docker do MongoDB, Ollama e FastAPI juntos).
- Instalar e rodar o Cloudflare Tunnel / Ngrok para gerar o link `HTTPS` do backend.

### Etapa 3: Interface (Vercel)
- Conectar a conta do Vercel ao repositório no GitHub.
- Configurar as Variáveis de Ambiente (`NEXT_PUBLIC_API_URL`) para apontar para o link seguro gerado na Etapa 2.
- Publicar a aplicação!
