<div align="center">

```
██╗███╗   ██╗████████╗███████╗██╗     ██╗      ██████╗██╗  ██╗ █████╗ ██╗███╗   ██╗    ██╗██████╗ 
██║████╗  ██║╚══██╔══╝██╔════╝██║     ██║     ██╔════╝██║  ██║██╔══██╗██║████╗  ██║    ██║██╔══██╗
██║██╔██╗ ██║   ██║   █████╗  ██║     ██║     ██║     ███████║███████║██║██╔██╗ ██║    ██║██████╔╝
██║██║╚██╗██║   ██║   ██╔══╝  ██║     ██║     ██║     ██╔══██║██╔══██║██║██║╚██╗██║    ██║██╔═══╝ 
██║██║ ╚████║   ██║   ███████╗███████╗███████╗╚██████╗██║  ██║██║  ██║██║██║ ╚████║    ██║██║     
╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚══════╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝    ╚═╝╚═╝     
```

### **Intellectual Property Protection with AI + Solana Blockchain**
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

**IntelliChain IP** is a next-generation platform for registering and protecting **Intellectual Property (IP)** built on the **Solana** blockchain. The project was born from a real need: the traditional system for registering works and patents is slow, expensive, bureaucratic, and — above all — **does not verify whether the content already exists**.

Our solution addresses this with a powerful hybrid architecture that combines **local Artificial Intelligence** for semantic originality analysis with the immutable power of **Anchor Smart Contracts on Solana** for permanent, tamper-proof registration.

The result? A system that **does not merely register** — it **guarantees** that what is being registered is genuinely original.

<br/>

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   TRADITIONAL REGISTRY          INTELLICHAIN IP              │
│   ─────────────────────         ────────────────────────     │
│   ✗ Months of waiting    →      ✅ Registered in minutes    │
│   ✗ No originality check →      ✅ AI validates content     │
│   ✗ Expensive & slow     →      ✅ Minimal cost (Solana)    │
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

### Immutable Registration on Solana
IPs approved by the AI analysis are registered on-chain via **Anchor Smart Contracts**. The cryptographic hash of the content and authorship metadata are recorded with a permanent, immutable timestamp, generating **irrefutable proof of prior art**.

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
High-fidelity UI built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons** — with full focus on user experience and interaction fluidity.

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
│  │             │    │          Next.js 14 + Tailwind                │    │
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
│  OFF-CHAIN   │  Semantic      │    │  Metadata + Vectors │               │
│  (Analysis)  │  Embeddings    │    │  of Similarity      │               │
│              └────────┬───────┘    └─────────────────────┘               │
│                       │                                                  │
│                       │  ✅ Approved        ⚖️ Human Review             │
│                       ▼                                                  │
│              ┌─────────────────────────────────────────────┐             │
│              │           SMART CONTRACTS                   │             │
│  ON-CHAIN    │          Anchor Framework                    │            │
│  (Proof)     └──────────────────┬──────────────────────────┘             │
│                                 │                                        │
│                                 ▼                                        │
│              ┌─────────────────────────────────────────────┐             │
│              │            SOLANA BLOCKCHAIN                │             │
│              │     Hash + Metadata + Immutable Timestamp   │             │
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
| **Next.js** | 14 | React framework with SSR/SSG |
| **Tailwind CSS** | 3.x | Utility-first styling |
| **Framer Motion** | Latest | Animations and transitions |
| **Lucide Icons** | Latest | Iconography |
| **@solana/web3.js** | Latest | Solana wallet integration |

### Backend
| Technology | Version | Role |
|-----------|---------|------|
| **FastAPI** | 0.110+ | High-performance async API |
| **Motor** | 3.x | Async MongoDB driver |
| **Python** | 3.10+ | Primary backend language |

### AI / ML
| Technology | Role |
|-----------|------|
| **Local Embeddings** | Semantic vector generation from content |
| **Cosine Similarity** | Mathematical comparison between works |
| **Curation Pipeline** | Intelligent Human-in-the-Loop routing |

### Web3 / Blockchain
| Technology | Role |
|-----------|------|
| **Solana** | Primary blockchain network |
| **Anchor Framework** | Smart contract development |
| **@solana/web3.js** | Frontend/blockchain integration SDK |

### Database & Infrastructure
| Technology | Role |
|-----------|------|
| **MongoDB** | Metadata and vector persistence |
| **IPFS** *(planned)* | Decentralized document storage |

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
                           Curation           on Solana via
                              │               Anchor + timestamp
                              ▼
                        Admin decides:   5. CERTIFICATE
                        ✅ Approve  ───▶  User receives
                        ❌ Reject        digital certificate
                                         with TX hash
