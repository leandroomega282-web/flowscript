<div align="center">

# FlowScript

**Gerador Automático de Scripts em PowerShell, Bash e Python**

[![Live Demo](https://img.shields.io/badge/demo-online-success?style=flat-square)](https://leandroomega282-web.github.io/flowscript/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![No Build](https://img.shields.io/badge/build-none-orange?style=flat-square)](#)
[![PWA](https://img.shields.io/badge/PWA-installable-purple?style=flat-square)](#)
[![Made with](https://img.shields.io/badge/made%20with-HTML%20%2B%20CSS%20%2B%20JS-yellow?style=flat-square)](#)

**[🚀 Abrir demo ao vivo](https://leandroomega282-web.github.io/flowscript/)**

</div>

---

Aplicação web que gera scripts prontos em **PowerShell**, **Bash** e **Python** para 28 tarefas comuns de administração de sistema.

Sem dependências, sem build, sem servidor — só abrir `index.html` no navegador. Funciona até **offline** depois da primeira visita (Service Worker).

## Tarefas disponíveis (28 × 3 linguagens = 84 templates)

| Categoria   | Tarefa                  | O que faz |
|-------------|-------------------------|-----------|
| Sistema     | Criar Usuário           | Cria conta local com senha e privilégios opcionais |
| Sistema     | Atualizar Sistema       | apt/dnf/pacman/winget + Windows Update |
| Sistema     | Listar Serviços         | Lista serviços (filtro por estado) |
| Sistema     | Instalar Software       | Instala pacotes via catálogo visual de 105 programas |
| Sistema     | Info do Sistema         | Coleta CPU, RAM, disco, rede em relatório |
| Sistema     | Listar Processos        | Top N processos por CPU ou memória |
| Sistema     | Matar Processo          | Encerra processo por nome ou PID |
| Sistema     | Desligar / Reiniciar    | Shutdown/restart/logoff agendado |
| Sistema     | Monitorar Sistema       | CPU, RAM e top processos em tempo real |
| Sistema     | Tarefa Agendada         | Cron / Task Scheduler |
| Sistema     | Ativar Windows/Office   | slmgr.vbs / OSPP.VBS — com sua chave válida |
| Sistema     | Variáveis de Ambiente   | Lista, adiciona ou remove env vars |
| Manutenção  | Limpar Cache            | Temporários, navegadores, DNS, pacotes |
| Manutenção  | Backup                  | Copia ou comprime pasta com timestamp |
| Manutenção  | Achar Arquivos Grandes  | Top N maiores arquivos de uma pasta |
| Rede        | Resetar Rede            | IP, DNS, Winsock/iptables |
| Rede        | Diagnóstico de Rede     | Ping + traceroute + DNS |
| Rede        | IP Público              | Consulta serviço externo |
| Rede        | Verificar Portas        | Scan TCP em host |
| Rede        | Configurar DNS          | Cloudflare/Google/Quad9/OpenDNS ou personalizado |
| Segurança   | Gerar Senha             | Senhas aleatórias criptograficamente seguras |
| Segurança   | Gerar Chave SSH         | Par de chaves ed25519 com comentário |
| Segurança   | Hash de Arquivo         | MD5/SHA1/SHA256/SHA512 |
| Segurança   | Configurar Firewall     | Permitir/bloquear portas (ufw, netsh, firewalld) |
| Arquivos    | Renomear em Lote        | Prefixo + numeração com pré-visualização |
| Arquivos    | Sincronizar Pastas      | rsync/robocopy com modo espelho ou incremental |
| Arquivos    | Compactar/Descompactar  | ZIP, tar.gz — criar ou extrair |
| Arquivos    | Buscar Texto            | Grep recursivo com filtro de extensão |

## Catálogo de instalação de software (105 programas)

A tarefa **Instalar Software** vem com catálogo visual organizado em 9 categorias:

| Categoria | Exemplos |
|-----------|----------|
| Navegadores (8) | Chrome, Firefox, Edge, Brave, Opera, Opera GX, Vivaldi, Tor |
| Comunicação (10) | WhatsApp, Telegram, Discord, Zoom, Slack, Teams, Signal, Thunderbird, Element, Skype |
| Mídia (14) | VLC, Spotify, OBS, Streamlabs, GIMP, Audacity, Krita, Inkscape, Blender, HandBrake, Paint.NET, IrfanView, DaVinci, Kdenlive |
| Compactadores (3) | WinRAR, 7-Zip, PeaZip |
| Jogos (8) | Steam, Epic, EA App, Battle.net, Ubisoft, GOG, Minecraft, GeForce Experience |
| Desenvolvimento (23) | VS Code, Visual Studio, Sublime, Android Studio, IntelliJ, PyCharm, WebStorm, Git, GitHub Desktop, Node.js, Python, JDK, Go, Rust, .NET SDK, Docker, Postman, Insomnia, DBeaver, Windows Terminal, **VirtualBox**, **VMware Player**, **WSL** |
| Utilitários (19) | Notepad++, PowerToys, Everything, PuTTY, FileZilla, AnyDesk, TeamViewer, RustDesk, ShareX, Greenshot, AutoHotKey, qBittorrent, WinSCP, Rainmeter, WinDirStat, TreeSize, CCleaner, **Rufus**, **balenaEtcher** |
| Escritório (10) | LibreOffice, Adobe Reader, Foxit, WPS Office, OnlyOffice, Obsidian, Notion, Joplin, Calibre, Anki |
| Segurança (10) | Malwarebytes, Bitwarden, KeePass, 1Password, VeraCrypt, Cryptomator, Wireshark, Nmap, Proton VPN, Windscribe |

## Recursos

### Geração e edição
- **Live preview** — script regenera automaticamente conforme você muda parâmetros
- **Cabeçalho automático** — data, tarefa e parâmetros como comentário no topo (toggleável)
- **Validação** de parâmetros em tempo real (regex, range, etc)
- **Nome de arquivo customizável**

### Painel de código
- **Syntax highlighting** sem dependências externas (PowerShell/Bash/Python)
- **Números de linha**
- **Quebra de linha** toggleável
- **Tela cheia** (tecla `F`)
- Badge da linguagem + contador de linhas e tamanho

### Produtividade
- **Histórico** das últimas 10 gerações (clique pra restaurar tudo)
- **Compartilhar via URL** — estado codificado no link (`#s=...`)
- **Busca** instantânea de tarefas (`Ctrl+K`)
- **Persistência** da última seleção, opções e tema entre sessões

### Interface
- **Tema claro/escuro** (auto-detecta o do sistema)
- **Indicador de etapas** com animação de pulse
- **Categorias** com ícones SVG por tarefa e contador de tarefas
- **Toasts** com ícones por tipo (sucesso/erro/info/warning)
- **Responsivo** (mobile + desktop)
- Layout com **CSS subgrid** — labels e inputs sempre alinhados
- Microinterações em todos os botões/cards

### Atalhos de teclado

| Atalho | Ação |
|--------|------|
| `Ctrl+K` | Focar busca de tarefas |
| `Ctrl+Enter` | Gerar script |
| `Ctrl+S` | Baixar script |
| `Ctrl+L` | Limpar seleção (reset) |
| `Ctrl+J` | Alternar tema |
| `F` | Tela cheia do código |
| `?` | Mostrar ajuda |
| `Esc` | Fechar modal/drawer/sair tela cheia |

## Como usar

1. Abra `index.html` no navegador.
2. Escolha uma tarefa (ou use a busca).
3. Escolha a linguagem.
4. Ajuste os parâmetros — o script atualiza em tempo real.
5. **Copiar** ou **Baixar**.

## Estrutura

```
.
├── index.html              # Estrutura, meta tags, OG/Twitter cards
├── styles.css              # Tema escuro/claro, layout subgrid, animações 3D
├── highlight.js            # Syntax highlighter (sem libs)
├── templates.js            # Tarefas, parâmetros, geradores + catálogo de software
├── app.js                  # Estado, eventos, histórico, share URL, validação, SW
├── sw.js                   # Service Worker (cache offline)
├── manifest.webmanifest    # PWA install (Android, iOS)
├── favicon.svg             # Logo em SVG (qualquer tamanho)
├── og-image.svg            # Preview pra WhatsApp/Twitter/LinkedIn (1200x630)
├── LICENSE                 # MIT
└── README.md
```

## Adicionando novas tarefas

Em [templates.js](templates.js):

1. Adicione em `TASK_META` (label, categoria, descrição, ícone SVG).
2. Defina parâmetros em `TASK_PARAMS["minha-tarefa"]`.
3. Implemente os 3 geradores em `TEMPLATES["minha-tarefa"]`.
4. Registre nome do arquivo em `TASK_NAMES["minha-tarefa"]`.

A UI se atualiza sozinha.

## Avisos

- Os scripts gerados geralmente exigem **privilégios de administrador** (`sudo` / "Executar como Administrador").
- **Revise** o conteúdo antes de executar em produção.
- `Resetar Rede` no modo completo derruba a conexão temporariamente.
- `Atualizar Sistema` instala atualizações automaticamente.
- `Instalar Software` usa winget no Windows (instale o "App Installer" da Store) e apt/dnf/pacman/zypper no Linux.
- Arquivos `.ps1` baixados saem com **UTF-8 BOM** pra PowerShell 5.1 ler acentos corretamente.
- Se for a primeira vez rodando scripts no PowerShell: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.
