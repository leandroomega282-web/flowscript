// ===========================================================================
// METADADOS DAS TAREFAS — categoria, ícone, descrição, parâmetros.
// ===========================================================================

const TASK_META = {
    "create-user": {
        label: "Criar Usuário",
        category: "Sistema",
        description: "Cria uma conta local de usuário com senha e privilégios opcionais.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`
    },
    "clear-cache": {
        label: "Limpar Cache",
        category: "Manutenção",
        description: "Remove arquivos temporários, cache de navegadores e cache DNS.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>`
    },
    "reset-network": {
        label: "Resetar Rede",
        category: "Rede",
        description: "Reinicia configurações de rede, DNS e renova endereço IP.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
    },
    "backup": {
        label: "Backup",
        category: "Manutenção",
        description: "Copia ou comprime uma pasta para um destino com timestamp.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`
    },
    "generate-password": {
        label: "Gerar Senha",
        category: "Segurança",
        description: "Gera uma senha aleatória forte com tamanho e regras configuráveis.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
    },
    "system-update": {
        label: "Atualizar Sistema",
        category: "Sistema",
        description: "Atualiza pacotes do sistema operacional (apt/dnf/winget).",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`
    },
    "network-diagnose": {
        label: "Diagnóstico de Rede",
        category: "Rede",
        description: "Executa ping, traceroute e teste de DNS para um destino.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`
    },
    "list-services": {
        label: "Listar Serviços",
        category: "Sistema",
        description: "Lista serviços em execução com status e PID.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`
    },
    "find-large-files": {
        label: "Achar Arquivos Grandes",
        category: "Manutenção",
        description: "Lista os maiores arquivos de uma pasta — útil pra liberar espaço.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
    },
    "install-software": {
        label: "Instalar Software",
        category: "Sistema",
        description: "Instala um ou mais pacotes via gerenciador nativo (winget/apt/dnf).",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`
    },
    "ssh-key": {
        label: "Gerar Chave SSH",
        category: "Segurança",
        description: "Cria um par de chaves SSH (ed25519) com comentário e passphrase opcional.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`
    },
    "system-info": {
        label: "Info do Sistema",
        category: "Sistema",
        description: "Coleta informações de CPU, RAM, disco e rede em um relatório.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
    },
    "list-processes": {
        label: "Listar Processos",
        category: "Sistema",
        description: "Lista processos em execução ordenados por CPU ou memória.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
    },
    "kill-process": {
        label: "Matar Processo",
        category: "Sistema",
        description: "Encerra um processo pelo nome ou PID.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`
    },
    "shutdown": {
        label: "Desligar / Reiniciar",
        category: "Sistema",
        description: "Desliga ou reinicia o computador, opcionalmente agendado.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>`
    },
    "public-ip": {
        label: "IP Público",
        category: "Rede",
        description: "Mostra o IP público da conexão atual.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
    },
    "scan-ports": {
        label: "Verificar Portas",
        category: "Rede",
        description: "Verifica quais portas estão abertas em um host.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
    },
    "file-hash": {
        label: "Hash de Arquivo",
        category: "Segurança",
        description: "Calcula MD5/SHA256 de um arquivo para verificar integridade.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`
    },
    "bulk-rename": {
        label: "Renomear em Lote",
        category: "Arquivos",
        description: "Renomeia múltiplos arquivos com prefixo e numeração.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`
    },
    "sync-folders": {
        label: "Sincronizar Pastas",
        category: "Arquivos",
        description: "Sincroniza arquivos entre duas pastas (espelho ou incremental).",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`
    },
    "firewall": {
        label: "Configurar Firewall",
        category: "Segurança",
        description: "Abre ou bloqueia portas no firewall do sistema.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
    },
    "monitor-system": {
        label: "Monitorar Sistema",
        category: "Sistema",
        description: "Mostra uso de CPU, RAM e top processos em tempo real.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`
    },
    "scheduled-task": {
        label: "Tarefa Agendada",
        category: "Sistema",
        description: "Cria uma tarefa que roda em horário ou intervalo definido.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="12 14 12 17 14 17"/></svg>`
    },
    "configure-dns": {
        label: "Configurar DNS",
        category: "Rede",
        description: "Define servidores DNS personalizados (ou volta pro automático).",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/></svg>`
    },
    "activate-license": {
        label: "Ativar Windows/Office",
        category: "Sistema",
        description: "Ativa Windows ou Office com chave de produto, ou consulta status (Windows-only).",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
    },
    "archive": {
        label: "Compactar/Descompactar",
        category: "Arquivos",
        description: "Cria arquivo .zip/.tar.gz ou extrai um arquivo compactado existente.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`
    },
    "search-text": {
        label: "Buscar Texto",
        category: "Arquivos",
        description: "Procura uma palavra ou expressão em todos os arquivos de uma pasta.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="11.5" cy="14.5" r="2.5"/><line x1="13.5" y1="16.5" x2="15.5" y2="18.5"/></svg>`
    },
    "env-vars": {
        label: "Variáveis de Ambiente",
        category: "Sistema",
        description: "Lista, adiciona ou remove variáveis de ambiente (do usuário ou sistema).",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`
    }
};

// Definição dos parâmetros que cada tarefa precisa coletar do usuário.
const TASK_PARAMS = {
    "create-user": [
        { name: "username", label: "Nome de usuário", type: "text", default: "novousuario",
          validate: (v) => /^[a-zA-Z][a-zA-Z0-9_-]{1,31}$/.test(v) || "Use letras, números, _ ou - (começa com letra)." },
        { name: "password", label: "Senha", type: "text", default: "TrocarSenha@123",
          hint: "Senha inicial — o usuário deve trocar no primeiro login." },
        { name: "fullname", label: "Nome completo", type: "text", default: "Novo Usuário" },
        { name: "admin", label: "Privilégios", type: "select",
          options: [{ value: "no", label: "Usuário comum" }, { value: "yes", label: "Administrador" }], default: "no" }
    ],
    "clear-cache": [
        { name: "scope", label: "Escopo", type: "select",
          options: [
              { value: "temp", label: "Apenas arquivos temporários" },
              { value: "browser", label: "Cache de navegadores" },
              { value: "all", label: "Tudo (temp + navegadores + DNS + pacotes)" }
          ], default: "all" }
    ],
    "reset-network": [
        { name: "mode", label: "Modo", type: "select",
          options: [
              { value: "flush", label: "Apenas flush DNS" },
              { value: "full", label: "Reset completo (IP, DNS, Winsock/iptables)" }
          ], default: "full" }
    ],
    "backup": [
        { name: "source", label: "Pasta de origem", type: "text", default: "C:\\Dados" },
        { name: "destination", label: "Pasta de destino", type: "text", default: "D:\\Backup" },
        { name: "compress", label: "Comprimir", type: "select",
          options: [{ value: "yes", label: "Sim (ZIP/tar.gz)" }, { value: "no", label: "Não (cópia)" }], default: "yes" }
    ],
    "generate-password": [
        { name: "length", label: "Tamanho", type: "number", default: "16",
          validate: (v) => (+v >= 4 && +v <= 128) || "Use entre 4 e 128 caracteres." },
        { name: "symbols", label: "Incluir símbolos", type: "select",
          options: [{ value: "yes", label: "Sim (!@#$...)" }, { value: "no", label: "Não" }], default: "yes" },
        { name: "count", label: "Quantidade de senhas", type: "number", default: "1",
          validate: (v) => (+v >= 1 && +v <= 50) || "Entre 1 e 50." }
    ],
    "system-update": [
        { name: "autoremove", label: "Remover pacotes obsoletos", type: "select",
          options: [{ value: "yes", label: "Sim" }, { value: "no", label: "Não" }], default: "yes" },
        { name: "reboot", label: "Reiniciar se necessário", type: "select",
          options: [{ value: "no", label: "Não, só avisar" }, { value: "yes", label: "Sim, reiniciar" }], default: "no" }
    ],
    "network-diagnose": [
        { name: "target", label: "Destino (host/IP)", type: "text", default: "google.com" },
        { name: "count", label: "Pings", type: "number", default: "4",
          validate: (v) => (+v >= 1 && +v <= 100) || "Entre 1 e 100." }
    ],
    "list-services": [
        { name: "filter", label: "Filtrar por estado", type: "select",
          options: [
              { value: "running", label: "Em execução" },
              { value: "stopped", label: "Parados" },
              { value: "all", label: "Todos" }
          ], default: "running" }
    ],
    "find-large-files": [
        { name: "path", label: "Pasta para buscar", type: "text", default: "C:\\" },
        { name: "top", label: "Top N maiores", type: "number", default: "20",
          validate: (v) => (+v >= 1 && +v <= 1000) || "Entre 1 e 1000." }
    ],
    "install-software": [
        { name: "selectedSoftware", label: "Selecione os programas", type: "software-picker", default: [] },
        { name: "customPackages", label: "Outros pacotes (opcional)", type: "text", default: "",
          hint: "Pra programas fora do catálogo. IDs separados por espaço." },
        { name: "update_first", label: "Atualizar índice antes", type: "select",
          options: [{ value: "yes", label: "Sim" }, { value: "no", label: "Não" }], default: "yes" }
    ],
    "ssh-key": [
        { name: "comment", label: "Comentário (geralmente seu e-mail)", type: "text", default: "usuario@exemplo.com" },
        { name: "filename", label: "Nome do arquivo da chave", type: "text", default: "id_ed25519" },
        { name: "passphrase", label: "Definir passphrase", type: "select",
          options: [{ value: "no", label: "Não (sem senha)" }, { value: "yes", label: "Sim (vai pedir interativamente)" }], default: "no" }
    ],
    "system-info": [
        { name: "format", label: "Formato de saída", type: "select",
          options: [
              { value: "text", label: "Texto (terminal)" },
              { value: "file", label: "Salvar em arquivo .txt" }
          ], default: "text" }
    ],
    "list-processes": [
        { name: "sort", label: "Ordenar por", type: "select",
          options: [
              { value: "cpu", label: "Uso de CPU" },
              { value: "memory", label: "Uso de memória" },
              { value: "name", label: "Nome" }
          ], default: "cpu" },
        { name: "top", label: "Mostrar top N", type: "number", default: "20",
          validate: (v) => (+v >= 1 && +v <= 500) || "Entre 1 e 500." }
    ],
    "kill-process": [
        { name: "identifier", label: "Nome ou PID do processo", type: "text", default: "notepad.exe",
          hint: "Use o nome (notepad.exe) ou o PID numérico." },
        { name: "force", label: "Forçar encerramento", type: "select",
          options: [{ value: "no", label: "Não (pedir educadamente)" }, { value: "yes", label: "Sim (matar)" }], default: "yes" }
    ],
    "shutdown": [
        { name: "action", label: "Ação", type: "select",
          options: [{ value: "shutdown", label: "Desligar" }, { value: "restart", label: "Reiniciar" }, { value: "logoff", label: "Encerrar sessão" }], default: "shutdown" },
        { name: "delay", label: "Atraso (segundos)", type: "number", default: "60",
          validate: (v) => (+v >= 0 && +v <= 86400) || "Entre 0 e 86400." },
        { name: "message", label: "Mensagem ao usuário", type: "text", default: "O computador vai desligar em breve. Salve seus trabalhos." }
    ],
    "public-ip": [
        { name: "service", label: "Serviço de detecção", type: "select",
          options: [
              { value: "ifconfig.me", label: "ifconfig.me" },
              { value: "ipify.org", label: "api.ipify.org" },
              { value: "icanhazip.com", label: "icanhazip.com" }
          ], default: "ifconfig.me" }
    ],
    "scan-ports": [
        { name: "host", label: "Host (IP ou domínio)", type: "text", default: "localhost" },
        { name: "ports", label: "Portas para testar", type: "text", default: "21,22,80,443,3306,3389,5432,8080",
          hint: "Separadas por vírgula. Ex: 80,443,22" },
        { name: "timeout", label: "Timeout por porta (ms)", type: "number", default: "1000",
          validate: (v) => (+v >= 100 && +v <= 10000) || "Entre 100 e 10000." }
    ],
    "file-hash": [
        { name: "file", label: "Caminho do arquivo", type: "text", default: "C:\\caminho\\arquivo.zip" },
        { name: "algorithm", label: "Algoritmo", type: "select",
          options: [
              { value: "MD5",    label: "MD5 (rápido, fraco)" },
              { value: "SHA1",   label: "SHA1 (legacy)" },
              { value: "SHA256", label: "SHA256 (recomendado)" },
              { value: "SHA512", label: "SHA512 (mais forte)" }
          ], default: "SHA256" }
    ],
    "bulk-rename": [
        { name: "folder", label: "Pasta com os arquivos", type: "text", default: "C:\\Fotos" },
        { name: "extension", label: "Extensão dos arquivos", type: "text", default: ".jpg",
          hint: "Ex: .jpg, .png, .mp3 — ou * para todos." },
        { name: "prefix", label: "Novo prefixo do nome", type: "text", default: "foto" },
        { name: "padding", label: "Dígitos de numeração", type: "number", default: "3",
          validate: (v) => (+v >= 1 && +v <= 8) || "Entre 1 e 8.",
          hint: "Ex: 3 dígitos → 001, 002, 003..." },
        { name: "preview", label: "Modo", type: "select",
          options: [{ value: "yes", label: "Pré-visualizar (não renomeia)" }, { value: "no", label: "Renomear de verdade" }], default: "yes" }
    ],
    "sync-folders": [
        { name: "source", label: "Pasta de origem", type: "text", default: "C:\\Documentos" },
        { name: "destination", label: "Pasta de destino", type: "text", default: "D:\\Backup\\Documentos" },
        { name: "mode", label: "Modo", type: "select",
          options: [
              { value: "incremental", label: "Incremental (só copia novos/alterados)" },
              { value: "mirror", label: "Espelho (apaga no destino o que não existe na origem)" }
          ], default: "incremental" },
        { name: "dryRun", label: "Simulação", type: "select",
          options: [{ value: "yes", label: "Sim (só mostra o que faria)" }, { value: "no", label: "Não (executa)" }], default: "yes" }
    ],
    "firewall": [
        { name: "action", label: "Ação", type: "select",
          options: [
              { value: "allow", label: "Permitir porta" },
              { value: "block", label: "Bloquear porta" },
              { value: "enable", label: "Habilitar firewall" },
              { value: "disable", label: "Desabilitar firewall" }
          ], default: "allow" },
        { name: "port", label: "Porta (só pra permitir/bloquear)", type: "number", default: "8080" },
        { name: "protocol", label: "Protocolo", type: "select",
          options: [
              { value: "TCP", label: "TCP" },
              { value: "UDP", label: "UDP" },
              { value: "Both", label: "Ambos" }
          ], default: "TCP" },
        { name: "rule_name", label: "Nome da regra", type: "text", default: "MinhaRegra" }
    ],
    "monitor-system": [
        { name: "interval", label: "Intervalo (segundos)", type: "number", default: "2",
          validate: (v) => (+v >= 1 && +v <= 60) || "Entre 1 e 60." },
        { name: "duration", label: "Duração total (segundos, 0 = infinito)", type: "number", default: "0",
          validate: (v) => (+v >= 0 && +v <= 86400) || "Entre 0 e 86400." },
        { name: "top", label: "Top N processos", type: "number", default: "5",
          validate: (v) => (+v >= 1 && +v <= 50) || "Entre 1 e 50." }
    ],
    "scheduled-task": [
        { name: "name", label: "Nome da tarefa", type: "text", default: "MinhaTarefa" },
        { name: "command", label: "Comando ou caminho do script", type: "text", default: "C:\\Scripts\\meu-script.ps1" },
        { name: "schedule", label: "Quando executar", type: "select",
          options: [
              { value: "daily", label: "Diariamente" },
              { value: "weekly", label: "Semanalmente" },
              { value: "hourly", label: "A cada hora" },
              { value: "onstart", label: "Ao iniciar o sistema" },
              { value: "onlogon", label: "Ao fazer login" }
          ], default: "daily" },
        { name: "time", label: "Horário (HH:MM, pra diário/semanal)", type: "text", default: "09:00" }
    ],
    "configure-dns": [
        { name: "action", label: "Ação", type: "select",
          options: [
              { value: "set", label: "Definir DNS personalizado" },
              { value: "reset", label: "Voltar pro automático (DHCP)" }
          ], default: "set" },
        { name: "preset", label: "Predefinição rápida", type: "select",
          options: [
              { value: "custom",       label: "Personalizado (use os campos abaixo)" },
              { value: "google",       label: "Google (8.8.8.8 / 8.8.4.4)" },
              { value: "cloudflare",   label: "Cloudflare (1.1.1.1 / 1.0.0.1)" },
              { value: "quad9",        label: "Quad9 (9.9.9.9 / 149.112.112.112)" },
              { value: "opendns",      label: "OpenDNS (208.67.222.222 / 208.67.220.220)" }
          ], default: "cloudflare" },
        { name: "primary", label: "DNS primário", type: "text", default: "1.1.1.1" },
        { name: "secondary", label: "DNS secundário", type: "text", default: "1.0.0.1" }
    ],
    "activate-license": [
        { name: "action", label: "O que fazer", type: "select",
          options: [
              { value: "windows_status",   label: "Ver status do Windows" },
              { value: "windows_activate", label: "Ativar Windows com chave" },
              { value: "office_status",    label: "Ver status do Office" },
              { value: "office_activate",  label: "Ativar Office com chave" }
          ], default: "windows_status" },
        { name: "key", label: "Chave de produto", type: "text", default: "",
          hint: "Formato: XXXXX-XXXXX-XXXXX-XXXXX-XXXXX. Deixe vazio para só consultar status.",
          validate: (v) => {
              if (!v || !v.trim()) return true;
              return /^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}$/i.test(v.trim())
                  || "Use o formato XXXXX-XXXXX-XXXXX-XXXXX-XXXXX (5 grupos de 5).";
          } }
    ],
    "archive": [
        { name: "action", label: "Ação", type: "select",
          options: [
              { value: "compress",   label: "Compactar (criar arquivo)" },
              { value: "extract",    label: "Descompactar (extrair arquivo)" }
          ], default: "compress" },
        { name: "source", label: "Origem (pasta para compactar, ou arquivo .zip para extrair)",
          type: "text", default: "C:\\Pasta" },
        { name: "destination", label: "Destino", type: "text", default: "C:\\saida.zip",
          hint: "Compactar: caminho do arquivo .zip de saída. Extrair: pasta destino." },
        { name: "format", label: "Formato (só para compactar)", type: "select",
          options: [
              { value: "zip",    label: "ZIP (universal)" },
              { value: "tar.gz", label: "tar.gz (Linux nativo)" }
          ], default: "zip" }
    ],
    "search-text": [
        { name: "folder", label: "Pasta onde procurar", type: "text", default: "C:\\Projetos" },
        { name: "pattern", label: "Texto ou expressão", type: "text", default: "TODO" },
        { name: "extension", label: "Filtrar por extensão (* para tudo)", type: "text", default: "*",
          hint: "Ex: .js, .py, .txt — ou * para procurar em todos." },
        { name: "caseSensitive", label: "Diferenciar maiúsculas", type: "select",
          options: [{ value: "no", label: "Não" }, { value: "yes", label: "Sim" }], default: "no" },
        { name: "showLines", label: "Mostrar números de linha", type: "select",
          options: [{ value: "yes", label: "Sim" }, { value: "no", label: "Não" }], default: "yes" }
    ],
    "env-vars": [
        { name: "action", label: "Ação", type: "select",
          options: [
              { value: "list",   label: "Listar todas" },
              { value: "set",    label: "Adicionar/atualizar" },
              { value: "remove", label: "Remover" }
          ], default: "list" },
        { name: "scope", label: "Escopo", type: "select",
          options: [
              { value: "user",    label: "Usuário (sem admin)" },
              { value: "system",  label: "Sistema (exige admin)" }
          ], default: "user" },
        { name: "name", label: "Nome da variável", type: "text", default: "MINHA_VAR",
          hint: "Não preenche pra listar todas." },
        { name: "value", label: "Valor (só para adicionar)", type: "text", default: "valor-aqui" }
    ]
};

// ===========================================================================
// TEMPLATES — geradores de script por tarefa e linguagem.
// ===========================================================================

const TEMPLATES = {
    "create-user": {
        powershell: (p) => `# Cria um novo usuário local no Windows.
# Execute como Administrador.

$ErrorActionPreference = "Stop"

$Username = "${p.username}"
$Password = ConvertTo-SecureString "${p.password}" -AsPlainText -Force
$FullName = "${p.fullname || p.username}"

if (Get-LocalUser -Name $Username -ErrorAction SilentlyContinue) {
    Write-Host "Usuário '$Username' já existe." -ForegroundColor Yellow
    exit 1
}

New-LocalUser -Name $Username \`
              -Password $Password \`
              -FullName $FullName \`
              -Description "Criado em $(Get-Date -Format 'yyyy-MM-dd')"

Write-Host "Usuário '$Username' criado." -ForegroundColor Green

${p.admin === "yes" ? `Add-LocalGroupMember -Group "Administradores" -Member $Username
Write-Host "Adicionado ao grupo Administradores." -ForegroundColor Green` :
`Add-LocalGroupMember -Group "Usuários" -Member $Username
Write-Host "Adicionado ao grupo Usuários." -ForegroundColor Green`}
`,
        bash: (p) => `#!/bin/bash
# Cria um novo usuário no Linux.
# Execute como root (sudo).

set -e

USERNAME="${p.username}"
PASSWORD="${p.password}"
FULLNAME="${p.fullname || p.username}"

if [ "$EUID" -ne 0 ]; then
    echo "Este script precisa ser executado como root." >&2
    exit 1
fi

if id "$USERNAME" &>/dev/null; then
    echo "Usuário '$USERNAME' já existe." >&2
    exit 1
fi

useradd -m -s /bin/bash -c "$FULLNAME" "$USERNAME"
echo "$USERNAME:$PASSWORD" | chpasswd

${p.admin === "yes" ? `if getent group sudo >/dev/null; then
    usermod -aG sudo "$USERNAME"
elif getent group wheel >/dev/null; then
    usermod -aG wheel "$USERNAME"
fi
echo "Usuário '$USERNAME' criado com privilégios de administrador."` :
`echo "Usuário '$USERNAME' criado."`}

chage -d 0 "$USERNAME"
`,
        python: (p) => `#!/usr/bin/env python3
"""Cria um novo usuário no sistema operacional atual (Windows ou Linux)."""

import platform
import subprocess
import sys

USERNAME = "${p.username}"
PASSWORD = "${p.password}"
FULLNAME = "${p.fullname || p.username}"
ADMIN = ${p.admin === "yes" ? "True" : "False"}


def run(cmd):
    print(f"$ {' '.join(cmd) if isinstance(cmd, list) else cmd}")
    return subprocess.run(cmd, check=True, shell=isinstance(cmd, str))


def create_windows():
    run(["net", "user", USERNAME, PASSWORD, "/add", f"/fullname:{FULLNAME}"])
    group = "Administradores" if ADMIN else "Usuários"
    run(["net", "localgroup", group, USERNAME, "/add"])


def create_linux():
    run(["useradd", "-m", "-s", "/bin/bash", "-c", FULLNAME, USERNAME])
    subprocess.run(["chpasswd"], input=f"{USERNAME}:{PASSWORD}", text=True, check=True)
    if ADMIN:
        for group in ("sudo", "wheel"):
            if subprocess.run(["getent", "group", group], capture_output=True).returncode == 0:
                run(["usermod", "-aG", group, USERNAME])
                break


def main():
    system = platform.system()
    print(f"Criando usuário '{USERNAME}' em {system}...")
    try:
        if system == "Windows":
            create_windows()
        elif system == "Linux":
            create_linux()
        else:
            sys.exit(f"Sistema não suportado: {system}")
        print(f"Usuário '{USERNAME}' criado com sucesso.")
    except subprocess.CalledProcessError as e:
        sys.exit(f"Erro: {e}")


if __name__ == "__main__":
    main()
`
    },

    "clear-cache": {
        powershell: (p) => {
            const blocks = [`# Limpa cache do sistema. Execute como Administrador.

$ErrorActionPreference = "Continue"

function Remove-PathSafely($path) {
    if (Test-Path $path) {
        try {
            Get-ChildItem -Path $path -Recurse -Force -ErrorAction SilentlyContinue |
                Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
            Write-Host "Limpo: $path" -ForegroundColor Green
        } catch {
            Write-Host "Parcial: $path" -ForegroundColor Yellow
        }
    }
}
`];
            if (p.scope === "temp" || p.scope === "all") {
                blocks.push(`Write-Host "\`nLimpando temporários..." -ForegroundColor Cyan
Remove-PathSafely "$env:TEMP"
Remove-PathSafely "C:\\Windows\\Temp"
Remove-PathSafely "C:\\Windows\\Prefetch"`);
            }
            if (p.scope === "browser" || p.scope === "all") {
                blocks.push(`Write-Host "\`nLimpando cache de navegadores..." -ForegroundColor Cyan
Remove-PathSafely "$env:LOCALAPPDATA\\Google\\Chrome\\User Data\\Default\\Cache"
Remove-PathSafely "$env:LOCALAPPDATA\\Microsoft\\Edge\\User Data\\Default\\Cache"
Remove-PathSafely "$env:APPDATA\\Mozilla\\Firefox\\Profiles"`);
            }
            if (p.scope === "all") {
                blocks.push(`Write-Host "\`nLimpando cache DNS..." -ForegroundColor Cyan
ipconfig /flushdns | Out-Null
Write-Host "Cache DNS limpo." -ForegroundColor Green`);
            }
            blocks.push(`Write-Host "\`nConcluído." -ForegroundColor Green`);
            return blocks.join("\n");
        },
        bash: (p) => {
            const blocks = [`#!/bin/bash
# Limpa cache do sistema Linux.
set +e

clean_path() {
    if [ -e "$1" ]; then
        sudo rm -rf "$1"/* 2>/dev/null && echo "Limpo: $1" || echo "Parcial: $1"
    fi
}
`];
            if (p.scope === "temp" || p.scope === "all") {
                blocks.push(`echo ""
echo "Limpando temporários..."
clean_path "/tmp"
clean_path "/var/tmp"
sudo journalctl --vacuum-time=7d 2>/dev/null && echo "Logs do journal antigos removidos."`);
            }
            if (p.scope === "browser" || p.scope === "all") {
                blocks.push(`echo ""
echo "Limpando cache de navegadores..."
clean_path "$HOME/.cache/google-chrome"
clean_path "$HOME/.cache/chromium"
clean_path "$HOME/.cache/mozilla"`);
            }
            if (p.scope === "all") {
                blocks.push(`echo ""
echo "Limpando cache DNS..."
if command -v systemd-resolve >/dev/null; then
    sudo systemd-resolve --flush-caches && echo "Cache DNS limpo."
elif command -v resolvectl >/dev/null; then
    sudo resolvectl flush-caches && echo "Cache DNS limpo."
fi

echo ""
echo "Limpando cache do gerenciador de pacotes..."
if command -v apt-get >/dev/null; then
    sudo apt-get clean
elif command -v dnf >/dev/null; then
    sudo dnf clean all
elif command -v pacman >/dev/null; then
    sudo pacman -Sc --noconfirm
fi`);
            }
            blocks.push(`echo ""
echo "Concluído."`);
            return blocks.join("\n");
        },
        python: (p) => `#!/usr/bin/env python3
"""Limpa cache do sistema (Windows ou Linux)."""

import os
import platform
import shutil
import subprocess
from pathlib import Path

SCOPE = "${p.scope}"


def clean_path(path: Path):
    if not path.exists():
        return
    try:
        for child in path.iterdir():
            if child.is_dir():
                shutil.rmtree(child, ignore_errors=True)
            else:
                try:
                    child.unlink()
                except OSError:
                    pass
        print(f"Limpo: {path}")
    except (PermissionError, OSError) as e:
        print(f"Parcial: {path} ({e})")


def clean_temp():
    print("\\nLimpando temporários...")
    if platform.system() == "Windows":
        for var in ("TEMP", "TMP"):
            if var in os.environ:
                clean_path(Path(os.environ[var]))
        clean_path(Path("C:/Windows/Temp"))
    else:
        clean_path(Path("/tmp"))
        clean_path(Path("/var/tmp"))


def clean_browsers():
    print("\\nLimpando cache de navegadores...")
    home = Path.home()
    if platform.system() == "Windows":
        local = Path(os.environ.get("LOCALAPPDATA", ""))
        clean_path(local / "Google/Chrome/User Data/Default/Cache")
        clean_path(local / "Microsoft/Edge/User Data/Default/Cache")
    else:
        clean_path(home / ".cache/google-chrome")
        clean_path(home / ".cache/chromium")
        clean_path(home / ".cache/mozilla")


def clean_dns():
    print("\\nLimpando cache DNS...")
    if platform.system() == "Windows":
        subprocess.run(["ipconfig", "/flushdns"], check=False)
    else:
        for cmd in (["systemd-resolve", "--flush-caches"],
                    ["resolvectl", "flush-caches"]):
            if shutil.which(cmd[0]):
                subprocess.run(["sudo", *cmd], check=False)
                break


def main():
    print(f"Limpando cache (escopo: {SCOPE}) em {platform.system()}...")
    if SCOPE in ("temp", "all"):
        clean_temp()
    if SCOPE in ("browser", "all"):
        clean_browsers()
    if SCOPE == "all":
        clean_dns()
    print("\\nConcluído.")


if __name__ == "__main__":
    main()
`
    },

    "reset-network": {
        powershell: (p) => p.mode === "flush" ? `# Limpa apenas o cache DNS. Execute como Administrador.

Write-Host "Limpando cache DNS..." -ForegroundColor Cyan
ipconfig /flushdns

Write-Host "Cache DNS limpo." -ForegroundColor Green
` : `# Reset completo de rede no Windows. Execute como Administrador.
# Pode requerer reinicialização ao final.

$ErrorActionPreference = "Continue"

Write-Host "Liberando IP atual..." -ForegroundColor Cyan
ipconfig /release

Write-Host "Limpando cache DNS..." -ForegroundColor Cyan
ipconfig /flushdns

Write-Host "Renovando IP..." -ForegroundColor Cyan
ipconfig /renew

Write-Host "Resetando Winsock..." -ForegroundColor Cyan
netsh winsock reset

Write-Host "Resetando pilha TCP/IP..." -ForegroundColor Cyan
netsh int ip reset

Write-Host "Resetando configurações de proxy..." -ForegroundColor Cyan
netsh winhttp reset proxy

Write-Host "\`nReset completo. Reinicie o computador para aplicar todas as mudanças." -ForegroundColor Yellow
`,
        bash: (p) => p.mode === "flush" ? `#!/bin/bash
# Limpa apenas o cache DNS no Linux.
set +e

echo "Limpando cache DNS..."
if command -v systemd-resolve >/dev/null; then
    sudo systemd-resolve --flush-caches
elif command -v resolvectl >/dev/null; then
    sudo resolvectl flush-caches
elif command -v nscd >/dev/null; then
    sudo service nscd restart
fi

echo "Cache DNS limpo."
` : `#!/bin/bash
# Reset completo de rede no Linux. Requer sudo.
set +e

echo "Identificando interface principal..."
IFACE=$(ip route | awk '/default/ {print $5; exit}')
if [ -z "$IFACE" ]; then
    echo "Nenhuma interface padrão encontrada." >&2
    exit 1
fi
echo "Interface: $IFACE"

echo ""
echo "Desativando interface..."
sudo ip link set "$IFACE" down

echo "Limpando cache DNS..."
if command -v systemd-resolve >/dev/null; then
    sudo systemd-resolve --flush-caches
elif command -v resolvectl >/dev/null; then
    sudo resolvectl flush-caches
fi

echo "Reativando interface..."
sudo ip link set "$IFACE" up

echo "Renovando IP via DHCP..."
sudo dhclient -r "$IFACE" 2>/dev/null
sudo dhclient "$IFACE"

echo ""
echo "Reset de rede concluído."
ip addr show "$IFACE"
`,
        python: (p) => `#!/usr/bin/env python3
"""Reseta a configuração de rede (Windows ou Linux)."""

import platform
import shutil
import subprocess
import sys

MODE = "${p.mode}"


def run(cmd):
    print(f"$ {' '.join(cmd)}")
    return subprocess.run(cmd, check=False)


def windows_flush():
    run(["ipconfig", "/flushdns"])


def windows_full():
    run(["ipconfig", "/release"])
    run(["ipconfig", "/flushdns"])
    run(["ipconfig", "/renew"])
    run(["netsh", "winsock", "reset"])
    run(["netsh", "int", "ip", "reset"])
    run(["netsh", "winhttp", "reset", "proxy"])
    print("\\nReinicie o computador para aplicar todas as mudanças.")


def linux_flush():
    for cmd in (["systemd-resolve", "--flush-caches"],
                ["resolvectl", "flush-caches"]):
        if shutil.which(cmd[0]):
            run(["sudo", *cmd])
            return


def linux_full():
    result = subprocess.run(["ip", "route"], capture_output=True, text=True, check=True)
    iface = None
    for line in result.stdout.splitlines():
        if line.startswith("default"):
            iface = line.split()[4]
            break
    if not iface:
        sys.exit("Nenhuma interface padrão encontrada.")
    print(f"Interface: {iface}")

    run(["sudo", "ip", "link", "set", iface, "down"])
    linux_flush()
    run(["sudo", "ip", "link", "set", iface, "up"])
    if shutil.which("dhclient"):
        run(["sudo", "dhclient", "-r", iface])
        run(["sudo", "dhclient", iface])


def main():
    system = platform.system()
    print(f"Resetando rede em {system} (modo: {MODE})...")
    if system == "Windows":
        windows_full() if MODE == "full" else windows_flush()
    elif system == "Linux":
        linux_full() if MODE == "full" else linux_flush()
    else:
        sys.exit(f"Sistema não suportado: {system}")


if __name__ == "__main__":
    main()
`
    },

    "backup": {
        powershell: (p) => `# Faz backup de uma pasta com timestamp.

$ErrorActionPreference = "Stop"

$Source = "${p.source}"
$Destination = "${p.destination}"
$Timestamp = Get-Date -Format "yyyyMMdd_HHmmss"

if (-not (Test-Path $Source)) {
    Write-Host "Origem não existe: $Source" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $Destination)) {
    New-Item -ItemType Directory -Path $Destination -Force | Out-Null
}

$SourceName = Split-Path $Source -Leaf
$BackupName = "${"$"}{SourceName}_${"$"}{Timestamp}"

${p.compress === "yes" ? `$ZipPath = Join-Path $Destination "$BackupName.zip"
Write-Host "Comprimindo $Source -> $ZipPath" -ForegroundColor Cyan
Compress-Archive -Path "$Source\\*" -DestinationPath $ZipPath -CompressionLevel Optimal
$Size = (Get-Item $ZipPath).Length / 1MB
Write-Host ("Backup concluído: {0} ({1:N2} MB)" -f $ZipPath, $Size) -ForegroundColor Green` :
`$BackupPath = Join-Path $Destination $BackupName
Write-Host "Copiando $Source -> $BackupPath" -ForegroundColor Cyan
Copy-Item -Path $Source -Destination $BackupPath -Recurse -Force
Write-Host "Backup concluído: $BackupPath" -ForegroundColor Green`}
`,
        bash: (p) => `#!/bin/bash
# Faz backup de uma pasta com timestamp.
set -e

SOURCE="${p.source.replace(/\\/g, "/")}"
DEST="${p.destination.replace(/\\/g, "/")}"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

if [ ! -d "$SOURCE" ]; then
    echo "Origem não existe: $SOURCE" >&2
    exit 1
fi

mkdir -p "$DEST"

SOURCE_NAME=$(basename "$SOURCE")
BACKUP_NAME="${"$"}{SOURCE_NAME}_${"$"}{TIMESTAMP}"

${p.compress === "yes" ? `ARCHIVE="$DEST/$BACKUP_NAME.tar.gz"
echo "Comprimindo $SOURCE -> $ARCHIVE"
tar -czf "$ARCHIVE" -C "$(dirname "$SOURCE")" "$SOURCE_NAME"
SIZE=$(du -h "$ARCHIVE" | cut -f1)
echo "Backup concluído: $ARCHIVE ($SIZE)"` :
`BACKUP_PATH="$DEST/$BACKUP_NAME"
echo "Copiando $SOURCE -> $BACKUP_PATH"
cp -r "$SOURCE" "$BACKUP_PATH"
echo "Backup concluído: $BACKUP_PATH"`}
`,
        python: (p) => `#!/usr/bin/env python3
"""Faz backup de uma pasta com timestamp."""

import shutil
import sys
from datetime import datetime
from pathlib import Path

SOURCE = Path("${p.source.replace(/\\/g, "/")}")
DEST = Path("${p.destination.replace(/\\/g, "/")}")
COMPRESS = ${p.compress === "yes" ? "True" : "False"}


def main():
    if not SOURCE.exists():
        sys.exit(f"Origem não existe: {SOURCE}")

    DEST.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_name = f"{SOURCE.name}_{timestamp}"

    if COMPRESS:
        archive_base = DEST / backup_name
        print(f"Comprimindo {SOURCE} -> {archive_base}.zip")
        result = shutil.make_archive(
            base_name=str(archive_base),
            format="zip",
            root_dir=str(SOURCE.parent),
            base_dir=SOURCE.name,
        )
        size_mb = Path(result).stat().st_size / (1024 * 1024)
        print(f"Backup concluído: {result} ({size_mb:.2f} MB)")
    else:
        backup_path = DEST / backup_name
        print(f"Copiando {SOURCE} -> {backup_path}")
        shutil.copytree(SOURCE, backup_path)
        print(f"Backup concluído: {backup_path}")


if __name__ == "__main__":
    main()
`
    },

    "generate-password": {
        powershell: (p) => `# Gera ${p.count} senha(s) aleatória(s) de ${p.length} caracteres.

$Length = ${p.length}
$Count = ${p.count}
$IncludeSymbols = $${p.symbols === "yes" ? "true" : "false"}

$Letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
$Digits  = "0123456789"
$Symbols = "!@#$%^&*()-_=+[]{}<>?"

$Pool = $Letters + $Digits
if ($IncludeSymbols) { $Pool += $Symbols }

$rng = [System.Security.Cryptography.RandomNumberGenerator]::Create()

function New-Password($len, $pool) {
    $bytes = New-Object byte[] $len
    $rng.GetBytes($bytes)
    $chars = for ($i = 0; $i -lt $len; $i++) {
        $pool[$bytes[$i] % $pool.Length]
    }
    -join $chars
}

for ($i = 1; $i -le $Count; $i++) {
    Write-Host (New-Password $Length $Pool)
}
`,
        bash: (p) => `#!/bin/bash
# Gera ${p.count} senha(s) aleatória(s) de ${p.length} caracteres.
set -e

LENGTH=${p.length}
COUNT=${p.count}
INCLUDE_SYMBOLS=${p.symbols === "yes" ? "true" : "false"}

if [ "$INCLUDE_SYMBOLS" = "true" ]; then
    POOL='A-Za-z0-9!@#$%^&*()_=+[]{}<>?-'
else
    POOL='A-Za-z0-9'
fi

for i in $(seq 1 "$COUNT"); do
    LC_ALL=C tr -dc "$POOL" </dev/urandom | head -c "$LENGTH"
    echo
done
`,
        python: (p) => `#!/usr/bin/env python3
"""Gera senha(s) aleatória(s) criptograficamente seguras."""

import secrets
import string

LENGTH = ${p.length}
COUNT = ${p.count}
INCLUDE_SYMBOLS = ${p.symbols === "yes" ? "True" : "False"}


def generate(length: int) -> str:
    pool = string.ascii_letters + string.digits
    if INCLUDE_SYMBOLS:
        pool += "!@#$%^&*()_-=+[]{}<>?"
    return "".join(secrets.choice(pool) for _ in range(length))


if __name__ == "__main__":
    for _ in range(COUNT):
        print(generate(LENGTH))
`
    },

    "system-update": {
        powershell: (p) => `# Atualiza o Windows e pacotes via winget. Execute como Administrador.

$ErrorActionPreference = "Continue"

Write-Host "Verificando atualizações do Windows..." -ForegroundColor Cyan
Install-Module PSWindowsUpdate -Force -Scope CurrentUser -SkipPublisherCheck -ErrorAction SilentlyContinue
Import-Module PSWindowsUpdate -ErrorAction SilentlyContinue
Get-WindowsUpdate -AcceptAll -Install ${p.reboot === "yes" ? "-AutoReboot" : "-IgnoreReboot"}

Write-Host "\`nAtualizando pacotes via winget..." -ForegroundColor Cyan
if (Get-Command winget -ErrorAction SilentlyContinue) {
    winget upgrade --all --accept-source-agreements --accept-package-agreements
} else {
    Write-Host "winget não disponível neste sistema." -ForegroundColor Yellow
}

${p.autoremove === "yes" ? `Write-Host "\`nLimpando componentes obsoletos..." -ForegroundColor Cyan
Dism.exe /online /Cleanup-Image /StartComponentCleanup` : ""}

Write-Host "\`nConcluído." -ForegroundColor Green
`,
        bash: (p) => `#!/bin/bash
# Atualiza pacotes do sistema Linux. Requer sudo.
set -e

if command -v apt-get >/dev/null; then
    echo "Detectado: Debian/Ubuntu (apt)"
    sudo apt-get update
    sudo apt-get upgrade -y
${p.autoremove === "yes" ? `    sudo apt-get autoremove -y
    sudo apt-get autoclean` : ""}
elif command -v dnf >/dev/null; then
    echo "Detectado: Fedora/RHEL (dnf)"
    sudo dnf upgrade -y
${p.autoremove === "yes" ? `    sudo dnf autoremove -y` : ""}
elif command -v pacman >/dev/null; then
    echo "Detectado: Arch (pacman)"
    sudo pacman -Syu --noconfirm
${p.autoremove === "yes" ? `    sudo pacman -Rns $(pacman -Qtdq) --noconfirm 2>/dev/null || true` : ""}
else
    echo "Gerenciador de pacotes não suportado." >&2
    exit 1
fi

${p.reboot === "yes" ? `if [ -f /var/run/reboot-required ]; then
    echo "Reiniciando em 10 segundos..."
    sleep 10
    sudo reboot
fi` : `if [ -f /var/run/reboot-required ]; then
    echo "ATENÇÃO: reinicialização recomendada."
fi`}

echo "Concluído."
`,
        python: (p) => `#!/usr/bin/env python3
"""Atualiza pacotes do sistema atual."""

import platform
import shutil
import subprocess
import sys

AUTOREMOVE = ${p.autoremove === "yes" ? "True" : "False"}
REBOOT = ${p.reboot === "yes" ? "True" : "False"}


def run(cmd, check=True):
    print(f"$ {' '.join(cmd)}")
    return subprocess.run(cmd, check=check)


def update_windows():
    if shutil.which("winget"):
        run(["winget", "upgrade", "--all",
             "--accept-source-agreements", "--accept-package-agreements"], check=False)
    else:
        print("winget não disponível.")


def update_linux():
    if shutil.which("apt-get"):
        run(["sudo", "apt-get", "update"])
        run(["sudo", "apt-get", "upgrade", "-y"])
        if AUTOREMOVE:
            run(["sudo", "apt-get", "autoremove", "-y"])
    elif shutil.which("dnf"):
        run(["sudo", "dnf", "upgrade", "-y"])
        if AUTOREMOVE:
            run(["sudo", "dnf", "autoremove", "-y"])
    elif shutil.which("pacman"):
        run(["sudo", "pacman", "-Syu", "--noconfirm"])
    else:
        sys.exit("Gerenciador de pacotes não suportado.")


def main():
    system = platform.system()
    print(f"Atualizando {system}...")
    if system == "Windows":
        update_windows()
    elif system == "Linux":
        update_linux()
    else:
        sys.exit(f"Sistema não suportado: {system}")
    print("Concluído.")


if __name__ == "__main__":
    main()
`
    },

    "network-diagnose": {
        powershell: (p) => `# Diagnóstico de rede para ${p.target}.

$Target = "${p.target}"
$Count = ${p.count}

Write-Host "===== Configuração local =====" -ForegroundColor Cyan
Get-NetIPConfiguration | Where-Object { $_.NetAdapter.Status -eq "Up" } |
    Select-Object InterfaceAlias, IPv4Address, IPv4DefaultGateway, DNSServer

Write-Host "\`n===== Ping para $Target =====" -ForegroundColor Cyan
Test-Connection -ComputerName $Target -Count $Count -ErrorAction SilentlyContinue |
    Format-Table -AutoSize

Write-Host "\`n===== Resolução DNS =====" -ForegroundColor Cyan
Resolve-DnsName $Target -ErrorAction SilentlyContinue |
    Select-Object Name, Type, IPAddress | Format-Table -AutoSize

Write-Host "\`n===== Rota até $Target =====" -ForegroundColor Cyan
tracert -d -h 15 $Target
`,
        bash: (p) => `#!/bin/bash
# Diagnóstico de rede para ${p.target}.
set +e

TARGET="${p.target}"
COUNT=${p.count}

echo "===== Configuração local ====="
ip addr show | grep -E "inet |UP" | head -20
echo ""
echo "Gateway padrão:"
ip route | grep default

echo ""
echo "===== Servidores DNS ====="
if [ -f /etc/resolv.conf ]; then
    grep nameserver /etc/resolv.conf
fi

echo ""
echo "===== Ping para $TARGET ====="
ping -c "$COUNT" "$TARGET"

echo ""
echo "===== Resolução DNS ====="
if command -v dig >/dev/null; then
    dig +short "$TARGET"
elif command -v host >/dev/null; then
    host "$TARGET"
else
    getent hosts "$TARGET"
fi

echo ""
echo "===== Rota até $TARGET ====="
if command -v traceroute >/dev/null; then
    traceroute -n -m 15 "$TARGET"
elif command -v tracepath >/dev/null; then
    tracepath -m 15 "$TARGET"
fi
`,
        python: (p) => `#!/usr/bin/env python3
"""Diagnóstico de rede."""

import platform
import shutil
import socket
import subprocess

TARGET = "${p.target}"
COUNT = ${p.count}


def section(title):
    print(f"\\n===== {title} =====")


def run(cmd):
    subprocess.run(cmd, check=False)


def main():
    system = platform.system()

    section("Resolução DNS")
    try:
        ip = socket.gethostbyname(TARGET)
        print(f"{TARGET} -> {ip}")
    except socket.gaierror as e:
        print(f"Falha: {e}")

    section(f"Ping para {TARGET}")
    flag = "-n" if system == "Windows" else "-c"
    run(["ping", flag, str(COUNT), TARGET])

    section(f"Rota até {TARGET}")
    if system == "Windows":
        run(["tracert", "-d", "-h", "15", TARGET])
    else:
        tracer = shutil.which("traceroute") or shutil.which("tracepath")
        if tracer:
            run([tracer, "-n", "-m", "15", TARGET] if "traceroute" in tracer
                else [tracer, "-m", "15", TARGET])


if __name__ == "__main__":
    main()
`
    },

    "list-services": {
        powershell: (p) => `# Lista serviços do Windows.

$Filter = "${p.filter}"

$services = switch ($Filter) {
    "running" { Get-Service | Where-Object { $_.Status -eq "Running" } }
    "stopped" { Get-Service | Where-Object { $_.Status -eq "Stopped" } }
    default   { Get-Service }
}

$services | Sort-Object Status, Name |
    Select-Object Status, Name, DisplayName, StartType |
    Format-Table -AutoSize

Write-Host "\`nTotal: $($services.Count) serviços" -ForegroundColor Cyan
`,
        bash: (p) => `#!/bin/bash
# Lista serviços do systemd.

FILTER="${p.filter}"

if ! command -v systemctl >/dev/null; then
    echo "systemctl não encontrado." >&2
    exit 1
fi

case "$FILTER" in
    running) systemctl list-units --type=service --state=running ;;
    stopped) systemctl list-units --type=service --state=exited,failed,dead ;;
    *)       systemctl list-units --type=service --all ;;
esac

echo ""
echo "Total ativo: $(systemctl list-units --type=service --state=running --no-legend | wc -l)"
`,
        python: (p) => `#!/usr/bin/env python3
"""Lista serviços do sistema."""

import platform
import subprocess

FILTER = "${p.filter}"


def list_windows():
    state = {"running": "running", "stopped": "stopped", "all": "all"}[FILTER]
    cmd = ["powershell", "-NoProfile", "-Command",
           f"Get-Service | Where-Object {{$_.Status -eq '{state}' -or '{state}' -eq 'all'}} | "
           "Format-Table Status, Name, DisplayName, StartType -AutoSize"]
    subprocess.run(cmd, check=False)


def list_linux():
    state_arg = {
        "running": ["--state=running"],
        "stopped": ["--state=exited,failed,dead"],
        "all": ["--all"],
    }[FILTER]
    subprocess.run(["systemctl", "list-units", "--type=service", *state_arg], check=False)


def main():
    system = platform.system()
    if system == "Windows":
        list_windows()
    elif system == "Linux":
        list_linux()
    else:
        print(f"Sistema não suportado: {system}")


if __name__ == "__main__":
    main()
`
    },

    "find-large-files": {
        powershell: (p) => `# Lista os ${p.top} arquivos maiores em ${p.path}.

$Path = "${p.path}"
$Top = ${p.top}

Write-Host "Buscando arquivos em $Path ..." -ForegroundColor Cyan
Get-ChildItem -Path $Path -Recurse -File -ErrorAction SilentlyContinue |
    Sort-Object -Property Length -Descending |
    Select-Object -First $Top |
    ForEach-Object {
        [PSCustomObject]@{
            "Tamanho (MB)" = [math]::Round($_.Length / 1MB, 2)
            "Arquivo"      = $_.FullName
        }
    } | Format-Table -AutoSize
`,
        bash: (p) => `#!/bin/bash
# Lista os ${p.top} arquivos maiores em ${p.path}.

PATH_SEARCH="${p.path.replace(/\\/g, "/")}"
TOP=${p.top}

echo "Buscando arquivos em $PATH_SEARCH ..."
find "$PATH_SEARCH" -type f -printf '%s\\t%p\\n' 2>/dev/null |
    sort -rn |
    head -n "$TOP" |
    awk '{
        size = $1
        $1 = ""
        if (size >= 1073741824) { printf "%7.2f GB  %s\\n", size/1073741824, substr($0,2) }
        else if (size >= 1048576) { printf "%7.2f MB  %s\\n", size/1048576, substr($0,2) }
        else { printf "%7.2f KB  %s\\n", size/1024, substr($0,2) }
    }'
`,
        python: (p) => `#!/usr/bin/env python3
"""Lista os N arquivos maiores em uma pasta."""

import os
import sys
from pathlib import Path

ROOT = Path("${p.path.replace(/\\/g, "/")}")
TOP = ${p.top}


def human(size: int) -> str:
    for unit in ("B", "KB", "MB", "GB", "TB"):
        if size < 1024:
            return f"{size:7.2f} {unit}"
        size /= 1024
    return f"{size:.2f} PB"


def main():
    if not ROOT.exists():
        sys.exit(f"Pasta não existe: {ROOT}")

    print(f"Buscando arquivos em {ROOT} ...")
    files = []
    for dirpath, _, filenames in os.walk(ROOT):
        for name in filenames:
            full = Path(dirpath) / name
            try:
                files.append((full.stat().st_size, full))
            except (OSError, PermissionError):
                pass

    files.sort(reverse=True)
    for size, path in files[:TOP]:
        print(f"{human(size)}  {path}")


if __name__ == "__main__":
    main()
`
    },

    "install-software": {
        powershell: (p) => {
            const pkgList = p.packages.trim() ? p.packages.trim().split(/\s+/) : [];
            return `# Instala pacotes via winget. Execute como Administrador.

$ErrorActionPreference = "Continue"

$Packages = @(${pkgList.map(s => `"${s}"`).join(", ")})

if ($Packages.Count -eq 0) {
    Write-Host "Nenhum pacote selecionado." -ForegroundColor Yellow
    exit 0
}

if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
    Write-Host "winget não está disponível. Instale o App Installer pela Microsoft Store." -ForegroundColor Red
    exit 1
}

${p.update_first === "yes" ? `Write-Host "Atualizando lista de fontes..." -ForegroundColor Cyan
winget source update | Out-Null
` : ""}
foreach ($pkg in $Packages) {
    Write-Host "\`nInstalando: $pkg" -ForegroundColor Cyan
    winget install --id $pkg --silent --accept-source-agreements --accept-package-agreements
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  OK" -ForegroundColor Green
    } else {
        Write-Host "  FALHA (código $LASTEXITCODE)" -ForegroundColor Yellow
    }
}

Write-Host "\`nConcluído." -ForegroundColor Green
`;
        },
        bash: (p) => {
            const pkgList = p.packages.trim() ? p.packages.trim().split(/\s+/) : [];
            return `#!/bin/bash
# Instala pacotes usando o gerenciador disponível. Requer sudo.
set -e

PACKAGES=(${pkgList.map(s => `"${s}"`).join(" ")})

if [ ${"$"}{#PACKAGES[@]} -eq 0 ]; then
    echo "Nenhum pacote selecionado."
    exit 0
fi

if command -v apt-get >/dev/null; then
    MGR="apt"
${p.update_first === "yes" ? `    sudo apt-get update` : ""}
    sudo apt-get install -y "${"$"}{PACKAGES[@]}"
elif command -v dnf >/dev/null; then
    MGR="dnf"
${p.update_first === "yes" ? `    sudo dnf check-update || true` : ""}
    sudo dnf install -y "${"$"}{PACKAGES[@]}"
elif command -v pacman >/dev/null; then
    MGR="pacman"
${p.update_first === "yes" ? `    sudo pacman -Sy --noconfirm` : ""}
    sudo pacman -S --noconfirm --needed "${"$"}{PACKAGES[@]}"
elif command -v zypper >/dev/null; then
    MGR="zypper"
${p.update_first === "yes" ? `    sudo zypper refresh` : ""}
    sudo zypper install -y "${"$"}{PACKAGES[@]}"
else
    echo "Gerenciador de pacotes não suportado." >&2
    exit 1
fi

echo ""
echo "Instalação concluída via $MGR."
`;
        },
        python: (p) => {
            const pkgList = p.packages.trim() ? p.packages.trim().split(/\s+/) : [];
            return `#!/usr/bin/env python3
"""Instala pacotes via gerenciador nativo do sistema."""

import platform
import shutil
import subprocess
import sys

PACKAGES = [${pkgList.map(s => `"${s}"`).join(", ")}]
UPDATE_FIRST = ${p.update_first === "yes" ? "True" : "False"}

if not PACKAGES:
    print("Nenhum pacote selecionado.")
    sys.exit(0)


def run(cmd, check=True):
    print(f"$ {' '.join(cmd)}")
    return subprocess.run(cmd, check=check)


def install_windows():
    if not shutil.which("winget"):
        sys.exit("winget indisponível.")
    if UPDATE_FIRST:
        run(["winget", "source", "update"], check=False)
    for pkg in PACKAGES:
        print(f"\\nInstalando: {pkg}")
        run(["winget", "install", "--id", pkg, "--silent",
             "--accept-source-agreements", "--accept-package-agreements"], check=False)


def install_linux():
    if shutil.which("apt-get"):
        if UPDATE_FIRST:
            run(["sudo", "apt-get", "update"])
        run(["sudo", "apt-get", "install", "-y", *PACKAGES])
    elif shutil.which("dnf"):
        run(["sudo", "dnf", "install", "-y", *PACKAGES])
    elif shutil.which("pacman"):
        if UPDATE_FIRST:
            run(["sudo", "pacman", "-Sy", "--noconfirm"])
        run(["sudo", "pacman", "-S", "--noconfirm", "--needed", *PACKAGES])
    else:
        sys.exit("Gerenciador de pacotes não suportado.")


def main():
    system = platform.system()
    print(f"Instalando {len(PACKAGES)} pacote(s) em {system}...")
    if system == "Windows":
        install_windows()
    elif system == "Linux":
        install_linux()
    else:
        sys.exit(f"Sistema não suportado: {system}")
    print("\\nConcluído.")


if __name__ == "__main__":
    main()
`;
        }
    },

    "ssh-key": {
        powershell: (p) => `# Gera um par de chaves SSH ed25519.

$Comment = "${p.comment}"
$KeyFile = "$env:USERPROFILE\\.ssh\\${p.filename}"

# Garante que .ssh existe.
$SshDir = "$env:USERPROFILE\\.ssh"
if (-not (Test-Path $SshDir)) {
    New-Item -ItemType Directory -Path $SshDir -Force | Out-Null
}

if (Test-Path $KeyFile) {
    Write-Host "Arquivo já existe: $KeyFile" -ForegroundColor Yellow
    $resp = Read-Host "Sobrescrever? (s/N)"
    if ($resp -ne "s") { exit 0 }
}

Write-Host "Gerando chave..." -ForegroundColor Cyan
${p.passphrase === "yes" ?
`ssh-keygen -t ed25519 -C $Comment -f $KeyFile` :
`ssh-keygen -t ed25519 -C $Comment -f $KeyFile -N '""'`}

Write-Host "\`nChave pública (~adicione ao authorized_keys do servidor):" -ForegroundColor Green
Get-Content "$KeyFile.pub"
`,
        bash: (p) => `#!/bin/bash
# Gera um par de chaves SSH ed25519.
set -e

COMMENT="${p.comment}"
KEY_FILE="$HOME/.ssh/${p.filename}"

mkdir -p "$HOME/.ssh"
chmod 700 "$HOME/.ssh"

if [ -f "$KEY_FILE" ]; then
    read -p "Arquivo $KEY_FILE já existe. Sobrescrever? (s/N) " resp
    [ "$resp" != "s" ] && exit 0
fi

echo "Gerando chave..."
${p.passphrase === "yes" ?
`ssh-keygen -t ed25519 -C "$COMMENT" -f "$KEY_FILE"` :
`ssh-keygen -t ed25519 -C "$COMMENT" -f "$KEY_FILE" -N ""`}

chmod 600 "$KEY_FILE"
chmod 644 "$KEY_FILE.pub"

echo ""
echo "Chave pública (adicione ao authorized_keys do servidor):"
cat "$KEY_FILE.pub"
`,
        python: (p) => `#!/usr/bin/env python3
"""Gera um par de chaves SSH ed25519 usando o ssh-keygen do sistema."""

import os
import shutil
import subprocess
import sys
from pathlib import Path

COMMENT = "${p.comment}"
KEY_NAME = "${p.filename}"
USE_PASSPHRASE = ${p.passphrase === "yes" ? "True" : "False"}


def main():
    if not shutil.which("ssh-keygen"):
        sys.exit("ssh-keygen não encontrado no PATH.")

    ssh_dir = Path.home() / ".ssh"
    ssh_dir.mkdir(exist_ok=True)
    if os.name != "nt":
        ssh_dir.chmod(0o700)

    key_file = ssh_dir / KEY_NAME
    if key_file.exists():
        resp = input(f"Arquivo {key_file} já existe. Sobrescrever? (s/N) ").strip().lower()
        if resp != "s":
            return

    cmd = ["ssh-keygen", "-t", "ed25519", "-C", COMMENT, "-f", str(key_file)]
    if not USE_PASSPHRASE:
        cmd += ["-N", ""]

    print("Gerando chave...")
    subprocess.run(cmd, check=True)

    if os.name != "nt":
        key_file.chmod(0o600)
        Path(str(key_file) + ".pub").chmod(0o644)

    print("\\nChave pública (adicione ao authorized_keys do servidor):")
    print(Path(str(key_file) + ".pub").read_text())


if __name__ == "__main__":
    main()
`
    },

    "system-info": {
        powershell: (p) => `# Coleta informações do sistema.

$Output = New-Object System.Text.StringBuilder

function Write-Section($title) {
    [void]$Output.AppendLine("")
    [void]$Output.AppendLine("===== $title =====")
}

Write-Section "Sistema"
$cs = Get-CimInstance Win32_ComputerSystem
$os = Get-CimInstance Win32_OperatingSystem
[void]$Output.AppendLine("Hostname:  $($cs.Name)")
[void]$Output.AppendLine("OS:        $($os.Caption) $($os.Version)")
[void]$Output.AppendLine("Arquit.:   $($os.OSArchitecture)")
[void]$Output.AppendLine("Uptime:    $((Get-Date) - $os.LastBootUpTime)")

Write-Section "CPU"
$cpu = Get-CimInstance Win32_Processor | Select-Object -First 1
[void]$Output.AppendLine("Modelo:    $($cpu.Name)")
[void]$Output.AppendLine("Núcleos:   $($cpu.NumberOfCores) físicos / $($cpu.NumberOfLogicalProcessors) lógicos")

Write-Section "Memória"
$totalGB = [math]::Round($cs.TotalPhysicalMemory / 1GB, 2)
$freeGB = [math]::Round($os.FreePhysicalMemory * 1KB / 1GB, 2)
[void]$Output.AppendLine("Total:     $totalGB GB")
[void]$Output.AppendLine("Livre:     $freeGB GB")

Write-Section "Disco"
Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3" | ForEach-Object {
    $total = [math]::Round($_.Size / 1GB, 2)
    $free = [math]::Round($_.FreeSpace / 1GB, 2)
    [void]$Output.AppendLine("$($_.DeviceID)  Total: $total GB  Livre: $free GB")
}

Write-Section "Rede"
Get-NetIPConfiguration | Where-Object { $_.NetAdapter.Status -eq "Up" } | ForEach-Object {
    [void]$Output.AppendLine("$($_.InterfaceAlias): $($_.IPv4Address.IPAddress)")
}

$result = $Output.ToString()
${p.format === "file" ?
`$path = "$env:USERPROFILE\\sysinfo_$(Get-Date -Format 'yyyyMMdd_HHmmss').txt"
$result | Out-File -FilePath $path -Encoding UTF8
Write-Host "Salvo em: $path" -ForegroundColor Green` :
`Write-Host $result`}
`,
        bash: (p) => `#!/bin/bash
# Coleta informações do sistema Linux.

section() { echo ""; echo "===== $1 ====="; }

OUT=$(
section "Sistema"
echo "Hostname:  $(hostname)"
echo "Kernel:    $(uname -r)"
if [ -f /etc/os-release ]; then
    . /etc/os-release
    echo "OS:        $NAME $VERSION"
fi
echo "Uptime:    $(uptime -p 2>/dev/null || uptime)"

section "CPU"
if [ -f /proc/cpuinfo ]; then
    echo "Modelo:    $(grep "model name" /proc/cpuinfo | head -1 | cut -d: -f2 | sed 's/^ //')"
    echo "Núcleos:   $(nproc) lógicos"
fi

section "Memória"
free -h | awk 'NR==1 || NR==2'

section "Disco"
df -h --output=source,size,used,avail,pcent,target -x tmpfs -x devtmpfs 2>/dev/null | head -10

section "Rede"
ip -brief addr show 2>/dev/null | grep -v "^lo "
)

${p.format === "file" ?
`PATH_OUT="$HOME/sysinfo_$(date +%Y%m%d_%H%M%S).txt"
echo "$OUT" > "$PATH_OUT"
echo "Salvo em: $PATH_OUT"` :
`echo "$OUT"`}
`,
        python: (p) => `#!/usr/bin/env python3
"""Coleta informações do sistema (multiplataforma)."""

import platform
import shutil
import socket
from datetime import datetime
from pathlib import Path

FORMAT = "${p.format}"


def section(title):
    return f"\\n===== {title} =====\\n"


def collect():
    out = []
    out.append(section("Sistema"))
    out.append(f"Hostname:  {socket.gethostname()}")
    out.append(f"OS:        {platform.system()} {platform.release()}")
    out.append(f"Versão:    {platform.version()}")
    out.append(f"Arquit.:   {platform.machine()}")

    out.append(section("CPU"))
    out.append(f"Processador: {platform.processor() or 'desconhecido'}")
    import os as _os
    out.append(f"Núcleos:     {_os.cpu_count()} lógicos")

    out.append(section("Memória"))
    try:
        if platform.system() == "Linux":
            with open("/proc/meminfo") as f:
                for line in f:
                    if line.startswith(("MemTotal:", "MemFree:", "MemAvailable:")):
                        out.append(line.rstrip())
        elif platform.system() == "Windows":
            import ctypes
            class MEMORYSTATUSEX(ctypes.Structure):
                _fields_ = [("dwLength", ctypes.c_ulong),
                            ("dwMemoryLoad", ctypes.c_ulong),
                            ("ullTotalPhys", ctypes.c_ulonglong),
                            ("ullAvailPhys", ctypes.c_ulonglong),
                            ("ullTotalPageFile", ctypes.c_ulonglong),
                            ("ullAvailPageFile", ctypes.c_ulonglong),
                            ("ullTotalVirtual", ctypes.c_ulonglong),
                            ("ullAvailVirtual", ctypes.c_ulonglong),
                            ("ullAvailExtendedVirtual", ctypes.c_ulonglong)]
            stat = MEMORYSTATUSEX()
            stat.dwLength = ctypes.sizeof(MEMORYSTATUSEX)
            ctypes.windll.kernel32.GlobalMemoryStatusEx(ctypes.byref(stat))
            out.append(f"Total:     {stat.ullTotalPhys / (1024**3):.2f} GB")
            out.append(f"Livre:     {stat.ullAvailPhys / (1024**3):.2f} GB")
    except Exception as e:
        out.append(f"(erro ao ler memória: {e})")

    out.append(section("Disco"))
    for p in ([Path("/")] if platform.system() != "Windows"
              else [Path(f"{d}:/") for d in "CDEFG" if Path(f"{d}:/").exists()]):
        try:
            u = shutil.disk_usage(p)
            out.append(f"{p}  Total: {u.total/(1024**3):.1f} GB  "
                       f"Livre: {u.free/(1024**3):.1f} GB")
        except OSError:
            pass

    return "\\n".join(out)


def main():
    result = collect()
    if FORMAT == "file":
        path = Path.home() / f"sysinfo_{datetime.now():%Y%m%d_%H%M%S}.txt"
        path.write_text(result, encoding="utf-8")
        print(f"Salvo em: {path}")
    else:
        print(result)


if __name__ == "__main__":
    main()
`
    },

    "list-processes": {
        powershell: (p) => `# Lista os ${p.top} processos com maior uso de ${p.sort === "memory" ? "memória" : (p.sort === "name" ? "(ordenados por nome)" : "CPU")}.

$sortBy = "${p.sort === "memory" ? "WS" : (p.sort === "name" ? "ProcessName" : "CPU")}"
$top = ${p.top}

Get-Process | Sort-Object -Property $sortBy -Descending |
    Select-Object -First $top |
    ForEach-Object {
        [PSCustomObject]@{
            PID    = $_.Id
            Nome   = $_.ProcessName
            "CPU(s)" = if ($_.CPU) { [math]::Round($_.CPU, 1) } else { 0 }
            "RAM(MB)" = [math]::Round($_.WS / 1MB, 1)
        }
    } | Format-Table -AutoSize
`,
        bash: (p) => `#!/bin/bash
# Lista os ${p.top} processos com maior uso de ${p.sort === "memory" ? "memória" : (p.sort === "name" ? "(ordenados por nome)" : "CPU")}.

SORT_FLAG="${p.sort === "memory" ? "-%mem" : (p.sort === "name" ? "comm" : "-%cpu")}"

ps -eo pid,user,%cpu,%mem,comm --sort=$SORT_FLAG | head -n $((${p.top} + 1))
`,
        python: (p) => `#!/usr/bin/env python3
"""Lista os ${p.top} processos com maior uso de recursos."""

import subprocess
import sys

SORT = "${p.sort}"
TOP = ${p.top}


def main():
    if sys.platform == "win32":
        ps_sort = {"cpu": "CPU", "memory": "WS", "name": "ProcessName"}[SORT]
        cmd = ["powershell", "-NoProfile", "-Command",
               f"Get-Process | Sort-Object -Property {ps_sort} -Descending | "
               f"Select-Object -First {TOP} Id, ProcessName, "
               f"@{{N='RAM(MB)';E={{[math]::Round($_.WS/1MB,1)}}}}, "
               f"@{{N='CPU(s)';E={{[math]::Round($_.CPU,1)}}}} | Format-Table -AutoSize"]
        subprocess.run(cmd, check=False)
    else:
        flag = {"cpu": "-%cpu", "memory": "-%mem", "name": "comm"}[SORT]
        subprocess.run(["ps", "-eo", "pid,user,%cpu,%mem,comm",
                       f"--sort={flag}"], check=False, capture_output=True, text=True,
                      ).stdout.split("\\n")[:TOP + 1].__iter__()
        # Re-roda mais simples mostrando direto.
        r = subprocess.run(["ps", "-eo", "pid,user,%cpu,%mem,comm", f"--sort={flag}"],
                          capture_output=True, text=True, check=False)
        for line in r.stdout.split("\\n")[:TOP + 1]:
            print(line)


if __name__ == "__main__":
    main()
`
    },

    "kill-process": {
        powershell: (p) => `# Encerra processo "${p.identifier}".

$Target = "${p.identifier}"

# Se for número, trata como PID; senão como nome.
if ($Target -match '^\\d+$') {
    Stop-Process -Id $Target ${p.force === "yes" ? "-Force" : ""} -ErrorAction Stop
    Write-Host "Processo PID $Target encerrado." -ForegroundColor Green
} else {
    # Remove .exe pra usar com -Name
    $name = $Target -replace '\\.exe$', ''
    $procs = Get-Process -Name $name -ErrorAction SilentlyContinue
    if (-not $procs) {
        Write-Host "Nenhum processo '$Target' encontrado." -ForegroundColor Yellow
        exit 0
    }
    $procs | ForEach-Object {
        Stop-Process -Id $_.Id ${p.force === "yes" ? "-Force" : ""} -ErrorAction SilentlyContinue
        Write-Host "Encerrado: $($_.ProcessName) (PID $($_.Id))" -ForegroundColor Green
    }
}
`,
        bash: (p) => `#!/bin/bash
# Encerra processo "${p.identifier}".

TARGET="${p.identifier}"
SIGNAL="${p.force === "yes" ? "-9" : "-15"}"

if [[ "$TARGET" =~ ^[0-9]+$ ]]; then
    if kill $SIGNAL "$TARGET" 2>/dev/null; then
        echo "PID $TARGET encerrado."
    else
        echo "Falha ao encerrar PID $TARGET" >&2
        exit 1
    fi
else
    if pkill $SIGNAL "$TARGET"; then
        echo "Processo(s) '$TARGET' encerrado(s)."
    else
        echo "Nenhum processo '$TARGET' encontrado." >&2
    fi
fi
`,
        python: (p) => `#!/usr/bin/env python3
"""Encerra um processo pelo nome ou PID."""

import os
import signal
import subprocess
import sys

TARGET = "${p.identifier}"
FORCE = ${p.force === "yes" ? "True" : "False"}


def main():
    if TARGET.isdigit():
        pid = int(TARGET)
        try:
            if sys.platform == "win32":
                subprocess.run(["taskkill", "/PID", str(pid)] + (["/F"] if FORCE else []),
                              check=True)
            else:
                os.kill(pid, signal.SIGKILL if FORCE else signal.SIGTERM)
            print(f"PID {pid} encerrado.")
        except (ProcessLookupError, subprocess.CalledProcessError):
            sys.exit(f"Falha ao encerrar PID {pid}.")
    else:
        if sys.platform == "win32":
            name = TARGET if TARGET.endswith(".exe") else TARGET + ".exe"
            args = ["taskkill", "/IM", name] + (["/F"] if FORCE else [])
        else:
            args = ["pkill", "-9" if FORCE else "-15", TARGET]
        r = subprocess.run(args, capture_output=True, text=True)
        if r.returncode == 0:
            print(f"Processo(s) '{TARGET}' encerrado(s).")
        else:
            print(f"Nenhum processo '{TARGET}' encontrado.")


if __name__ == "__main__":
    main()
`
    },

    "shutdown": {
        powershell: (p) => `# ${p.action === "shutdown" ? "Desliga" : p.action === "restart" ? "Reinicia" : "Encerra sessão"} o computador em ${p.delay}s.

$delay = ${p.delay}
$message = "${p.message}"

${p.action === "shutdown" ?
    `shutdown.exe /s /t $delay /c $message` :
    p.action === "restart" ?
    `shutdown.exe /r /t $delay /c $message` :
    `shutdown.exe /l`}

Write-Host "Comando enviado. ${p.action === "shutdown" ? "Desligando" : p.action === "restart" ? "Reiniciando" : "Encerrando sessão"} em $delay segundo(s)." -ForegroundColor Cyan
Write-Host "Para cancelar: shutdown.exe /a" -ForegroundColor Yellow
`,
        bash: (p) => `#!/bin/bash
# ${p.action === "shutdown" ? "Desliga" : p.action === "restart" ? "Reinicia" : "Encerra sessão"} o sistema. Requer sudo.

DELAY=${p.delay}
MSG="${p.message}"

${p.action === "shutdown" ?
    `# Converte segundos em minutos (shutdown usa minutos)
MINUTES=$((DELAY / 60))
[ $MINUTES -lt 1 ] && MINUTES=1
sudo shutdown -h "+$MINUTES" "$MSG"` :
    p.action === "restart" ?
    `MINUTES=$((DELAY / 60))
[ $MINUTES -lt 1 ] && MINUTES=1
sudo shutdown -r "+$MINUTES" "$MSG"` :
    `gnome-session-quit --logout --no-prompt 2>/dev/null || loginctl terminate-user "$USER"`}

echo "Para cancelar: sudo shutdown -c"
`,
        python: (p) => `#!/usr/bin/env python3
"""${p.action === "shutdown" ? "Desliga" : p.action === "restart" ? "Reinicia" : "Encerra sessão"} o computador após um atraso."""

import platform
import subprocess
import sys

ACTION = "${p.action}"
DELAY = ${p.delay}
MESSAGE = "${p.message}"


def main():
    system = platform.system()

    if system == "Windows":
        if ACTION == "logoff":
            subprocess.run(["shutdown.exe", "/l"], check=True)
        else:
            flag = "/s" if ACTION == "shutdown" else "/r"
            subprocess.run(["shutdown.exe", flag, "/t", str(DELAY), "/c", MESSAGE], check=True)
        print(f"Comando enviado. Para cancelar: shutdown.exe /a")

    elif system == "Linux":
        if ACTION == "logoff":
            subprocess.run(["loginctl", "terminate-user", subprocess.run(
                ["whoami"], capture_output=True, text=True, check=True
            ).stdout.strip()], check=False)
        else:
            flag = "-h" if ACTION == "shutdown" else "-r"
            minutes = max(1, DELAY // 60)
            subprocess.run(["sudo", "shutdown", flag, f"+{minutes}", MESSAGE], check=True)
            print(f"Para cancelar: sudo shutdown -c")
    else:
        sys.exit(f"Sistema não suportado: {system}")


if __name__ == "__main__":
    main()
`
    },

    "public-ip": {
        powershell: (p) => `# Obtém o IP público da conexão.

$service = "https://${p.service}"

try {
    $ip = (Invoke-RestMethod -Uri $service -TimeoutSec 10).ToString().Trim()
    Write-Host "IP público: $ip" -ForegroundColor Green
} catch {
    Write-Host "Falha ao consultar $service" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor DarkGray
    exit 1
}
`,
        bash: (p) => `#!/bin/bash
# Obtém o IP público da conexão.

SERVICE="https://${p.service}"

if command -v curl >/dev/null; then
    IP=$(curl -s --max-time 10 "$SERVICE")
elif command -v wget >/dev/null; then
    IP=$(wget -qO- --timeout=10 "$SERVICE")
else
    echo "curl ou wget necessários." >&2
    exit 1
fi

if [ -n "$IP" ]; then
    echo "IP público: $IP"
else
    echo "Falha ao obter IP." >&2
    exit 1
fi
`,
        python: (p) => `#!/usr/bin/env python3
"""Mostra o IP público da conexão atual."""

import sys
from urllib.request import urlopen
from urllib.error import URLError

SERVICE = "https://${p.service}"


def main():
    try:
        with urlopen(SERVICE, timeout=10) as r:
            ip = r.read().decode().strip()
        print(f"IP público: {ip}")
    except URLError as e:
        sys.exit(f"Falha ao consultar {SERVICE}: {e}")


if __name__ == "__main__":
    main()
`
    },

    "scan-ports": {
        powershell: (p) => `# Verifica quais portas estão abertas em ${p.host}.

$host_ = "${p.host}"
$ports = @(${p.ports.split(",").map(x => x.trim()).filter(Boolean).join(", ")})
$timeoutMs = ${p.timeout}

Write-Host "Escaneando $host_ ..." -ForegroundColor Cyan

foreach ($port in $ports) {
    $client = New-Object System.Net.Sockets.TcpClient
    $task = $client.ConnectAsync($host_, $port)
    if ($task.Wait($timeoutMs)) {
        Write-Host ("  {0,5}  ABERTA" -f $port) -ForegroundColor Green
    } else {
        Write-Host ("  {0,5}  fechada/filtrada" -f $port) -ForegroundColor DarkGray
    }
    $client.Close()
}
`,
        bash: (p) => `#!/bin/bash
# Verifica portas abertas em ${p.host}.

HOST="${p.host}"
PORTS=(${p.ports.split(",").map(x => x.trim()).filter(Boolean).join(" ")})
TIMEOUT=$((${p.timeout} / 1000))
[ $TIMEOUT -lt 1 ] && TIMEOUT=1

echo "Escaneando $HOST ..."

for port in "${"$"}{PORTS[@]}"; do
    if timeout $TIMEOUT bash -c "</dev/tcp/$HOST/$port" 2>/dev/null; then
        printf "  %5s  ABERTA\\n" "$port"
    else
        printf "  %5s  fechada/filtrada\\n" "$port"
    fi
done
`,
        python: (p) => `#!/usr/bin/env python3
"""Escaneia portas TCP em um host."""

import socket

HOST = "${p.host}"
PORTS = [${p.ports.split(",").map(x => x.trim()).filter(Boolean).join(", ")}]
TIMEOUT = ${p.timeout} / 1000.0


def check(port):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(TIMEOUT)
    try:
        return s.connect_ex((HOST, port)) == 0
    except socket.gaierror:
        return False
    finally:
        s.close()


def main():
    print(f"Escaneando {HOST} ...")
    for port in PORTS:
        status = "ABERTA" if check(port) else "fechada/filtrada"
        print(f"  {port:>5}  {status}")


if __name__ == "__main__":
    main()
`
    },

    "file-hash": {
        powershell: (p) => `# Calcula hash ${p.algorithm} do arquivo.

$file = "${p.file}"

if (-not (Test-Path $file)) {
    Write-Host "Arquivo não existe: $file" -ForegroundColor Red
    exit 1
}

$result = Get-FileHash -Path $file -Algorithm ${p.algorithm}
Write-Host "Arquivo:    $file"
Write-Host "Algoritmo:  ${p.algorithm}"
Write-Host "Hash:       $($result.Hash.ToLower())" -ForegroundColor Green
`,
        bash: (p) => `#!/bin/bash
# Calcula hash ${p.algorithm} do arquivo.
set -e

FILE="${p.file.replace(/\\/g, "/")}"

if [ ! -f "$FILE" ]; then
    echo "Arquivo não existe: $FILE" >&2
    exit 1
fi

case "${p.algorithm}" in
    MD5)    HASH=$(md5sum "$FILE" | awk '{print $1}') ;;
    SHA1)   HASH=$(sha1sum "$FILE" | awk '{print $1}') ;;
    SHA256) HASH=$(sha256sum "$FILE" | awk '{print $1}') ;;
    SHA512) HASH=$(sha512sum "$FILE" | awk '{print $1}') ;;
esac

echo "Arquivo:    $FILE"
echo "Algoritmo:  ${p.algorithm}"
echo "Hash:       $HASH"
`,
        python: (p) => `#!/usr/bin/env python3
"""Calcula hash criptográfico de um arquivo."""

import hashlib
import sys
from pathlib import Path

FILE = Path(r"${p.file}")
ALGORITHM = "${p.algorithm.toLowerCase()}"


def main():
    if not FILE.exists():
        sys.exit(f"Arquivo não existe: {FILE}")

    h = hashlib.new(ALGORITHM)
    with open(FILE, "rb") as f:
        for chunk in iter(lambda: f.read(8192), b""):
            h.update(chunk)

    print(f"Arquivo:    {FILE}")
    print(f"Algoritmo:  {ALGORITHM.upper()}")
    print(f"Hash:       {h.hexdigest()}")


if __name__ == "__main__":
    main()
`
    },

    "bulk-rename": {
        powershell: (p) => `# Renomeia arquivos em lote.

$folder = "${p.folder}"
$ext = "${p.extension}"
$prefix = "${p.prefix}"
$padding = ${p.padding}
$preview = $${p.preview === "yes" ? "true" : "false"}

if (-not (Test-Path $folder)) {
    Write-Host "Pasta não existe: $folder" -ForegroundColor Red
    exit 1
}

$filter = if ($ext -eq "*") { "*" } else { "*$ext" }
$files = Get-ChildItem -Path $folder -File -Filter $filter | Sort-Object Name

if ($files.Count -eq 0) {
    Write-Host "Nenhum arquivo correspondente." -ForegroundColor Yellow
    exit 0
}

$i = 1
foreach ($f in $files) {
    $newName = "{0}_{1:D$padding}{2}" -f $prefix, $i, $f.Extension
    if ($preview) {
        Write-Host "[preview] $($f.Name)  ->  $newName"
    } else {
        Rename-Item -Path $f.FullName -NewName $newName
        Write-Host "$($f.Name)  ->  $newName" -ForegroundColor Green
    }
    $i++
}

if ($preview) { Write-Host "\`nModo preview - nada foi alterado." -ForegroundColor Yellow }
`,
        bash: (p) => `#!/bin/bash
# Renomeia arquivos em lote.
set -e

FOLDER="${p.folder.replace(/\\/g, "/")}"
EXT="${p.extension}"
PREFIX="${p.prefix}"
PADDING=${p.padding}
PREVIEW=${p.preview === "yes" ? "true" : "false"}

if [ ! -d "$FOLDER" ]; then
    echo "Pasta não existe: $FOLDER" >&2
    exit 1
fi

cd "$FOLDER"

if [ "$EXT" = "*" ]; then
    PATTERN="*"
else
    PATTERN="*$EXT"
fi

i=1
for f in $PATTERN; do
    [ -f "$f" ] || continue
    ext="${"$"}{f##*.}"
    new=$(printf "%s_%0${"$"}{PADDING}d.%s" "$PREFIX" "$i" "$ext")
    if [ "$PREVIEW" = "true" ]; then
        echo "[preview] $f  ->  $new"
    else
        mv -- "$f" "$new"
        echo "$f  ->  $new"
    fi
    i=$((i + 1))
done

[ "$PREVIEW" = "true" ] && echo "" && echo "Modo preview — nada foi alterado."
`,
        python: (p) => `#!/usr/bin/env python3
"""Renomeia arquivos em lote com prefixo + numeração."""

import sys
from pathlib import Path

FOLDER = Path("${p.folder.replace(/\\/g, "/")}")
EXT = "${p.extension}"
PREFIX = "${p.prefix}"
PADDING = ${p.padding}
PREVIEW = ${p.preview === "yes" ? "True" : "False"}


def main():
    if not FOLDER.is_dir():
        sys.exit(f"Pasta não existe: {FOLDER}")

    pattern = "*" if EXT == "*" else f"*{EXT}"
    files = sorted(FOLDER.glob(pattern))
    files = [f for f in files if f.is_file()]

    if not files:
        print("Nenhum arquivo correspondente.")
        return

    for i, f in enumerate(files, start=1):
        new_name = f"{PREFIX}_{i:0{PADDING}d}{f.suffix}"
        new_path = f.with_name(new_name)
        if PREVIEW:
            print(f"[preview] {f.name}  ->  {new_name}")
        else:
            f.rename(new_path)
            print(f"{f.name}  ->  {new_name}")

    if PREVIEW:
        print("\\nModo preview — nada foi alterado.")


if __name__ == "__main__":
    main()
`
    },

    "sync-folders": {
        powershell: (p) => `# Sincroniza pastas usando robocopy.

$source = "${p.source}"
$dest = "${p.destination}"

if (-not (Test-Path $source)) {
    Write-Host "Origem não existe: $source" -ForegroundColor Red
    exit 1
}

# Flags do robocopy:
#   /MIR  espelho  | /E  incremental (mantém arquivos extras no destino)
#   /L    dry-run  | /R:3 W:1  retentativas
$flags = @(${p.mode === "mirror" ? '"/MIR"' : '"/E"'}, "/R:3", "/W:1"${p.dryRun === "yes" ? ', "/L"' : ""})

Write-Host "${p.dryRun === "yes" ? "[SIMULAÇÃO] " : ""}Sincronizando $source -> $dest" -ForegroundColor Cyan
robocopy $source $dest $flags

# Robocopy retorna 0 ou 1 em sucesso; 2+ em alguns avisos. Não tratamos como erro.
if ($LASTEXITCODE -lt 8) {
    Write-Host "\`nConcluído." -ForegroundColor Green
} else {
    Write-Host "\`nErro: código $LASTEXITCODE" -ForegroundColor Red
}
`,
        bash: (p) => `#!/bin/bash
# Sincroniza pastas usando rsync.
set -e

SOURCE="${p.source.replace(/\\/g, "/")}"
DEST="${p.destination.replace(/\\/g, "/")}"

if [ ! -d "$SOURCE" ]; then
    echo "Origem não existe: $SOURCE" >&2
    exit 1
fi

mkdir -p "$DEST"

# Termina origem com / pra copiar conteúdo (não a própria pasta).
SOURCE="${"$"}{SOURCE%/}/"

FLAGS=("-a" "-v" "-h"${p.dryRun === "yes" ? ' "--dry-run"' : ''}${p.mode === "mirror" ? ' "--delete"' : ''})

${p.dryRun === "yes" ? `echo "[SIMULAÇÃO] Sincronizando..."` : `echo "Sincronizando..."`}
rsync "${"$"}{FLAGS[@]}" "$SOURCE" "$DEST"

echo ""
echo "Concluído."
`,
        python: (p) => `#!/usr/bin/env python3
"""Sincroniza arquivos entre duas pastas."""

import filecmp
import shutil
import sys
from pathlib import Path

SOURCE = Path("${p.source.replace(/\\/g, "/")}")
DEST = Path("${p.destination.replace(/\\/g, "/")}")
MIRROR = ${p.mode === "mirror" ? "True" : "False"}
DRY_RUN = ${p.dryRun === "yes" ? "True" : "False"}


def log(action, path):
    prefix = "[dry-run] " if DRY_RUN else ""
    print(f"{prefix}{action}: {path}")


def sync_dir(src: Path, dst: Path):
    dst.mkdir(parents=True, exist_ok=True)
    src_entries = {e.name: e for e in src.iterdir()}
    dst_entries = {e.name: e for e in dst.iterdir()} if dst.exists() else {}

    # Copia / atualiza
    for name, s in src_entries.items():
        d = dst / name
        if s.is_dir():
            sync_dir(s, d)
        elif not d.exists() or s.stat().st_mtime > d.stat().st_mtime or s.stat().st_size != d.stat().st_size:
            log("copia" if not d.exists() else "atualiza", d)
            if not DRY_RUN:
                shutil.copy2(s, d)

    # Modo espelho: remove o que não está na origem
    if MIRROR:
        for name, d in dst_entries.items():
            if name not in src_entries:
                log("remove", d)
                if not DRY_RUN:
                    if d.is_dir():
                        shutil.rmtree(d)
                    else:
                        d.unlink()


def main():
    if not SOURCE.is_dir():
        sys.exit(f"Origem não existe: {SOURCE}")

    print(f"{'[SIMULAÇÃO] ' if DRY_RUN else ''}Sincronizando {SOURCE} -> {DEST}")
    sync_dir(SOURCE, DEST)
    print("\\nConcluído.")


if __name__ == "__main__":
    main()
`
    },

    "firewall": {
        powershell: (p) => {
            const protos = p.protocol === "Both" ? ["TCP", "UDP"] : [p.protocol];
            const ruleName = p.rule_name || "MinhaRegra";

            if (p.action === "enable") {
                return `# Habilita o Firewall do Windows. Execute como Administrador.
Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled True
Write-Host "Firewall habilitado em todos os perfis." -ForegroundColor Green
`;
            }
            if (p.action === "disable") {
                return `# DESABILITA o Firewall. Execute como Administrador. Use por sua conta e risco.
Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled False
Write-Host "Firewall DESABILITADO. O sistema está exposto." -ForegroundColor Red
`;
            }
            const verb = p.action === "allow" ? "Allow" : "Block";
            return `# ${verb === "Allow" ? "Permite" : "Bloqueia"} a porta ${p.port}/${protos.join("+")} no firewall. Execute como Administrador.

${protos.map(proto => `New-NetFirewallRule -DisplayName "${ruleName} (${proto})" \`
                    -Direction Inbound \`
                    -Action ${verb} \`
                    -Protocol ${proto} \`
                    -LocalPort ${p.port}`).join("\n\n")}

Write-Host "Regra '${ruleName}' criada: ${verb} porta ${p.port}/${protos.join("+")}." -ForegroundColor Green
`;
        },
        bash: (p) => {
            const protos = p.protocol === "Both" ? ["tcp", "udp"] : [p.protocol.toLowerCase()];
            const ruleName = p.rule_name || "MinhaRegra";

            if (p.action === "enable") {
                return `#!/bin/bash
# Habilita o UFW (Uncomplicated Firewall). Requer sudo.
set -e

if command -v ufw >/dev/null; then
    sudo ufw --force enable
    echo "UFW habilitado."
elif command -v firewall-cmd >/dev/null; then
    sudo systemctl enable --now firewalld
    echo "firewalld habilitado."
else
    echo "Nenhum firewall conhecido (ufw/firewalld) instalado." >&2
    exit 1
fi
`;
            }
            if (p.action === "disable") {
                return `#!/bin/bash
# DESABILITA o firewall. Requer sudo. Use por sua conta e risco.
set -e

if command -v ufw >/dev/null; then
    sudo ufw disable
elif command -v firewall-cmd >/dev/null; then
    sudo systemctl disable --now firewalld
fi
echo "Firewall DESABILITADO."
`;
            }
            const verb = p.action === "allow" ? "allow" : "deny";
            return `#!/bin/bash
# ${verb === "allow" ? "Permite" : "Bloqueia"} a porta ${p.port} no firewall. Requer sudo.
set -e

if command -v ufw >/dev/null; then
${protos.map(proto => `    sudo ufw ${verb} ${p.port}/${proto} comment "${ruleName}"`).join("\n")}
    sudo ufw reload
elif command -v firewall-cmd >/dev/null; then
${protos.map(proto => `    sudo firewall-cmd --permanent --${verb === "allow" ? "add" : "remove"}-port=${p.port}/${proto}`).join("\n")}
    sudo firewall-cmd --reload
else
    echo "Nenhum firewall conhecido (ufw/firewalld) instalado." >&2
    exit 1
fi

echo "Regra aplicada: ${verb} porta ${p.port}/${protos.join("+")}."
`;
        },
        python: (p) => `#!/usr/bin/env python3
"""Configura regras de firewall (Windows ou Linux)."""

import platform
import shutil
import subprocess
import sys

ACTION = "${p.action}"
PORT = ${p.port}
PROTOCOL = "${p.protocol}"
RULE = "${p.rule_name || "MinhaRegra"}"


def run(cmd):
    print(f"$ {' '.join(cmd)}")
    return subprocess.run(cmd, check=False)


def windows():
    if ACTION == "enable":
        run(["netsh", "advfirewall", "set", "allprofiles", "state", "on"])
    elif ACTION == "disable":
        run(["netsh", "advfirewall", "set", "allprofiles", "state", "off"])
    else:
        verb = "Allow" if ACTION == "allow" else "Block"
        protos = ["TCP", "UDP"] if PROTOCOL == "Both" else [PROTOCOL]
        for proto in protos:
            ps = (f"New-NetFirewallRule -DisplayName '{RULE} ({proto})' "
                  f"-Direction Inbound -Action {verb} -Protocol {proto} -LocalPort {PORT}")
            run(["powershell", "-NoProfile", "-Command", ps])


def linux():
    if shutil.which("ufw"):
        if ACTION == "enable":
            run(["sudo", "ufw", "--force", "enable"])
        elif ACTION == "disable":
            run(["sudo", "ufw", "disable"])
        else:
            verb = "allow" if ACTION == "allow" else "deny"
            protos = ["tcp", "udp"] if PROTOCOL == "Both" else [PROTOCOL.lower()]
            for proto in protos:
                run(["sudo", "ufw", verb, f"{PORT}/{proto}"])
    else:
        sys.exit("ufw não encontrado.")


def main():
    system = platform.system()
    if system == "Windows":
        windows()
    elif system == "Linux":
        linux()
    else:
        sys.exit(f"Sistema não suportado: {system}")
    print("Concluído.")


if __name__ == "__main__":
    main()
`
    },

    "monitor-system": {
        powershell: (p) => `# Monitora CPU, RAM e top processos em tempo real.

$interval = ${p.interval}
$duration = ${p.duration}
$top = ${p.top}
$start = Get-Date

while ($true) {
    if ($duration -gt 0 -and ((Get-Date) - $start).TotalSeconds -ge $duration) { break }

    Clear-Host
    Write-Host "===== Monitor do Sistema =====  $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Cyan

    $os = Get-CimInstance Win32_OperatingSystem
    $totalMem = $os.TotalVisibleMemorySize / 1MB
    $freeMem = $os.FreePhysicalMemory / 1MB
    $usedPct = [math]::Round((1 - $freeMem / $totalMem) * 100, 1)

    $cpuCounter = (Get-Counter '\\Processor(_Total)\\% Processor Time').CounterSamples.CookedValue
    $cpuPct = [math]::Round($cpuCounter, 1)

    Write-Host ""
    Write-Host ("CPU:    {0,5}%" -f $cpuPct) -ForegroundColor Yellow
    Write-Host ("RAM:    {0,5}%  ({1:N1} / {2:N1} GB)" -f $usedPct, ($totalMem - $freeMem), $totalMem) -ForegroundColor Yellow

    Write-Host ""
    Write-Host "Top $top processos por RAM:" -ForegroundColor Cyan
    Get-Process | Sort-Object -Property WS -Descending | Select-Object -First $top |
        Format-Table -AutoSize @{N="PID";E={$_.Id}}, ProcessName,
            @{N="RAM(MB)";E={[math]::Round($_.WS / 1MB, 1)}}

    Write-Host "(Ctrl+C pra parar)" -ForegroundColor DarkGray
    Start-Sleep -Seconds $interval
}
`,
        bash: (p) => `#!/bin/bash
# Monitora CPU, RAM e top processos em tempo real.

INTERVAL=${p.interval}
DURATION=${p.duration}
TOP=${p.top}
START=$(date +%s)

while true; do
    if [ $DURATION -gt 0 ]; then
        NOW=$(date +%s)
        [ $((NOW - START)) -ge $DURATION ] && break
    fi

    clear
    echo "===== Monitor do Sistema =====  $(date +%H:%M:%S)"

    # CPU + memória (Linux)
    if [ -f /proc/stat ]; then
        echo ""
        top -b -n 1 | head -5 | tail -3
    fi

    echo ""
    echo "Top $TOP processos por RAM:"
    ps -eo pid,user,%cpu,%mem,comm --sort=-%mem | head -n $((TOP + 1))

    echo ""
    echo "(Ctrl+C pra parar)"
    sleep $INTERVAL
done
`,
        python: (p) => `#!/usr/bin/env python3
"""Monitor de sistema em tempo real (CPU, RAM, top processos)."""

import os
import platform
import subprocess
import sys
import time

INTERVAL = ${p.interval}
DURATION = ${p.duration}
TOP = ${p.top}


def clear():
    os.system("cls" if platform.system() == "Windows" else "clear")


def read_proc_meminfo():
    """Linux only."""
    info = {}
    with open("/proc/meminfo") as f:
        for line in f:
            key, _, value = line.partition(":")
            info[key.strip()] = int(value.strip().split()[0])
    return info


def cpu_percent_linux():
    """Diferença entre duas leituras de /proc/stat."""
    def read():
        with open("/proc/stat") as f:
            fields = list(map(int, f.readline().split()[1:]))
        idle = fields[3]
        total = sum(fields)
        return idle, total
    i1, t1 = read()
    time.sleep(0.5)
    i2, t2 = read()
    return round((1 - (i2 - i1) / (t2 - t1)) * 100, 1)


def show_linux():
    mem = read_proc_meminfo()
    total = mem["MemTotal"] / 1024 / 1024
    free = mem.get("MemAvailable", mem["MemFree"]) / 1024 / 1024
    used_pct = round((1 - free / total) * 100, 1)
    print(f"CPU:    {cpu_percent_linux():5}%")
    print(f"RAM:    {used_pct:5}%  ({total - free:.1f} / {total:.1f} GB)")
    print()
    print(f"Top {TOP} processos por RAM:")
    subprocess.run(["ps", "-eo", "pid,user,%cpu,%mem,comm", "--sort=-%mem"],
                  check=False, stdout=subprocess.PIPE).stdout.decode().split("\\n")[:TOP + 1]
    r = subprocess.run(["ps", "-eo", "pid,user,%cpu,%mem,comm", "--sort=-%mem"],
                      capture_output=True, text=True, check=False)
    for line in r.stdout.splitlines()[:TOP + 1]:
        print(line)


def show_windows():
    ps = (f"$o=Get-CimInstance Win32_OperatingSystem; "
          f"$t=$o.TotalVisibleMemorySize/1MB; $f=$o.FreePhysicalMemory/1MB; "
          f"$c=(Get-Counter '\\Processor(_Total)\\% Processor Time').CounterSamples.CookedValue; "
          f"Write-Host (\\"CPU:    {{0,5:N1}}%\\" -f $c); "
          f"Write-Host (\\"RAM:    {{0,5:N1}}%  ({{1:N1}} / {{2:N1}} GB)\\" -f ((1-$f/$t)*100), ($t-$f), $t); "
          f"Write-Host ''; Write-Host 'Top {TOP} processos por RAM:'; "
          f"Get-Process | Sort-Object -Property WS -Descending | Select-Object -First {TOP} "
          f"| Format-Table -AutoSize Id, ProcessName, @{{N='RAM(MB)';E={{[math]::Round($_.WS/1MB,1)}}}}")
    subprocess.run(["powershell", "-NoProfile", "-Command", ps], check=False)


def main():
    start = time.time()
    try:
        while True:
            if DURATION > 0 and time.time() - start >= DURATION:
                break
            clear()
            print(f"===== Monitor do Sistema =====  {time.strftime('%H:%M:%S')}\\n")
            if platform.system() == "Windows":
                show_windows()
            else:
                show_linux()
            print("\\n(Ctrl+C pra parar)")
            time.sleep(INTERVAL)
    except KeyboardInterrupt:
        print("\\nInterrompido.")


if __name__ == "__main__":
    main()
`
    },

    "scheduled-task": {
        powershell: (p) => {
            const time = p.time || "09:00";
            let triggerLine;
            switch (p.schedule) {
                case "daily":
                    triggerLine = `$trigger = New-ScheduledTaskTrigger -Daily -At "${time}"`;
                    break;
                case "weekly":
                    triggerLine = `$trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday -At "${time}"`;
                    break;
                case "hourly":
                    triggerLine = `$trigger = New-ScheduledTaskTrigger -Once -At (Get-Date) -RepetitionInterval (New-TimeSpan -Hours 1)`;
                    break;
                case "onstart":
                    triggerLine = `$trigger = New-ScheduledTaskTrigger -AtStartup`;
                    break;
                case "onlogon":
                    triggerLine = `$trigger = New-ScheduledTaskTrigger -AtLogOn`;
                    break;
            }
            const cmd = p.command;
            const isPs1 = cmd.toLowerCase().endsWith(".ps1");
            return `# Cria tarefa agendada "${p.name}". Execute como Administrador.

$taskName = "${p.name}"
${triggerLine}

${isPs1 ?
`$action = New-ScheduledTaskAction -Execute "powershell.exe" \`
    -Argument "-NoProfile -ExecutionPolicy Bypass -File \`"${cmd}\`""` :
`$action = New-ScheduledTaskAction -Execute "${cmd}"`}

$principal = New-ScheduledTaskPrincipal -UserId "$env:USERNAME" -LogonType Interactive

if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
    Write-Host "Tarefa anterior removida." -ForegroundColor Yellow
}

