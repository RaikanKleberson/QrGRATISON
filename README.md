# QrGRÁTISON

> **QR Code grátis, sem limite e sem expiração.**

O **QrGRÁTISON** é um gerador de QR Codes estáticos gratuito, simples e rápido. A geração acontece diretamente no navegador, sem exigir cadastro, conta ou processamento em um servidor próprio.

## 🌐 Acesse

**GitHub:**
https://github.com/RaikanKleberson/QrGRATISON

**GitHub Pages:**

> Adicione aqui o endereço gerado pelo GitHub Pages quando a publicação estiver ativa.

---

## ✨ Sobre o projeto

O objetivo do QrGRÁTISON é oferecer uma alternativa simples aos geradores de QR Code que impõem limites de uso, planos pagos ou franquias de geração.

Aqui, o QR Code é criado **localmente no navegador do usuário**.

Isso significa que:

* não existe limite artificial de gerações;
* não é necessário criar uma conta;
* não precisamos armazenar o conteúdo informado pelo usuário;
* cada geração não depende de uma requisição à nossa API;
* o usuário pode gerar quantos QR Codes quiser.

## 🚀 Funcionalidades

### Disponíveis

* Geração de QR Code diretamente no navegador
* QR Code estático
* Campo para URL e textos
* Personalização da cor
* Ajuste de tamanho
* Download em PNG
* Layout responsivo
* Sem cadastro
* Sem login
* Sem limite de geração
* Área preparada para publicidade

### Em desenvolvimento

* [ ] QR Code para WhatsApp
* [ ] QR Code para Wi-Fi
* [ ] QR Code para e-mail
* [ ] QR Code para telefone
* [ ] QR Code para Pix
* [ ] Download em SVG
* [ ] Inserção de logo no QR Code
* [ ] Personalização avançada
* [ ] Histórico local de QR Codes
* [ ] Página de privacidade
* [ ] Termos de uso
* [ ] Analytics do site
* [ ] Publicidade
* [ ] QR Codes dinâmicos como produto separado

---

## 🧠 Como funciona

A arquitetura inicial do QrGRÁTISON é propositalmente simples:

```text
Usuário
   ↓
Navegador
   ↓
JavaScript
   ↓
Biblioteca QR Code
   ↓
QR Code
   ↓
Download
```

A geração não precisa passar pelo nosso servidor.

Por isso, o número de QR Codes gerados pelos usuários não cria uma franquia de processamento de API própria.

### QR Code estático

O QR Code contém diretamente a informação fornecida pelo usuário.

Exemplo:

```text
QR CODE
   ↓
https://exemplo.com
```

O QR Code continuará funcionando enquanto o conteúdo para o qual ele aponta continuar disponível.

**Importante:** o QR Code em si não possui uma data de expiração controlada pelo QrGRÁTISON. Porém, se o endereço inserido deixar de existir, for alterado ou ficar indisponível, o QR Code naturalmente deixará de levar ao conteúdo esperado.

---

## 🔒 Privacidade

Na versão atual, a geração acontece localmente no navegador.

O conteúdo digitado no gerador não precisa ser enviado para um backend próprio para que o QR Code seja criado.

> Este projeto pode evoluir futuramente com ferramentas de análise e publicidade. Essas funcionalidades devem ser implementadas de forma transparente e descritas na Política de Privacidade.

---

## 🛠️ Tecnologias

O projeto foi desenvolvido inicialmente utilizando:

* HTML5
* CSS3
* JavaScript
* QRCode.js

A biblioteca QRCode.js é utilizada para realizar a geração dos códigos diretamente no navegador.

Atualmente, a biblioteca pode ser carregada por CDN. Em uma futura versão, ela poderá ser incorporada diretamente ao projeto para reduzir dependências externas.

---

## 📁 Estrutura do projeto

```text
QrGRATISON/
├── index.html
├── style.css
├── app.js
├── README.md
└── .gitignore
```

### `index.html`

Estrutura da aplicação e interface do gerador.

### `style.css`

Estilos, responsividade e identidade visual da aplicação.

### `app.js`

Lógica de geração, personalização e download do QR Code.

---

## 💻 Executar localmente

Não é necessário backend para executar a versão atual.

Basta abrir o arquivo:

```text
index.html
```

no navegador.

Para utilizar um servidor local:

```bash
npx serve .
```

Depois acesse o endereço informado pelo terminal.

---

## ☁️ Deploy

O projeto pode ser publicado utilizando **GitHub Pages**, sem necessidade de servidor próprio para a versão atual.

Fluxo:

```text
GitHub
   ↓
GitHub Pages
   ↓
Site público
```

Repositório:

https://github.com/RaikanKleberson/QrGRATISON

---

## 💰 Modelo de negócio

O projeto foi pensado inicialmente para ser gratuito para o usuário.

A monetização poderá acontecer futuramente por meio de:

* publicidade;
* patrocínios;
* recursos premium;
* QR Codes dinâmicos;
* ferramentas avançadas para empresas.

A proposta principal continua sendo manter a **geração de QR Codes estáticos gratuita e sem limite artificial de uso**.

---

## 🤝 Contribuição

Contribuições são bem-vindas.

Para contribuir:

```bash
git clone https://github.com/RaikanKleberson/QrGRATISON.git
```

Entre na pasta:

```bash
cd QrGRATISON
```

Crie uma branch:

```bash
git checkout -b minha-feature
```

Faça suas alterações e depois envie:

```bash
git add .
git commit -m "feat: adiciona nova funcionalidade"
git push origin minha-feature
```

Depois, abra um Pull Request no GitHub.

---

## 📌 Roadmap

### V1 — Gerador gratuito

* [x] Gerar QR Code
* [x] Gerar localmente no navegador
* [x] Download em PNG
* [x] Personalização básica
* [x] Responsividade
* [x] GitHub Pages

### V2 — Mais formatos

* [ ] WhatsApp
* [ ] Wi-Fi
* [ ] Pix
* [ ] E-mail
* [ ] Telefone
* [ ] SVG
* [ ] Logo
* [ ] Templates

### V3 — Plataforma

* [ ] Conta de usuário
* [ ] Histórico
* [ ] QR Codes dinâmicos
* [ ] Estatísticas
* [ ] Dashboard
* [ ] Domínio personalizado

---

## ⭐ Apoie o projeto

Gostou do QrGRÁTISON?

Dê uma ⭐ no GitHub e compartilhe o projeto.

**Repositório:**
https://github.com/RaikanKleberson/QrGRATISON

---

## 📄 Licença

Este projeto utiliza uma biblioteca de terceiros para geração dos QR Codes. Consulte as respectivas licenças e mantenha os avisos necessários ao redistribuir o projeto.

A licença do próprio QrGRÁTISON deverá ser definida conforme o modelo de abertura que o projeto adotar.

---

## 🇧🇷 Feito no Brasil

**QrGRÁTISON**

QR Code grátis, sem limite e sem complicação.
