Sobre o projeto:

O projeto consiste em uma aplicação em react que visa criar site de organização de projetos, 
incluindo desde o orçamento do projeto inicial até os serviços que podem alocados a ele.

Sobre a construção do site:

O projeto foi construído a partir de um curso de react do canal "Hora de Codar", do Matheus Battisti. 
A ideia inicial do projeto era construir um site fullstack, incluindo desde a interface até o backend/banco de dados
que seria simulador em um "db.json" no Node.

Adaptações: 

Como não seria possível subir um banco de dados online, decidi criar um banco a partir do localStorage. Logo quando o
usuário entra na Home é setado alguns informações básicas para o funcionamento do projeto. De início, é armazenado dados 
das categorias disponíveis dos serviços dejesados pelo cliente, tendo por ideia a expansão das categorias em um projeto 
real. 

Outro ponto, quando o clinte decide criar um projeto, os dados do mesmo são alocados no localStorage e a partir dele podemos simulador
uma API, que permite POST, GET, PATCH e DELETE dos dados.