Register-ScheduledTask -TaskName $taskName -Trigger $trigger -Action $action -Principal $principal
Write-Host "Tarefa '$taskName' criada com sucesso." -ForegroundColor Green
Write-Host "Pra ver: Get-ScheduledTask -TaskName '$taskName'"
Write-Host "Pra remover: Unregister-ScheduledTask -TaskName '$taskName' -Confirm:\`$false"
`;
        },
        bash: (p) => {
            const time = p.time || "09:00";
            const [h, m] = time.split(":");
            let cronExpr;
            switch (p.schedule) {
                case "daily":   cronExpr = `${m} ${h} * * *`; break;
                case "weekly":  cronExpr = `${m} ${h} * * 1`; break;  // segunda-feira
                case "hourly":  cronExpr = `0 * * * *`; break;
                case "onstart": cronExpr = `@reboot`; break;
                case "onlogon": cronExpr = `@reboot`; break;  // crontab não tem onlogon nativo
            }
            return `#!/bin/bash
# Cria tarefa agendada via cron: ${p.name}
set -e

TASK_NAME="${p.name}"
CRON_EXPR='${cronExpr}'
COMMAND='${p.command.replace(/'/g, "'\\''")}'
COMMENT="# FlowScript: $TASK_NAME"

# Remove entrada anterior (se existir) e adiciona a nova.
( crontab -l 2>/dev/null | grep -v "$COMMENT"; echo "$COMMENT"; echo "$CRON_EXPR $COMMAND" ) | crontab -

