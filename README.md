## UrbanAssist

## 📌 Sobre o projeto

**UrbanAssist** é uma aplicação full stack desenvolvida para fins acadêmicos. A ideia do projeto é ajudar pessoas em situações de enchentes e alagamentos a encontrar **abrigos próximos** com informações úteis e atualizadas.

O foco do projeto é oferecer uma solução simples e eficiente para:

* Localizar abrigos disponíveis  
* Consultar vagas disponíveis  
* Buscar abrigos por bairro  
* Atualizar ocupação dos abrigos  
* Gerenciar cadastro de abrigos

---

## 🧩 Problema escolhido

Dificuldade na organização das informações sobre abrigos emergenciais.

Problemas identificados:

* Falta de controle sobre vagas disponíveis  
* Dificuldade em localizar abrigos por região  
* Informações descentralizadas  
* Atualização manual e pouco eficiente dos dados

Pessoas impactadas:

* Famílias desalojadas  
* Equipes de apoio e voluntários  
* Agentes públicos responsáveis pela gestão da crise

Identificado um problema, relevante no sentido de que pessoas já estão em uma situação difícil e prejudica ainda mais de ir até o local e não ter vagas para se alojarem.

---

## 💡 Solução proposta

O **UrbanAssist** centraliza informações dos abrigos em um único sistema.

A solução permite:

* Cadastrar abrigos
* Registrar endereço e telefone
* Controlar capacidade e vagas
* Buscar abrigos por bairro
* Remover registros quando necessário

Principal diferencial:

Unir cadastro, consulta e atualização das vagas em uma solução simples e funcional para cenários emergenciais.

---

## 🚀 Tecnologias utilizadas

### Backend

* Node.js
* Express
* SQLite
* Postman

### Frontend

* React
* Axios
* Vite

---

## ⚙️ Funcionalidades

### CRUD de abrigos

### Criar abrigo

```http
POST /abrigos
```

### Listar abrigos

```http
GET /abrigos
```

### Atualizar vagas

```http
PUT /abrigos/:id
```

### Remover abrigo

```http
DELETE /abrigos/:id
```

---

## 🔎 Busca por bairro

```http
GET /buscar?bairro=Centro
```

Retorna apenas os abrigos do bairro informado.

---

## 🗄 Estrutura do banco

Tabela:

```sql
abrigos
```

Campos:

```text
id
nome
endereco
bairro
capacidade
vagas
telefone
```

---

## 🧪 Exemplo de cadastro

```json
{
  "nome": "Escola Municipal Centro",
  "endereco": "Rua das Flores, 100",
  "bairro": "Centro",
  "capacidade": 120,
  "vagas": 45,
  "telefone": "11999999999"
}
```

---

## ▶️ Como executar

### Backend

Instalar dependências:

```bash
npm install
```

Rodar servidor:

```bash
node server.js
```

Servidor:

```bash
http://localhost:3000
```

---

### Frontend

Instalar dependências:

```bash
npm install
```

Rodar aplicação:

```bash
npm run dev
```

Aplicação:

```bash
http://localhost:5173
```

---

## 📁 Estrutura do projeto

```bash
UrbanAssist/
├── backend/
│   ├── server.js
│   ├── database.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## Desenvolvido por : Rafael Serafim
