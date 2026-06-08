<div align="center">

```
██╗███╗   ██╗████████╗███████╗██╗     ██╗      ██████╗██╗  ██╗ █████╗ ██╗███╗   ██╗    ██╗██████╗ 
██║████╗  ██║╚══██╔══╝██╔════╝██║     ██║     ██╔════╝██║  ██║██╔══██╗██║████╗  ██║    ██║██╔══██╗
██║██╔██╗ ██║   ██║   █████╗  ██║     ██║     ██║     ███████║███████║██║██╔██╗ ██║    ██║██████╔╝
██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██║     ██║     ██╔══██║██╔══██║██║██║╚██╗██║    ██║██╔═══╝ 
██║██║ ╚████║   ██║   ███████╗███████╗███████╗╚██████╗██║  ██║██║  ██║██║██║ ╚████║    ██║██║     
╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚══════╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝    ╚═╝╚═╝     
```

### **Intellectual Property Protection with AI + Celo Blockchain**
*Every creation is unique. Every record, permanent. Every authorship, proven.*

<br/>

> **"Originality should not be a gamble. With IntelliChain IP, it is a certainty recorded forever."**

</div>

---

## Table of Contents

- [About the Project](#-about-the-project)
- [The Problem We Solve](#-the-problem-we-solve)
- [Core Features](#-core-features)
- [System Architecture](#️-system-architecture)
- [Tech Stack](#️-tech-stack)
- [Registration Flow](#-registration-flow-step-by-step)
- [Quick Start](#-quick-start)
- [Manual Setup](#-manual-setup)
- [Environment Variables](#️-environment-variables)
- [Documentation](#-documentation)
- [Team](#-team)
- [Roadmap](#️-roadmap)
- [License](#-license)

---

## About the Project

**IntelliChain IP** is a next-generation platform for registering and protecting **Intellectual Property (IP)** built on the **Celo** blockchain. The project was born from a real need: the traditional system for registering works and patents is slow, expensive, bureaucratic, and — above all — **does not verify whether the content already exists**.

Our solution addresses this with a powerful hybrid architecture that combines **local Artificial Intelligence** for semantic originality analysis with the immutable power of **Solidity Smart Contracts on Celo** for permanent, tamper-proof registration.

The result? A system that **does not merely register** — it **guarantees** that what is being registered is genuinely original.

<br/>

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   TRADITIONAL REGISTRY          INTELLICHAIN IP              │
│   ─────────────────────         ────────────────────────     │
│   ✗ Months of waiting    →      ✅ Registered in minutes    │
│   ✗ No originality check →      ✅ AI validates content     │
│   ✗ Expensive & slow     →      ✅ Minimal cost (Celo)      │
│   ✗ Centralized          →      ✅ Decentralized & immutable│
│   ✗ Opaque process       →      ✅ Transparent & auditable  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## The Problem We Solve

The global Intellectual Property market moves **over $5 trillion per year**, yet access to real protection is still:

- **Slow**: Traditional processes take months or years to complete.
- **Expensive**: Legal fees and government charges exclude independent creators.
- **Inefficient**: No existing system actively checks whether a work has already been registered by someone else.
- **Centralized**: Relies on single authorities that can fail, be corrupted, or simply lose data.

**IntelliChain IP** was built to eliminate each one of these barriers.

---

## Core Features

### AI-Powered Originality Verification
Before any registration, the content goes through a **semantic analysis pipeline using local Embeddings**. The system converts the work into mathematical vectors and compares them against the entire historical database to detect similarities — even if the text has been paraphrased or restructured.

> This is not a keyword search. It is **deep semantic understanding**.

---

### Immutable Registration on Celo
IPs approved by the AI analysis are registered on-chain via **Solidity Smart Contracts**. The cryptographic hash of the content and authorship metadata are recorded with a permanent, immutable timestamp on the Celo Mainnet, generating **irrefutable proof of prior art**.

> Once on the blockchain, **no one can delete or alter it**.

---

### Human Curation — *Human-in-the-Loop*
AI is powerful, but ambiguous cases deserve human judgment. When detected similarity falls into a **gray zone** (high resemblance, but not obvious plagiarism), the case is automatically forwarded to an **admin panel** where curators make the final call.

> Technology and ethics working together, not in conflict.

---

### *Pay-to-Audit* Flow
Even while an IP is under human review, the system records a **pending transaction on the blockchain**, immediately delivering to the creator the **transaction hash** as proof of submission with date and time. This ensures protection from the very first moment.

> You submit. You have proof. Instantly.

---

### Premium Interface
High-fidelity UI built with **Next.js 16**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons** — with full focus on user experience and interaction fluidity.

> Because protecting your creation should be as elegant as creating it.

---

## System Architecture

IntelliChain IP deliberately separates **analysis** from **registration**, optimizing cost, speed, and privacy:

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           INTELLICHAIN IP                                │
│                                                                          │
│  ┌─────────────┐    ┌──────────────────────────────────────────────┐     │
│  │    USER     │───▶│               FRONTEND                       │    │
│  │             │    │          Next.js 16 + Tailwind                │    │
│  └─────────────┘    └───────────────────┬──────────────────────────┘     │
│                                         │                                │
│                                         ▼                                │
│                     ┌───────────────────────────────────┐                │
│                     │             BACKEND               │                │
│                     │         FastAPI (Python)           │               │
│                     └──────┬────────────────┬───────────┘                │
│                            │                │                            │
│              ┌─────────────▼──┐    ┌────────▼────────────┐               │
│              │   AI / ML      │    │      MONGODB        │               │
│              │  Semantic      │    │  Metadata + Vectors │               │
│  OFF-CHAIN   │  Embeddings    │    │  of Similarity      │               │
│  (Analysis)  └────────┬───────┘    └─────────────────────┘               │
│                       │                                                  │
│                       │  ✅ Approved        ⚖️ Human Review             │
│                       ▼                                                  │
│              ┌─────────────────────────────────────────────┐             │
│              │           SMART CONTRACTS                   │             │
│              │       Solidity (Hardhat Compiler)           │             │
│  ON-CHAIN    └──────────────────┬──────────────────────────┘             │
│  (Proof)                        │                                        │
│                                 ▼                                        │
│              ┌─────────────────────────────────────────────┐             │
│              │             CELO BLOCKCHAIN                 │             │
│              │   Hash + Metadata + Immutable Timestamp     │             │
│              └─────────────────────────────────────────────┘             │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

| Layer | Responsibility | Why? |
|-------|---------------|------|
| **Off-chain** | Text processing, embedding generation, vector comparison | High speed, zero cost, content privacy |
| **On-chain** | Hash + authorship metadata recording | Immutability, transparency, legal proof |
| **Database** | Full history + vectors for future queries | Persistence and scalability of AI comparisons |

---

## Tech Stack

### Frontend
| Technology | Version | Role |
|-----------|---------|------|
| **Next.js** | 16 | React framework with SSR/SSG |
| **Tailwind CSS** | 4.x | Utility-first styling |
| **Framer Motion** | 12.x | Animations and transitions |
| **Lucide Icons** | Latest | Iconography |
| **viem** | Latest | Lightweight EVM integration for Celo wallet |

### Backend
| Technology | Version | Role |
|-----------|---------|------|
| **FastAPI** | 0.110+ | High-performance async API |
| **Motor** | 3.x | Async MongoDB driver |
| **Python** | 3.10+ | Primary backend language |

### AI / ML
| Technology | Role |
|-----------|------|
| **Local Embeddings** | Semantic vector generation from content (nomic-embed-text) |
| **Cosine Similarity** | Mathematical comparison between works |
| **Curation Pipeline** | Intelligent Human-in-the-Loop routing |

### Web3 / Smart Contracts
| Technology | Role |
|-----------|------|
| **Celo** | Primary blockchain network (Mainnet / Alfajores) |
| **Hardhat** | Smart contract compiler, test suite and deploy framework |
| **Solidity** | Smart contract language (`0.8.20`) |
| **viem** | Client side contract interaction interface |

---

## Registration Flow — Step by Step

```
  1. SUBMISSION         2. AI ANALYSIS        3. DECISION
  ─────────────         ──────────────        ─────────────
  User uploads          Backend generates     Score < threshold?
  work via        ───▶  embeddings and  ───▶  ✅ Approved
  frontend              compares to DB                │
                                                      ▼
                        Score > threshold?    4. REGISTRATION
                        ⚖️ Human        ───▶  Hash recorded
                           Curation           on Celo Blockchain
                              │               via Smart Contract
                              ▼
                        Admin decides:   5. CERTIFICATE
                        ✅ Approve  ───▶  User receives
                        ❌ Reject        digital certificate
                                         with Celo TX hash
```

---

## Quick Start

The fastest way to run IntelliChain IP locally. A single script launches **all services** simultaneously.

### Prerequisites

Before you begin, make sure you have installed:

- [Node.js](https://nodejs.org) `18+` (running in WSL/Linux)
- [Python](https://python.org) `3.10+`
- [Docker & Docker-Compose](https://docs.docker.com/) (for MongoDB container)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Falc01/IntelliChain_IP_celo.git
cd IntelliChain_IP_celo

# 2. Install Frontend dependencies
cd frontend && npm install && cd ..

# 3. Install Backend dependencies
cd backend && pip install -r requirements.txt && cd ..

# 4. Install Contracts dependencies
cd contracts && npm install && cd ..
```

### Full Startup

```bash
# Make the script executable and run it
chmod +x start.sh
./start.sh
```

Once initialized, access: **[http://localhost:3000](http://localhost:3000)**

---

## Manual Setup

### Backend (FastAPI)

```bash
cd backend
./venv/bin/python -m uvicorn app.main:app --reload
```

> API available at: `http://localhost:8000`
> Swagger docs: `http://localhost:8000/docs`

### Frontend (Next.js)

```bash
cd frontend
npm run dev
```

> Interface available at: `http://localhost:3000`

### Blockchain / Smart Contracts (Hardhat)

```bash
cd contracts

# Compile Solidity contracts
npx hardhat compile

# Run smart contract tests
npx hardhat test

# Deploy to Celo Mainnet (needs PRIVATE_KEY inside contracts/.env)
npx hardhat run scripts/deploy.js --network mainnet
```

---

## Environment Variables

Create a `.env` file inside `/contracts` with the following:

```env
PRIVATE_KEY=0x...   # Private key of your deployer wallet containing CELO
```

Create a `.env` file inside `/backend` with:

```env
MONGO_URL=mongodb://localhost:27017
OLLAMA_MODEL=nomic-embed-text
PORT=8000
```

---

## Roadmap

```
PHASE 1 — MVP (Current) ✅
├── AI-powered originality verification (Embeddings)
├── Immutable registration on Celo Mainnet (Solidity)
├── Human-in-the-Loop curation flow
├── Pay-to-Audit with immediate Celo TX hash
└── Next.js UI with Framer Motion

PHASE 2 — Expansion 🔄
├── Support for multiple formats (PDF, image, audio)
├── Decentralized storage with IPFS
├── Public documented API for third-party integrations
└── Analytics dashboard for creators

PHASE 3 — Scale 🌐
├── Advanced licensing marketplace
├── Compliance with international IP regulations
└── Mobile app (React Native / MiniPay integration)
```

---

## License

Distributed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.
