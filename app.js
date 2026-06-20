// ============================================================
//  DZ EXPRESS — app.js
//  Products, wilaya data, order flow, SheetDB submission
// ============================================================

const SHEETDB_URL = "https://sheetdb.io/api/v1/u2bi74veb32hq";

// ── WILAYA DATA ──────────────────────────────────────────────
const wilayas = [
  { id:  1, name: "أدرار",            bureau: 600,  home: 1000 },
  { id:  2, name: "الشلف",            bureau: 350,  home: 600  },
  { id:  3, name: "الأغواط",          bureau: 500,  home: 750  },
  { id:  4, name: "أم البواقي",       bureau: 400,  home: 700  },
  { id:  5, name: "باتنة",            bureau: 350,  home: 650  },
  { id:  6, name: "بجاية",            bureau: 300,  home: 550  },
  { id:  7, name: "بسكرة",            bureau: 500,  home: 800  },
  { id:  8, name: "بشار",             bureau: 700,  home: 1050 },
  { id:  9, name: "البليدة",          bureau: 0,    home: 250  },
  { id: 10, name: "البويرة",          bureau: 400,  home: 600  },
  { id: 11, name: "تمنراست",          bureau: 600,  home: 1200 },
  { id: 12, name: "تبسة",             bureau: 450,  home: 700  },
  { id: 13, name: "تلمسان",           bureau: 400,  home: 700  },
  { id: 14, name: "تيارت",            bureau: 400,  home: 700  },
  { id: 15, name: "تيزي وزو",         bureau: 350,  home: 550  },
  { id: 16, name: "الجزائر العاصمة",  bureau: 100,  home: 250  },
  { id: 17, name: "الجلفة",           bureau: 500,  home: 750  },
  { id: 18, name: "جيجل",             bureau: 400,  home: 600  },
  { id: 19, name: "سطيف",             bureau: 350,  home: 550  },
  { id: 20, name: "سعيدة",            bureau: 450,  home: 750  },
  { id: 21, name: "سكيكدة",           bureau: 400,  home: 650  },
  { id: 22, name: "سيدي بلعباس",      bureau: 400,  home: 650  },
  { id: 23, name: "عنابة",            bureau: 350,  home: 550  },
  { id: 24, name: "قالمة",            bureau: 400,  home: 700  },
  { id: 25, name: "قسنطينة",          bureau: 350,  home: 550  },
  { id: 26, name: "مدية",             bureau: 400,  home: 600  },
  { id: 27, name: "مستغانم",          bureau: 400,  home: 600  },
  { id: 28, name: "المسيلة",          bureau: 400,  home: 650  },
  { id: 29, name: "معسكر",            bureau: 400,  home: 650  },
  { id: 30, name: "ورقلة",            bureau: 500,  home: 800  },
  { id: 31, name: "وهران",            bureau: 300,  home: 550  },
  { id: 32, name: "البيض",            bureau: 550,  home: 850  },
  { id: 33, name: "إليزي",            bureau: 900,  home: 1300 },
  { id: 34, name: "برج بوعريريج",     bureau: 400,  home: 600  },
  { id: 35, name: "بومرداس",          bureau: 350,  home: 500  },
  { id: 36, name: "الطارف",           bureau: 400,  home: 700  },
  { id: 37, name: "تيندوف",           bureau: 900,  home: 1300 },
  { id: 38, name: "تيسمسيلت",         bureau: 400,  home: 700  },
  { id: 39, name: "الوادي",           bureau: 500,  home: 800  },
  { id: 40, name: "خنشلة",            bureau: 450,  home: 700  },
  { id: 41, name: "سوق أهراس",        bureau: 450,  home: 800  },
  { id: 42, name: "تيبازة",           bureau: 350,  home: 500  },
  { id: 43, name: "ميلة",             bureau: 400,  home: 650  },
  { id: 44, name: "عين الدفلى",       bureau: 400,  home: 600  },
  { id: 45, name: "النعامة",          bureau: 600,  home: 900  },
  { id: 46, name: "عين تيموشنت",      bureau: 450,  home: 600  },
  { id: 47, name: "غرداية",           bureau: 500,  home: 850  },
  { id: 48, name: "غليزان",           bureau: 450,  home: 600  },
  { id: 49, name: "تيميمون",          bureau: 700,  home: 1200 },
  { id: 50, name: "برج باجي مختار",   bureau: null, home: null },
  { id: 51, name: "أولاد جلال",       bureau: 500,  home: 800  },
  { id: 52, name: "بني عباس",         bureau: 1100, home: 1100 },
  { id: 53, name: "عين صالح",         bureau: 700,  home: 1200 },
  { id: 54, name: "عين قزام",         bureau: null, home: null },
  { id: 55, name: "تقرت",             bureau: 500,  home: 850  },
  { id: 56, name: "جنات",             bureau: null, home: null },
  { id: 57, name: "المغير",           bureau: 900,  home: 900  },
  { id: 58, name: "المنيعة",          bureau: 600,  home: 900  },
];

