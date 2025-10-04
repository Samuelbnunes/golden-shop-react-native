Golden Shop
Aplicativo Mobile - É um aplicativo mobile em desenvolvido em React Native com Expo Router e TypeScript para simular um e-commerce. O objetivo principal é demonstrar o consumo de APIs RESTful (Fake Store API), gestão de autenticação e navegação em um projeto acadêmico da Atitus Educação.

Golden Shop - Projeto Atitus Educação
Funcionalidades Chave
Autenticação: Login com credenciais da Fake Store API.
Listagem de Produtos: Exibição com carregamento (ActivityIndicator) e preços formatados em Reais (BRL).
Filtro por Categoria: Permite filtrar a lista ou exibi-la completa.
Detalhes do Produto: Customização.
Navegação: Utilização de React Navigation para navegação entre telas, com cabeçalhos personalizados e botões de Logout e Informações.
Estilo: Interface baseada na cor Roxa com todas as caixas/componentes estilizados com branco e azul no seu constrate.
Tratamento de Erros: Exibição de Alert quando há uma falha de campos.
🚀 Como Rodar o Projeto
Pré-requisitos: Node.js, npm e Expo CLI instalados.
Clone o repositório e navegue até a pasta do projeto.
Instale as dependências:
npm install
npm install axios
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
Inicie o servidor de desenvolvimento Expo:
npx expo start
Acesse o App: Use o aplicativo Expo Go no seu celular ou um emulador/simulador para escanear o QR Code exibido no terminal.
🔑 Usuários para Login
O login deve ser feito com um dos usuários existentes na Fake Store API.

Para verificar a lista completa de usuários, faça uma requisição GET no Postman (ou navegador) para: https://fakestoreapi.com/users

Usuário Sugerido (conforme especificado):
Username: johnd
Password: m38rmF$

Integrantes
| Samuel Nunes | RA 1136923 |
| Dionatha Diniz | RA 1137190 |
| Arthur Gilmar Biolchi | RA 1137267 |