echo "Tarefa '$TASK_NAME' agendada."
echo ""
echo "Pra listar:   crontab -l"
echo "Pra remover:  crontab -l | grep -v '$COMMENT' | crontab -"
`;
        },
        python: (p) => `#!/usr/bin/env python3
"""Cria uma tarefa agendada (Windows: schtasks / Linux: cron)."""

import platform
import subprocess
import sys

NAME = "${p.name}"
COMMAND = r"${p.command}"
SCHEDULE = "${p.schedule}"
TIME = "${p.time || "09:00"}"


def windows():
    sc_map = {"daily": "DAILY", "weekly": "WEEKLY", "hourly": "HOURLY",
              "onstart": "ONSTART", "onlogon": "ONLOGON"}
    sc = sc_map[SCHEDULE]
    cmd = ["schtasks", "/Create", "/TN", NAME, "/TR", COMMAND, "/SC", sc, "/F"]
    if SCHEDULE in ("daily", "weekly"):
        cmd += ["/ST", TIME]
    subprocess.run(cmd, check=True)


def linux():
    h, m = TIME.split(":")
    cron_expr = {
        "daily":   f"{m} {h} * * *",
        "weekly":  f"{m} {h} * * 1",
        "hourly":  "0 * * * *",
        "onstart": "@reboot",
        "onlogon": "@reboot",
    }[SCHEDULE]
    comment = f"# FlowScript: {NAME}"
    # Lê crontab atual, remove anterior, adiciona novo
    current = subprocess.run(["crontab", "-l"], capture_output=True, text=True).stdout
    new = "\\n".join(l for l in current.splitlines() if comment not in l)
    new += f"\\n{comment}\\n{cron_expr} {COMMAND}\\n"
    subprocess.run(["crontab", "-"], input=new, text=True, check=True)


