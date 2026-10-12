# FenixFilmes

Aplicativo mobile desenvolvido com **React Native e Expo** para a disciplina de Programação para Dispositivos Móveis I. O projeto apresenta um catálogo de filmes com informações, detalhes e sistema de favoritos.

##  Pré-requisitos

Antes de executar o projeto, instale:

- [Node.js](https://nodejs.org/) — versão LTS recomendada.
- [Git](https://git-scm.com/), para clonar o repositório.
- [Expo Go](https://expo.dev/go), caso queira executar o aplicativo no celular.
- Um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/).

## Como executar o projeto

### 1. Clone o repositório

Abra o terminal e execute:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd FenixFilmes
```

> Substitua `URL_DO_REPOSITORIO` pelo link do repositório no GitHub.

### 2. Instale as dependências

Na pasta do projeto, execute:

```bash
npm install
```

Esse comando instala as dependências necessárias para executar o aplicativo.

### 3. Inicie o Expo

Execute o comando:

```bash
npx expo start
```

Após a inicialização, o Expo exibirá um QR Code no terminal.

### 4. Abra o aplicativo

Escolha uma das opções para visualizar o projeto:

- **Celular:** instale o Expo Go e leia o QR Code exibido no terminal. O celular e o computador devem estar conectados à mesma rede, quando necessário.
- **Emulador Android:** inicie um emulador configurado no Android Studio e utilize a opção correspondente no terminal do Expo.
- **Navegador:** caso o projeto e suas dependências ofereçam suporte à execução web, utilize a opção correspondente do Expo.

##  Funcionalidades

- Catálogo com filmes cadastrados.
- Exibição de título, imagem, gênero e ano de lançamento.
- Sistema de favoritos com atualização visual.
- Tela de detalhes dos filmes.
- Tela Sobre com informações do aplicativo.
- Navegação entre telas com Expo Router.

## 🛠️ Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- Expo Router
- Hooks do React, como `useState` e `useEffect`
- StyleSheet e Flexbox

## Estrutura do projeto


```text
FenixFilmes/
├── app/
│   ├── index.tsx
│   ├── catalogo.tsx
│   ├── detalhes.tsx
│   ├── _layout.tsx
│   └── sobre.tsx
├── components/
│   ├── FilmeCard.tsx
│   ├── Botao.tsx
│   ├── Card.tsx
│   └── Titulo.tsx
├── assets/
├── package.json
└── README.md
```

## 👨‍💻 Objetivo acadêmico

O projeto tem como objetivo aplicar conceitos de desenvolvimento mobile, incluindo navegação entre telas, gerenciamento de estado, componentes reutilizáveis, passagem de propriedades com Props e organização de interfaces utilizando Flexbox.

---

Desenvolvido para a disciplina de **Programação para Dispositivos Móveis I** Por **Isaac Hideki**.
