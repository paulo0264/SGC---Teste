# SGC - Sistema de Gerenciamento de Clientes
## Introdução

O objetivo deste projeto é desenvolver uma solução eficaz para o controle de clientes de uma empresa. A estrutura do sistema consiste em uma aplicação backend utilizando Node.js com PostgreSQL como banco de dados, e um frontend construído em React.

## Gerenciamento de Clientes
A empresa utiliza os seguintes dados para gerenciar seus clientes: nome, email e telefone. As funcionalidades integradas na plataforma compreendem:

- Listagem dos clientes com opção de filtragem de acordo com os dados registrados.
- Registro de novos clientes.
obs: (A filtragem não foi desenvolvida).

## Otimização de Rotas

A empresa deseja otimizar as rotas de atendimento para maximizar a eficiência na visitação dos clientes. Cada cliente possuindo coordenadas X e Y em um mapa bidimensional.
obs: (Essa funcionalidade não foi desenvolvida ainda).

O algoritmo para calcular a rota, partindo da empresa (0,0) e passando por todas as localizações dos clientes, está disponível via rota da API. Foi implementado um botão na tela de clientes que, ao ser clicado, abre uma modal mostrando a ordem de visitação dos clientes na rota calculada.


## Configuração e Execução Local

Para rodar o projeto localmente, siga as instruções abaixo:

## Backend (Node.js com PostgreSQL)
- Clone o repositório: git clone ""
- certifique-se que está na pasta SGC
- Instale as dependências: use: npm install ou yarn install
- o frontend vai rodar na porta http://localhost:5173/

## Banco de Dados - DDL
A estrutura da tabela no banco de dados PostgreSQL é definida pelo seguinte DDL:
```sql 
CREATE TABLE cliente_tb (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero VARCHAR(10),
    bairro VARCHAR(100),
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    latitude VARCHAR(50) ,
    longitude VARCHAR(50),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
```

## Observações
- O projeto era desenvolver um backend e um Frontend, apena o Frontendo concluido.
- O código fonte está disponível neste repositório.
- O prazo para realização do teste foi de 3 dias.
- Foi escolhido de Preferência que as consultas fosse em SQL em uma API, para evitar o uso de ORMs.

### Tecnologias utilizadas

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)
## Conclusão
Este teste foi desenvolvido para avaliar habilidades básicas e lógica na resolução de problemas.