def main():
    system = platform.system()
    if system == "Windows":
        windows()
    elif system == "Linux":
        linux()
    else:
        sys.exit(f"Sistema não suportado: {system}")
    print(f"Tarefa '{NAME}' criada.")


if __name__ == "__main__":
    main()
`
    },

    "configure-dns": {
        powershell: (p) => {
            const presets = {
                "google":     ["8.8.8.8",     "8.8.4.4"],
                "cloudflare": ["1.1.1.1",     "1.0.0.1"],
                "quad9":      ["9.9.9.9",     "149.112.112.112"],
                "opendns":    ["208.67.222.222", "208.67.220.220"]
            };
            const [primary, secondary] = presets[p.preset] || [p.primary, p.secondary];

            if (p.action === "reset") {
                return `# Volta o DNS pro automático (DHCP). Execute como Administrador.

Get-NetAdapter | Where-Object Status -eq "Up" | ForEach-Object {
    Set-DnsClientServerAddress -InterfaceIndex $_.ifIndex -ResetServerAddresses
    Write-Host "Resetado: $($_.Name)" -ForegroundColor Green
}

ipconfig /flushdns | Out-Null
Write-Host "Cache DNS limpo." -ForegroundColor Green
`;
            }

            return `# Define servidores DNS personalizados. Execute como Administrador.

