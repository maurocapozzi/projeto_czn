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

## ✨ Destaques Técnicos do Projeto

Durante o desenvolvimento, focamos em entregar uma Landing Page premium com excelente UX (Experiência do Usuário) e alta performance:
- **Design Responsivo e Fluido**: Adaptação perfeita para mobile e desktop. Uso avançado de CSS Flexbox e Grid (ex: abas de localidades formatadas em grade no celular para otimizar espaço de toque).
- **Alta Performance (94%+ no Lighthouse Mobile)**: Imagens convertidas para o moderno formato WebP, tags de pré-carregamento (`<link rel="preload">`) para hero images, reduzindo o tempo do LCP (*Largest Contentful Paint*).
- **Identidade Visual Sólida**: Sistema de *Design Tokens* com CSS Variables, gradientes exclusivos para sobreposição de imagens e interface estilo *clean*, priorizando o contraste e usabilidade tátil.
- **Semântica HTML5**: Código focado em SEO e acessibilidade estrutural, aplicando tags apropriadas como `<main>`, `<section>`, `<article>`, e `<nav>`.

## 🚀 Deploy e Produção

O projeto conta com fluxo de CI/CD via integração entre **GitHub** e **Netlify**.

A atualização é 100% automática: sempre que uma nova modificação de código ou imagem for enviada (push) para a *branch* principal (`main`) no repositório do GitHub, a Netlify detecta a alteração e atualiza o site ao vivo em cerca de 10 a 30 segundos.

---
Desenvolvido com foco em alta performance, boas práticas e arquitetura limpa.
