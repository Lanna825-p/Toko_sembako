const ADMIN_WHATSAPP = "6281234567890";

const STORAGE_KEYS = {
  users: "nana_users",
  session: "nana_session",
  products: "nana_products",
  orders: "nana_orders",
  carts: "nana_carts",
  wishlists: "nana_wishlists",
};

const SHIPPING_OPTIONS = {
  Reguler: 8000,
  Express: 15000,
  "Ambil Sendiri": 0,
};

const PROMO_CODES = {
  DISKON10: 0.1,
  HEMAT20: 0.2,
};

const ORDER_STATUSES = ["Menunggu Pembayaran", "Diproses", "Dikirim", "Selesai", "Dibatalkan"];

const DEFAULT_USERS = [
  {
    id: "user-admin-1",
    name: "Owner NanaMart",
    email: "admin@nanamart.id",
    phone: "081234567890",
    password: "admin123",
    role: "admin",
  },
  {
    id: "user-demo-1",
    name: "Pelanggan Demo",
    email: "pelanggan@nanamart.id",
    phone: "081200001111",
    password: "pelanggan123",
    role: "customer",
  },
];

const DEFAULT_PRODUCTS = [
  {
    id: "prd-beras-premium-5kg",
    name: "Beras Premium 5kg",
    category: "Beras",
    price: 78000,
    stock: 35,
    unit: "karung",
    badge: "Best Seller",
    description: "Beras pulen untuk kebutuhan warung dan rumah tangga.",
  },
  {
    id: "prd-beras-medium-10kg",
    name: "Beras Medium 10kg",
    category: "Beras",
    price: 142000,
    stock: 22,
    unit: "karung",
    badge: "Grosir",
    description: "Pilihan ekonomis untuk stok besar warung.",
  },
  {
    id: "prd-minyak-goreng-2l",
    name: "Minyak Goreng 2L",
    category: "Minyak",
    price: 36500,
    stock: 41,
    unit: "botol",
    badge: "Laris",
    description: "Minyak jernih berkualitas, cocok untuk kebutuhan harian.",
  },
  {
    id: "prd-gula-pasir-1kg",
    name: "Gula Pasir 1kg",
    category: "Gula",
    price: 18500,
    stock: 62,
    unit: "pack",
    badge: "Harian",
    description: "Gula pasir putih untuk stok jual eceran warung.",
  },
  {
    id: "prd-tepung-terigu-1kg",
    name: "Tepung Terigu 1kg",
    category: "Tepung",
    price: 14500,
    stock: 55,
    unit: "pack",
    badge: "Promo",
    description: "Tepung serbaguna untuk gorengan, kue, dan masakan.",
  },
  {
    id: "prd-telur-ayam-1kg",
    name: "Telur Ayam 1kg",
    category: "Protein",
    price: 29500,
    stock: 36,
    unit: "kg",
    badge: "Fresh",
    description: "Telur segar kualitas baik untuk kebutuhan dapur.",
  },
  {
    id: "prd-mie-instan-karton",
    name: "Mie Instan Karton",
    category: "Makanan Instan",
    price: 126000,
    stock: 18,
    unit: "karton",
    badge: "Grosir",
    description: "Isi 40 pcs, cocok untuk stok warung skala besar.",
  },
  {
    id: "prd-susu-kental-manis",
    name: "Susu Kental Manis",
    category: "Minuman",
    price: 12800,
    stock: 47,
    unit: "kaleng",
    badge: "Favorit",
    description: "Praktis untuk aneka minuman dan kebutuhan dapur.",
  },
  {
    id: "prd-kopi-sachet-30",
    name: "Kopi Sachet 30 pcs",
    category: "Minuman",
    price: 24800,
    stock: 42,
    unit: "pack",
    badge: "Bundling",
    description: "Kemasan ekonomis untuk jual eceran di warung.",
  },
  {
    id: "prd-garam-500gr",
    name: "Garam Halus 500gr",
    category: "Bumbu",
    price: 6500,
    stock: 75,
    unit: "pack",
    badge: "Murah",
    description: "Bumbu pokok dengan harga ramah modal.",
  },
];

