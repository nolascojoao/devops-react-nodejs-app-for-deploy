# Deploy CRUD
Aplicação monolítica de CRUD simples, em Node.js e React. Utilizada para estudar deploy em uma instância EC2 da AWS, com Docker e docker-compose para construção e gerenciamento de contêineres. O pipeline de deploy foi automatizado com um arquivo de workflow para GitHub Actions.

## Como rodar:
1 - Editar as variaveis de ambiente no docker-compose.yaml

Banco de dados:
```yaml
environment:
      - DB_HOST=mariadb  
      - DB_USER=root
      - DB_PASSWORD=teste123
      - DB_NAME=crud
```
Localhost ou IP da sua instância ec2:
```yaml
environment:
      - REACT_APP_BACKEND_URL=http://34.234.175.181:8800
```
2 - rodar `docker-compose up -d --build` na raiz do repo.
