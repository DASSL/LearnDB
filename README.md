# LearnDB
LearnDB is a web front-end to Postgres databases. It permits useers to perform
the following tasks:
- Connect to any database in any Postgres server.
- Run queries on the Posgres server/database to which it is connected.
- Change server password

LearnDB is still in early stages of development, but the features listed
above are functional. 

## Architecture overview

At present, LearnDB is composed of two separate servers which are integrated
such that users do not need to launch them separately.
- Query server: A query server to let users connect to any Postgres database and query it. 
  This sever  combines [pgweb](https://github.com/sosedoff/pgweb/releases).
  with a proxy server.
- Change Password server: A customer Node.Js server to let users change password. 
  The goal is to evolve this Node.js server to provide all the services.

The following figure depicts the current architecture.

![Image](architecture.png?raw=true)


## Installing and Running the Change Password server
The Change Password server is a Node.JS express web server (tested with 
LTS Version 10.16.2). Follow these steps to install and run the server:

1) Install [Node.js with npm](https://nodejs.org/en/download/). Use the installer defaults.
2) Open a command window as administrator
3) Install the Change Password server by running the following command from 
  the `src` directory in your clone of this repo: `npm install`
4) Start the server using the following command: `npm start`

By default, the server listens on `localhost:5000`, unless a different IP 
address and port are specified in code or in the environment.