const els = {
  authScreen: document.querySelector("#auth-screen"),
  appScreen: document.querySelector("#app-screen"),
  userChip: document.querySelector("#user-chip"),
  userName: document.querySelector("#user-name"),
  userRolePill: document.querySelector("#user-role-pill"),
  logoutBtn: document.querySelector("#logout-btn"),
  mainNav: document.querySelector("#main-nav"),
  navButtons: Array.from(document.querySelectorAll(".nav-btn")),
  adminOnlyNodes: Array.from(document.querySelectorAll(".admin-only")),
  authTabs: Array.from(document.querySelectorAll(".auth-tab")),
  loginForm: document.querySelector("#login-form"),
  registerForm: document.querySelector("#register-form"),
  loginEmail: document.querySelector("#login-email"),
  loginPassword: document.querySelector("#login-password"),
  registerName: document.querySelector("#register-name"),
  registerEmail: document.querySelector("#register-email"),
  registerPhone: document.querySelector("#register-phone"),
  registerPassword: document.querySelector("#register-password"),
  heroCopy: document.querySelector("#hero-copy"),
  statProducts: document.querySelector("#stat-products"),
  statOrders: document.querySelector("#stat-orders"),
  statRevenue: document.querySelector("#stat-revenue"),
  viewNodes: {
    market: document.querySelector("#market-view"),
    wishlist: document.querySelector("#wishlist-view"),
    orders: document.querySelector("#orders-view"),
    admin: document.querySelector("#admin-view"),
  },
  searchInput: document.querySelector("#search-input"),
  sortSelect: document.querySelector("#sort-select"),
  stockOnly: document.querySelector("#stock-only"),
  categoryChips: document.querySelector("#category-chips"),
  productGrid: document.querySelector("#product-grid"),
  wishlistGrid: document.querySelector("#wishlist-grid"),
  ordersList: document.querySelector("#orders-list"),
  ordersSubtext: document.querySelector("#orders-subtext"),
  cartPanel: document.querySelector("#cart-panel"),
  cartItems: document.querySelector("#cart-items"),
  mobileCartToggle: document.querySelector("#mobile-cart-toggle"),
  mobileCartCount: document.querySelector("#mobile-cart-count"),
  clearCartBtn: document.querySelector("#clear-cart-btn"),
  promoInput: document.querySelector("#promo-input"),
  applyPromoBtn: document.querySelector("#apply-promo-btn"),
  customerName: document.querySelector("#customer-name"),
  customerPhone: document.querySelector("#customer-phone"),
  customerAddress: document.querySelector("#customer-address"),
  paymentMethod: document.querySelector("#payment-method"),
  shippingMethod: document.querySelector("#shipping-method"),
  subtotal: document.querySelector("#subtotal"),
  discountTotal: document.querySelector("#discount-total"),
  shippingTotal: document.querySelector("#shipping-total"),
  grandTotal: document.querySelector("#grand-total"),
  checkoutForm: document.querySelector("#checkout-form"),
  checkoutWaBtn: document.querySelector("#checkout-wa-btn"),
  productForm: document.querySelector("#product-form"),
  productId: document.querySelector("#product-id"),
  productName: document.querySelector("#product-name"),
  productCategory: document.querySelector("#product-category"),
  productPrice: document.querySelector("#product-price"),
  productStock: document.querySelector("#product-stock"),
  productUnit: document.querySelector("#product-unit"),
  productBadge: document.querySelector("#product-badge"),
  productDescription: document.querySelector("#product-description"),
  productSaveBtn: document.querySelector("#product-save-btn"),
  productCancelBtn: document.querySelector("#product-cancel-btn"),
  adminProductsTable: document.querySelector("#admin-products-table"),
  adminOrdersTable: document.querySelector("#admin-orders-table"),
  orderModal: document.querySelector("#order-modal"),
  orderModalContent: document.querySelector("#order-modal-content"),
  closeOrderModal: document.querySelector("#close-order-modal"),
  homeLink: document.querySelector("#home-link"),
  toast: document.querySelector("#toast"),
};

