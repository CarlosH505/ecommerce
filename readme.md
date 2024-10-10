
```markdown
# E-commerce Platform

Este projeto é um e-commerce desenvolvido com tecnologias modernas e focado em  escalabilidade e
manutenibilidade. O objetivo foi criar uma plataforma de vendas eficiente com uma experiência de usuário otimizada.

## Tecnologias Utilizadas

- **Frontend**:
  - **HTML**: Estruturação das páginas.
  - **CSS**: Estilização das páginas.
  - **JavaScript**: Interatividade no frontend.
  - **TypeScript**: Tipagem estática para garantir a robustez do código.
  - **React**: Biblioteca JavaScript para criar interfaces dinâmicas e componentizadas.
  - **Next.js**: Framework React com renderização no lado do servidor (SSR).
  - **Tailwind CSS**: Framework utilitário para estilização rápida e responsiva.

- **Backend**:
  - **Nest.js**: Framework Node.js robusto para construir APIs escaláveis e modulares.
  - **Prisma ORM**: Mapeamento de dados para facilitar a integração com o banco de dados relacional.
  - **PostgreSQL**: Banco de dados relacional utilizado para armazenar os dados da aplicação.

- **Monorepo**:
  - **Turborepo**: Ferramenta para gerenciamento de monorepo, facilitando o desenvolvimento de
     múltiplos pacotes e projetos de forma integrada.

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- Yarn ou npm
- PostgreSQL (ou outro banco de dados relacional compatível)

### Instalação


1. Clone o repositório:

   
   git clone https://github.com/seu-usuario/ecommerce.git
   cd ecommerce
   
```



2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente para a conexão com o banco de dados e outras configurações necessárias.

4. Execute as migrações do banco de dados:

   ```bash
   npx prisma migrate dev
   ```

5. Inicie a aplicação:

   ```bash
   npm run dev
   ```

### Estrutura do Projeto

- **/apps**: Contém o frontend e backend da aplicação.
- **/packages**: Pacotes compartilhados entre frontend e backend.
- **/prisma**: Definições e migrações do banco de dados.

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou correções, sinta-se à vontade para abrir um PR ou enviar um issue.

