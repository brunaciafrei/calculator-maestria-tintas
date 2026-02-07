const PRODUCTS = [
  {
    id: 1,
    nome: "Formula Acrílica Premium Fosco",
    marca: "Formula",
    familia: "Acrílicas",
    aplicacao: ["Paredes Internas", "Fachadas"],
    rendimento_m2_por_lata_por_demao: 250,
    demaos_recomendadas: 2,
    embalagens: ["3.6L", "18L"],
    litros_por_embalagem: { "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 14,
  },
  {
    id: 2,
    nome: "Formula Acrílica Premium Acetinado",
    marca: "Formula",
    familia: "Acrílicas",
    aplicacao: ["Paredes Internas"],
    rendimento_m2_por_lata_por_demao: 220,
    demaos_recomendadas: 2,
    embalagens: ["3.6L", "18L"],
    litros_por_embalagem: { "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 12,
  },
  {
    id: 3,
    nome: "Formula Acrílica Premium Semi-Brilho",
    marca: "Formula",
    familia: "Acrílicas",
    aplicacao: ["Paredes Internas", "Fachadas"],
    rendimento_m2_por_lata_por_demao: 200,
    demaos_recomendadas: 2,
    embalagens: ["3.6L", "18L"],
    litros_por_embalagem: { "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 11,
  },
  {
    id: 4,
    nome: "Formula Látex Econômico",
    marca: "Formula",
    familia: "Acrílicas",
    aplicacao: ["Paredes Internas"],
    rendimento_m2_por_lata_por_demao: 180,
    demaos_recomendadas: 3,
    embalagens: ["3.6L", "18L"],
    litros_por_embalagem: { "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 10,
  },
  {
    id: 5,
    nome: "Crepi Textura Acrílica",
    marca: "Crepi",
    familia: "Acrílicas",
    aplicacao: ["Fachadas", "Paredes Internas"],
    rendimento_m2_por_lata_por_demao: 60,
    demaos_recomendadas: 1,
    embalagens: ["25kg"],
    litros_por_embalagem: { "25kg": 25 },
    rendimento_m2_por_litro: 2.4,
  },
  {
    id: 6,
    nome: "Crepi Grafiato",
    marca: "Crepi",
    familia: "Acrílicas",
    aplicacao: ["Fachadas"],
    rendimento_m2_por_lata_por_demao: 40,
    demaos_recomendadas: 1,
    embalagens: ["25kg"],
    litros_por_embalagem: { "25kg": 25 },
    rendimento_m2_por_litro: 1.6,
  },
  {
    id: 7,
    nome: "Sols Piso Acrílico",
    marca: "Sols",
    familia: "Acrílicas",
    aplicacao: ["Pisos"],
    rendimento_m2_por_lata_por_demao: 200,
    demaos_recomendadas: 2,
    embalagens: ["3.6L", "18L"],
    litros_por_embalagem: { "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 11,
  },
  {
    id: 8,
    nome: "Sols Epóxi Piso Industrial",
    marca: "Sols",
    familia: "Epóxi",
    aplicacao: ["Pisos", "Áreas Industriais"],
    rendimento_m2_por_lata_por_demao: 150,
    demaos_recomendadas: 2,
    embalagens: ["3.6L", "18L"],
    litros_por_embalagem: { "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 8,
  },
  {
    id: 9,
    nome: "Axion Anticorrosivo Premium",
    marca: "Axion",
    familia: "Anticorrosivas",
    aplicacao: ["Estruturas Metálicas", "Áreas Industriais"],
    rendimento_m2_por_lata_por_demao: 180,
    demaos_recomendadas: 2,
    embalagens: ["3.6L", "18L"],
    litros_por_embalagem: { "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 10,
  },
  {
    id: 10,
    nome: "Axion Esmalte Sintético Brilhante",
    marca: "Axion",
    familia: "Base Solvente",
    aplicacao: ["Estruturas Metálicas", "Multissuperfícies"],
    rendimento_m2_por_lata_por_demao: 200,
    demaos_recomendadas: 2,
    embalagens: ["0.9L", "3.6L", "18L"],
    litros_por_embalagem: { "0.9L": 0.9, "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 11,
  },
  {
    id: 11,
    nome: "Julien Fundo Preparador Base Água",
    marca: "Julien",
    familia: "Base Água",
    aplicacao: ["Paredes Internas", "Fachadas"],
    rendimento_m2_por_lata_por_demao: 300,
    demaos_recomendadas: 1,
    embalagens: ["3.6L", "18L"],
    litros_por_embalagem: { "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 17,
  },
  {
    id: 12,
    nome: "Julien Selador Acrílico",
    marca: "Julien",
    familia: "Acrílicas",
    aplicacao: ["Paredes Internas", "Fachadas"],
    rendimento_m2_por_lata_por_demao: 350,
    demaos_recomendadas: 1,
    embalagens: ["3.6L", "18L"],
    litros_por_embalagem: { "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 19,
  },
  {
    id: 13,
    nome: "Formula Stadium Acrílica Campos",
    marca: "Formula Stadium",
    familia: "Acrílicas",
    aplicacao: ["Campos Esportivos"],
    rendimento_m2_por_lata_por_demao: 200,
    demaos_recomendadas: 2,
    embalagens: ["18L"],
    litros_por_embalagem: { "18L": 18 },
    rendimento_m2_por_litro: 11,
  },
  {
    id: 14,
    nome: "Formula Elastomérica Fachadas",
    marca: "Formula",
    familia: "Elastoméricas",
    aplicacao: ["Fachadas"],
    rendimento_m2_por_lata_por_demao: 150,
    demaos_recomendadas: 2,
    embalagens: ["18L"],
    litros_por_embalagem: { "18L": 18 },
    rendimento_m2_por_litro: 8,
  },
  {
    id: 15,
    nome: "Thermostria Tinta Térmica",
    marca: "Formula",
    familia: "Térmicas",
    aplicacao: ["Coberturas", "Fachadas"],
    rendimento_m2_por_lata_por_demao: 120,
    demaos_recomendadas: 2,
    embalagens: ["3.6L", "18L"],
    litros_por_embalagem: { "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 7,
  },
  {
    id: 16,
    nome: "Multiway Multissuperfícies",
    marca: "Formula",
    familia: "Especiais",
    aplicacao: ["Multissuperfícies", "Paredes Internas", "Fachadas"],
    rendimento_m2_por_lata_por_demao: 180,
    demaos_recomendadas: 2,
    embalagens: ["3.6L", "18L"],
    litros_por_embalagem: { "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 10,
  },
  {
    id: 17,
    nome: "Formula Décolavável",
    marca: "Formula",
    familia: "Especiais",
    aplicacao: ["Paredes Internas"],
    rendimento_m2_por_lata_por_demao: 200,
    demaos_recomendadas: 2,
    embalagens: ["3.6L"],
    litros_por_embalagem: { "3.6L": 3.6 },
    rendimento_m2_por_litro: 11,
  },
  {
    id: 18,
    nome: "Axion PU Alto Desempenho",
    marca: "Axion",
    familia: "Poliuretano (PU)",
    aplicacao: ["Pisos", "Áreas Industriais"],
    rendimento_m2_por_lata_por_demao: 160,
    demaos_recomendadas: 2,
    embalagens: ["3.6L", "18L"],
    litros_por_embalagem: { "3.6L": 3.6, "18L": 18 },
    rendimento_m2_por_litro: 9,
  },
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const LOGO_PATH = "img/LOGO-MAESTRIA_cor-02.png";
let logoDataUrl = null;

const elements = {
  marca: $("#marca"),
  aplicacao: $("#aplicacao"),
  produto: $("#produto"),
  produtoNome: $("#produto-nome"),
  produtoRendimento: $("#produto-rendimento"),
  produtoDemaos: $("#produto-demaos"),
  produtoEmbalagens: $("#produto-embalagens"),
  areaTotal: $("#area-total"),
  areaBruta: $("#area-bruta"),
  walls: $("#walls"),
  addWall: $("#add-wall"),
  areaDescontada: $("#area-descontada"),
  qtdPortas: $("#qtd-portas"),
  qtdJanelas: $("#qtd-janelas"),
  portaLargura: $("#porta-largura"),
  portaAltura: $("#porta-altura"),
  janelaLargura: $("#janela-largura"),
  janelaAltura: $("#janela-altura"),
  customDoorFields: $("#custom-door-fields"),
  customWindowFields: $("#custom-window-fields"),
  customDoors: $("#custom-doors"),
  customWindows: $("#custom-windows"),
  demaos: $("#demaos"),
  resArea: $("#res-area"),
  resAreaInline: $("#res-area-inline"),
  resDemaos: $("#res-demaos"),
  resLatas: $("#res-latas"),
  resLitros: $("#res-litros"),
  resEmbalagens: $("#res-embalagens"),
  resProduto: $("#res-produto"),
  resMarca: $("#res-marca"),
  btnPdf: $("#btn-pdf"),
  btnWhats: $("#btn-whatsapp"),
  btnReset: $("#btn-reset"),
  areaSimples: $("#area-simples"),
  areaDetalhada: $("#area-detalhada"),
  stepMedidas: document.querySelector('[data-step="medidas"]'),
  stepDescontos: document.querySelector('[data-step="descontos"]'),
  stepDemaos: document.querySelector('[data-step="demaos"]'),
  stepResultado: document.querySelector('[data-step="resultado"]'),
};

const state = {
  selectedProduct: null,
  mode: "simples",
};

const formatNumber = (value, decimals = 1) =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: decimals });

const getUnique = (items) => Array.from(new Set(items));

function initMarcaOptions() {
  const marcas = getUnique(PRODUCTS.map((p) => p.marca)).sort();
  marcas.forEach((marca) => {
    const option = document.createElement("option");
    option.value = marca;
    option.textContent = marca;
    elements.marca.appendChild(option);
  });
}

function updateAplicacaoOptions() {
  elements.aplicacao.innerHTML = '<option value="">Selecione</option>';
  elements.produto.innerHTML = '<option value="">Selecione</option>';
  elements.produto.disabled = true;
  const marca = elements.marca.value;
  if (!marca) {
    elements.aplicacao.disabled = true;
    updateProductDetails(null);
    return;
  }
  const aplicacoes = getUnique(
    PRODUCTS.filter((p) => p.marca === marca).flatMap((p) => p.aplicacao)
  ).sort();

  aplicacoes.forEach((aplicacao) => {
    const option = document.createElement("option");
    option.value = aplicacao;
    option.textContent = aplicacao;
    elements.aplicacao.appendChild(option);
  });
  elements.aplicacao.disabled = false;
  updateProductDetails(null);
}

function updateProdutoOptions() {
  elements.produto.innerHTML = '<option value="">Selecione</option>';
  const marca = elements.marca.value;
  const aplicacao = elements.aplicacao.value;
  if (!marca || !aplicacao) {
    elements.produto.disabled = true;
    updateProductDetails(null);
    return;
  }
  const produtos = PRODUCTS.filter(
    (p) => p.marca === marca && p.aplicacao.includes(aplicacao)
  );

  produtos.forEach((produto) => {
    const option = document.createElement("option");
    option.value = produto.id;
    option.textContent = produto.nome;
    elements.produto.appendChild(option);
  });
  elements.produto.disabled = false;
  updateProductDetails(null);
}

function updateProductDetails(product) {
  state.selectedProduct = product;
  if (!product) {
    elements.produtoNome.textContent = "—";
    elements.produtoRendimento.textContent = "—";
    elements.produtoDemaos.textContent = "—";
    elements.produtoEmbalagens.textContent = "—";
    elements.resProduto.textContent = "—";
    elements.resMarca.textContent = "—";
    recalc();
    return;
  }

  elements.produtoNome.textContent = product.nome;
  elements.produtoRendimento.textContent = `${product.rendimento_m2_por_lata_por_demao} m²`;
  elements.produtoDemaos.textContent = `${product.demaos_recomendadas} demão(s)`;
  elements.produtoEmbalagens.textContent = product.embalagens.join(" • ");
  elements.demaos.value = product.demaos_recomendadas;
  elements.resProduto.textContent = product.nome;
  elements.resMarca.textContent = product.marca;
  recalc();
}

function addWallRow(width = "", height = "") {
  const row = document.createElement("div");
  row.className = "wall-row";
  row.innerHTML = `
    <div class="field">
      <label>Largura (m)</label>
      <input type="number" min="0.1" step="0.01" value="${width}" />
    </div>
    <div class="field">
      <label>Altura (m)</label>
      <input type="number" min="0.1" step="0.01" value="${height}" />
    </div>
    <button type="button" class="btn-ghost">Remover</button>
  `;
  row.querySelector("button").addEventListener("click", () => {
    row.remove();
    recalc();
  });
  row.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", recalc);
  });
  elements.walls.appendChild(row);
}

function getWallArea() {
  let total = 0;
  elements.walls.querySelectorAll(".wall-row").forEach((row) => {
    const [widthInput, heightInput] = row.querySelectorAll("input");
    const width = parseFloat(widthInput.value) || 0;
    const height = parseFloat(heightInput.value) || 0;
    total += width * height;
  });
  return total;
}

function getGrossArea() {
  if (state.mode === "simples") {
    return parseFloat(elements.areaTotal.value) || 0;
  }
  return getWallArea();
}

function getDiscountArea() {
  const portas = parseInt(elements.qtdPortas.value, 10) || 0;
  const janelas = parseInt(elements.qtdJanelas.value, 10) || 0;
  const portaArea =
    (parseFloat(elements.portaLargura.value) || 0) *
    (parseFloat(elements.portaAltura.value) || 0);
  const janelaArea =
    (parseFloat(elements.janelaLargura.value) || 0) *
    (parseFloat(elements.janelaAltura.value) || 0);
  return portas * portaArea + janelas * janelaArea;
}

function suggestPackaging(litersNeeded, product) {
  if (!product) return "—";
  const sizes = product.embalagens
    .map((label) => ({
      label,
      size: product.litros_por_embalagem[label],
    }))
    .sort((a, b) => b.size - a.size);

  if (sizes.length === 0) return "—";

  let remaining = litersNeeded;
  const plan = [];

  sizes.forEach((pkg, index) => {
    if (remaining <= 0) return;
    const isLast = index === sizes.length - 1;
    const count = isLast ? Math.ceil(remaining / pkg.size) : Math.floor(remaining / pkg.size);
    if (count > 0) {
      plan.push({ ...pkg, count });
      remaining -= count * pkg.size;
    }
  });

  if (plan.length === 0) {
    plan.push({ ...sizes[0], count: 1 });
  }

  return plan.map((item) => `${item.count} lata(s) de ${item.label}`).join(" + ");
}

function getPackagingCount(suggestion) {
  if (!suggestion || suggestion === "—") return 0;
  return suggestion
    .split("+")
    .map((chunk) => parseInt(chunk, 10) || 0)
    .reduce((sum, value) => sum + value, 0);
}

function recalc() {
  const grossArea = getGrossArea();
  const discountArea = getDiscountArea();
  const netArea = Math.max(grossArea - discountArea, 0);
  const dem = Math.min(Math.max(parseInt(elements.demaos.value, 10) || 0, 1), 5);
  elements.demaos.value = dem;

  elements.areaBruta.textContent = `${formatNumber(grossArea)} m²`;
  elements.areaDescontada.textContent = `${formatNumber(discountArea)} m²`;
  elements.resArea.textContent = `${formatNumber(netArea)} m²`;
  elements.resAreaInline.textContent = `${formatNumber(netArea)} m²`;
  elements.resDemaos.textContent = dem.toString();

  if (!state.selectedProduct || netArea < 1) {
    elements.resLatas.textContent = "0";
    elements.resLitros.textContent = "0 L";
    elements.resEmbalagens.textContent = "—";
    updateProgressiveVisibility({ grossArea, netArea });
    return;
  }

  const rp = state.selectedProduct.rendimento_m2_por_lata_por_demao;
  const litersYield = state.selectedProduct.rendimento_m2_por_litro;

  const latas = Math.ceil((netArea * dem) / rp);
  const litersNeeded = (netArea * dem) / litersYield;
  const packagingSuggestion = suggestPackaging(litersNeeded, state.selectedProduct);

  elements.resLatas.textContent = latas.toString();
  elements.resLitros.textContent = `${formatNumber(litersNeeded, 1)} L`;
  elements.resEmbalagens.textContent = packagingSuggestion;
  updateProgressiveVisibility({ grossArea, netArea });
}

function handleModeChange(value) {
  state.mode = value;
  elements.areaSimples.classList.toggle("hidden", value !== "simples");
  elements.areaDetalhada.classList.toggle("hidden", value !== "detalhado");
  recalc();
}

function updateProgressiveVisibility({ grossArea, netArea }) {
  const hasProduct = Boolean(state.selectedProduct);
  const hasArea = grossArea >= 1;
  const hasNetArea = netArea >= 1;

  elements.stepMedidas.classList.toggle("hidden", !hasProduct);
  elements.stepDescontos.classList.toggle("hidden", !hasProduct || !hasArea);
  elements.stepDemaos.classList.toggle("hidden", !hasProduct || !hasArea);
  elements.stepResultado.classList.toggle("hidden", !hasProduct || !hasNetArea);
}

function handleCustomSizes() {
  elements.customDoorFields.classList.toggle("hidden", !elements.customDoors.checked);
  if (!elements.customDoors.checked) {
    elements.portaLargura.value = 0.8;
    elements.portaAltura.value = 2.1;
  }

  elements.customWindowFields.classList.toggle("hidden", !elements.customWindows.checked);
  if (!elements.customWindows.checked) {
    elements.janelaLargura.value = 1.2;
    elements.janelaAltura.value = 1.0;
  }
  recalc();
}

function setupSteppers() {
  document.querySelectorAll(".stepper button").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      const step = parseInt(button.dataset.step, 10);
      const current = parseInt(target.value, 10) || 0;
      const next = Math.max(current + step, 0);
      target.value = next;
      recalc();
    });
  });
}

function resetAll() {
  elements.marca.value = "";
  elements.aplicacao.value = "";
  elements.produto.value = "";
  elements.aplicacao.disabled = true;
  elements.produto.disabled = true;
  elements.areaTotal.value = "";
  elements.qtdPortas.value = 0;
  elements.qtdJanelas.value = 0;
  elements.customDoors.checked = false;
  elements.customWindows.checked = false;
  elements.portaLargura.value = 0.8;
  elements.portaAltura.value = 2.1;
  elements.janelaLargura.value = 1.2;
  elements.janelaAltura.value = 1.0;
  elements.customDoorFields.classList.add("hidden");
  elements.customWindowFields.classList.add("hidden");
  elements.demaos.value = 2;
  elements.walls.innerHTML = "";
  addWallRow();
  updateProductDetails(null);
  updateProgressiveVisibility({ grossArea: 0, netArea: 0 });
  recalc();
}

function getSummary() {
  const packaging = elements.resEmbalagens.textContent;
  return {
    produto: elements.resProduto.textContent,
    marca: elements.resMarca.textContent,
    area: elements.resArea.textContent,
    demaos: elements.resDemaos.textContent,
    latas: elements.resLatas.textContent,
    litros: elements.resLitros.textContent,
    embalagens: packaging,
  };
}

function openWhatsApp() {
  const summary = getSummary();
  if (summary.produto === "—") return;
  const message = `Olá! Gostaria de um orçamento com base no cálculo da Calculadora Maestria:\n\n` +
    `📦 *Produto:* ${summary.produto}\n` +
    `🏷️ *Marca:* ${summary.marca}\n` +
    `📐 *Área de pintura:* ${summary.area}\n` +
    `🖌️ *Demãos:* ${summary.demaos}\n` +
    `🪣 *Quantidade calculada:* ${summary.latas} latas (${summary.litros} total)\n` +
    `📏 *Embalagens sugeridas:* ${summary.embalagens}\n\n` +
    `Aguardo retorno! 🎨`;

  const url = `https://wa.me/5514998351483?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

async function loadLogoDataUrl() {
  if (logoDataUrl) return logoDataUrl;
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      logoDataUrl = canvas.toDataURL("image/png");
      resolve(logoDataUrl);
    };
    img.onerror = () => resolve(null);
    img.src = LOGO_PATH;
  });
}

function generatePDF() {
  if (!state.selectedProduct) return;
  const summary = getSummary();
  const today = new Date();
  const dateStr = today.toLocaleDateString("pt-BR");
  const logoSrc = LOGO_PATH;

  const html = `<!doctype html>
  <html lang="pt-BR">
    <head>
      <meta charset="utf-8" />
      <title>Orçamento Maestria</title>
      <style>
        * { box-sizing: border-box; }
        body { font-family: "Google Sans", Arial, sans-serif; margin: 0; background: #ffffff; color: #0f1626; }
        .page { padding: 34px 30px 36px; }
        .header {
          background: #0b268a;
          color: #fff;
          padding: 22px 24px;
          border-radius: 16px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 16px;
        }
        .header h1 { font-size: 20px; margin: 0 0 4px; }
        .header p { margin: 0; font-size: 12px; opacity: .9; }
        .logo {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: #0b268a;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .logo img { width: 46px; height: auto; display: block; }
        .meta {
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          font-size: 11px;
          color: #5f6b85;
        }
        .meta strong { color: #0f1626; font-weight: 600; }
        .section {
          margin-top: 18px;
          border-radius: 16px;
          padding: 18px;
          border: 1px solid #d9e2f4;
          background: #ffffff;
        }
        .section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #0b268a;
          margin: 0 0 12px;
        }
        .badge {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background: #e8efff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #0b268a;
          font-weight: 700;
          font-size: 12px;
        }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 18px; font-size: 12px; }
        .label { color: #5f6b85; font-size: 11px; }
        .value { font-weight: 600; }
        .highlight {
          margin-top: 14px;
          background: #f3f6ff;
          border-radius: 12px;
          padding: 12px 14px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 10px;
          align-items: center;
        }
        .highlight strong { color: #0b268a; font-size: 14px; }
        .info {
          margin-top: 14px;
          background: #e8efff;
          border-radius: 12px;
          padding: 12px;
          font-size: 11px;
          color: #4a5b7a;
        }
        .footer {
          margin-top: 24px;
          font-size: 10px;
          color: #7a889f;
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }
        .footer span { white-space: nowrap; }
        @media print {
          body { background: #fff; }
          .page { padding: 0; }
        }
      </style>
    </head>
    <body>
      <div class="page">
        <div class="header">
          <div>
            <h1>Orçamento Estimado de Tintas</h1>
            <p>Maestria Tintas • Data de geração: ${dateStr}</p>
          </div>
          <div class="logo"><img src="${logoSrc}" alt="Logo Maestria" /></div>
        </div>
        <div class="meta">
          <div>Cliente: <strong>—</strong></div>
          <div>Projeto: <strong>—</strong></div>
          <div>Validade: <strong>7 dias</strong></div>
        </div>
        <div class="section">
          <div class="section-title"><span class="badge">1</span>Resumo do cálculo</div>
          <div class="grid">
            <div>
              <div class="label">Produto</div>
              <div class="value">${summary.produto}</div>
            </div>
            <div>
              <div class="label">Marca</div>
              <div class="value">${summary.marca}</div>
            </div>
            <div>
              <div class="label">Área líquida</div>
              <div class="value">${summary.area}</div>
            </div>
            <div>
              <div class="label">Demãos</div>
              <div class="value">${summary.demaos}</div>
            </div>
            <div>
              <div class="label">Quantidade calculada</div>
              <div class="value">${summary.latas} latas</div>
            </div>
            <div>
              <div class="label">Total de litros</div>
              <div class="value">${summary.litros}</div>
            </div>
            <div style="grid-column: 1 / -1;">
              <div class="label">Embalagens sugeridas</div>
              <div class="value">${summary.embalagens}</div>
            </div>
          </div>
          <div class="highlight">
            <div>
              <div class="label">Total estimado</div>
              <strong>${summary.latas} latas • ${summary.litros}</strong>
            </div>
            <div>
              <div class="label">Marca</div>
              <strong>${summary.marca}</strong>
            </div>
          </div>
          <div class="info">
            Este cálculo é uma estimativa. Superfícies irregulares, porosas ou muito absorventes podem exigir mais produto.
          </div>
        </div>
        <div class="footer">
          <span>Contato comercial: +55 14 99835-1483</span>
          <span>Orçamento gerado pela Calculadora Maestria Tintas</span>
        </div>
      </div>
      <script>
        window.onload = () => {
          window.print();
          window.onafterprint = () => window.close();
        };
      </script>
    </body>
  </html>`;

  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  iframe.setAttribute("aria-hidden", "true");
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow?.document;
  if (!doc) {
    alert("Não foi possível gerar o PDF. Tente novamente.");
    iframe.remove();
    return;
  }

  doc.open();
  doc.write(html);
  doc.close();

  const printAfterLoad = () => {
    const win = iframe.contentWindow;
    if (!win) return;
    win.focus();
    win.print();
    setTimeout(() => iframe.remove(), 1000);
  };

  iframe.onload = () => {
    setTimeout(printAfterLoad, 300);
  };
}

function bindEvents() {
  elements.marca.addEventListener("change", updateAplicacaoOptions);
  elements.aplicacao.addEventListener("change", updateProdutoOptions);
  elements.produto.addEventListener("change", (event) => {
    const product = PRODUCTS.find((p) => p.id === Number(event.target.value));
    updateProductDetails(product || null);
  });
  elements.areaTotal.addEventListener("input", recalc);
  elements.qtdPortas.addEventListener("input", recalc);
  elements.qtdJanelas.addEventListener("input", recalc);
  elements.portaLargura.addEventListener("input", recalc);
  elements.portaAltura.addEventListener("input", recalc);
  elements.janelaLargura.addEventListener("input", recalc);
  elements.janelaAltura.addEventListener("input", recalc);
  elements.customDoors.addEventListener("change", handleCustomSizes);
  elements.customWindows.addEventListener("change", handleCustomSizes);
  elements.demaos.addEventListener("input", recalc);
  elements.addWall.addEventListener("click", () => {
    addWallRow();
    recalc();
  });
  elements.btnWhats.addEventListener("click", openWhatsApp);
  elements.btnPdf.addEventListener("click", generatePDF);
  elements.btnReset.addEventListener("click", resetAll);

  $$('input[name="modo-area"]').forEach((input) => {
    input.addEventListener("change", (event) => handleModeChange(event.target.value));
  });

  setupSteppers();
}

function init() {
  initMarcaOptions();
  addWallRow();
  bindEvents();
  updateProgressiveVisibility({ grossArea: 0, netArea: 0 });
  recalc();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {});
    });
  }

  window.__maestriaReady = true;
}

init();