const state = {
  users: [],
  products: [],
  orders: [],
  carts: {},
  wishlists: {},
  sessionUserId: null,
  activeView: "market",
  filters: {
    query: "",
    category: "Semua",
    sort: "featured",
    stockOnly: false,
  },
  promo: {
    code: "",
    rate: 0,
  },
};

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return clone(fallback);
    const parsed = JSON.parse(raw);
    return parsed ?? clone(fallback);
  } catch {
    return clone(fallback);
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function uid(prefix) {
  const random = Math.random().toString(36).slice(2, 8);
  return `${prefix}-${Date.now()}-${random}`;
}

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function formatDate(value) {
  try {
    return new Intl.DateTimeFormat("id-ID", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return "-";
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    els.toast.classList.remove("show");
  }, 1600);
}

function getCurrentUser() {
  return state.users.find((user) => user.id === state.sessionUserId) || null;
}

function isAdmin() {
  const user = getCurrentUser();
  return Boolean(user && user.role === "admin");
}

function setSession(userId) {
  state.sessionUserId = userId;
  writeStorage(STORAGE_KEYS.session, { userId });
}

function clearSession() {
  state.sessionUserId = null;
  writeStorage(STORAGE_KEYS.session, { userId: null });
}

function getCurrentCart() {
  const user = getCurrentUser();
  if (!user) return {};
  return state.carts[user.id] || {};
}

function setCurrentCart(cartObj) {
  const user = getCurrentUser();
  if (!user) return;
  state.carts[user.id] = cartObj;
  writeStorage(STORAGE_KEYS.carts, state.carts);
}

function getCurrentWishlist() {
  const user = getCurrentUser();
  if (!user) return [];
  return state.wishlists[user.id] || [];
}

function setCurrentWishlist(wishIds) {
  const user = getCurrentUser();
  if (!user) return;
  state.wishlists[user.id] = wishIds;
  writeStorage(STORAGE_KEYS.wishlists, state.wishlists);
}

function productTone(category) {
  const key = category.toLowerCase();
  if (key.includes("beras")) return "tone-beras";
  if (key.includes("minyak")) return "tone-minyak";
  if (key.includes("gula")) return "tone-gula";
  if (key.includes("tepung")) return "tone-tepung";
  if (key.includes("protein")) return "tone-protein";
  if (key.includes("minuman")) return "tone-minuman";
  if (key.includes("bumbu")) return "tone-bumbu";
  if (key.includes("instan")) return "tone-instan";
  return "tone-bumbu";
}

function getCategoryList() {
  const categories = Array.from(new Set(state.products.map((item) => item.category)));
  categories.sort((a, b) => a.localeCompare(b));
  return ["Semua", ...categories];
}

function getFilteredProducts() {
  let list = [...state.products];
  const query = state.filters.query.trim().toLowerCase();

  if (state.filters.category !== "Semua") {
    list = list.filter((item) => item.category === state.filters.category);
  }

  if (query) {
    list = list.filter((item) => {
      const bag = `${item.name} ${item.category} ${item.description}`.toLowerCase();
      return bag.includes(query);
    });
  }

  if (state.filters.stockOnly) {
    list = list.filter((item) => item.stock > 0);
  }

  if (state.filters.sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (state.filters.sort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (state.filters.sort === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));
  if (state.filters.sort === "stock-desc") list.sort((a, b) => b.stock - a.stock);

  return list;
}

function getCartEntries() {
  const cart = getCurrentCart();
  return Object.entries(cart)
    .map(([productId, qty]) => {
      const product = state.products.find((item) => item.id === productId);
      if (!product) return null;
      return { product, qty };
    })
    .filter(Boolean);
}

function getTotals() {
  const items = getCartEntries();
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const discount = Math.round(subtotal * state.promo.rate);
  const shippingName = els.shippingMethod.value;
  const shippingBase = SHIPPING_OPTIONS[shippingName] ?? SHIPPING_OPTIONS.Reguler;
  const shipping = subtotal > 0 ? shippingBase : 0;
  const total = Math.max(0, subtotal - discount + shipping);
  return { subtotal, discount, shipping, total };
}

function getUserOrders() {
  const user = getCurrentUser();
  if (!user) return [];
  if (user.role === "admin") return [...state.orders].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return state.orders
    .filter((order) => order.userId === user.id)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

function getWishlistProducts() {
  const wishSet = new Set(getCurrentWishlist());
  return state.products.filter((item) => wishSet.has(item.id));
}

function saveUsers() {
  writeStorage(STORAGE_KEYS.users, state.users);
}

function saveProducts() {
  writeStorage(STORAGE_KEYS.products, state.products);
}

function saveOrders() {
  writeStorage(STORAGE_KEYS.orders, state.orders);
}

function statusClass(status) {
  const value = status.toLowerCase();
  if (value.includes("menunggu")) return "status-menunggu";
  if (value.includes("diproses")) return "status-diproses";
  if (value.includes("dikirim")) return "status-dikirim";
  if (value.includes("selesai")) return "status-selesai";
  return "status-batal";
}

function setView(viewName) {
  const user = getCurrentUser();
  if (!user) return;

  const allowedView = viewName === "admin" && user.role !== "admin" ? "market" : viewName;
  state.activeView = allowedView;

  Object.entries(els.viewNodes).forEach(([key, node]) => {
    node.classList.toggle("active-view", key === allowedView);
  });

  els.navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === allowedView);
  });
}

function renderAuthState() {
  const user = getCurrentUser();
  const loggedIn = Boolean(user);

  els.authScreen.classList.toggle("hidden", loggedIn);
  els.appScreen.classList.toggle("hidden", !loggedIn);
  els.userChip.classList.toggle("hidden", !loggedIn);
  els.mainNav.classList.toggle("hidden", !loggedIn);

  if (!user) return;

  els.userName.textContent = user.name;
  els.userRolePill.textContent = user.role === "admin" ? "Admin" : "Customer";
  els.userRolePill.classList.toggle("admin", user.role === "admin");
  els.adminOnlyNodes.forEach((node) => {
    node.classList.toggle("hidden", user.role !== "admin");
  });

  if (state.activeView === "admin" && user.role !== "admin") {
    state.activeView = "market";
  }

  setView(state.activeView);
}

