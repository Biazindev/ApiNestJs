# e-paper - Sistema de Gerenciamento de Documentos

## Descrição

O projeto **e-paper** é uma aplicação desenvolvida para gerenciar documentos, permitindo cadastrar, visualizar, editar, excluir e buscar documentos de forma simples e eficiente. Cada documento pode ser preenchido com informações como o nome do emitente, valores totais de tributos e valor líquido, além de permitir o cálculo automático de alguns dados.

## Funcionalidades

- **Criar Documento**: Inserção de novos documentos com campos personalizados como nome do documento, emitente, valor total dos tributos e valor líquido.
- **Visualizar Documento**: Listagem e visualização de documentos cadastrados.
- **Alterar Documento**: Edição de documentos já existentes.
- **Excluir Documento**: Exclusão de documentos quando necessário.
- **Buscar Documento**: Busca de documentos por filtros como nome, emitente e valores.

O projeto foi desenvolvido utilizando as mais recentes tecnologias, como **NestJS**, **Prisma**, **PostgreSQL via Supabase**, **React**, **TypeScript**, e outras bibliotecas necessárias.

## Tecnologias Utilizadas

### Backend

- **NestJS**: Framework para a construção da API.
- **Prisma**: ORM para integração com o banco de dados.
- **PostgreSQL**: Banco de dados relacional via Supabase.
- **Railway**: Plataforma de deploy para o backend.

### Frontend

- **React**: Framework para a construção da interface.
- **TypeScript**: Linguagem para garantir tipagem estática e maior segurança no código.
- **Styled-Components**: Biblioteca para estilização de componentes no frontend.
- **React Router Dom**: Para navegação entre as páginas.
- **Vercel**: Plataforma de deploy para o frontend.

## Deploy

- **Frontend**: [https://app-e-paper.vercel.app/documents](https://app-e-paper.vercel.app/documents)
- **Backend**: [https://documentos-api-production.up.railway.app/documentos](https://documentos-api-production.up.railway.app/documentos)

## Como Rodar o Projeto Localmente

### Backend

1. Clone o repositório:
   ```bash
   git clone https://github.com/Biazindev/ApiNestJs.git
   cd ApiNestJs
Instale as dependências:

bash
Copiar código
npm install
Configure o ambiente, criando o arquivo .env com as variáveis de ambiente necessárias (conforme o exemplo no repositório).

Rode o projeto:

bash
Copiar código
npm run start
O backend estará disponível em http://localhost:3001 por padrão.

Frontend
Clone o repositório:

bash
Copiar código
git clone https://github.com/Biazindev/frontend-api-epaper.git
cd frontend-api-epaper
Instale as dependências:

bash
Copiar código
npm install
Rode o projeto:

bash
Copiar código
npm run dev
O frontend estará disponível em http://localhost:3000 por padrão.

Repositórios GitHub
Frontend: https://github.com/Biazindev/frontend-api-epaper.git
Backend: https://github.com/Biazindev/ApiNestJs.git
Contato
LinkedIn: https://linkedin.com/in/tiagobiazin
GitHub: http://github.com/biazindev
Email: tiago.biazin02@gmail.com
WhatsApp: [Clique aqui para conversar](http://wa.me/qr/KX23LM3QDV36N1)
