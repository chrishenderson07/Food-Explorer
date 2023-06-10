<h1 align="center"> 🍽️ Food Explorer - Frontend </h1>

<h5 align="center">
    <a href="https://food-explorer-2022.netlify.app/"> <img src="./public/apresentacao-desktop.gif" alt="Capa do Food Explorer"></a><br>
    Clique na imagem para ver o deploy do projeto

</h5>

## :triangular_flag_on_post: Summary

- [Attention](#warning-attention)
- [What is Food Explorer?](#spaghetti-what-is-food-explorer)
- [Features](#desktop_computer-features)
- [Built With](#atom_symbol-built-with)
- [Usage](#arrow_forward-usage)

## :warning: Attention

Essa aplicação esta concluída. Porém por se tratar de uma primeira versão está em constantes melhorias. E por estar em um serviço de deploy gratuito pode apresentar lentidão entre os carregamentos. Por favor seja paciente :hugs:

## :spaghetti: What is Food Explorer?

Food Explorer é uma aplicação fictícia para um site de restaurante. Aonde o cliente pode de forma simulada escolher seus pratos favoritos e compra-los. Por outro lado o Administrador pode adicionar novos pratos, editar pratos ja existentes e receber as compras feitas do lado do cliente.

- Cliente: O cliente tem acesso a home, aonde pode buscar um prato pelo nome, ver cada prato de forma detalhada e pode também adicionar o prato aos favoritos ou carrinho.
- Administrador: O administrador tem os mesmos acessos que o cliente. Porém ele pode além de ver os detalhes do prato, edita-lo, adicionar novos pratos e visualizar todos os pedidos feitos no site.

<img src="./public/apresentacao-mobile.gif" width="300px" alt="Capa do Food Explorer">

## :desktop_computer: Features

#### Cliente:

- [x] Criar Conta
- [x] Fazer login
- [x] Mostrar todos os pratos
- [x] Buscar prato pelo Nome
- [x] Adicionar Prato aos Favoritos
- [x] Adicionar Prato ao carrinho
- [x] Ver detalhes de cada prato
- [x] Ver os Pratos adicionados aos Favoritos
- [x] Remover Pratos adicionados aos Favoritos
- [x] Ver os Pratos adicionados ao carrinho
- [x] Remover Pratos adicionados ao Carrinho
- [x] Concluir o pedido

#### Administrador

- [x] Editar Pratos
- [x] Adicionar Pratos
- [x] Excluir Pratos
- [x] Ver pedidos feitos

## :atom_symbol: Built With

[![My Skills](https://skillicons.dev/icons?i=vite,js,react,styledcomponents,git,github)](https://skillicons.dev)

- **Vite** - Utilizado para iniciar o projeto React
- **Git/Github** - Para realizar o versionamento do código da aplicação
- **NPM** - utilizado para realizar a instalação de pacotes e dependências.
- **React Spring** - Para animar elementos na interface
- **ReactJs** - Para a construção da interface
- **Javascript** - Para a toda a lógica da aplicação
- **Styled Components** - Utilizado para estilizar a aplicação
- **Axios** - Utilizado para fazer as requisições para o backend

## :arrow_forward: Usage

- Para utilizar esse projeto em ambiente local você precisa instalar primeiramente o backend conforme [esta documentação](https://github.com/chrishenderson07/Food-Explorer-BackEnd)

- Inicie clocando esse projeto:

```bash
$git clone https://github.com/chrishenderson07/Food-Explorer

```

- Entre no diretório:

```bash
$cd Food-Explorer
```

- Instale as dependências

```bash
$npm install
```

- Defina a variável local, conforme o endereço que será gerado no backend. Exemplo:

```JS
  SERVER_PORT=http://localhost:3333
```

- Inicie um servidor local para o frontend

```bash
$npm run dev
```

- Se tudo der certo, você receberá uma mensagem parecida com essa:

```bash
  VITE v3.0.9  ready in 1989 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
```

- Agora abra seu navegador no endereço que foi informado no "`Local`" para testar a aplicação.

## 📜 Author

Feito com muito :heart: por Christopher Henderson. Vamos trabalhar juntos?<br>
![https://github.com/chrishenderson07/Food-Explorer](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white) ![https://www.linkedin.com/in/christopher-henderson-633495241/](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)