function renderHero() {
  const user = getCurrentUser();
  if (!user) return;

  const orders = getUserOrders();
  const revenue = state.orders
    .filter((order) => order.status !== "Dibatalkan")
    .reduce((sum, order) => sum + order.total, 0);

  els.statProducts.textContent = String(state.products.length);
  els.statOrders.textContent = String(orders.length);
  els.statRevenue.textContent = formatRupiah(revenue);
  els.heroCopy.textContent =
    user.role === "admin"
      ? "Kamu login sebagai admin. Kelola produk, pantau pesanan, dan update status pengiriman."
      : "Kamu login sebagai customer. Belanja sembako, simpan wishlist, lalu checkout dalam satu dashboard.";
}

function renderCategoryChips() {
  const categories = getCategoryList();
  els.categoryChips.innerHTML = categories
    .map((category) => {
      const active = category === state.filters.category ? "active" : "";
      return `<button class="chip ${active}" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`;
    })
    .join("");
}

function productCardTemplate(product, isWishlisted) {
  const stockText = product.stock > 0 ? `Stok ${product.stock}` : "Stok habis";
  const disabled = product.stock <= 0 ? "disabled" : "";
  const tone = productTone(product.category);
  const wishClass = isWishlisted ? "active" : "";

  return `
    <article class="product-card">
      <div class="product-top">
        <div class="product-thumb ${tone}">${escapeHtml(product.category)}</div>
        <span class="badge">${escapeHtml(product.badge)}</span>
      </div>
      <div>
        <h4 class="product-title">${escapeHtml(product.name)}</h4>
        <p class="product-desc">${escapeHtml(product.description)}</p>
      </div>
      <div class="meta-row">
        <strong class="price">${formatRupiah(product.price)} / ${escapeHtml(product.unit)}</strong>
        <span class="stock">${stockText}</span>
      </div>
      <div class="row-actions">
        <button class="card-btn add-cart" type="button" data-product-id="${product.id}" ${disabled}>+ Keranjang</button>
        <button class="card-btn wish ${wishClass}" type="button" data-wish-id="${product.id}">Wishlist</button>
      </div>
    </article>
  `;
}

function renderProducts() {
  const list = getFilteredProducts();
  const wishSet = new Set(getCurrentWishlist());
  if (!list.length) {
    els.productGrid.innerHTML = '<p class="empty-state">Produk tidak ditemukan. Coba ubah pencarian atau filter.</p>';
    return;
  }
  els.productGrid.innerHTML = list.map((item) => productCardTemplate(item, wishSet.has(item.id))).join("");
}

function renderWishlist() {
  const list = getWishlistProducts();
  const wishSet = new Set(getCurrentWishlist());
  if (!list.length) {
    els.wishlistGrid.innerHTML = '<p class="empty-state">Wishlist masih kosong.</p>';
    return;
  }
  els.wishlistGrid.innerHTML = list.map((item) => productCardTemplate(item, wishSet.has(item.id))).join("");
}

function renderCart() {
  const entries = getCartEntries();
  if (!entries.length) {
    els.cartItems.innerHTML = '<p class="empty-state">Keranjang kosong. Tambahkan produk dari katalog.</p>';
  } else {
    els.cartItems.innerHTML = entries
      .map((entry) => {
        return `
          <article class="cart-item">
            <div class="cart-row">
              <div>
                <h5 class="cart-title">${escapeHtml(entry.product.name)}</h5>
                <p class="cart-sub">${formatRupiah(entry.product.price)} / ${escapeHtml(entry.product.unit)}</p>
              </div>
              <button class="danger-btn remove-cart-item" type="button" data-remove-id="${entry.product.id}">Hapus</button>
            </div>
            <div class="cart-row">
              <div class="qty-row">
                <button class="qty-btn" type="button" data-qty-id="${entry.product.id}" data-qty-action="minus">-</button>
                <strong>${entry.qty}</strong>
                <button class="qty-btn" type="button" data-qty-id="${entry.product.id}" data-qty-action="plus">+</button>
              </div>
              <strong>${formatRupiah(entry.qty * entry.product.price)}</strong>
            </div>
          </article>
        `;
      })
      .join("");
  }

  const totals = getTotals();
  els.subtotal.textContent = formatRupiah(totals.subtotal);
  els.discountTotal.textContent = `-${formatRupiah(totals.discount)}`;
  els.shippingTotal.textContent = formatRupiah(totals.shipping);
  els.grandTotal.textContent = formatRupiah(totals.total);
  els.mobileCartCount.textContent = String(entries.reduce((sum, item) => sum + item.qty, 0));
}

function orderCardTemplate(order) {
  return `
    <article class="order-card">
      <div class="order-head">
        <strong>${escapeHtml(order.id)}</strong>
        <span class="status-pill ${statusClass(order.status)}">${escapeHtml(order.status)}</span>
      </div>
      <div class="meta-row">
        <span>${formatDate(order.createdAt)}</span>
        <strong>${formatRupiah(order.total)}</strong>
      </div>
      <div class="meta-row">
        <span>${order.items.length} item</span>
        <button class="ghost-btn order-detail-btn" type="button" data-order-id="${order.id}">Detail</button>
      </div>
    </article>
  `;
}