// ── PRODUCTS ─────────────────────────────────────────────────
// Add your products here. Use real image URLs or relative paths.
const products = [
  {
    id: 1,
    name: "منتج 1",
    description: "وصف مختصر للمنتج الأول. جودة عالية وسعر مناسب.",
    price: 2500,
    image: "https://via.placeholder.com/400x300/0E1A2B/C9A84C?text=منتج+1",
  },
  {
    id: 2,
    name: "منتج 2",
    description: "وصف مختصر للمنتج الثاني. متوفر بكميات محدودة.",
    price: 3200,
    image: "https://via.placeholder.com/400x300/0E1A2B/C9A84C?text=منتج+2",
  },
  {
    id: 3,
    name: "منتج 3",
    description: "وصف مختصر للمنتج الثالث. شحن سريع لجميع الولايات.",
    price: 1800,
    image: "https://via.placeholder.com/400x300/0E1A2B/C9A84C?text=منتج+3",
  },
];

// ── STATE ────────────────────────────────────────────────────
let selectedProduct = null;
let selectedWilaya  = null;
let selectedType    = null; // "bureau" | "home"

// ── DOM REFS ─────────────────────────────────────────────────
const overlay         = document.getElementById("modal-overlay");
const modalClose      = document.getElementById("modal-close");
const stepProduct     = document.getElementById("step-product");
const stepInfo        = document.getElementById("step-info");
const stepSuccess     = document.getElementById("step-success");
const modalProdInfo   = document.getElementById("modal-product-info");
const btnToInfo       = document.getElementById("btn-to-info");
const btnBackProduct  = document.getElementById("btn-back-product");
const btnConfirm      = document.getElementById("btn-confirm");
const btnNewOrder     = document.getElementById("btn-new-order");
const wilayaSelect    = document.getElementById("wilaya-select");
const deliveryOptions = document.getElementById("delivery-options");
const totalBox        = document.getElementById("total-box");
const priceBureau     = document.getElementById("price-bureau");
const priceHome       = document.getElementById("price-home");
const totalProduct    = document.getElementById("total-product");
const totalDelivery   = document.getElementById("total-delivery");
const totalSum        = document.getElementById("total-sum");
const cardBureau      = document.getElementById("card-bureau");
const cardHome        = document.getElementById("card-home");
const toast           = document.getElementById("toast");

// ── INIT ─────────────────────────────────────────────────────
function init() {
  renderProducts();
  populateWilayas();
  attachListeners();
}

function renderProducts() {
  const grid = document.getElementById("products-grid");
  grid.innerHTML = products.map(p => `
    <div class="product-card" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}" loading="lazy" />
      <div class="product-card-body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-price">${p.price.toLocaleString("ar-DZ")} دج</div>
        <button class="btn-order" data-id="${p.id}">🛒 اطلب الآن</button>
      </div>
    </div>
  `).join("");
}

function populateWilayas() {
  wilayas.forEach(w => {
    const opt = document.createElement("option");
    opt.value  = w.id;
    opt.textContent = `${String(w.id).padStart(2,"0")} — ${w.name}`;
    wilayaSelect.appendChild(opt);
  });
}

// ── OPEN MODAL ───────────────────────────────────────────────
function openModal(productId) {
  selectedProduct = products.find(p => p.id === productId);
  if (!selectedProduct) return;

  // Reset state
  selectedWilaya = null;
  selectedType   = null;
  document.getElementById("customer-name").value  = "";
  document.getElementById("customer-phone").value = "";
  wilayaSelect.value = "";
  document.querySelectorAll('input[name="delivery"]').forEach(r => r.checked = false);
  deliveryOptions.classList.add("hidden");
  totalBox.classList.add("hidden");

  // Fill product step
  modalProdInfo.innerHTML = `
    <img src="${selectedProduct.image}" alt="${selectedProduct.name}" />
    <div class="info-text">
      <h3>${selectedProduct.name}</h3>
      <p>${selectedProduct.description}</p>
      <div class="price">${selectedProduct.price.toLocaleString("ar-DZ")} دج</div>
    </div>
  `;

  showStep("product");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
}

function showStep(name) {
  [stepProduct, stepInfo, stepSuccess].forEach(s => s.classList.remove("active"));
  document.getElementById("step-" + name).classList.add("active");
}