$primary = "${primary}"
$secondary = "${secondary}"

Get-NetAdapter | Where-Object Status -eq "Up" | ForEach-Object {
    Set-DnsClientServerAddress -InterfaceIndex $_.ifIndex -ServerAddresses ($primary, $secondary)
    Write-Host "Configurado: $($_.Name)  ->  $primary, $secondary" -ForegroundColor Green
}

ipconfig /flushdns | Out-Null
Write-Host "Cache DNS limpo." -ForegroundColor Green
`;
        },
        bash: (p) => {
            const presets = {
                "google":     ["8.8.8.8",     "8.8.4.4"],
                "cloudflare": ["1.1.1.1",     "1.0.0.1"],
                "quad9":      ["9.9.9.9",     "149.112.112.112"],
                "opendns":    ["208.67.222.222", "208.67.220.220"]
            };
            const [primary, secondary] = presets[p.preset] || [p.primary, p.secondary];

            if (p.action === "reset") {
                return `#!/bin/bash
# Volta o DNS pro automático (gerenciado pelo NetworkManager/systemd-resolved).
set -e

if command -v nmcli >/dev/null; then
    CONN=$(nmcli -t -f NAME connection show --active | head -1)
    sudo nmcli connection modify "$CONN" ipv4.dns ""
    sudo nmcli connection modify "$CONN" ipv4.ignore-auto-dns no
    sudo nmcli connection up "$CONN"
    echo "DNS resetado pra automático na conexão: $CONN"