```

---

## Quick Start

The fastest way to run IntelliChain IP locally. A single script launches **all services** simultaneously.

### Prerequisites

Before you begin, make sure you have installed:

- [Node.js](https://nodejs.org) `18+`
- [Python](https://python.org) `3.10+`
- [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools)
- [Anchor CLI](https://www.anchor-lang.com/docs/installation)
- [MongoDB](https://www.mongodb.com/try/download/community) `(running locally)`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/intellichain-ip.git
cd intellichain-ip

# 2. Install Frontend dependencies
cd frontend && npm install && cd ..

# 3. Install Backend dependencies
cd backend && pip install -r requirements.txt && cd ..
```

### Full Startup

```bash
# Make the script executable and run it
chmod +x start.sh
./start.sh
```

The `start.sh` script will, in order:

- ✅ Start the **local Solana validator** (`solana-test-validator`)
- ✅ **Deploy the Smart Contracts** via Anchor
- ✅ Launch the **FastAPI server** (Backend)
- ✅ Start the **Next.js** development server (Frontend)

> ⚠️ **Warning**: Make sure **MongoDB is running** on your machine before executing the script.

Once initialized, access: **[http://localhost:3000](http://localhost:3000)**

---

## Manual Setup

Prefer to run each service individually? No problem.

### Backend (FastAPI)

```bash
cd backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

> API available at: `http://localhost:8000`
> Swagger docs: `http://localhost:8000/docs`

### Frontend (Next.js)

```bash
cd frontend
npm run dev
```

> Interface available at: `http://localhost:3000`

### Blockchain (Local Solana)

```bash
# Terminal 1 — Start the local validator
solana-test-validator

# Terminal 2 — Build and deploy contracts
anchor build
anchor deploy
```

---

## Environment Variables

Create a `.env` file inside the `/backend` folder with the following variables:

```env
# ── Database ────────────────────────────────────────────
MONGODB_URI=mongodb://localhost:27017/intellichain

# ── Blockchain ──────────────────────────────────────────
SOLANA_NETWORK=http://127.0.0.1:8899
SOLANA_KEYPAIR_PATH=~/.config/solana/id.json

# ── AI / ML ─────────────────────────────────────────────
EMBEDDING_MODEL=local
SIMILARITY_THRESHOLD=0.85        # Threshold for automatic approval
REVIEW_THRESHOLD=0.70            # Threshold for human curation routing

# ── API ─────────────────────────────────────────────────
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=true
```

---

## Documentation

The project includes a **dedicated technical documentation page integrated into the frontend**, accessible at `/docs`, covering:

- Complete breakdown of each step in the registration process
- Criteria and thresholds used by the AI analysis
- REST API reference (endpoints, payloads, responses)
- Integration guide via open API for developers
- Explanation of the Human-in-the-Loop curation model

> **Swagger UI** (Backend): `http://localhost:8000/docs`
> **ReDoc** (Backend): `http://localhost:8000/redoc`

---

## Team

This project was built by a team passionate about technology, innovation, and real-world impact.

| Name | Role |
|------|------|
| **Everton Santos** | Tech Leader — Architecture, technical strategy, and product vision |
| **JoaoF (Falc01)** | Full-Stack Developer — AI + Web3 integration, Backend and Frontend |

> Built as a **Hackathon project** and **PoC (Proof of Concept)** for advanced AI + Web3 integration.

---

## Roadmap

```
PHASE 1 — MVP (Current) ✅
├── AI-powered originality verification (Embeddings)
├── Immutable registration on Solana (Anchor)
├── Human-in-the-Loop curation flow
├── Pay-to-Audit with immediate TX hash
└── Next.js UI with Framer Motion

PHASE 2 — Expansion 🔄
├── Support for multiple formats (PDF, image, audio)
├── Decentralized storage with IPFS
├── Public documented API for third-party integrations
└── Analytics dashboard for creators

PHASE 3 — Scale 🌐
├── Deploy to Solana Mainnet
├── Licensing marketplace with Smart Contracts
├── Compliance with international IP regulations
└── Mobile app (React Native)
```

---

## License

Distributed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

<div align="center">

<br/>

**IntelliChain IP** — *Built with purpose. Recorded forever.*

<br/>

*"Changing the world through technology and sustainability."*

</div>
