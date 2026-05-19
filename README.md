# Projeto CZN - Ambiente de Desenvolvimento

Este é o repositório base para o desenvolvimento web do projeto CZN. Ele foi configurado desde o zero utilizando as melhores práticas para a construção de um site profissional e semântico em HTML5, CSS e JS puros (Vanilla).

## 🗂️ Estrutura do Projeto

O projeto adota uma arquitetura limpa e escalável para desenvolvimento front-end sem frameworks:

- `index.html`: Arquivo principal, contendo marcação HTML5 semântica e focada em acessibilidade/SEO.
- `styles/variables.css`: Onde se encontram os *Design Tokens* (variáveis globais CSS) como cores, fontes, sombras e espaçamentos.
- `styles/index.css`: Estilização global do projeto e componentes iniciais.
- `src/js/main.js`: Ponto de entrada para o ecossistema de JavaScript.
- `public/`: Diretório dedicado para todos os *assets* estáticos (imagens, ícones, fontes, etc.).

## 🐳 Contêiner de Desenvolvimento (Docker)

Para garantir que o ambiente seja o mesmo e isolado em qualquer máquina, foi configurado um servidor local via **Docker**. Ele roda utilizando uma imagem do **Nginx** super leve para servir os arquivos estáticos.

### Como Rodar o Projeto Localmente

1. Certifique-se de que possui o **Docker** e o **Docker Compose** instalados na sua máquina.
2. Abra o terminal na raiz deste projeto.
3. Suba o contêiner em segundo plano executando:
   ```bash
   docker-compose up -d
   ```
4. O servidor web será ativado na porta `8088`. Acesse o site no seu navegador:
   👉 **http://localhost:8088**

Sempre que você modificar qualquer arquivo localmente (HTML, CSS ou JS), basta **atualizar a página** no navegador para visualizar as alterações. 

Para parar o servidor, execute:
```bash
docker-compose down
```

## ⚙️ Histórico da Inicialização

Passos que foram seguidos para preparar esta fundação:

1. **Estruturação de Pastas**: Criados os arquivos bases (`index.html`, `styles/variables.css`, `styles/index.css`, e `src/js/main.js`).
2. **Setup do Servidor Local**: Criação do arquivo `docker-compose.yml` mapeando os arquivos locais para dentro de um servidor Nginx rodando na porta 8088 (evitando conflitos com a porta padrão 8080).
3. **Controle de Versão**:
   - Geração de um arquivo `.gitignore` focado em macOS e ambientes de IDE comuns.
   - Execução do comando de inicialização local: `git init`.
   - Realização do primeiro *commit* integrando todos os arquivos da base (Boilerplate HTML, CSS, JS e Docker).
4. **Vinculação com o GitHub**: Repositório remoto criado na plataforma (`projeto_czn`) e código *"pushado"* para a branch `main`.

---
Desenvolvido com foco em alta performance, boas práticas e arquitetura limpa.