elif command -v resolvectl >/dev/null; then
    sudo resolvectl revert "$(ip route | awk '/default/{print $5; exit}')"
    echo "DNS resetado via resolvectl."
fi

sudo systemd-resolve --flush-caches 2>/dev/null || sudo resolvectl flush-caches 2>/dev/null || true
`;
            }

            return `#!/bin/bash
# Define DNS personalizado. Requer sudo.
set -e

PRIMARY="${primary}"
SECONDARY="${secondary}"

if command -v nmcli >/dev/null; then
    CONN=$(nmcli -t -f NAME connection show --active | head -1)
    sudo nmcli connection modify "$CONN" ipv4.dns "$PRIMARY $SECONDARY"
    sudo nmcli connection modify "$CONN" ipv4.ignore-auto-dns yes
    sudo nmcli connection up "$CONN"
    echo "DNS configurado: $PRIMARY, $SECONDARY  (conexão: $CONN)"
else
    # Fallback: edita resolv.conf diretamente (pode ser sobrescrito por outro serviço).
    sudo cp /etc/resolv.conf /etc/resolv.conf.bak
    echo -e "nameserver $PRIMARY\\nnameserver $SECONDARY" | sudo tee /etc/resolv.conf >/dev/null
    echo "Editado /etc/resolv.conf (backup em .bak)"
fi
`;
        },
        python: (p) => {
            const presets = {
                "google":     ["8.8.8.8",     "8.8.4.4"],
                "cloudflare": ["1.1.1.1",     "1.0.0.1"],
                "quad9":      ["9.9.9.9",     "149.112.112.112"],
                "opendns":    ["208.67.222.222", "208.67.220.220"]
            };
            const [primary, secondary] = presets[p.preset] || [p.primary, p.secondary];
            return `#!/usr/bin/env python3
"""Configura ou reseta servidores DNS."""

import platform
import shutil
import subprocess
import sys

ACTION = "${p.action}"
PRIMARY = "${primary}"
SECONDARY = "${secondary}"


def run(cmd):
    print(f"$ {' '.join(cmd)}")
    return subprocess.run(cmd, check=True)


def windows():
    # Lista adaptadores ativos via PowerShell e configura cada um.
    if ACTION == "reset":
        ps = ("Get-NetAdapter | Where-Object Status -eq 'Up' | ForEach-Object { "
              "Set-DnsClientServerAddress -InterfaceIndex $_.ifIndex -ResetServerAddresses }")
    else:
        ps = (f"Get-NetAdapter | Where-Object Status -eq 'Up' | ForEach-Object {{ "
              f"Set-DnsClientServerAddress -InterfaceIndex $_.ifIndex "
              f"-ServerAddresses ('{PRIMARY}', '{SECONDARY}') }}")
    run(["powershell", "-NoProfile", "-Command", ps])
    run(["ipconfig", "/flushdns"])


def linux():
    if not shutil.which("nmcli"):
        sys.exit("nmcli não encontrado.")
    result = subprocess.run(["nmcli", "-t", "-f", "NAME", "connection", "show", "--active"],
                           capture_output=True, text=True, check=True)
    conn = result.stdout.strip().splitlines()[0]
    if ACTION == "reset":
        run(["sudo", "nmcli", "connection", "modify", conn, "ipv4.dns", ""])
        run(["sudo", "nmcli", "connection", "modify", conn, "ipv4.ignore-auto-dns", "no"])
    else:
        run(["sudo", "nmcli", "connection", "modify", conn,
             "ipv4.dns", f"{PRIMARY} {SECONDARY}"])
        run(["sudo", "nmcli", "connection", "modify", conn, "ipv4.ignore-auto-dns", "yes"])
    run(["sudo", "nmcli", "connection", "up", conn])


def main():
    system = platform.system()
    if system == "Windows":
        windows()
    elif system == "Linux":
        linux()
    else:
        sys.exit(f"Sistema não suportado: {system}")
    print("DNS configurado.")


if __name__ == "__main__":
    main()
`;
        }
    },

    "activate-license": {
        powershell: (p) => {
            const key = (p.key || "").trim();
            const slmgr = `$env:windir\\System32\\slmgr.vbs`;
            const osppFinder = `$paths = @(
    "$env:ProgramFiles\\Microsoft Office\\Office16\\OSPP.VBS",
    "${"$"}{env:ProgramFiles(x86)}\\Microsoft Office\\Office16\\OSPP.VBS",
    "$env:ProgramFiles\\Microsoft Office\\Office15\\OSPP.VBS",
    "${"$"}{env:ProgramFiles(x86)}\\Microsoft Office\\Office15\\OSPP.VBS"
)
$OSPP = $paths | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $OSPP) {
    Write-Host "Office não encontrado (OSPP.VBS ausente em todos os caminhos conhecidos)." -ForegroundColor Red
    exit 1
}
Write-Host "OSPP em: $OSPP" -ForegroundColor Green`;

            if (p.action === "windows_status") {
                return `# Consulta o status da ativação do Windows.

Write-Host "===== Status da ativação =====" -ForegroundColor Cyan
cscript //nologo ${slmgr} /xpr

Write-Host "\`n===== Detalhes da licença =====" -ForegroundColor Cyan
cscript //nologo ${slmgr} /dli
`;
            }
            if (p.action === "windows_activate") {
                if (!key) return `# Erro: chave de produto obrigatória.
Write-Host "Preencha o campo 'Chave de produto' antes de gerar este script." -ForegroundColor Red
exit 1
`;
                return `# Ativa o Windows com a chave fornecida. Execute como Administrador.

$Key = "${key}"

Write-Host "Instalando chave..." -ForegroundColor Cyan
cscript //nologo ${slmgr} /ipk $Key

Write-Host "\`nAtivando online..." -ForegroundColor Cyan
cscript //nologo ${slmgr} /ato

Write-Host "\`n===== Resultado =====" -ForegroundColor Cyan
cscript //nologo ${slmgr} /xpr
`;
            }
            if (p.action === "office_status") {
                return `# Consulta o status da ativação do Office.

${osppFinder}

Write-Host "\`n===== Status =====" -ForegroundColor Cyan
cscript //nologo $OSPP /dstatus
`;
            }
            if (p.action === "office_activate") {
                if (!key) return `# Erro: chave de produto obrigatória.
Write-Host "Preencha o campo 'Chave de produto' antes de gerar este script." -ForegroundColor Red
exit 1
`;
                return `# Ativa o Office com a chave fornecida. Execute como Administrador.

${osppFinder}

$Key = "${key}"

Write-Host "\`nInstalando chave..." -ForegroundColor Cyan
cscript //nologo $OSPP /inpkey:$Key

Write-Host "\`nAtivando..." -ForegroundColor Cyan
cscript //nologo $OSPP /act

Write-Host "\`n===== Resultado =====" -ForegroundColor Cyan
cscript //nologo $OSPP /dstatus
`;
            }
            return "# Ação desconhecida.\n";
        },
        bash: (p) => `#!/bin/bash
# Esta tarefa é específica do Windows — usa slmgr.vbs e OSPP.VBS,
# que só existem no Windows. Use a versão PowerShell deste script.

echo "Esta tarefa só funciona no Windows."
echo "Gere a versão PowerShell desta mesma tarefa no FlowScript."
exit 1
`,
        python: (p) => `#!/usr/bin/env python3
"""Ativa Windows/Office com chave de produto (Windows-only)."""

import os
import platform
import subprocess
import sys

ACTION = "${p.action}"
KEY = r"${(p.key || "").trim()}"


def find_ospp():
    candidates = [
        os.path.expandvars(r"%ProgramFiles%\\Microsoft Office\\Office16\\OSPP.VBS"),
        os.path.expandvars(r"%ProgramFiles(x86)%\\Microsoft Office\\Office16\\OSPP.VBS"),
        os.path.expandvars(r"%ProgramFiles%\\Microsoft Office\\Office15\\OSPP.VBS"),
        os.path.expandvars(r"%ProgramFiles(x86)%\\Microsoft Office\\Office15\\OSPP.VBS"),
    ]
    for path in candidates:
        if os.path.isfile(path):
            return path
    return None


def run(cmd):
    print("$ " + " ".join(cmd))
    return subprocess.run(cmd, check=False)


def main():
    if platform.system() != "Windows":
        sys.exit("Esta tarefa só funciona no Windows.")

    slmgr = os.path.expandvars(r"%windir%\\System32\\slmgr.vbs")

    if ACTION == "windows_status":
        run(["cscript", "//nologo", slmgr, "/xpr"])
        run(["cscript", "//nologo", slmgr, "/dli"])
    elif ACTION == "windows_activate":
        if not KEY:
            sys.exit("Chave de produto obrigatória.")
        run(["cscript", "//nologo", slmgr, "/ipk", KEY])
        run(["cscript", "//nologo", slmgr, "/ato"])
        run(["cscript", "//nologo", slmgr, "/xpr"])
    else:
        ospp = find_ospp()
        if not ospp:
            sys.exit("Office não encontrado.")
        print(f"OSPP em: {ospp}")
        if ACTION == "office_status":
            run(["cscript", "//nologo", ospp, "/dstatus"])
        elif ACTION == "office_activate":
            if not KEY:
                sys.exit("Chave de produto obrigatória.")
            run(["cscript", "//nologo", ospp, "/inpkey:" + KEY])
            run(["cscript", "//nologo", ospp, "/act"])
            run(["cscript", "//nologo", ospp, "/dstatus"])


if __name__ == "__main__":
    main()
`
    },

    "archive": {
        powershell: (p) => {
            if (p.action === "compress") {
                return `# Compacta uma pasta em arquivo ZIP.

$Source = "${p.source}"
$Destination = "${p.destination}"

if (-not (Test-Path $Source)) {
    Write-Host "Origem não existe: $Source" -ForegroundColor Red
    exit 1
}

if (Test-Path $Destination) {
    Write-Host "Destino já existe - sobrescrevendo." -ForegroundColor Yellow
    Remove-Item $Destination -Force
}

Write-Host "Compactando $Source -> $Destination" -ForegroundColor Cyan
Compress-Archive -Path "$Source\\*" -DestinationPath $Destination -CompressionLevel Optimal

$Size = (Get-Item $Destination).Length / 1MB
Write-Host ("Concluído: {0} ({1:N2} MB)" -f $Destination, $Size) -ForegroundColor Green
`;
            }
            return `# Extrai um arquivo ZIP.

$Source = "${p.source}"
$Destination = "${p.destination}"

if (-not (Test-Path $Source)) {
    Write-Host "Arquivo não existe: $Source" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $Destination)) {
    New-Item -ItemType Directory -Path $Destination -Force | Out-Null
}

Write-Host "Extraindo $Source -> $Destination" -ForegroundColor Cyan
Expand-Archive -Path $Source -DestinationPath $Destination -Force

Write-Host "Concluído." -ForegroundColor Green
`;
        },
        bash: (p) => {
            const source = p.source.replace(/\\/g, "/");
            const dest = p.destination.replace(/\\/g, "/");
            if (p.action === "compress") {
                if (p.format === "tar.gz") {
                    return `#!/bin/bash
# Compacta uma pasta em tar.gz.
set -e

SOURCE="${source}"
DESTINATION="${dest}"

if [ ! -d "$SOURCE" ]; then
    echo "Origem não existe: $SOURCE" >&2
    exit 1
fi

echo "Compactando $SOURCE -> $DESTINATION"
tar -czf "$DESTINATION" -C "$(dirname "$SOURCE")" "$(basename "$SOURCE")"

SIZE=$(du -h "$DESTINATION" | cut -f1)
echo "Concluído: $DESTINATION ($SIZE)"
`;
                }
                return `#!/bin/bash
# Compacta uma pasta em ZIP. Requer 'zip' instalado.
set -e

SOURCE="${source}"
DESTINATION="${dest}"

if [ ! -d "$SOURCE" ]; then
    echo "Origem não existe: $SOURCE" >&2
    exit 1
fi

if ! command -v zip >/dev/null; then
    echo "Comando 'zip' não encontrado. Instale com: sudo apt install zip" >&2
    exit 1
fi

echo "Compactando $SOURCE -> $DESTINATION"
( cd "$(dirname "$SOURCE")" && zip -r "$DESTINATION" "$(basename "$SOURCE")" )

SIZE=$(du -h "$DESTINATION" | cut -f1)
echo "Concluído: $DESTINATION ($SIZE)"
`;
            }
            return `#!/bin/bash
# Descompacta um arquivo (auto-detecta zip ou tar.gz).
set -e

SOURCE="${source}"
DESTINATION="${dest}"

if [ ! -f "$SOURCE" ]; then
    echo "Arquivo não existe: $SOURCE" >&2
    exit 1
fi

mkdir -p "$DESTINATION"

echo "Extraindo $SOURCE -> $DESTINATION"
case "$SOURCE" in
    *.tar.gz|*.tgz)  tar -xzf "$SOURCE" -C "$DESTINATION" ;;
    *.tar.bz2|*.tbz) tar -xjf "$SOURCE" -C "$DESTINATION" ;;
    *.tar.xz|*.txz)  tar -xJf "$SOURCE" -C "$DESTINATION" ;;
    *.tar)           tar -xf  "$SOURCE" -C "$DESTINATION" ;;
    *.zip)           unzip -o "$SOURCE" -d "$DESTINATION" ;;
    *)
        echo "Formato não reconhecido: $SOURCE" >&2
        exit 1 ;;
esac

echo "Concluído."
`;
        },
        python: (p) => `#!/usr/bin/env python3
"""Compacta uma pasta ou extrai um arquivo compactado."""

import shutil
import sys
from pathlib import Path

ACTION = "${p.action}"
SOURCE = Path(r"${p.source}")
DESTINATION = Path(r"${p.destination}")
FORMAT = "${p.format || 'zip'}"


