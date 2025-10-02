# BriqueShop
Aplicativo Mobile - É um aplicativo mobile em desenvolvido em **React Native** com **Expo Router** e **TypeScript** para simular um e-commerce. O objetivo principal é demonstrar o consumo de APIs RESTful (Fake Store API), gestão de autenticação e navegação em um projeto acadêmico da Atitus Educação.

# BriqueShop - Projeto Atitus Educação

## Visão Geral

Aplicativo móvel desenvolvido em **React Native** com **Expo Router** e **TypeScript** para simular um e-commerce. O objetivo principal é demonstrar o consumo de APIs RESTful (Fake Store API), gestão de autenticação e navegação em um projeto acadêmico da Atitus Educação.

## Funcionalidades Chave

* **Autenticação:** Login com credenciais da Fake Store API.
* **Listagem de Produtos:** Exibição com carregamento (ActivityIndicator) e preços formatados em Iene Japonês (JPY).
* **Filtro por Categoria:** Permite filtrar a lista ou exibi-la completa.
* **Detalhes do Produto:** Customização extrema (Imagem do Vampeta, preço x63, descrições mágicas).
* **Navegação:** Uso de Expo Router e cabeçalhos personalizados com botões de Logout e Informações.
* **Estilo:** Interface baseada na cor **Rosa** com todas as caixas/componentes estilizados com **Sombras Verdes**.
* **Tratamento de Erros:** Exibição de `Alert` com a frase "se ferrou" em caso de falha.

## 🚀 Como Rodar o Projeto

1.  **Pré-requisitos:** Node.js, npm e Expo CLI instalados.
2.  **Clone o repositório** e navegue até a pasta do projeto.
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Inicie o servidor de desenvolvimento Expo:**
    ```bash
    npx expo start
    ```
5.  **Acesse o App:** Use o aplicativo **Expo Go** no seu celular ou um emulador/simulador para escanear o QR Code exibido no terminal.

## 🔑 Usuários para Login

O login deve ser feito com um dos usuários existentes na Fake Store API.

Para verificar a lista completa de usuários, faça uma requisição **`GET`** no Postman (ou navegador) para:
**`https://fakestoreapi.com/users`**

**Usuário Sugerido (Conforme especificado):**

* **Username:** `johnd`
* **Password:** `m38rmF$`

---

## Integrante

| Bernardo Antunes Heckler | RA 1137118 |