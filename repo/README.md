# Calculadora de Tintas — Maestria Tintas

Aplicação web estática para calcular a quantidade de tinta necessária, gerar orçamento em PDF (via impressão do navegador) e enviar pedido via WhatsApp.

## Sumário
1. Visão geral
2. Funcionalidades
3. Como usar
4. Estrutura do projeto
5. Como gerar o PDF
6. PWA (instalação/offline)
7. Personalização rápida
8. Troubleshooting

## 1. Visão geral
A calculadora permite selecionar produto, informar medidas (modo simples ou detalhado), descontar portas e janelas, ajustar demãos e obter o resultado com sugestão de embalagens.

## 2. Funcionalidades
- Filtros em cascata: marca → aplicação → produto
- Modo simples e modo detalhado (paredes)
- Descontos de portas e janelas
- Cálculo automático e sugestão de embalagens
- Orçamento em PDF (impressão do navegador)
- Envio direto para WhatsApp comercial
- PWA com cache offline

## 3. Como usar
1. Abra `index.html` no navegador.
2. Selecione marca, aplicação e produto.
3. Preencha a área (simples ou detalhada).
4. Ajuste portas, janelas e demãos.
5. O resultado aparece automaticamente.
6. Clique em “Baixar orçamento em PDF” ou “Enviar no WhatsApp Comercial”.

## 4. Estrutura do projeto
- `index.html` — layout da aplicação
- `styles.css` — estilos e identidade visual
- `app.js` — lógica principal
- `app.v2.js` — versão com cache/ajustes (mantida por compatibilidade)
- `service-worker.js` — cache offline (PWA)
- `manifest.webmanifest` — configuração PWA
- `img/` — imagens, logo, favicon e ícones
  - `img/LOGO-MAESTRIA_cor-02.png`
  - `img/favicon.ico`
  - `img/favicon.png`
  - `img/icons/icon-192.png`
  - `img/icons/icon-512.png`
- `vendor/jspdf.umd.min.js` — biblioteca jsPDF (não usada no fluxo atual)

## 5. Como gerar o PDF
O PDF é gerado via impressão do navegador:
1. Clique em “Baixar orçamento em PDF”.
2. Abre uma nova janela com o layout do orçamento.
3. Use “Salvar como PDF” no diálogo de impressão.

Observação: se o navegador bloquear pop‑ups, libere para o site.

## 6. PWA (instalação/offline)
- O projeto possui `manifest.webmanifest` e `service-worker.js`.
- Para instalar como app, abra o site em HTTPS (ou localhost) e use “Instalar”.

## 7. Personalização rápida
- Cores: ajuste variáveis em `styles.css` (`:root`).
- Logo: substituir `img/LOGO-MAESTRIA_cor-02.png`.
- WhatsApp: número em `app.js` na função `openWhatsApp()`.
- Texto do PDF: ajuste no template HTML dentro de `generatePDF()` em `app.js`.

## 8. Troubleshooting
**PDF não abre**
- Verifique se o navegador bloqueou pop‑ups.
- Faça refresh forçado: `Cmd+Shift+R` (Mac) ou `Ctrl+Shift+R` (Windows).

**Resultados não aparecem**
- Confirme se selecionou produto e área mínima ≥ 1m².

**PWA não instala**
- É necessário HTTPS ou localhost.

---

© 2026 Maestria Tintas. Todos os direitos reservados.
