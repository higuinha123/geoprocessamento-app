# Geoprocessamento App

## 📌 Descrição do Projeto

Esta aplicação web foi desenvolvida como solução para um desafio técnico de **geoprocessamento**, cujo objetivo é permitir a **visualização, criação, edição e remoção de elementos geográficos em um mapa interativo**.

A aplicação utiliza tecnologias modernas do ecossistema JavaScript, como **React**, **Vite** e **Leaflet**, permitindo manipular dados geoespaciais de forma dinâmica diretamente no navegador.

Além dos requisitos propostos no desafio, foram implementadas funcionalidades adicionais para melhorar a **usabilidade da interface, organização do código e experiência do usuário**.

---

# 🎯 Objetivo do Desafio

Desenvolver uma aplicação capaz de:

* Importar arquivos **JSON ou GeoJSON**
* Visualizar elementos geográficos em um mapa
* Criar novos elementos geográficos
* Editar elementos existentes
* Remover elementos do mapa
* Trabalhar com coordenadas geográficas
* Fornecer uma interface simples e intuitiva para interação com o mapa

---

# 🚀 Tecnologias Utilizadas

As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

* **React** – biblioteca JavaScript para construção da interface
* **Vite** – ferramenta de build rápida para aplicações web modernas
* **Leaflet** – biblioteca para criação de mapas interativos
* **Leaflet Draw** – plugin para criação e edição de elementos no mapa
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **GeoJSON** – formato padrão para representação de dados geográficos

---

# 🗺️ Funcionalidades Implementadas

## Visualização do Mapa

Ao iniciar a aplicação, um mapa interativo é exibido utilizando a biblioteca **Leaflet**, permitindo navegação e exploração geográfica.

---

## CRUD de Elementos Geográficos

A aplicação permite manipular elementos diretamente no mapa através das seguintes operações:

### Criar

Usuários podem desenhar novos elementos geográficos utilizando as ferramentas de desenho disponíveis.

Elementos suportados:

* Pontos
* Linhas
* Polígonos
* Círculos

---

### Ler (Visualizar)

Todos os elementos adicionados ao mapa podem ser visualizados em tempo real.

Também é possível visualizar **pontos previamente carregados**.

---

### Editar

Elementos criados no mapa podem ser modificados utilizando as ferramentas de edição.

---

### Remover

Elementos podem ser removidos diretamente através da ferramenta de exclusão do mapa.

---

## Importação de Arquivos GeoJSON

A aplicação permite importar arquivos no formato:

* `.json`
* `.geojson`

Após selecionar o arquivo, os elementos geográficos são automaticamente exibidos no mapa.

---

# ⭐ Funcionalidades Extras Implementadas

Além dos requisitos do desafio, foram implementadas melhorias adicionais para tornar o projeto mais completo.

---

## 🔍 Barra de Pesquisa de Localização

Foi adicionada uma funcionalidade de **busca de locais**, permitindo ao usuário pesquisar endereços ou regiões diretamente no mapa.

Isso melhora significativamente a **usabilidade e navegação da aplicação**.

---

## 📍 Pontos da Sanesul

Ao iniciar a aplicação, o mapa já exibe **pontos de interesse relacionados à Sanesul**, permitindo visualização imediata de locais relevantes.

Esses pontos são carregados automaticamente no mapa quando a aplicação é iniciada.

---

## 📂 Interface Melhorada para Importação de Arquivos

A interface para importação de arquivos foi aprimorada, transformando o campo padrão de upload em um **botão compacto e integrado ao popup do mapa**, melhorando a experiência visual da aplicação.

---

## 🧩 Organização Modular do Código

O projeto foi estruturado de forma modular, separando responsabilidades em diferentes componentes React.

Isso facilita:

* manutenção
* leitura do código
* escalabilidade do projeto

---

# 📁 Estrutura do Projeto

```
geoprocessamento-app
│
├ src
│
│ ├ components
│ │ ├ FileImporter.jsx
│ │ ├ MapView.jsx
│ │ └ SanesulPoints.jsx
│ │
│ ├ data
│ │ └ Example.geojson
│ │
│ ├ App.jsx
│ └ main.jsx
│
├ index.html
├ package.json
├ vite.config.js
├ .gitignore
└ README.md
```

---

# ⚙️ Como Executar o Projeto

## 1️⃣ Clonar o repositório

```
git clone https://github.com/higuinha123/geoprocessamento-app.git
```

---

## 2️⃣ Acessar a pasta do projeto

```
cd geoprocessamento-app
```

---

## 3️⃣ Instalar as dependências

```
npm install
```

---

## 4️⃣ Executar o projeto

```
npm run dev
```

---

## 5️⃣ Abrir no navegador

```
http://localhost:5173
```

---

# 📊 Manipulação de Dados Geoespaciais

O projeto trabalha com dados geográficos utilizando o formato **GeoJSON**, que permite representar:

* Pontos
* Linhas
* Polígonos
* Coleções de elementos geográficos

Esses dados são renderizados diretamente no mapa através da integração entre **React e Leaflet**.

---

# 🧑‍💻 Boas Práticas Utilizadas

Durante o desenvolvimento foram aplicadas boas práticas como:

* Separação de responsabilidades em componentes
* Código modular e reutilizável
* Organização clara da estrutura de arquivos
* Interface simples e intuitiva
* Uso de bibliotecas adequadas para manipulação geoespacial

---

# 📌 Considerações Finais

Este projeto demonstra a construção de uma aplicação de **geoprocessamento interativa**, capaz de manipular dados geográficos diretamente no navegador.

Além de atender aos requisitos do desafio técnico, foram implementadas melhorias adicionais que tornam a aplicação mais completa e amigável para o usuário.

O projeto também demonstra a utilização de tecnologias modernas do desenvolvimento web e boas práticas de organização de código.

---

# 👨‍💻 Autor

Desenvolvido por **Kauã Higa Fontoura**
