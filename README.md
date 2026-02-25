# WenLock — Teste Técnico Instituto Connecthub

Projeto de teste técnico do **Instituto Connecthub** para nivelamento de desenvolvedores. Consiste em uma aplicação web (dashboard) com layout responsivo, sidebar colapsável e navegação entre páginas.

## Sobre o projeto

A aplicação simula um painel **WenLock** com:

- **Layout principal**: sidebar fixa (aberta/fechada), header e área de conteúdo
- **Navegação**: Home e Controle de Acesso (submenu Usuários)
- **Páginas**: Home (boas-vindas) e Usuários (em desenvolvimento)

O foco do teste é demonstrar domínio de React, TypeScript, roteamento e organização de componentes.

## Stack

- **React** 19 + **TypeScript**
- **Vite** 7
- **React Router DOM** 7
- **Styled Components** 6
- **Lucide React** (ícones)
- **ESLint**

## Estrutura do projeto

```
src/
├── assets/imagens/     # SVGs e imagens (logo, ícones)
├── components/
│   ├── headline/       # Header da aplicação
│   └── sidebar/        # Menu lateral (navegação + toggle)
├── pages/
│   ├── app/            # Layout com sidebar + Outlet
│   ├── home/           # Página inicial
│   └── user/           # Página de usuários (Controle de Acesso)
├── routes/             # Definição de rotas (/, /home, /user)
├── App.tsx
└── main.tsx
```

## Como rodar

### Pré-requisitos

- Node.js (recomendado LTS)
- npm, pnpm ou yarn

### Instalação

```bash
npm install
# ou
pnpm install
```

### Desenvolvimento

```bash
npm run dev
# ou
pnpm dev
```

Acesse [http://localhost:5173](http://localhost:5173). A rota `/` redireciona para `/home`.

### Build

```bash
npm run build
# ou
pnpm build
```

### Preview do build

```bash
npm run preview
# ou
pnpm preview
```

### Lint

```bash
npm run lint
# ou
pnpm lint
```

## Rotas

| Rota   | Página   | Descrição                    |
|--------|----------|------------------------------|
| `/`    | —        | Redireciona para `/home`     |
| `/home`| Home     | Dashboard / boas-vindas      |
| `/user`| Usuários | Controle de Acesso > Usuários|

## Licença

Projeto de uso interno para processo seletivo/nivelamento do Instituto Connecthub.
