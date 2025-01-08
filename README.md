# Deploy CRUD

Aplicação monolítica de CRUD simples, em Node.js e React. Utilizada para estudar deploy em uma instância EC2 da AWS, com Docker e docker-compose para construção e gerenciamento de contêineres. 

Esta aplicação pode ser executada de duas maneiras:
1. **Manual**: Seguindo os passos da seção [Executar Manualmente](#executar-manualmente).
2. **Automatizada**: Usando o pipeline descrito em [Reproduzir o Pipeline](#reproduzir-o-pipeline).

---

## Executar Manualmente

Siga esses passos para rodar a aplicação manualmente na sua máquina ou na sua instância EC2.

### 1. Editar as Variáveis de Ambiente no `docker-compose.yaml`

Banco de dados:
```yaml
environment:
      - DB_HOST=mariadb  
      - DB_USER=root
      - DB_PASSWORD=teste123
      - DB_NAME=crud
```

URL do backend (substitua pelo localhost ou IP público da sua EC2):
```yaml
environment:
      - REACT_APP_BACKEND_URL=http://34.234.175.181:8800
```

### 2. Rodar o Comando Docker

Na raiz do repositório, execute:

`docker-compose up -d --build`

---

## Reproduzir o Pipeline

Siga esses passos para configurar e executar o pipeline automatizado usando GitHub Actions.

### 1. Fazer um Fork do Repositório
- Acesse o repositório no GitHub e clique no botão **Fork** para criar uma cópia na sua conta.

### 2. Configurar as Variáveis de Ambiente no GitHub
- Acesse o repositório do fork no GitHub.
- Vá até **Settings > Secrets and variables > Actions > New repository secret** e adicione as seguintes variáveis de ambiente:

  - **EC2_HOST**: Endereço público da sua instância EC2 (ex.: `34.234.175.181`).
  - **EC2_USER**: Nome do usuário para SSH na EC2 (ex.: `ec2-user`).
  - **EC2_SSH_KEY**: Chave privada SSH para acessar sua instância EC2 (copie o conteúdo do seu arquivo `.pem`).

### 3. Realizar o Deploy
- Faça as alterações necessárias no código ou apenas teste o pipeline.
- Dê um **push** para o branch `main` do seu fork.
- O GitHub Actions será acionado automaticamente e executará o deploy na sua instância EC2.

### Detalhes do Pipeline
O pipeline está configurado no arquivo `.github/workflows/deploy.yml` e segue os passos abaixo:
1. **Faz checkout do código**.
2. **Transfere os arquivos para a EC2 via SCP**.
3. **Acessa a EC2 via SSH e executa o deploy** com `docker-compose`.

Ao final do processo, a aplicação estará rodando no endereço configurado na variável `REACT_APP_BACKEND_URL` no arquivo `docker-compose.yml`.