def main():
    if not SOURCE.exists():
        sys.exit(f"Origem não existe: {SOURCE}")

    if ACTION == "compress":
        # Remove extensão pra passar pra make_archive
        fmt = "zip" if FORMAT == "zip" else "gztar"
        ext = ".zip" if FORMAT == "zip" else ".tar.gz"
        base = str(DESTINATION)
        if base.endswith(ext):
            base = base[:-len(ext)]
        print(f"Compactando {SOURCE} -> {base}{ext}")
        result = shutil.make_archive(
            base_name=base,
            format=fmt,
            root_dir=str(SOURCE.parent),
            base_dir=SOURCE.name,
        )
        size_mb = Path(result).stat().st_size / (1024 * 1024)
        print(f"Concluído: {result} ({size_mb:.2f} MB)")
    else:
        DESTINATION.mkdir(parents=True, exist_ok=True)
        print(f"Extraindo {SOURCE} -> {DESTINATION}")
        shutil.unpack_archive(str(SOURCE), str(DESTINATION))
        print("Concluído.")


if __name__ == "__main__":
    main()
`
    },

    "search-text": {
        powershell: (p) => `# Busca "${p.pattern}" em ${p.folder}.

$Folder = "${p.folder}"
$Pattern = "${p.pattern.replace(/"/g, '`"')}"
$Filter = "${p.extension === "*" ? "*" : "*" + p.extension}"

if (-not (Test-Path $Folder)) {
    Write-Host "Pasta não existe: $Folder" -ForegroundColor Red
    exit 1
}

$params = @{
    Path = $Folder
    Recurse = $true
    File = $true
    Filter = $Filter
    ErrorAction = "SilentlyContinue"
}

$matches = Get-ChildItem @params |
    Select-String -Pattern $Pattern${p.caseSensitive === "no" ? " -CaseSensitive:$false" : ""}

if (-not $matches) {
    Write-Host "Nenhuma ocorrência encontrada." -ForegroundColor Yellow
    exit 0
}

$matches | ForEach-Object {
${p.showLines === "yes" ?
`    Write-Host ("{0}:{1}: {2}" -f $_.Path, $_.LineNumber, $_.Line.Trim())` :
`    Write-Host ("{0}: {1}" -f $_.Path, $_.Line.Trim())`}
}

Write-Host ""
Write-Host ("Total: {0} ocorrência(s) em {1} arquivo(s)" -f $matches.Count, ($matches | Group-Object Path).Count) -ForegroundColor Cyan
`,
        bash: (p) => {
            const folder = p.folder.replace(/\\/g, "/");
            const flags = [];
            if (p.showLines === "yes") flags.push("-n");
            if (p.caseSensitive === "no") flags.push("-i");
            flags.push("-r");
            const flagStr = flags.join(" ");
            return `#!/bin/bash
# Busca "${p.pattern}" em ${folder}.

FOLDER="${folder}"
PATTERN='${p.pattern.replace(/'/g, "'\\''")}'
${p.extension !== "*" ? `INCLUDE="--include=*${p.extension}"` : `INCLUDE=""`}

if [ ! -d "$FOLDER" ]; then
    echo "Pasta não existe: $FOLDER" >&2
    exit 1
fi

grep ${flagStr} $INCLUDE "$PATTERN" "$FOLDER" || echo "Nenhuma ocorrência encontrada."
`;
        },
        python: (p) => `#!/usr/bin/env python3
"""Busca um padrão de texto em arquivos."""

import os
import re
import sys
from pathlib import Path

FOLDER = Path(r"${p.folder}")
PATTERN = r"${p.pattern.replace(/"/g, '\\"').replace(/\\/g, "\\\\")}"
EXTENSION = "${p.extension}"
CASE_SENSITIVE = ${p.caseSensitive === "yes" ? "True" : "False"}
SHOW_LINES = ${p.showLines === "yes" ? "True" : "False"}


def main():
    if not FOLDER.is_dir():
        sys.exit(f"Pasta não existe: {FOLDER}")

    flags = 0 if CASE_SENSITIVE else re.IGNORECASE
    regex = re.compile(PATTERN, flags)
    total = 0
    files_with_matches = set()

    for path in FOLDER.rglob("*"):
        if not path.is_file():
            continue
        if EXTENSION != "*" and path.suffix != EXTENSION:
            continue
        try:
            with open(path, "r", encoding="utf-8", errors="ignore") as f:
                for lineno, line in enumerate(f, 1):
                    if regex.search(line):
                        total += 1
                        files_with_matches.add(path)
                        if SHOW_LINES:
                            print(f"{path}:{lineno}: {line.rstrip()}")
                        else:
                            print(f"{path}: {line.rstrip()}")
        except (OSError, PermissionError):
            pass

    if total == 0:
        print("Nenhuma ocorrência encontrada.")
    else:
        print(f"\\nTotal: {total} ocorrência(s) em {len(files_with_matches)} arquivo(s)")


if __name__ == "__main__":
    main()
`
    },

    "env-vars": {
        powershell: (p) => {
            const scope = p.scope === "system" ? "Machine" : "User";
            const adminNote = p.scope === "system"
                ? "# Modo SISTEMA — execute como Administrador.\n\n"
                : "";

            if (p.action === "list") {
                return `${adminNote}# Lista variáveis de ambiente do escopo '${p.scope}'.

Write-Host "===== Variáveis de ambiente (${p.scope}) =====" -ForegroundColor Cyan
[Environment]::GetEnvironmentVariables("${scope}").GetEnumerator() |
    Sort-Object Key |
    Format-Table -AutoSize @{N="Nome";E={$_.Key}}, @{N="Valor";E={$_.Value}}
`;
            }
            if (p.action === "set") {
                return `${adminNote}# Define a variável de ambiente "${p.name}".

$Name = "${p.name}"
$Value = "${p.value.replace(/"/g, '`"')}"

[Environment]::SetEnvironmentVariable($Name, $Value, "${scope}")
Write-Host "Definido: $Name = $Value (escopo: ${p.scope})" -ForegroundColor Green
Write-Host "Reinicie o terminal para que a mudança seja visível." -ForegroundColor Yellow
`;
            }
            return `${adminNote}# Remove a variável de ambiente "${p.name}".

$Name = "${p.name}"

if (-not [Environment]::GetEnvironmentVariable($Name, "${scope}")) {
    Write-Host "Variável '$Name' não existe no escopo ${p.scope}." -ForegroundColor Yellow
    exit 0
}

[Environment]::SetEnvironmentVariable($Name, $null, "${scope}")
Write-Host "Removida: $Name (escopo: ${p.scope})" -ForegroundColor Green
`;
        },
        bash: (p) => {
            const file = p.scope === "system" ? "/etc/environment" : "$HOME/.bashrc";
            const sudo = p.scope === "system" ? "sudo " : "";
            if (p.action === "list") {
                return `#!/bin/bash
# Lista variáveis de ambiente.

echo "===== Variáveis de ambiente ====="
printenv | sort
`;
            }
            if (p.action === "set") {
                return `#!/bin/bash
# Define a variável "${p.name}" no ${file}.
set -e

NAME="${p.name}"
VALUE='${p.value.replace(/'/g, "'\\''")}'
FILE="${file}"

# Remove definição anterior (se existir).
${sudo}sed -i "/^export $NAME=/d" "$FILE" 2>/dev/null || true
${sudo}sed -i "/^$NAME=/d" "$FILE" 2>/dev/null || true

# Adiciona nova definição.
${p.scope === "system"
    ? `echo "$NAME=\\"$VALUE\\"" | sudo tee -a "$FILE" > /dev/null`
    : `echo "export $NAME=\\"$VALUE\\"" >> "$FILE"`}

echo "Definido em $FILE: $NAME=$VALUE"
echo "Para aplicar agora: source $FILE"
`;
            }
            return `#!/bin/bash
# Remove a variável "${p.name}" do ${file}.
set -e

NAME="${p.name}"
FILE="${file}"

${sudo}sed -i "/^export $NAME=/d" "$FILE"
${sudo}sed -i "/^$NAME=/d" "$FILE"

echo "Removida: $NAME do $FILE"
echo "A variável continua na sessão atual até reiniciar o terminal."
`;
        },
        python: (p) => `#!/usr/bin/env python3
"""Gerencia variáveis de ambiente (multiplataforma)."""

import os
import platform
import subprocess
import sys

ACTION = "${p.action}"
SCOPE = "${p.scope}"
NAME = "${p.name}"
VALUE = r"${p.value || ""}"


def list_all():
    print("===== Variáveis de ambiente =====")
    for key in sorted(os.environ):
        print(f"{key}={os.environ[key]}")


def set_var():
    if platform.system() == "Windows":
        target = "Machine" if SCOPE == "system" else "User"
        ps = f"[Environment]::SetEnvironmentVariable('{NAME}', '{VALUE}', '{target}')"
        subprocess.run(["powershell", "-NoProfile", "-Command", ps], check=True)
    else:
        file = "/etc/environment" if SCOPE == "system" else os.path.expanduser("~/.bashrc")
        prefix = "" if SCOPE == "system" else "export "
        line = f'{prefix}{NAME}="{VALUE}"\\n'
        # Remove anterior
        if os.path.isfile(file):
            with open(file) as f:
                content = f.read()
            content = "\\n".join(l for l in content.splitlines()
                                 if not l.startswith((f"{NAME}=", f"export {NAME}=")))
            content += "\\n" + line
            if SCOPE == "system":
                # Precisa de sudo
                proc = subprocess.run(["sudo", "tee", file], input=content, text=True, check=True)
            else:
                with open(file, "w") as f:
                    f.write(content)
    print(f"Definido: {NAME}={VALUE} (escopo: {SCOPE})")


def remove_var():
    if platform.system() == "Windows":
        target = "Machine" if SCOPE == "system" else "User"
        ps = f"[Environment]::SetEnvironmentVariable('{NAME}', $null, '{target}')"
        subprocess.run(["powershell", "-NoProfile", "-Command", ps], check=True)
    else:
        file = "/etc/environment" if SCOPE == "system" else os.path.expanduser("~/.bashrc")
        if not os.path.isfile(file):
            sys.exit(f"Arquivo {file} não existe.")
        with open(file) as f:
            content = f.read()
        new = "\\n".join(l for l in content.splitlines()
                         if not l.startswith((f"{NAME}=", f"export {NAME}=")))
        with open(file, "w") as f:
            f.write(new)
    print(f"Removida: {NAME} (escopo: {SCOPE})")


def main():
    if ACTION == "list":
        list_all()
    elif ACTION == "set":
        set_var()
    elif ACTION == "remove":
        remove_var()


if __name__ == "__main__":
    main()
