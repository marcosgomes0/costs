# costs

O projeto costs foi desenvolvido a partir de um mini curso do Canal Hoda de Codar no youtube.

A ideia inicial é a construção de uma aplicação full-stack em react, incluindo desde a interface a até o armazenamento dos dados
atráves de um banco de dados (db.json) criado a partir do node.js.

problema e solução:

Ao longo do projeto eu percebi que para subir o site para o github pages não seria possível, já que a aplicação depende de um banco 
de dados local a partir do node. Para resolver isso, criei uma lógica de armazenamento dos dados no localStorage do cliente. 
Incluindo dados básicas para o funcionamento do site e possibilidade de armazenamento de dados em geral. 

localStorage e aplicação:

Assim como em um rest api, a lógica que desenvolvi a partir do localStorage permite o POST, GET, PATCH e DELETE dos dados armazenados.