function renderOrders() {
  const user = getCurrentUser();
  if (!user) return;
  els.ordersSubtext.textContent =
    user.role === "admin"
      ? "Karena kamu admin, semua pesanan dari semua user ditampilkan."
      : "Riwayat pembelianmu tampil otomatis di sini.";

  const list = getUserOrders();
  if (!list.length) {
    els.ordersList.innerHTML = '<p class="empty-state">Belum ada pesanan.</p>';
    return;
  }
  els.ordersList.innerHTML = list.map(orderCardTemplate).join("");
}

function renderAdminProducts() {
  if (!isAdmin()) {
    els.adminProductsTable.innerHTML = '<p class="empty-state">Hanya admin yang bisa melihat data ini.</p>';
    return;
  }

  const rows = state.products
    .map((product) => {
      return `
        <tr>
          <td>${escapeHtml(product.name)}</td>
          <td>${escapeHtml(product.category)}</td>
          <td>${formatRupiah(product.price)}</td>
          <td>${product.stock}</td>
          <td>${escapeHtml(product.unit)}</td>
          <td>
            <button class="ghost-btn edit-product-btn" type="button" data-edit-id="${product.id}">Edit</button>
            <button class="danger-btn delete-product-btn" type="button" data-delete-id="${product.id}">Hapus</button>
          </td>
        </tr>
      `;
    })
    .join("");

  els.adminProductsTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Kategori</th>
          <th>Harga</th>
          <th>Stok</th>
          <th>Satuan</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderAdminOrders() {
  if (!isAdmin()) {
    els.adminOrdersTable.innerHTML = '<p class="empty-state">Hanya admin yang bisa melihat data ini.</p>';
    return;
  }

  if (!state.orders.length) {
    els.adminOrdersTable.innerHTML = '<p class="empty-state">Belum ada pesanan masuk.</p>';
    return;
  }

  const rows = [...state.orders]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map((order) => {
      const options = ORDER_STATUSES.map((status) => {
        const selected = status === order.status ? "selected" : "";
        return `<option value="${status}" ${selected}>${status}</option>`;
      }).join("");

      return `
        <tr>
          <td>${escapeHtml(order.id)}</td>
          <td>${escapeHtml(order.customer.name)}</td>
          <td>${formatRupiah(order.total)}</td>
          <td>${formatDate(order.createdAt)}</td>
          <td><select class="order-status-select" data-status-id="${order.id}">${options}</select></td>
          <td><button class="ghost-btn save-order-status-btn" type="button" data-save-id="${order.id}">Simpan</button></td>
        </tr>
      `;
    })
    .join("");

  els.adminOrdersTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>ID Order</th>
          <th>Customer</th>
          <th>Total</th>
          <th>Tanggal</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderAll() {
  renderAuthState();
  if (!getCurrentUser()) return;
  renderHero();
  renderCategoryChips();
  renderProducts();
  renderWishlist();
  renderCart();
  renderOrders();
  renderAdminProducts();
  renderAdminOrders();
}

function addToCart(productId) {
  const product = state.products.find((item) => item.id === productId);
  if (!product) return;
  if (product.stock <= 0) {
    showToast("Stok produk habis.");
    return;
  }

  const cart = { ...getCurrentCart() };
  const currentQty = cart[productId] || 0;
  if (currentQty >= product.stock) {
    showToast("Jumlah melebihi stok tersedia.");
    return;
  }
  cart[productId] = currentQty + 1;
  setCurrentCart(cart);
  renderCart();
  showToast("Produk ditambahkan ke keranjang.");
}

function updateCartQty(productId, action) {
  const cart = { ...getCurrentCart() };
  if (!cart[productId]) return;

  if (action === "minus") {
    cart[productId] -= 1;
    if (cart[productId] <= 0) delete cart[productId];
  } else if (action === "plus") {
    const product = state.products.find((item) => item.id === productId);
    if (!product) return;
    if (cart[productId] >= product.stock) {
      showToast("Stok maksimal tercapai.");
      return;
    }
    cart[productId] += 1;
  }

  setCurrentCart(cart);
  renderCart();
}

function removeCartItem(productId) {
  const cart = { ...getCurrentCart() };
  delete cart[productId];
  setCurrentCart(cart);
  renderCart();
}

function clearCart() {
  setCurrentCart({});
  renderCart();
  showToast("Keranjang berhasil dikosongkan.");
}

function toggleWishlist(productId) {
  const wishSet = new Set(getCurrentWishlist());
  if (wishSet.has(productId)) wishSet.delete(productId);
  else wishSet.add(productId);
  setCurrentWishlist(Array.from(wishSet));
  renderProducts();
  renderWishlist();
}

function applyPromoCode() {
  const code = els.promoInput.value.trim().toUpperCase();
  if (!code) {
    state.promo = { code: "", rate: 0 };
    renderCart();
    showToast("Promo direset.");
    return;
  }
  if (!PROMO_CODES[code]) {
    showToast("Kode promo tidak valid.");
    return;
  }
  state.promo = { code, rate: PROMO_CODES[code] };
  renderCart();
  showToast(`Promo ${code} aktif.`);
}

function validateCheckout() {
  const name = els.customerName.value.trim();
  const phone = els.customerPhone.value.trim();
  const address = els.customerAddress.value.trim();
  const payment = els.paymentMethod.value;
  const shippingMethod = els.shippingMethod.value;
  const items = getCartEntries();

  if (!items.length) {
    showToast("Keranjang masih kosong.");
    return null;
  }
  if (!name || !phone || !address) {
    showToast("Isi nama, nomor WA, dan alamat terlebih dahulu.");
    return null;
  }
  return { name, phone, address, payment, shippingMethod, items };
}

function createOrder(payload) {
  const user = getCurrentUser();
  if (!user) return null;

  for (const item of payload.items) {
    if (item.qty > item.product.stock) {
      showToast(`Stok ${item.product.name} tidak cukup.`);
      return null;
    }
  }

  payload.items.forEach((item) => {
    const product = state.products.find((p) => p.id === item.product.id);
    if (product) product.stock = Math.max(0, product.stock - item.qty);
  });

  const totals = getTotals();
  const order = {
    id: `ORD-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${Math.floor(Math.random() * 900 + 100)}`,
    userId: user.id,
    customer: {
      name: payload.name,
      phone: payload.phone,
      address: payload.address,
    },
    paymentMethod: payload.payment,
    shippingMethod: payload.shippingMethod,
    items: payload.items.map((item) => ({
      productId: item.product.id,
      name: item.product.name,
      unit: item.product.unit,
      qty: item.qty,
      price: item.product.price,
      subtotal: item.qty * item.product.price,
    })),
    subtotal: totals.subtotal,
    discount: totals.discount,
    shipping: totals.shipping,
    total: totals.total,
    promoCode: state.promo.code || null,
    status: "Menunggu Pembayaran",
    createdAt: new Date().toISOString(),
  };

  state.orders.push(order);
  saveOrders();
  saveProducts();
  setCurrentCart({});
  state.promo = { code: "", rate: 0 };
  els.promoInput.value = "";
  renderAll();
  return order;
}

function buildWhatsAppMessage(order) {
  const itemLines = order.items
    .map((item, index) => `${index + 1}. ${item.name} x${item.qty} = ${formatRupiah(item.subtotal)}`)
    .join("\n");

  return [
    "Halo admin NanaMart, saya sudah membuat pesanan:",
    "",
    `ID: ${order.id}`,
    "",
    itemLines,
    "",
    `Subtotal: ${formatRupiah(order.subtotal)}`,
    `Diskon: ${formatRupiah(order.discount)}`,
    `Ongkir: ${formatRupiah(order.shipping)}`,
    `Total: ${formatRupiah(order.total)}`,
    "",
    "Data penerima:",
    `Nama: ${order.customer.name}`,
    `No WA: ${order.customer.phone}`,
    `Alamat: ${order.customer.address}`,
    `Pembayaran: ${order.paymentMethod}`,
    `Pengiriman: ${order.shippingMethod}`,
    "",
    "Mohon konfirmasi pesanan. Terima kasih.",
  ].join("\n");
}

function sendToWhatsApp(order) {
  const url = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(buildWhatsAppMessage(order))}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function fillCheckoutFromUser() {
  const user = getCurrentUser();
  if (!user) return;
  els.customerName.value = user.name || "";
  els.customerPhone.value = user.phone || "";
}

function showOrderDetail(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  const itemsHtml = order.items
    .map((item) => `<li>${escapeHtml(item.name)} x${item.qty} (${formatRupiah(item.subtotal)})</li>`)
    .join("");

  els.orderModalContent.innerHTML = `
    <p><strong>ID:</strong> ${escapeHtml(order.id)}</p>
    <p><strong>Tanggal:</strong> ${formatDate(order.createdAt)}</p>
    <p><strong>Status:</strong> ${escapeHtml(order.status)}</p>
    <p><strong>Customer:</strong> ${escapeHtml(order.customer.name)} - ${escapeHtml(order.customer.phone)}</p>
    <p><strong>Alamat:</strong> ${escapeHtml(order.customer.address)}</p>
    <p><strong>Pembayaran:</strong> ${escapeHtml(order.paymentMethod)}</p>
    <p><strong>Pengiriman:</strong> ${escapeHtml(order.shippingMethod)}</p>
    <p><strong>Item:</strong></p>
    <ul>${itemsHtml}</ul>
    <p><strong>Subtotal:</strong> ${formatRupiah(order.subtotal)}</p>
    <p><strong>Diskon:</strong> ${formatRupiah(order.discount)}</p>
    <p><strong>Ongkir:</strong> ${formatRupiah(order.shipping)}</p>
    <p><strong>Total:</strong> ${formatRupiah(order.total)}</p>
  `;
  els.orderModal.showModal();
}

function resetProductForm() {
  els.productId.value = "";
  els.productName.value = "";
  els.productCategory.value = "";
  els.productPrice.value = "";
  els.productStock.value = "";
  els.productUnit.value = "";
  els.productBadge.value = "";
  els.productDescription.value = "";
  els.productSaveBtn.textContent = "Simpan Produk";
}

function fillProductForm(productId) {
  const product = state.products.find((item) => item.id === productId);
  if (!product) return;
  els.productId.value = product.id;
  els.productName.value = product.name;
  els.productCategory.value = product.category;
  els.productPrice.value = String(product.price);
  els.productStock.value = String(product.stock);
  els.productUnit.value = product.unit;
  els.productBadge.value = product.badge;
  els.productDescription.value = product.description;
  els.productSaveBtn.textContent = "Update Produk";
}

function handleSaveProduct(event) {
  event.preventDefault();
  if (!isAdmin()) return;

  const payload = {
    id: els.productId.value.trim() || uid("prd"),
    name: els.productName.value.trim(),
    category: els.productCategory.value.trim(),
    price: Number(els.productPrice.value),
    stock: Number(els.productStock.value),
    unit: els.productUnit.value.trim(),
    badge: els.productBadge.value.trim(),
    description: els.productDescription.value.trim(),
  };

  if (
    !payload.name ||
    !payload.category ||
    !payload.unit ||
    !payload.badge ||
    !payload.description ||
    Number.isNaN(payload.price) ||
    Number.isNaN(payload.stock) ||
    payload.price < 0 ||
    payload.stock < 0
  ) {
    showToast("Data produk belum lengkap atau tidak valid.");
    return;
  }

  const idx = state.products.findIndex((item) => item.id === payload.id);
  if (idx >= 0) {
    state.products[idx] = payload;
    showToast("Produk berhasil diupdate.");
  } else {
    state.products.push(payload);
    showToast("Produk baru berhasil ditambahkan.");
  }

  saveProducts();
  resetProductForm();
  renderAll();
}

function deleteProduct(productId) {
  if (!isAdmin()) return;
  const product = state.products.find((item) => item.id === productId);
  if (!product) return;
  if (!window.confirm(`Hapus produk "${product.name}"?`)) return;

  state.products = state.products.filter((item) => item.id !== productId);

  Object.keys(state.carts).forEach((userId) => {
    const cart = state.carts[userId];
    if (cart && cart[productId]) delete cart[productId];
  });

  Object.keys(state.wishlists).forEach((userId) => {
    state.wishlists[userId] = (state.wishlists[userId] || []).filter((id) => id !== productId);
  });

  writeStorage(STORAGE_KEYS.carts, state.carts);
  writeStorage(STORAGE_KEYS.wishlists, state.wishlists);
  saveProducts();
  renderAll();
  showToast("Produk berhasil dihapus.");
}

function updateOrderStatus(orderId, status) {
  if (!isAdmin()) return;
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  order.status = status;
  saveOrders();
  renderAll();
  showToast("Status pesanan berhasil diperbarui.");
}

function setAuthTab(tabName) {
  els.authTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.authTab === tabName);
  });
  els.loginForm.classList.toggle("hidden", tabName !== "login");
  els.registerForm.classList.toggle("hidden", tabName !== "register");
}

