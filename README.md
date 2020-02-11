# LearnDB
LearnDB is a web front-end to Postgres databases. It allows useers to perform
the following tasks:
- Run queries on any Posgres server
- Change password on any Postgres server

LearnDB is still in early stages of development, but the features listed
above are functional. 

## Architecture overview

At present, LearnDB is composed of two separate servers which are integrated
such that end users do not need to launch the servers separately.
- __Query server__: A query server to let users connect to any Postgres database and query it. 
  This sever  combines [pgweb](https://github.com/sosedoff/pgweb/releases)
  with a proxy server.
- __Change-Password server__: A customer Node.Js server to let users change
  password. The goal is to evolve this Node.js server to provide all the 
  services.

The following figure depicts the current architecture.

![Image](architecture.png?raw=true)


## Installation

The parts of LearnDB--Query server and Change-Password server--are installed 
and run separately. See the `README` in directory `src\pgweb_proxy` on 
steps to install and run the Query server.

The Change-Password server is a Node.js Express web server (tested with 
LTS Version 10.16.2). Follow these steps to install and run the server:

1) Install [Node.js with npm](https://nodejs.org/en/download/). Use the 
   installer defaults.
2) Open a command window as administrator
3) Install the server by running the following command from the `src` 
  directory in your clone of this repo: `npm install`
4) Start the server using the following command: `npm start`

By default, the Change-Password server listens on `localhost:5000`, unless 
a different IP address and port are specified in code or in the environment.


## Credits

LearnDB is developed at the Data Science & Systems Lab ([DASSL](http://dassl.github.io/), 
read _dazzle_).

LearDB was conceived by and is designed by [Sean Murthy](https://github.com/smurthys). 
The following undergraduate students at [Western Connecticut State University](http://wcsu.edu/)
contributed to the implementation:
- [Kevin Kelly](https://github.com/KevinKelly25)
- [Caleb Garrick](https://github.com/calebGarrick)
- [Adam Jeniski](https://github.com/Ajetski)


## Contributing

Contributions and ideas are welcome. Please mail a summary of your thoughts 
to `murthys at wcsu dot edu`. Mention "LearnDB" in the subject line.


## Legal Stuff

LearnDB is distributed under [Creative Commons License BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

PROVIDED AS IS. NO WARRANTIES EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