// ── WILAYA CHANGE ────────────────────────────────────────────
wilayaSelect.addEventListener("change", () => {
  const wId = parseInt(wilayaSelect.value);
  selectedWilaya = wilayas.find(w => w.id === wId) || null;
  selectedType   = null;
  document.querySelectorAll('input[name="delivery"]').forEach(r => r.checked = false);
  totalBox.classList.add("hidden");

  if (!selectedWilaya) {
    deliveryOptions.classList.add("hidden");
    return;
  }

  const w = selectedWilaya;

  // Bureau card
  if (w.bureau === null) {
    cardBureau.classList.add("card-unavailable");
    priceBureau.textContent = "غير متوفر";
  } else {
    cardBureau.classList.remove("card-unavailable");
    priceBureau.textContent = w.bureau === 0 ? "مجاني" : `${w.bureau.toLocaleString("ar-DZ")} دج`;
  }

  // Home card
  if (w.home === null) {
    cardHome.classList.add("card-unavailable");
    priceHome.textContent = "غير متوفر";
  } else {
    cardHome.classList.remove("card-unavailable");
    priceHome.textContent = `${w.home.toLocaleString("ar-DZ")} دج`;
  }

  deliveryOptions.classList.remove("hidden");
});

// ── DELIVERY RADIO ───────────────────────────────────────────
document.querySelectorAll('input[name="delivery"]').forEach(radio => {
  radio.addEventListener("change", updateTotal);
});

function updateTotal() {
  if (!selectedWilaya || !selectedProduct) return;
  const radios = document.querySelectorAll('input[name="delivery"]');
  const checked = [...radios].find(r => r.checked);
  if (!checked) return;
  selectedType = checked.value;

  const deliveryCost = selectedType === "bureau" ? selectedWilaya.bureau : selectedWilaya.home;
  const productCost  = selectedProduct.price;
  const total        = productCost + deliveryCost;

  totalProduct.textContent  = `${productCost.toLocaleString("ar-DZ")} دج`;
  totalDelivery.textContent = deliveryCost === 0 ? "مجاني" : `${deliveryCost.toLocaleString("ar-DZ")} دج`;
  totalSum.textContent      = `${total.toLocaleString("ar-DZ")} دج`;

  totalBox.classList.remove("hidden");
}

// ── CONFIRM ORDER ────────────────────────────────────────────
btnConfirm.addEventListener("click", async () => {
  const name  = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();

  if (!name)           return showToast("❗ يرجى إدخال الاسم");
  if (!phone)          return showToast("❗ يرجى إدخال رقم الهاتف");
  if (!selectedWilaya) return showToast("❗ يرجى اختيار الولاية");
  if (!selectedType)   return showToast("❗ يرجى اختيار نوع التوصيل");

  const deliveryCost = selectedType === "bureau" ? selectedWilaya.bureau : selectedWilaya.home;
  const total        = selectedProduct.price + deliveryCost;
  const deliveryLabel = selectedType === "bureau" ? "توصيل مكتب" : "توصيل منزل";

  const orderData = {
    data: {
      "التاريخ":        new Date().toLocaleString("ar-DZ"),
      "الاسم":          name,
      "الهاتف":         phone,
      "الولاية":        `${String(selectedWilaya.id).padStart(2,"0")} - ${selectedWilaya.name}`,
      "المنتج":         selectedProduct.name,
      "سعر المنتج":     selectedProduct.price,
      "نوع التوصيل":    deliveryLabel,
      "سعر التوصيل":    deliveryCost,
      "المجموع":        total,
    }
  };

  btnConfirm.disabled    = true;
  btnConfirm.textContent = "⏳ جاري الإرسال...";

  try {
    const res = await fetch(SHEETDB_URL, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(orderData),
    });
    if (!res.ok) throw new Error("SheetDB error");
    showStep("success");
  } catch (err) {
    showToast("❌ حدث خطأ، يرجى المحاولة مرة أخرى");
    console.error(err);
  } finally {
    btnConfirm.disabled    = false;
    btnConfirm.textContent = "✅ تأكيد الطلبية";
  }
});

// ── LISTENERS ────────────────────────────────────────────────
function attachListeners() {
  // Open modal from product cards / buttons
  document.getElementById("products-grid").addEventListener("click", e => {
    const btn = e.target.closest("[data-id]");
    if (btn) openModal(parseInt(btn.dataset.id));
  });

  modalClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });

  btnToInfo.addEventListener("click", () => showStep("info"));
  btnBackProduct.addEventListener("click", () => showStep("product"));
  btnNewOrder.addEventListener("click", () => { closeModal(); });

  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

// ── TOAST ────────────────────────────────────────────────────
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 3000);
}

// ── START ─────────────────────────────────────────────────────
init();