function handleLogin(event) {
  event.preventDefault();
  const email = els.loginEmail.value.trim().toLowerCase();
  const password = els.loginPassword.value;
  const user = state.users.find((item) => item.email.toLowerCase() === email && item.password === password);
  if (!user) {
    showToast("Email atau password tidak cocok.");
    return;
  }

  setSession(user.id);
  fillCheckoutFromUser();
  renderAll();
  showToast(`Selamat datang, ${user.name}.`);
}

function handleRegister(event) {
  event.preventDefault();
  const payload = {
    id: uid("user"),
    name: els.registerName.value.trim(),
    email: els.registerEmail.value.trim().toLowerCase(),
    phone: els.registerPhone.value.trim(),
    password: els.registerPassword.value,
    role: "customer",
  };

  if (!payload.name || !payload.email || !payload.phone || !payload.password) {
    showToast("Isi semua field register.");
    return;
  }
  if (payload.password.length < 6) {
    showToast("Password minimal 6 karakter.");
    return;
  }
  if (state.users.some((item) => item.email.toLowerCase() === payload.email)) {
    showToast("Email sudah terdaftar.");
    return;
  }

  state.users.push(payload);
  saveUsers();
  setSession(payload.id);
  fillCheckoutFromUser();
  renderAll();
  showToast("Akun berhasil dibuat.");
}