`
    }
};

const LANG_META = {
    powershell: { ext: "ps1", name: "PowerShell" },
    bash:       { ext: "sh",  name: "Bash" },
    python:     { ext: "py",  name: "Python" }
};

const TASK_NAMES = {
    "create-user":       "criar-usuario",
    "clear-cache":       "limpar-cache",
    "reset-network":     "resetar-rede",
    "backup":            "backup",
    "generate-password": "gerar-senha",
    "system-update":     "atualizar-sistema",
    "network-diagnose":  "diagnostico-rede",
    "list-services":     "listar-servicos",
    "find-large-files":  "achar-arquivos-grandes",
    "install-software":  "instalar-software",
    "ssh-key":           "gerar-chave-ssh",
    "system-info":       "info-sistema",
    "list-processes":    "listar-processos",
    "kill-process":      "matar-processo",
    "shutdown":          "desligar",
    "public-ip":         "ip-publico",
    "scan-ports":        "verificar-portas",
    "file-hash":         "hash-arquivo",
    "bulk-rename":       "renomear-em-lote",
    "sync-folders":      "sincronizar-pastas",
    "firewall":          "configurar-firewall",
    "monitor-system":    "monitor-sistema",
    "scheduled-task":    "tarefa-agendada",
    "configure-dns":     "configurar-dns",
    "activate-license":  "ativar-windows-office",
    "archive":           "compactar-descompactar",
    "search-text":       "buscar-texto",
    "env-vars":          "variaveis-ambiente"
};

// ===========================================================================
// HEADER — comentário com metadados, prepended ao script gerado.
// ===========================================================================

function generateHeader(lang, taskLabel, params) {
    const now = new Date().toLocaleString("pt-BR");
    const cleanParams = Object.entries(params)
        .filter(([_, v]) => v !== "" && v !== undefined)
        .map(([k, v]) => `${k}=${v}`)
        .join(", ");

    const lines = [
        `Gerado pelo FlowScript em ${now}`,
        `Tarefa: ${taskLabel}`,
    ];
    if (cleanParams) lines.push(`Parâmetros: ${cleanParams}`);
    lines.push("Revise antes de executar.");

    // Comentário de bloco em cada linguagem.
    const prefix = "# ";
    return lines.map(l => prefix + l).join("\n") + "\n\n";
}

// Insere o cabeçalho preservando shebang (se houver) no topo.
function applyHeader(code, header) {
    const lines = code.split("\n");
    if (lines[0] && lines[0].startsWith("#!")) {
        return lines[0] + "\n" + header + lines.slice(1).join("\n").replace(/^\n+/, "");
    }
    return header + code;
}

// ===========================================================================
// CATÁLOGO DE SOFTWARE — programas comuns com IDs já mapeados por plataforma.
// ===========================================================================

const SOFTWARE_CATALOG = [
    {
        category: "Navegadores",
        items: [
            { id: "chrome",   name: "Chrome",   letter: "C", color: "#4285f4", winget: "Google.Chrome",       apt: "google-chrome-stable" },
            { id: "firefox",  name: "Firefox",  letter: "F", color: "#ff7139", winget: "Mozilla.Firefox",     apt: "firefox" },
            { id: "edge",     name: "Edge",     letter: "E", color: "#0078d4", winget: "Microsoft.Edge" },
            { id: "brave",    name: "Brave",    letter: "B", color: "#fb542b", winget: "Brave.Brave",         apt: "brave-browser" },
            { id: "opera",    name: "Opera",    letter: "O", color: "#ff1b2d", winget: "Opera.Opera" },
            { id: "operagx",  name: "Opera GX", letter: "G", color: "#ff1b2d", winget: "Opera.OperaGX" },
            { id: "vivaldi",  name: "Vivaldi",  letter: "V", color: "#ef3939", winget: "VivaldiTechnologies.Vivaldi" },
            { id: "tor",       name: "Tor",       letter: "T", color: "#7d4698", winget: "TorProject.TorBrowser" },
            { id: "librewolf", name: "LibreWolf", letter: "L", color: "#00acff", winget: "LibreWolf.LibreWolf" },
            { id: "floorp",    name: "Floorp",    letter: "F", color: "#048ef0", winget: "Ablaze.Floorp" },
            { id: "yandex",    name: "Yandex",    letter: "Y", color: "#ff0000", winget: "Yandex.Browser" },
            { id: "palemoon",  name: "Pale Moon", letter: "P", color: "#3f88c5", winget: "MoonchildProductions.PaleMoon" }
        ]
    },
    {
        category: "Comunicação",
        items: [
            { id: "whatsapp",    name: "WhatsApp",    letter: "W", color: "#25d366", winget: "WhatsApp.WhatsApp" },
            { id: "telegram",    name: "Telegram",    letter: "T", color: "#0088cc", winget: "Telegram.TelegramDesktop", apt: "telegram-desktop" },
            { id: "discord",     name: "Discord",     letter: "D", color: "#5865f2", winget: "Discord.Discord",     apt: "discord" },
            { id: "zoom",        name: "Zoom",        letter: "Z", color: "#2d8cff", winget: "Zoom.Zoom",           apt: "zoom" },
            { id: "skype",       name: "Skype",       letter: "S", color: "#00aff0", winget: "Microsoft.Skype",     apt: "skypeforlinux" },
            { id: "slack",       name: "Slack",       letter: "S", color: "#4a154b", winget: "SlackTechnologies.Slack", apt: "slack" },
            { id: "teams",       name: "Teams",       letter: "T", color: "#6264a7", winget: "Microsoft.Teams" },
            { id: "signal",      name: "Signal",      letter: "S", color: "#2592e9", winget: "OpenWhisperSystems.Signal", apt: "signal-desktop" },
            { id: "thunderbird", name: "Thunderbird", letter: "T", color: "#0a84ff", winget: "Mozilla.Thunderbird", apt: "thunderbird" },
            { id: "element",     name: "Element",     letter: "E", color: "#0dbd8b", winget: "Element.Element",     apt: "element-desktop" },
            { id: "pidgin",      name: "Pidgin",      letter: "P", color: "#fadd66", winget: "Pidgin.Pidgin",       apt: "pidgin" },
            { id: "viber",       name: "Viber",       letter: "V", color: "#7360f2", winget: "Viber.Viber" },
            { id: "mattermost",  name: "Mattermost",  letter: "M", color: "#0058cc", winget: "Mattermost.MattermostDesktop" },
            { id: "wechat",      name: "WeChat",      letter: "W", color: "#0fc908", winget: "Tencent.WeChat" }
        ]
    },
    {
        category: "Mídia",
        items: [
            { id: "vlc",       name: "VLC",         letter: "V", color: "#ff8800", winget: "VideoLAN.VLC",         apt: "vlc" },
            { id: "spotify",   name: "Spotify",     letter: "S", color: "#1db954", winget: "Spotify.Spotify",      apt: "spotify-client" },
            { id: "obs",       name: "OBS Studio",  letter: "O", color: "#302e31", winget: "OBSProject.OBSStudio", apt: "obs-studio" },
            { id: "streamlabs",name: "Streamlabs",  letter: "S", color: "#80f5d2", winget: "Streamlabs.Streamlabs" },
            { id: "gimp",      name: "GIMP",        letter: "G", color: "#5c5543", winget: "GIMP.GIMP",            apt: "gimp" },
            { id: "audacity",  name: "Audacity",    letter: "A", color: "#0080c8", winget: "Audacity.Audacity",    apt: "audacity" },
            { id: "krita",     name: "Krita",       letter: "K", color: "#3babf2", winget: "KDE.Krita",            apt: "krita" },
            { id: "inkscape",  name: "Inkscape",    letter: "I", color: "#1a1a1a", winget: "Inkscape.Inkscape",    apt: "inkscape" },
            { id: "blender",   name: "Blender",     letter: "B", color: "#ea7600", winget: "BlenderFoundation.Blender", apt: "blender" },
            { id: "handbrake", name: "HandBrake",   letter: "H", color: "#f7b500", winget: "HandBrake.HandBrake",  apt: "handbrake" },
            { id: "paintnet",  name: "Paint.NET",   letter: "P", color: "#d9342b", winget: "dotPDN.PaintDotNet" },
            { id: "irfanview", name: "IrfanView",   letter: "I", color: "#2962ff", winget: "IrfanSkiljan.IrfanView" },
            { id: "davinci",   name: "DaVinci",     letter: "D", color: "#ff4136", winget: "BlackmagicDesign.DaVinciResolve" },
            { id: "kdenlive",  name: "Kdenlive",    letter: "K", color: "#1d99f3", winget: "KDE.Kdenlive",         apt: "kdenlive" },
            { id: "klite",     name: "K-Lite Codec",letter: "K", color: "#c8102e", winget: "CodecGuide.K-LiteCodecPack.Mega" },
            { id: "foobar",    name: "foobar2000",  letter: "F", color: "#3a3a3a", winget: "PeterPawlowski.foobar2000" },
            { id: "aimp",      name: "AIMP",        letter: "A", color: "#f57c00", winget: "AIMP.AIMP" },
            { id: "musicbee",  name: "MusicBee",    letter: "M", color: "#ff5722", winget: "MusicBee.MusicBee" },
            { id: "itunes",    name: "iTunes",      letter: "i", color: "#ff1d50", winget: "Apple.iTunes" },
            { id: "potplayer", name: "PotPlayer",   letter: "P", color: "#ff8c00", winget: "Daum.PotPlayer" },
            { id: "mpv",       name: "mpv",         letter: "m", color: "#3a1f49", winget: "shinchiro.mpv",        apt: "mpv" },
            { id: "shotcut",   name: "Shotcut",     letter: "S", color: "#2a2a2a", winget: "Meltytech.Shotcut",    apt: "shotcut" },
            { id: "openshot",  name: "OpenShot",    letter: "O", color: "#d62828", winget: "OpenShot.OpenShot",    apt: "openshot-qt" },
            { id: "reaper",    name: "REAPER",      letter: "R", color: "#5a5a5a", winget: "Cockos.REAPER" },
            { id: "plex",      name: "Plex",        letter: "P", color: "#e5a00d", winget: "Plex.Plex" },
            { id: "jellyfin",  name: "Jellyfin",    letter: "J", color: "#aa5cc3", winget: "Jellyfin.Jellyfin" }
        ]
    },
    {
        category: "Compactadores",
        items: [
            { id: "winrar",  name: "WinRAR", letter: "W", color: "#d52a14", winget: "RARLab.WinRAR" },
            { id: "7zip",    name: "7-Zip",  letter: "7", color: "#1c1c1c", winget: "7zip.7zip",    apt: "p7zip-full" },
            { id: "peazip",   name: "PeaZip",   letter: "P", color: "#f0c00c", winget: "Giorgiotani.Peazip", apt: "peazip" },
            { id: "nanazip",  name: "NanaZip",  letter: "N", color: "#4caf50", winget: "M2Team.NanaZip" },
            { id: "bandizip", name: "Bandizip", letter: "B", color: "#0078d4", winget: "Bandisoft.Bandizip" }
        ]
    },
    {
        category: "Jogos",
        items: [
            { id: "steam",      name: "Steam",          letter: "S", color: "#1b2838", winget: "Valve.Steam",                apt: "steam" },
            { id: "epic",       name: "Epic Games",     letter: "E", color: "#313131", winget: "EpicGames.EpicGamesLauncher" },
            { id: "ea",         name: "EA App",         letter: "E", color: "#ff4747", winget: "ElectronicArts.EADesktop" },
            { id: "battlenet",  name: "Battle.net",     letter: "B", color: "#0074e0", winget: "Blizzard.BattleNet" },
            { id: "ubisoft",    name: "Ubisoft Connect",letter: "U", color: "#0070ff", winget: "Ubisoft.Connect" },
            { id: "gog",        name: "GOG Galaxy",     letter: "G", color: "#86328a", winget: "GOG.Galaxy" },
            { id: "minecraft",  name: "Minecraft",      letter: "M", color: "#62a532", winget: "Mojang.MinecraftLauncher" },
            { id: "geforce",     name: "GeForce Exp",    letter: "G", color: "#76b900", winget: "Nvidia.GeForceExperience" },
            { id: "itchio",      name: "itch.io",        letter: "i", color: "#fa5c5c", winget: "ItchIo.Itch" },
            { id: "heroic",      name: "Heroic",         letter: "H", color: "#1b1b1b", winget: "HeroicGamesLauncher.HeroicGamesLauncher" },
            { id: "bluestacks",  name: "BlueStacks",     letter: "B", color: "#0095ff", winget: "BlueStack.BlueStacks" },
            { id: "ldplayer",    name: "LDPlayer",       letter: "L", color: "#5cb85c", winget: "LDPlayer.LDPlayer9" },
            { id: "afterburner", name: "MSI Afterburner",letter: "A", color: "#c41e3a", winget: "Guru3D.Afterburner" },
            { id: "cpuz",        name: "CPU-Z",          letter: "C", color: "#0072b8", winget: "CPUID.CPU-Z" },
            { id: "gpuz",        name: "GPU-Z",          letter: "G", color: "#ff5722", winget: "TechPowerUp.GPU-Z" },
            { id: "hwinfo",      name: "HWiNFO",         letter: "H", color: "#3a3a3a", winget: "REALiX.HWiNFO" }
        ]
    },
    {
        category: "Desenvolvimento",
        items: [
            { id: "vscode",         name: "VS Code",        letter: "V", color: "#007acc", winget: "Microsoft.VisualStudioCode", apt: "code" },
            { id: "vs",             name: "Visual Studio",  letter: "V", color: "#5c2d91", winget: "Microsoft.VisualStudio.2022.Community" },
            { id: "sublime",        name: "Sublime Text",   letter: "S", color: "#ff9800", winget: "SublimeHQ.SublimeText.4",    apt: "sublime-text" },
            { id: "android-studio", name: "Android Studio", letter: "A", color: "#3ddc84", winget: "Google.AndroidStudio" },
            { id: "intellij",       name: "IntelliJ IDEA",  letter: "I", color: "#fe315d", winget: "JetBrains.IntelliJIDEA.Community" },
            { id: "pycharm",        name: "PyCharm",        letter: "P", color: "#21d789", winget: "JetBrains.PyCharm.Community" },
            { id: "webstorm",       name: "WebStorm",       letter: "W", color: "#21d789", winget: "JetBrains.WebStorm" },
            { id: "git",            name: "Git",            letter: "G", color: "#f14e32", winget: "Git.Git",                    apt: "git" },
            { id: "github-desktop", name: "GitHub Desktop", letter: "G", color: "#24292e", winget: "GitHub.GitHubDesktop" },
            { id: "node",           name: "Node.js",        letter: "N", color: "#3c873a", winget: "OpenJS.NodeJS",              apt: "nodejs" },
            { id: "python",         name: "Python",         letter: "P", color: "#3776ab", winget: "Python.Python.3.12",         apt: "python3" },
            { id: "jdk",            name: "Java JDK",       letter: "J", color: "#ed8b00", winget: "EclipseAdoptium.Temurin.21.JDK", apt: "default-jdk" },
            { id: "go",             name: "Go",             letter: "G", color: "#00add8", winget: "GoLang.Go",                  apt: "golang" },
            { id: "rust",           name: "Rust",           letter: "R", color: "#dea584", winget: "Rustlang.Rustup",            apt: "rustc" },
            { id: "dotnet",         name: ".NET SDK",       letter: "N", color: "#512bd4", winget: "Microsoft.DotNet.SDK.8" },
            { id: "docker",         name: "Docker",         letter: "D", color: "#0db7ed", winget: "Docker.DockerDesktop" },
            { id: "postman",        name: "Postman",        letter: "P", color: "#ff6c37", winget: "Postman.Postman" },
            { id: "insomnia",       name: "Insomnia",       letter: "I", color: "#5849be", winget: "Insomnia.Insomnia" },
            { id: "dbeaver",        name: "DBeaver",        letter: "D", color: "#382923", winget: "dbeaver.dbeaver",            apt: "dbeaver-ce" },
            { id: "wt",             name: "Win Terminal",   letter: "W", color: "#4a154b", winget: "Microsoft.WindowsTerminal" },
            { id: "virtualbox",     name: "VirtualBox",     letter: "V", color: "#183a61", winget: "Oracle.VirtualBox",          apt: "virtualbox" },
            { id: "vmware",         name: "VMware Player",  letter: "V", color: "#717074", winget: "VMware.WorkstationPlayer" },
            { id: "wsl",            name: "WSL",            letter: "W", color: "#0078d4", winget: "Microsoft.WSL" },
            { id: "cursor",         name: "Cursor",         letter: "C", color: "#1a1a1a", winget: "Anysphere.Cursor" },
            { id: "zed",            name: "Zed",            letter: "Z", color: "#084ccc", winget: "Zed-Industries.Zed" },
            { id: "neovim",         name: "Neovim",         letter: "N", color: "#019833", winget: "Neovim.Neovim",            apt: "neovim" },
            { id: "winmerge",       name: "WinMerge",       letter: "W", color: "#1565c0", winget: "WinMerge.WinMerge" },
            { id: "gitkraken",      name: "GitKraken",      letter: "G", color: "#179287", winget: "Axosoft.GitKraken" },
            { id: "sourcetree",     name: "Sourcetree",     letter: "S", color: "#0747a6", winget: "Atlassian.Sourcetree" },
            { id: "mongodb",        name: "MongoDB Compass",letter: "M", color: "#13aa52", winget: "MongoDB.Compass.Community" },
            { id: "heidisql",       name: "HeidiSQL",       letter: "H", color: "#ed1c24", winget: "HeidiSQL.HeidiSQL" },
            { id: "pgadmin",        name: "pgAdmin",        letter: "p", color: "#336791", winget: "PostgreSQL.pgAdmin" },
            { id: "bun",            name: "Bun",            letter: "B", color: "#1a1a1a", winget: "Oven-sh.Bun" },
            { id: "deno",           name: "Deno",           letter: "D", color: "#1a1a1a", winget: "DenoLand.Deno" },
            { id: "yarn",           name: "Yarn",           letter: "Y", color: "#2c8ebb", winget: "Yarn.Yarn" },
            { id: "anaconda",       name: "Anaconda",       letter: "A", color: "#43b02a", winget: "Anaconda.Anaconda3" },
            { id: "rstudio",        name: "RStudio",        letter: "R", color: "#75aadb", winget: "Posit.RStudio" },
            { id: "terraform",      name: "Terraform",      letter: "T", color: "#7b42bc", winget: "Hashicorp.Terraform" },
            { id: "kubectl",        name: "kubectl",        letter: "k", color: "#326ce5", winget: "Kubernetes.kubectl" },
            { id: "cmake",          name: "CMake",          letter: "C", color: "#cd0000", winget: "Kitware.CMake",             apt: "cmake" },
            { id: "maven",          name: "Maven",          letter: "M", color: "#cd0000", winget: "Apache.Maven" },
            { id: "gradle",         name: "Gradle",         letter: "G", color: "#02303a", winget: "Gradle.Gradle" }
        ]
    },
    {
        category: "Utilitários",
        items: [
            { id: "notepadpp",    name: "Notepad++",       letter: "N", color: "#90c25c", winget: "Notepad++.Notepad++" },
            { id: "powertoys",    name: "PowerToys",       letter: "P", color: "#0078d4", winget: "Microsoft.PowerToys" },
            { id: "everything",   name: "Everything",      letter: "E", color: "#3a4153", winget: "voidtools.Everything" },
            { id: "putty",        name: "PuTTY",           letter: "P", color: "#0078d4", winget: "PuTTY.PuTTY",            apt: "putty" },
            { id: "filezilla",    name: "FileZilla",       letter: "F", color: "#bf0000", winget: "TimKosse.FileZilla.Client", apt: "filezilla" },
            { id: "anydesk",      name: "AnyDesk",         letter: "A", color: "#ef443b", winget: "AnyDeskSoftwareGmbH.AnyDesk" },
            { id: "teamviewer",   name: "TeamViewer",      letter: "T", color: "#0e8ee9", winget: "TeamViewer.TeamViewer" },
            { id: "rustdesk",     name: "RustDesk",        letter: "R", color: "#2dbb88", winget: "RustDesk.RustDesk" },
            { id: "sharex",       name: "ShareX",          letter: "S", color: "#54c5f5", winget: "ShareX.ShareX" },
            { id: "greenshot",    name: "Greenshot",       letter: "G", color: "#28a745", winget: "Greenshot.Greenshot" },
            { id: "autohotkey",   name: "AutoHotKey",      letter: "A", color: "#34495e", winget: "AutoHotkey.AutoHotkey" },
            { id: "qbittorrent",  name: "qBittorrent",     letter: "Q", color: "#2f67ba", winget: "qBittorrent.qBittorrent", apt: "qbittorrent" },
            { id: "winscp",       name: "WinSCP",          letter: "W", color: "#108de4", winget: "WinSCP.WinSCP" },
            { id: "rainmeter",    name: "Rainmeter",       letter: "R", color: "#00aaff", winget: "Rainmeter.Rainmeter" },
            { id: "windirstat",   name: "WinDirStat",      letter: "W", color: "#c4a300", winget: "WinDirStat.WinDirStat" },
            { id: "treesize",     name: "TreeSize",        letter: "T", color: "#5e9dd6", winget: "JAMSoftware.TreeSize.Free" },
            { id: "ccleaner",     name: "CCleaner",        letter: "C", color: "#5e9dd6", winget: "Piriform.CCleaner" },
            { id: "rufus",        name: "Rufus",           letter: "R", color: "#ae3f3a", winget: "Rufus.Rufus" },
            { id: "etcher",        name: "balenaEtcher",   letter: "E", color: "#2b6cb0", winget: "Balena.Etcher",          apt: "balena-etcher-electron" },
            { id: "flameshot",     name: "Flameshot",      letter: "F", color: "#ee2c30", winget: "flameshot.flameshot",    apt: "flameshot" },
            { id: "espanso",       name: "Espanso",        letter: "E", color: "#ff9800", winget: "Espanso.Espanso",        apt: "espanso" },
            { id: "hwmonitor",     name: "HWMonitor",      letter: "H", color: "#1a4b6e", winget: "CPUID.HWMonitor" },
            { id: "crystaldisk",   name: "CrystalDiskInfo",letter: "C", color: "#22a7f0", winget: "CrystalDewWorld.CrystalDiskInfo" },
            { id: "crystaldiskmk", name: "DiskMark",       letter: "D", color: "#22a7f0", winget: "CrystalDewWorld.CrystalDiskMark" },
            { id: "sumatra",       name: "Sumatra PDF",    letter: "S", color: "#fbb917", winget: "SumatraPDF.SumatraPDF" },
            { id: "flux",          name: "f.lux",          letter: "f", color: "#ff8800", winget: "flux.flux" },
            { id: "lightshot",     name: "LightShot",      letter: "L", color: "#5ec5c5", winget: "Skillbrains.Lightshot" },
            { id: "sysinternals",  name: "Sysinternals",   letter: "S", color: "#0078d4", winget: "Microsoft.Sysinternals.Suite" },
            { id: "wiztree",       name: "WizTree",        letter: "W", color: "#ff8800", winget: "AntibodySoftware.WizTree" },
            { id: "bleachbit",     name: "BleachBit",      letter: "B", color: "#4ea24e", winget: "BleachBit.BleachBit",    apt: "bleachbit" },
            { id: "hxd",           name: "HxD",            letter: "H", color: "#1565c0", winget: "MaelHoerz.HxD" },
            { id: "ditto",         name: "Ditto",          letter: "D", color: "#5a8edb", winget: "Ditto.Ditto" },
            { id: "translucenttb", name: "TranslucentTB",  letter: "T", color: "#777777", winget: "CharlesMilette.TranslucentTB" }
        ]
    },
    {
        category: "Escritório",
        items: [
            { id: "libreoffice", name: "LibreOffice",  letter: "L", color: "#18a303", winget: "TheDocumentFoundation.LibreOffice", apt: "libreoffice" },
            { id: "adobereader", name: "Adobe Reader", letter: "A", color: "#ed1c24", winget: "Adobe.Acrobat.Reader.64-bit" },
            { id: "foxit",       name: "Foxit Reader", letter: "F", color: "#ef7c0c", winget: "Foxit.FoxitReader" },
            { id: "wps",         name: "WPS Office",   letter: "W", color: "#f23030", winget: "Kingsoft.WPSOffice" },
            { id: "onlyoffice",  name: "OnlyOffice",   letter: "O", color: "#ff6f3d", winget: "ONLYOFFICE.DesktopEditors", apt: "onlyoffice-desktopeditors" },
            { id: "obsidian",    name: "Obsidian",     letter: "O", color: "#7c3aed", winget: "Obsidian.Obsidian" },
            { id: "notion",      name: "Notion",       letter: "N", color: "#1a1a1a", winget: "Notion.Notion" },
            { id: "joplin",      name: "Joplin",       letter: "J", color: "#1976d2", winget: "JoplinApp.Joplin" },
            { id: "calibre",     name: "Calibre",      letter: "C", color: "#b03c1c", winget: "Calibre.Calibre",     apt: "calibre" },
            { id: "anki",        name: "Anki",         letter: "A", color: "#2f2f2f", winget: "Anki.Anki",           apt: "anki" },
            { id: "drawio",      name: "drawio",       letter: "D", color: "#005ce6", winget: "JGraph.Draw" },
            { id: "xmind",       name: "XMind",        letter: "X", color: "#fc6e51", winget: "Xmind.Xmind" },
            { id: "logseq",      name: "Logseq",       letter: "L", color: "#85c1ae", winget: "Logseq.Logseq" },
            { id: "openoffice",  name: "OpenOffice",   letter: "O", color: "#0c79b8", winget: "Apache.OpenOffice" },
            { id: "pdf24",       name: "PDF24",        letter: "P", color: "#dc3545", winget: "geeksoftwareGmbH.PDF24Creator" }
        ]
    },
    {
        category: "Segurança",
        items: [
            { id: "malwarebytes", name: "Malwarebytes", letter: "M", color: "#1f5fc5", winget: "Malwarebytes.Malwarebytes" },
            { id: "bitwarden",    name: "Bitwarden",    letter: "B", color: "#175ddc", winget: "Bitwarden.Bitwarden", apt: "bitwarden" },
            { id: "keepass",      name: "KeePass",      letter: "K", color: "#3e88d6", winget: "DominikReichl.KeePass" },
            { id: "1password",    name: "1Password",    letter: "1", color: "#0572ec", winget: "AgileBits.1Password" },
            { id: "veracrypt",    name: "VeraCrypt",    letter: "V", color: "#283c89", winget: "IDRIX.VeraCrypt",    apt: "veracrypt" },
            { id: "cryptomator",  name: "Cryptomator",  letter: "C", color: "#4286f5", winget: "Cryptomator.Cryptomator" },
            { id: "wireshark",    name: "Wireshark",    letter: "W", color: "#1679a7", winget: "WiresharkFoundation.Wireshark", apt: "wireshark" },
            { id: "nmap",         name: "Nmap",         letter: "N", color: "#4d4d4d", winget: "Insecure.Nmap",       apt: "nmap" },
            { id: "protonvpn",    name: "Proton VPN",   letter: "P", color: "#6d4aff", winget: "Proton.ProtonVPN" },
            { id: "windscribe",   name: "Windscribe",   letter: "W", color: "#4090ff", winget: "Windscribe.Windscribe" },
            { id: "avast",        name: "Avast Free",   letter: "A", color: "#fa6824", winget: "Avast.Avast.FreeAntivirus" },
            { id: "avg",          name: "AVG Free",     letter: "A", color: "#2dad7d", winget: "AVG.AntiVirusFree" },
            { id: "bitdefender",  name: "Bitdefender",  letter: "B", color: "#c41e3a", winget: "Bitdefender.Bitdefender" },
            { id: "adwcleaner",   name: "AdwCleaner",   letter: "A", color: "#2c5282", winget: "Malwarebytes.AdwCleaner" },
            { id: "keepassxc",    name: "KeePassXC",    letter: "K", color: "#1675c1", winget: "KeePassXCTeam.KeePassXC" },
            { id: "nordvpn",      name: "NordVPN",      letter: "N", color: "#4687ff", winget: "NordSecurity.NordVPN" },
            { id: "mullvad",      name: "Mullvad VPN",  letter: "M", color: "#41478a", winget: "MullvadVPN.MullvadVPN" },
            { id: "wireguard",    name: "WireGuard",    letter: "W", color: "#88171a", winget: "WireGuard.WireGuard" },
            { id: "openvpn",      name: "OpenVPN",      letter: "O", color: "#ea7e20", winget: "OpenVPNTechnologies.OpenVPNConnect" },
            { id: "owaspzap",     name: "OWASP ZAP",    letter: "Z", color: "#3eb049", winget: "OWASP.ZAP" }
        ]
    }
];

// Mapa rápido id → item.
const SOFTWARE_BY_ID = {};
for (const cat of SOFTWARE_CATALOG) {
    for (const item of cat.items) SOFTWARE_BY_ID[item.id] = item;
}

// Converte uma lista de ids selecionados em string de pacotes pra cada linguagem.
function softwareToPackages(selectedIds, customString, lang) {
    const items = (selectedIds || [])
        .map(id => SOFTWARE_BY_ID[id])
        .filter(Boolean);

    let pkgs;
    if (lang === "bash") {
        pkgs = items.map(it => it.apt).filter(Boolean);
    } else {
        // PowerShell e Python usam winget IDs.
        pkgs = items.map(it => it.winget).filter(Boolean);
    }

    if (customString && customString.trim()) {
        pkgs = pkgs.concat(customString.trim().split(/\s+/));
    }

    return pkgs.join(" ");
}
