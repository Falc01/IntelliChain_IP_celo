export const dictionary = {
  pt: {
    navbar: {
      home: "Início",
      register: "Registrar IP",
      docs: "Documentação",
      admin: "Admin",
      connect: "Conectar Carteira",
    },
    hero: {
      title1: "Proteja sua Propriedade Intelectual com",
      title2: "IA e Solana",
      subtitle: "Registro imutável na blockchain, garantido por análise vetorial avançada contra plágios.",
      cta: "Registrar Agora",
    },
    form: {
      title: "Novo Registro de IP",
      subtitle: "Preencha os dados da sua criação para análise.",
      labelTitle: "Título da Obra",
      placeholderTitle: "Ex: Algoritmo de Compressão X",
      labelContent: "Conteúdo Técnico ou Resumo",
      placeholderContent: "Descreva os detalhes técnicos da sua obra...",
      btnAnalyze: "Analisar Originalidade",
      btnRegister: "Registrar na Solana (Pagar)",
      msgConnect: "Conecte sua carteira Solana para poder realizar o registro definitivo na blockchain.",
      status: {
        idle: "Aguardando",
        analyzing: "Analisando IA...",
        approved: "Aprovado (Único)",
        pending: "Alta Similaridade (Auditoria)",
        registering: "Registrando na Blockchain...",
        success: "Registrado com Sucesso!",
        error: "Erro na Análise/Transação",
      },
      similarityResult: "Similaridade Detectada:",
      uniqueBadge: "Inédito",
    },
    admin: {
      title: "Painel de Curadoria",
      subtitle: "Auditoria de registros com alta similaridade detectada por IA.",
      loading: "Sincronizando com o banco de dados...",
      empty: "Tudo limpo! Não há solicitações pendentes no momento.",
      btnApprove: "Aprovar",
      btnReject: "Rejeitar",
      restrictedTitle: "Acesso Restrito",
      restrictedDesc1: "Sua carteira não possui permissões administrativas para acessar este painel.",
      restrictedDesc2: "Conecte sua carteira de administrador para gerenciar pendências.",
    }
  },
  en: {
    navbar: {
      home: "Home",
      register: "Register IP",
      docs: "Docs",
      admin: "Admin",
      connect: "Connect Wallet",
    },
    hero: {
      title1: "Protect your Intellectual Property with",
      title2: "AI & Solana",
      subtitle: "Immutable blockchain registration, secured by advanced vector analysis against plagiarism.",
      cta: "Register Now",
    },
    form: {
      title: "New IP Registration",
      subtitle: "Fill in the details of your creation for analysis.",
      labelTitle: "Work Title",
      placeholderTitle: "e.g., Compression Algorithm X",
      labelContent: "Technical Content or Abstract",
      placeholderContent: "Describe the technical details of your work...",
      btnAnalyze: "Analyze Originality",
      btnRegister: "Register on Solana (Pay)",
      msgConnect: "Connect your Solana wallet to definitively register on the blockchain.",
      status: {
        idle: "Waiting",
        analyzing: "AI Analyzing...",
        approved: "Approved (Unique)",
        pending: "High Similarity (Audit Required)",
        registering: "Registering on Blockchain...",
        success: "Successfully Registered!",
        error: "Analysis/Transaction Error",
      },
      similarityResult: "Similarity Detected:",
      uniqueBadge: "Original",
    },
    admin: {
      title: "Curation Dashboard",
      subtitle: "Auditing registrations with high similarity detected by AI.",
      loading: "Syncing with database...",
      empty: "All clear! No pending requests at the moment.",
      btnApprove: "Approve",
      btnReject: "Reject",
      restrictedTitle: "Restricted Access",
      restrictedDesc1: "Your wallet does not have administrative permissions to access this dashboard.",
      restrictedDesc2: "Connect your administrator wallet to manage pending requests.",
    }
  }
};

export type Language = 'pt' | 'en';
export type Dictionary = typeof dictionary.pt;