function logout() {
  clearSession();
  state.activeView = "market";
  renderAll();
  setAuthTab("login");
  showToast("Kamu sudah logout.");
}

function bindEvents() {
  els.authTabs.forEach((tab) => {
    tab.addEventListener("click", () => setAuthTab(tab.dataset.authTab || "login"));
  });

  els.loginForm.addEventListener("submit", handleLogin);
  els.registerForm.addEventListener("submit", handleRegister);
  els.logoutBtn.addEventListener("click", logout);

  els.navButtons.forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view || "market"));
  });

  els.homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    if (getCurrentUser()) setView("market");
  });

  els.searchInput.addEventListener("input", (event) => {
    state.filters.query = event.target.value;
    renderProducts();
  });
  els.sortSelect.addEventListener("change", (event) => {
    state.filters.sort = event.target.value;
    renderProducts();
  });
  els.stockOnly.addEventListener("change", (event) => {
    state.filters.stockOnly = Boolean(event.target.checked);
    renderProducts();
  });

  els.categoryChips.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest("[data-category]");
    if (!button) return;
    state.filters.category = button.getAttribute("data-category") || "Semua";
    renderCategoryChips();
    renderProducts();
  });

  const productActionHandler = (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const addBtn = target.closest(".add-cart");
    if (addBtn) {
      const id = addBtn.getAttribute("data-product-id");
      if (id) addToCart(id);
      return;
    }
    const wishBtn = target.closest("[data-wish-id]");
    if (wishBtn) {
      const id = wishBtn.getAttribute("data-wish-id");
      if (id) toggleWishlist(id);
    }
  };

  els.productGrid.addEventListener("click", productActionHandler);
  els.wishlistGrid.addEventListener("click", productActionHandler);

  els.cartItems.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const qtyBtn = target.closest("[data-qty-id]");
    if (qtyBtn) {
      const id = qtyBtn.getAttribute("data-qty-id");
      const action = qtyBtn.getAttribute("data-qty-action");
      if (id && action) updateCartQty(id, action);
      return;
    }
    const removeBtn = target.closest("[data-remove-id]");
    if (removeBtn) {
      const id = removeBtn.getAttribute("data-remove-id");
      if (id) removeCartItem(id);
    }
  });

  els.clearCartBtn.addEventListener("click", clearCart);
  els.applyPromoBtn.addEventListener("click", applyPromoCode);
  els.shippingMethod.addEventListener("change", renderCart);

  els.checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const payload = validateCheckout();
    if (!payload) return;
    const order = createOrder(payload);
    if (!order) return;
    showToast(`Pesanan ${order.id} berhasil dibuat.`);
  });

  els.checkoutWaBtn.addEventListener("click", () => {
    const payload = validateCheckout();
    if (!payload) return;
    const order = createOrder(payload);
    if (!order) return;
    sendToWhatsApp(order);
    showToast(`Pesanan ${order.id} dikirim ke WhatsApp.`);
  });

  els.ordersList.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const btn = target.closest(".order-detail-btn");
    if (!btn) return;
    const id = btn.getAttribute("data-order-id");
    if (id) showOrderDetail(id);
  });

  els.closeOrderModal.addEventListener("click", () => {
    els.orderModal.close();
  });

  els.productForm.addEventListener("submit", handleSaveProduct);
  els.productCancelBtn.addEventListener("click", resetProductForm);

  els.adminProductsTable.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const editBtn = target.closest("[data-edit-id]");
    if (editBtn) {
      const id = editBtn.getAttribute("data-edit-id");
      if (id) fillProductForm(id);
      return;
    }
    const deleteBtn = target.closest("[data-delete-id]");
    if (deleteBtn) {
      const id = deleteBtn.getAttribute("data-delete-id");
      if (id) deleteProduct(id);
    }
  });

  els.adminOrdersTable.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const saveBtn = target.closest("[data-save-id]");
    if (!saveBtn) return;
    const id = saveBtn.getAttribute("data-save-id");
    if (!id) return;
    const select = els.adminOrdersTable.querySelector(`select[data-status-id="${id}"]`);
    if (!(select instanceof HTMLSelectElement)) return;
    updateOrderStatus(id, select.value);
  });

  els.mobileCartToggle.addEventListener("click", () => {
    els.cartPanel.classList.toggle("open");
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth > 1080) return;
    if (!els.cartPanel.classList.contains("open")) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.closest("#cart-panel") || target.closest("#mobile-cart-toggle")) return;
    els.cartPanel.classList.remove("open");
  });
}

function initData() {
  state.users = readStorage(STORAGE_KEYS.users, DEFAULT_USERS);
  state.products = readStorage(STORAGE_KEYS.products, DEFAULT_PRODUCTS);
  state.orders = readStorage(STORAGE_KEYS.orders, []);
  state.carts = readStorage(STORAGE_KEYS.carts, {});
  state.wishlists = readStorage(STORAGE_KEYS.wishlists, {});
  const session = readStorage(STORAGE_KEYS.session, { userId: null });
  state.sessionUserId = session.userId;
}

function init() {
  initData();
  bindEvents();
  renderAll();
  fillCheckoutFromUser();
}

init();
