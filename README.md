<<<<<<< HEAD
=======
# geoprocessamento-app
>>>>>>> 26050e8d7dc43deb7459ffbec1f381638cd563b8
Aplicação de Geoprocessamento Interativo
Descrição do Projeto

Esta aplicação web foi desenvolvida com o objetivo de permitir a visualização, criação, edição e manipulação de dados geográficos em um mapa interativo.

O sistema possibilita que o usuário trabalhe diretamente com elementos geoespaciais, utilizando ferramentas de desenho, importação de dados no formato GeoJSON, além da visualização de propriedades e localização de pontos de interesse.

A aplicação foi desenvolvida utilizando React para a interface e Leaflet para a renderização do mapa e manipulação dos elementos geográficos.

Tecnologias Utilizadas

React – Biblioteca JavaScript para construção da interface

Vite – Ferramenta de build rápida para aplicações web

Leaflet – Biblioteca open source para mapas interativos

Leaflet Draw – Plugin para criação e edição de elementos geográficos

Leaflet Control Geocoder – Plugin para busca de endereços no mapa

GeoJSON – Formato padrão para representação de dados geográficos

JavaScript (ES6+)

Funcionalidades Implementadas
Mapa Interativo

A aplicação apresenta um mapa interativo que permite:

Navegação com zoom e movimentação (pan)

Visualização de camadas geográficas

Interação direta com elementos do mapa

Operações CRUD de Elementos Geográficos

O sistema permite a manipulação completa de dados geoespaciais através das seguintes operações:

Criar

O usuário pode criar diferentes tipos de elementos diretamente no mapa:

Marcadores (pontos)

Linhas (polylines)

Polígonos

Retângulos

Ler

Todos os elementos criados ou importados podem ser visualizados diretamente no mapa, com suporte à exibição de informações através de popups interativos.

Editar

Os elementos criados podem ser editados utilizando as ferramentas do Leaflet Draw, permitindo a alteração de geometria e posicionamento.

Excluir

O sistema permite a remoção de elementos individuais ou a limpeza completa dos elementos desenhados no mapa.

Importação de Arquivos GeoJSON

A aplicação permite a importação de arquivos geográficos no formato:

.json

.geojson

Após a importação, os dados são automaticamente renderizados no mapa e centralizados na área correspondente.

Exportação de Dados GeoJSON

Os elementos desenhados ou manipulados no mapa podem ser exportados novamente no formato GeoJSON, permitindo reutilização dos dados em outros sistemas ou ferramentas de geoprocessamento.

Visualização de Coordenadas

Ao clicar em qualquer ponto do mapa, o sistema exibe automaticamente um popup contendo:

Latitude

Longitude

Essa funcionalidade facilita a identificação precisa de coordenadas geográficas.

Busca de Endereços no Mapa

Foi implementada uma barra de busca de endereços, utilizando o plugin Leaflet Control Geocoder.

Com essa funcionalidade o usuário pode:

Buscar cidades

Buscar ruas ou endereços

Navegar rapidamente para locais específicos no mapa

Essa funcionalidade não era obrigatória no desafio, mas foi adicionada para melhorar a experiência do usuário e demonstrar maior domínio da biblioteca Leaflet.

Pontos de Interesse da Sanesul

O mapa apresenta marcadores previamente configurados com unidades da Sanesul localizadas em Campo Grande - MS.

Cada marcador apresenta um popup contendo:

Nome da unidade

Cidade

Coordenadas geográficas

Essa funcionalidade demonstra a capacidade da aplicação de trabalhar com pontos geográficos reais e informações associadas.

Persistência de Dados

Os elementos criados no mapa são armazenados automaticamente no LocalStorage do navegador, permitindo que os dados permaneçam disponíveis mesmo após a atualização da página.

Estrutura do Projeto
src
 ├ components
 │   ├ MapView.jsx
 │   └ FileImporter.jsx
 │
 ├ App.jsx
 └ main.jsx
Descrição dos Componentes

MapView.jsx
Responsável pela inicialização do mapa, renderização das camadas, ferramentas de desenho e manipulação dos elementos geográficos.

FileImporter.jsx
Responsável pelo controle de importação de arquivos GeoJSON e integração com o mapa.

Decisões Técnicas

A escolha do Leaflet foi feita por ser uma biblioteca amplamente utilizada em aplicações de geoprocessamento web, oferecendo grande flexibilidade para manipulação de dados geográficos.

O formato GeoJSON foi utilizado por ser um padrão amplamente adotado para representação de dados geoespaciais e por possuir excelente integração com bibliotecas de mapas como o Leaflet.

A aplicação foi estruturada utilizando componentes React, buscando manter uma separação clara de responsabilidades e facilitar a manutenção e escalabilidade do código.

Melhorias Implementadas Além dos Requisitos do Desafio

Além das funcionalidades solicitadas no desafio técnico, foram adicionadas algumas melhorias para aprimorar a experiência do usuário e demonstrar maior domínio técnico:

Barra de busca de endereços no mapa

Exibição de coordenadas geográficas ao clicar no mapa

Exportação de dados GeoJSON

Persistência automática de elementos no navegador (LocalStorage)

Interface aprimorada com ferramentas organizadas no mapa

Pontos de interesse previamente configurados

Essas melhorias foram implementadas com o objetivo de tornar a aplicação mais próxima de uma ferramenta real de visualização e manipulação de dados geográficos.

Autor

<<<<<<< HEAD
Desenvolvido por Kauã Higa como parte de um desafio técnico de desenvolvimento de aplicações de geoprocessamento.
=======
Desenvolvido por Kauã Higa como parte de um desafio técnico de desenvolvimento de aplicações de geoprocessamento.
>>>>>>> 26050e8d7dc43deb7459ffbec1f381638cd563b8
