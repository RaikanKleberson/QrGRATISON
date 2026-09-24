# QrGRÁTISON

Gerador de QR Code estático gratuito, sem cadastro e sem limite de geração.

## Ideia

O QrGRÁTISON gera o QR Code no navegador do usuário. A criação do código não passa por uma API própria e não precisa de banco de dados.

Por isso, o projeto pode atender um grande volume de gerações sem transformar cada geração em uma requisição ao seu backend.

## MVP

- URL, texto e outros conteúdos compatíveis com QR Code
- Geração no navegador
- Personalização de cor
- Tamanho ajustável
- Download PNG
- Sem login
- Espaço reservado para anúncios
- Layout responsivo

## Tecnologia

- HTML
- CSS
- JavaScript
- QRCode.js, uma biblioteca JavaScript para geração de QR Codes com licença MIT. A documentação do projeto mostra o uso direto no navegador. citeturn655453search0turn655453search2

Nesta primeira versão, a biblioteca é carregada por jsDelivr. Na próxima etapa podemos embuti-la no próprio projeto para eliminar essa dependência externa.

## Importante

QR Code estático não possui uma data de expiração controlada pelo gerador. Porém, o conteúdo dentro dele pode deixar de existir: por exemplo, uma URL pode ser removida ou alterada.

## Rodar localmente

Abra `index.html` no navegador.

Para desenvolvimento:

```bash
npx serve .
```

## Próximas etapas

1. Tipos prontos: WhatsApp, Wi-Fi, e-mail, telefone e Pix.
2. Download em SVG realmente vetorial.
3. Logo no QR e estilos personalizados.
4. Página de termos e privacidade.
5. Publicidade real.
6. Analytics apenas para métricas do site, sem precisar registrar o conteúdo gerado.
7. QR dinâmico como produto separado.
