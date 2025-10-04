# Golden Shop - Projeto Atitus Educação 🎓

Golden Shop é um aplicativo mobile de e-commerce desenvolvido em React Native com Expo Router e TypeScript. O projeto foi criado como parte de uma atividade acadêmica na Atitus Educação, com o objetivo principal de demonstrar o consumo de APIs RESTful, utilizando a [Fake Store API](https://fakestoreapi.com/), além de implementar funcionalidades de autenticação e navegação.

## ✨ Funcionalidades Chave

  - **Autenticação**: Sistema de login que utiliza as credenciais fornecidas pela Fake Store API.
  - **Listagem de Produtos**: Exibição dos produtos com indicador de carregamento (`ActivityIndicator`) e preços formatados em Reais (BRL).
  - **Filtro por Categoria**: Permite ao usuário filtrar a lista de produtos por categoria ou visualizar todos os itens.
  - **Detalhes do Produto**: Tela de detalhes customizada para cada produto.
  - **Navegação**: Estrutura de navegação robusta implementada com React Navigation, incluindo cabeçalhos personalizados e botões de *Logout* e *Informações*.
  - **Estilo**: Interface moderna com uma paleta de cores baseada em tons de roxo, branco e azul para um contraste agradável.
  - **Tratamento de Erros**: Exibição de alertas (`Alert`) para feedback ao usuário em caso de falhas, como campos de login vazios.

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

**Pré-requisitos:**

  * [Node.js](https://nodejs.org/)
  * [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)
  * [Expo CLI](https://docs.expo.dev/get-started/installation/)

**Passo a passo:**

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <NOME_DA_PASTA_DO_PROJETO>
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    npm install axios
    npm install @react-navigation/native @react-navigation/native-stack
    npm install react-native-screens react-native-safe-area-context
    ```

3.  **Inicie o servidor de desenvolvimento Expo:**

    ```bash
    npx expo start
    ```

4.  **Acesse o App:**
    Use o aplicativo **Expo Go** no seu celular para escanear o QR Code exibido no terminal. Você também pode usar um emulador de Android ou um simulador de iOS.

## 🔑 Usuários para Login

O login deve ser feito com um dos usuários existentes na Fake Store API. Para consultar a lista completa de usuários, você pode fazer uma requisição GET para o seguinte endpoint:

`https://fakestoreapi.com/users`

**Usuário Sugerido:**

  * **Username:** `johnd`
  * **Password:** `m38rmF$`

## 🧑‍💻 Integrantes

| Nome                  | RA        |
| --------------------- | --------- |
| Samuel Nunes          | 1136923   |
| Dionatha Diniz        | 1137190   |
| Arthur Gilmar Biolchi | 1137267   |
