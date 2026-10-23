/**
 * Myan Mart - E-Commerce & AI Assistant Engine
 * Pure Vanilla JavaScript implementation
 * Based on: myan_mart_ai_integration_blueprint.md & myan_mart_design_specification.md
 */

// ==========================================================================
// 1. Product Catalog Data
// ==========================================================================
const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Logitech MX Master 3S Wireless Performance Mouse',
    category: 'electronics',
    price: 285000,
    originalPrice: 335000,
    rating: 4.9,
    sold: 142,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80',
    aiSummary: 'Top pick for coders, designers & multi-device workflows',
    pros: 'Quiet click switches, 8K DPI tracking on glass, MagSpeed electromagnetic wheel.',
    cons: 'Right-hand ergonomic orientation only.',
    bestFor: 'Developers, video editors, and power office users.',
    tags: ['mouse', 'wireless', 'logitech', 'electronics', 'office', 'computer', 'mac']
  },
  {
    id: 'prod-2',
    name: 'Apple MacBook Air 13" M2 Chip (16GB RAM / 256GB SSD)',
    category: 'electronics',
    price: 3250000,
    originalPrice: 3500000,
    rating: 4.95,
    sold: 68,
    discount: 7,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
    aiSummary: 'Ultralight workstation with 18-hour real-world battery life',
    pros: 'Silent fanless design, brilliant Liquid Retina display, MagSafe 3 charging.',
    cons: 'Supports only one external display natively.',
    bestFor: 'University students, software engineers, and digital nomads.',
    tags: ['laptop', 'apple', 'macbook', 'm2', 'electronics', 'computer']
  },
  {
    id: 'prod-3',
    name: 'Sony WH-1000XM5 Wireless Noise-Cancelling Headphones',
    category: 'electronics',
    price: 1150000,
    originalPrice: 1280000,
    rating: 4.8,
    sold: 95,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80',
    aiSummary: 'Industry benchmark for active noise cancellation & comfort',
    pros: 'Auto ANC optimizer, 8-mic array for ultra-clear calls, 30-hour battery life.',
    cons: 'Earcups fold flat but headband does not hinge inward.',
    bestFor: 'Frequent flyers, commuters, and deep focus work.',
    tags: ['headphones', 'sony', 'audio', 'sound', 'anc', 'wireless', 'music']
  },
  {
    id: 'prod-4',
    name: 'Nike Air Zoom Pegasus 40 Running Shoes (Men/Women)',
    category: 'fashion',
    price: 380000,
    originalPrice: 420000,
    rating: 4.7,
    sold: 210,
    discount: 9,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
    aiSummary: 'Balanced responsiveness and neutral road running support',
    pros: 'Dual Zoom Air units, breathable engineered mesh upper, plush collar foam.',
    cons: 'Tends to run slightly narrow around the midfoot.',
    bestFor: 'Everyday joggers, 5K-to-marathon runners, and gym sessions.',
    tags: ['shoes', 'sneakers', 'nike', 'running', 'fashion', 'sports', 'red', 'footwear']
  },
  {
    id: 'prod-5',
    name: 'Natural Myanmar Cotton Longyi (Handwoven Traditional)',
    category: 'fashion',
    price: 32000,
    originalPrice: 40000,
    rating: 4.9,
    sold: 380,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80',
    aiSummary: '100% pure Amarapura cotton, lightweight & breathable in tropical heat',
    pros: 'Authentic local handcraft, fade-resistant dyes, comfortable all-day wear.',
    cons: 'Gentle hand wash recommended for first few washes.',
    bestFor: 'Formal ceremonies, office wear, and daily casual comfort.',
    tags: ['longyi', 'myanmar', 'cotton', 'traditional', 'fashion', 'handmade']
  },
  {
    id: 'prod-6',
    name: 'COSRX Advanced Snail 96 Mucin Power Essence (100ml)',
    category: 'beauty',
    price: 58000,
    originalPrice: 68000,
    rating: 4.85,
    sold: 520,
    discount: 14,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80',
    aiSummary: 'Deep hydration barrier repair & glow for sensitive skin',
    pros: '96.3% snail secretion filtrate, soothing redness, non-greasy finish.',
    cons: 'Slightly viscous texture on initial application.',
    bestFor: 'Dry, acne-prone, or dehydrated skin types in humid weather.',
    tags: ['skincare', 'cosrx', 'snail', 'beauty', 'essence', 'moisturizer', 'k-beauty']
  },
  {
    id: 'prod-7',
    name: 'Shwe Pyi Nann Natural Shwebo Thanaka Bark Cream',
    category: 'beauty',
    price: 14500,
    originalPrice: 18000,
    rating: 4.92,
    sold: 840,
    discount: 19,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80',
    aiSummary: 'Iconic cooling Myanmar botanic paste with natural sun protection',
    pros: 'Zero synthetic fragrance, authentic Thanaka bark, cooling astringent feel.',
    cons: 'Dries matte and requires moisturizer for very dry skin.',
    bestFor: 'Sun protection, oil control, and evening out blemishes.',
    tags: ['thanaka', 'myanmar', 'skincare', 'natural', 'beauty', 'organic', 'sun']
  },
  {
    id: 'prod-8',
    name: 'Nordic Minimalist Ceramic Cordless Table Lamp',
    category: 'home',
    price: 75000,
    originalPrice: 92000,
    rating: 4.65,
    sold: 88,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80',
    aiSummary: '3-tier warm ambient dimming with rechargeable USB-C battery',
    pros: 'Matte terracotta ceramic base, touch sensitive dimmer, portable cordless use.',
    cons: 'Approx. 8-10 hours battery life on maximum brightness.',
    bestFor: 'Bedside reading tables, coffee shop corners, and modern living rooms.',
    tags: ['lamp', 'home', 'lighting', 'decor', 'ceramic', 'nordic', 'living']
  },
  {
    id: 'prod-9',
    name: 'Ergonomic Cervical Contour Memory Foam Pillow',
    category: 'home',
    price: 65000,
    originalPrice: 85000,
    rating: 4.75,
    sold: 130,
    discount: 23,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80',
    aiSummary: 'Orthopedic spinal alignment for side, back & stomach sleepers',
    pros: 'Cooling bamboo fiber washable cover, slow-rebound zero pressure foam.',
    cons: 'Firm support profile may take 2 nights to adapt.',
    bestFor: 'People suffering from neck stiffness or desk posture fatigue.',
    tags: ['pillow', 'pillow', 'sleep', 'home', 'memory foam', 'ergonomic']
  },
  {
    id: 'prod-10',
    name: 'Shan Highlands Organic Green Tea (150g Whole Leaf)',
    category: 'groceries',
    price: 18500,
    originalPrice: 22000,
    rating: 4.9,
    sold: 640,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
    aiSummary: 'Hand-picked Shan State high-altitude antioxidant green tea leaves',
    pros: 'Crisp floral aroma, smooth finish without astringency, multiple steepings.',
    cons: 'Keep sealed in airtight tin away from moisture.',
    bestFor: 'Daily wellness, morning clarity, and authentic Myanmar tea sessions.',
    tags: ['tea', 'green tea', 'shan', 'myanmar', 'groceries', 'organic', 'drinks']
  },
  {
    id: 'prod-11',
    name: 'Royal Myanmar Instant Tea Mix (Original 30 Sachets)',
    category: 'groceries',
    price: 12000,
    originalPrice: 14000,
    rating: 4.95,
    sold: 1500,
    discount: 14,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80',
    aiSummary: 'Myanmar’s household favorite authentic rich sweet tea shop taste',
    pros: 'Instant preparation, creamy milk balance, universally loved flavor.',
    cons: 'Contains sugar and dairy creamer.',
    bestFor: 'Breakfast pairing with Nan Gyi Thoke or afternoon tea breaks.',
    tags: ['tea', 'royal', 'myanmar', 'instant', 'groceries', 'sweet', 'laphet']
  },
  {
    id: 'prod-12',
    name: 'Waterproof 4-Person Instant Pop-Up Dome Camping Tent',
    category: 'toys',
    price: 195000,
    originalPrice: 235000,
    rating: 4.6,
    sold: 72,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop&q=80',
    aiSummary: '60-second hydraulic automatic setup with UV 50+ silver coating',
    pros: 'High-density mesh ventilation, dual doors, 210D Oxford waterproof base.',
    cons: 'Packs into circular carry bag (slightly bulky for backpacking).',
    bestFor: 'Family weekend camping, Shan hills hiking, and beach trips.',
    tags: ['tent', 'camping', 'outdoor', 'toys', 'hiking', 'adventure']
  }
];

// ==========================================================================
// 2. Application State & Storage
// ==========================================================================
let currentLang = 'en';
let activeCategory = 'all';
let currentSearchQuery = '';
let activeSort = 'recommended';
let cart = [];

// Initialize cart from localStorage if present
try {
  const savedCart = localStorage.getItem('myanmart_cart');
  if (savedCart) cart = JSON.parse(savedCart);
} catch (e) {
  cart = [];
}

// ==========================================================================
// 3. Bilingual Dictionary (EN / မြန်မာ Unicode)
// ==========================================================================
const I18N = {
  en: {
    announcement: 'Free delivery across Yangon & Mandalay for orders over 50,000 Ks',
    searchPlaceholder: 'Search products, brands, or ask AI...',
    askAiBtn: 'Ask AI',
    cart: 'Cart',
    allCategories: 'All Categories',
    electronics: 'Electronics',
    fashion: 'Fashion',
    beauty: 'Beauty & Care',
    home: 'Home & Living',
    groceries: 'Groceries',
    toys: 'Toys & Outdoor',
    flashDeals: '⚡ Flash Deals',
    heroTag: 'Your local market, made easy',
    heroTitle: 'A little bit of Myanmar. A whole lot to discover.',
    heroSubtitle: 'Find everyday favorites and local treasures with a helpful AI guide, easy township delivery, and the payment options you already trust.',
    heroPromptLabel: 'What are you looking for?',
    allProductsTitle: 'Curated Products & Smart Matches',
    itemsCount: 'items available',
    addToCart: 'Add to Cart',
    quickView: 'Quick View',
    cartTitle: 'Your Shopping Cart',
    emptyCartText: 'Your cart is currently empty.',
    subtotal: 'Subtotal',
    deliveryFee: 'Delivery Fee',
    total: 'Total',
    checkoutBtn: 'Proceed to Checkout',
    checkoutTitle: 'Complete Your Order',
    confirmPayBtn: 'Confirm & Place Order',
    toastAdded: 'Added to your cart!',
    aiWelcome: 'Mingalarbar! 🙏 I am your Myan Mart AI Assistant. How can I help you shop today? Try asking for laptops, skincare, running shoes, or items under your budget!'
  },
  mm: {
    announcement: 'ကျပ် ၅၀,၀၀၀ အထက်ဝယ်ယူမှုများ ရန်ကုန် နှင့် မန္တလေး အခမဲ့ပို့ဆောင်ပေးပါသည်',
    searchPlaceholder: 'ကုန်ပစ္စည်းများရှာဖွေပါ သို့မဟုတ် AI ကိုမေးပါ...',
    askAiBtn: 'AI မေးမည်',
    cart: 'ခြင်းတောင်း',
    allCategories: 'ပစ္စည်းအားလုံး',
    electronics: 'အီလက်ထရွန်းနစ်',
    fashion: 'ဖက်ရှင် & အဝတ်အစား',
    beauty: 'အလှကုန် & အသားအရေ',
    home: 'အိမ်သုံး & အလှဆင်',
    groceries: 'ကုန်စုံ & စားသောက်ကုန်',
    toys: 'ကစားစရာ & ခရီးဆောင်',
    flashDeals: '⚡ အထူးလျှော့ဈေး',
    heroTag: 'သင့်အနီးအနားဈေး၊ ပိုမိုလွယ်ကူစွာ',
    heroTitle: 'မြန်မာ့အငွေ့အသက်နဲ့ နေ့စဉ်လိုအပ်တာတွေကို တစ်နေရာတည်းမှာ ရှာဖွေလိုက်ပါ။',
    heroSubtitle: 'AI အကူအညီနဲ့ ဒေသထွက်အမှတ်တရပစ္စည်းတွေ၊ နေ့စဉ်အသုံးအဆောင်တွေကို ရှာဖွေပြီး အိမ်အရောက်ပို့ဆောင်မှုနဲ့ ယုံကြည်စိတ်ချရတဲ့ ငွေပေးချေမှုတွေကို အသုံးပြုလိုက်ပါ။',
    heroPromptLabel: 'ဘာများရှာဖွေနေပါသလဲ?',
    allProductsTitle: 'ရွေးချယ်ထားသော ပစ္စည်းများ',
    itemsCount: 'ခုရှိပါသည်',
    addToCart: 'ခြင်းထဲထည့်မည်',
    quickView: 'အသေးစိတ်ကြည့်',
    cartTitle: 'သင်၏ ခြင်းတောင်း',
    emptyCartText: 'ခြင်းတောင်းထဲတွင် ပစ္စည်းမရှိသေးပါ။',
    subtotal: 'ကျသင့်ငွေ',
    deliveryFee: 'ပို့ဆောင်ခ',
    total: 'စုစုပေါင်း ကျသင့်ငွေ',
    checkoutBtn: 'ငွေရှင်းမည်',
    checkoutTitle: 'အော်ဒါအတည်ပြုခြင်း',
    confirmPayBtn: 'အော်ဒါတင်မည်',
    toastAdded: 'ခြင်းတောင်းထဲသို့ ထည့်သွင်းပြီးပါပြီ!',
    aiWelcome: 'မင်္ဂလာပါ ခင်ဗျာ! 🙏 Myan Mart AI Assistant မှ ကြိုဆိုပါတယ်။ သင်ရှာဖွေလိုသော လက်ပ်တော့၊ ဖိနပ်၊ လက်ဖက်ရည် သို့မဟုတ် အလှကုန်များကို အလွယ်တကူ မေးမြန်းနိုင်ပါတယ်!'
  }
};

// ==========================================================================
// 4. Utility Functions
// ==========================================================================
function formatCurrency(amount) {
  return `${amount.toLocaleString('en-US')} Ks`;
}

function showToast(message, icon = '✅') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.2s';
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

function saveCart() {
  try {
    localStorage.setItem('myanmart_cart', JSON.stringify(cart));
  } catch (e) {
    console.error(e);
  }
  updateCartUI();
}

// ==========================================================================
// 5. Storefront Catalog Rendering
// ==========================================================================
function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Category filter
  if (activeCategory === 'flash') {
    list = list.filter(p => p.discount >= 15);
  } else if (activeCategory !== 'all') {
    list = list.filter(p => p.category === activeCategory);
  }

  // Search filter
  if (currentSearchQuery.trim()) {
    const q = currentSearchQuery.toLowerCase().trim();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.aiSummary.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  // Sorting
  if (activeSort === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  return list;
}

function renderProductsGrid() {
  const grid = document.getElementById('productsGrid');
  const countSpan = document.getElementById('productCountSpan');
  if (!grid) return;

  const filtered = getFilteredProducts();
  if (countSpan) countSpan.textContent = `${filtered.length} ${I18N[currentLang].itemsCount}`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔍</div>
        <h3 style="font-weight: 700; font-size: 1.15rem; margin-bottom: 0.5rem;">No matching products found</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Try asking the AI assistant or clearing your filters.</p>
        <button class="btn-ask-ai-search" style="margin: 0 auto; display: inline-flex;" onclick="openAiChatWithQuery('Show me recommended products')">
          Ask Myan Mart AI Assistant
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="card-img-wrap" onclick="openQuickView('${product.id}')">
          <span class="card-discount-badge">${product.discount}% OFF</span>
          <span class="card-match-badge" id="match-${product.id}">98% Match</span>
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="card-category-tag">${product.category}</span>
            <span>⭐ ${product.rating} (${product.sold} sold)</span>
          </div>
          <h3 class="card-title" onclick="openQuickView('${product.id}')" title="${product.name}">${product.name}</h3>
          
          <div class="card-ai-badge">
            <span>✨</span>
            <span style="display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;">${product.aiSummary}</span>
          </div>

          <div class="card-pricing-row">
            <span class="card-current-price">${formatCurrency(product.price)}</span>
            <span class="card-original-price">${formatCurrency(product.originalPrice)}</span>
          </div>

          <div class="card-actions">
            <button class="btn-add-cart" onclick="addToCart('${product.id}')">
              <span>🛒</span>
              <span>${I18N[currentLang].addToCart}</span>
            </button>
            <button class="btn-quick-view" onclick="openQuickView('${product.id}')" title="${I18N[currentLang].quickView}">
              👁️
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================================================
// 6. Shopping Cart Operations
// ==========================================================================
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({ productId, qty: quantity });
  }

  saveCart();
  showToast(`${product.name} added to cart!`);

  // Animate badge
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.style.transform = 'scale(1.3)';
    setTimeout(() => badge.style.transform = 'scale(1)', 200);
  }
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.productId === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.productId !== productId);
  }
  saveCart();
}

function removeCartItem(productId) {
  cart = cart.filter(i => i.productId !== productId);
  saveCart();
  showToast('Item removed from cart', '🗑️');
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const itemsContainer = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const deliveryEl = document.getElementById('cartDelivery');
  const totalEl = document.getElementById('cartTotal');

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) badge.textContent = totalCount;

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="icon">🛒</div>
        <p style="font-weight: 600; margin-bottom: 0.5rem;">${I18N[currentLang].emptyCartText}</p>
        <p style="font-size: 0.8rem;">Explore our catalog or ask AI for recommendations!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '0 Ks';
    if (deliveryEl) deliveryEl.textContent = '0 Ks';
    if (totalEl) totalEl.textContent = '0 Ks';
    return;
  }

  let subtotal = 0;
  itemsContainer.innerHTML = cart.map(item => {
    const prod = PRODUCTS.find(p => p.id === item.productId);
    if (!prod) return '';
    const itemSub = prod.price * item.qty;
    subtotal += itemSub;

    return `
      <div class="cart-item-row">
        <img src="${prod.image}" alt="${prod.name}" class="cart-item-img" />
        <div class="cart-item-details">
          <div class="cart-item-name">${prod.name}</div>
          <div class="cart-item-price">${formatCurrency(prod.price)}</div>
          <div class="cart-qty-controls">
            <button class="btn-qty" onclick="updateCartQty('${prod.id}', -1)">-</button>
            <span class="cart-qty-num">${item.qty}</span>
            <button class="btn-qty" onclick="updateCartQty('${prod.id}', 1)">+</button>
            <button class="btn-remove-item" onclick="removeCartItem('${prod.id}')">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const delivery = subtotal >= 50000 ? 0 : 2500;
  const grandTotal = subtotal + delivery;

  if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
  if (deliveryEl) deliveryEl.textContent = delivery === 0 ? 'FREE' : formatCurrency(delivery);
  if (totalEl) totalEl.textContent = formatCurrency(grandTotal);
}

function openCartDrawer() {
  document.getElementById('cartOverlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartOverlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// 7. AI Shopping Assistant (Conversational Streaming Engine)
// ==========================================================================
let isAiResponding = false;

function toggleAiAssistant() {
  const windowEl = document.getElementById('aiChatWindow');
  const triggerEl = document.getElementById('aiBubbleTrigger');
  if (!windowEl) return;

  const isOpen = windowEl.classList.toggle('open');
  if (isOpen) {
    if (triggerEl) triggerEl.style.display = 'none';
    const inputField = document.getElementById('aiInputField');
    if (inputField) inputField.focus();
  } else {
    if (triggerEl) triggerEl.style.display = 'flex';
  }
}

function openAiChatWithQuery(query) {
  const windowEl = document.getElementById('aiChatWindow');
  const triggerEl = document.getElementById('aiBubbleTrigger');
  if (!windowEl) return;

  windowEl.classList.add('open');
  if (triggerEl) triggerEl.style.display = 'none';

  const inputField = document.getElementById('aiInputField');
  if (inputField) {
    inputField.value = query;
    handleAiSubmit(new Event('submit'));
  }
}

function appendChatMessage(role, content, products = []) {
  const container = document.getElementById('aiMessagesArea');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${role}`;
  bubble.innerHTML = `<div>${content}</div>`;

  if (products && products.length > 0) {
    products.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'chat-product-card';
      card.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}" />
        <div class="chat-product-info">
          <div class="chat-product-title" title="${prod.name}">${prod.name}</div>
          <div class="chat-product-price">${formatCurrency(prod.price)}</div>
        </div>
        <button class="chat-btn-mini-add" onclick="addToCart('${prod.id}')">+ Add</button>
      `;
      bubble.appendChild(card);
    });
  }

  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
  return bubble;
}

function handleAiSubmit(e) {
  e?.preventDefault();
  if (isAiResponding) return;

  const inputEl = document.getElementById('aiInputField');
  if (!inputEl) return;

  const userQuery = inputEl.value.trim();
  if (!userQuery) return;

  // Render User Message
  appendChatMessage('user', userQuery);
  inputEl.value = '';

  // Render Typing Indicator
  isAiResponding = true;
  const messagesArea = document.getElementById('aiMessagesArea');
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-bubble assistant typing-indicator';
  typingIndicator.innerHTML = `
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
  `;
  messagesArea.appendChild(typingIndicator);
  messagesArea.scrollTop = messagesArea.scrollHeight;

  // Process Query Semantic Intent Match
  setTimeout(() => {
    typingIndicator.remove();

    const result = evaluateAiQuery(userQuery);
    streamAiResponse(result.text, result.matchedProducts);
  }, 750);
}

function evaluateAiQuery(query) {
  const q = query.toLowerCase();
  let matched = [];
  let responseText = '';

  if (q.includes('laptop') || q.includes('macbook') || q.includes('computer') || q.includes('လက်ပ်တော့')) {
    matched = PRODUCTS.filter(p => p.tags.includes('laptop'));
    responseText = "Here is our top-tier ultraportable laptop currently in stock with high battery efficiency for professionals and students:";
  } else if (q.includes('mouse') || q.includes('logitech') || q.includes('click')) {
    matched = PRODUCTS.filter(p => p.tags.includes('mouse'));
    responseText = "For productivity and ergonomic hand comfort, I highly recommend the Logitech MX Master 3S:";
  } else if (q.includes('headphone') || q.includes('audio') || q.includes('sony') || q.includes('sound') || q.includes('music')) {
    matched = PRODUCTS.filter(p => p.tags.includes('headphones'));
    responseText = "Here is our top-rated noise-cancelling headset, perfect for work focus and travel:";
  } else if (q.includes('shoe') || q.includes('running') || q.includes('nike') || q.includes('sneaker') || q.includes('ဖိနပ်')) {
    matched = PRODUCTS.filter(p => p.tags.includes('running'));
    responseText = "I found these high-performance running shoes equipped with responsive Zoom Air cushioning:";
  } else if (q.includes('skin') || q.includes('beauty') || q.includes('cosrx') || q.includes('thanaka') || q.includes('cream') || q.includes('အလှကုန်')) {
    matched = PRODUCTS.filter(p => p.category === 'beauty');
    responseText = "Here are our best-selling dermatological and natural skincare selections suitable for Myanmar's climate:";
  } else if (q.includes('tea') || q.includes('drink') || q.includes('grocery') || q.includes('လက်ဖက်ရည်')) {
    matched = PRODUCTS.filter(p => p.category === 'groceries');
    responseText = "Here are authentic Shan Highlands whole leaf tea and classic instant Myanmar tea mixes:";
  } else if (q.includes('under') || q.includes('cheap') || q.includes('budget') || q.includes('50000') || q.includes('ဈေးသက်သာ')) {
    matched = PRODUCTS.filter(p => p.price <= 50000);
    responseText = "Here are high-value favorites available under 50,000 Ks with instant dispatch:";
  } else if (q.includes('camping') || q.includes('tent') || q.includes('outdoor')) {
    matched = PRODUCTS.filter(p => p.tags.includes('tent'));
    responseText = "For outdoor exploration, this 4-person automatic dome tent is our customer favorite:";
  } else {
    // Default smart semantic recommendation
    matched = [PRODUCTS[0], PRODUCTS[3], PRODUCTS[10]];
    responseText = `I searched our catalog for "${query}". Here are our most relevant top-rated recommendations:`;
  }

  return { text: responseText, matchedProducts: matched };
}

function streamAiResponse(fullText, products) {
  const container = document.getElementById('aiMessagesArea');
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble assistant';
  container.appendChild(bubble);

  const textNode = document.createElement('div');
  bubble.appendChild(textNode);

  let index = 0;
  const speed = 18; // ms per char

  function typeChar() {
    if (index < fullText.length) {
      textNode.textContent += fullText.charAt(index);
      index++;
      container.scrollTop = container.scrollHeight;
      setTimeout(typeChar, speed);
    } else {
      isAiResponding = false;
      // Append product cards if any
      if (products && products.length > 0) {
        products.forEach(prod => {
          const card = document.createElement('div');
          card.className = 'chat-product-card';
          card.innerHTML = `
            <img src="${prod.image}" alt="${prod.name}" />
            <div class="chat-product-info">
              <div class="chat-product-title" title="${prod.name}">${prod.name}</div>
              <div class="chat-product-price">${formatCurrency(prod.price)}</div>
            </div>
            <button class="chat-btn-mini-add" onclick="addToCart('${prod.id}')">+ Add</button>
          `;
          bubble.appendChild(card);
        });
        container.scrollTop = container.scrollHeight;
      }
    }
  }

  typeChar();
}

// ==========================================================================
// 8. Visual Search Modal Simulation
// ==========================================================================
function openVisualSearchModal() {
  document.getElementById('visualSearchModal')?.classList.add('open');
}

function closeVisualSearchModal() {
  document.getElementById('visualSearchModal')?.classList.remove('open');
}

function simulateVisualSearch(categoryHint, sampleName) {
  closeVisualSearchModal();
  showToast(`Analyzing visual features of "${sampleName}"...`, '📷');

  setTimeout(() => {
    // Filter products and highlight matches
    activeCategory = categoryHint;
    
    // Update category nav pills
    document.querySelectorAll('.cat-chip').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cat === categoryHint);
    });

    renderProductsGrid();

    // Show visual match badges
    document.querySelectorAll('.card-match-badge').forEach(badge => {
      badge.style.display = 'block';
    });

    showToast(`Found 98% visual similarity matches for ${sampleName}!`, '✨');
  }, 900);
}

// ==========================================================================
// 9. Quick View PDP Modal
// ==========================================================================
function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById('quickViewModal');
  const body = document.getElementById('quickViewModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
      <div>
        <img src="${prod.image}" alt="${prod.name}" style="width: 100%; border-radius: var(--radius-xl); object-fit: cover; aspect-ratio: 4/3;" />
      </div>
      <div>
        <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--brand-600); margin-bottom: 0.25rem;">
          ${prod.category}
        </div>
        <h2 style="font-size: 1.25rem; font-weight: 800; line-height: 1.3; margin-bottom: 0.5rem;">${prod.name}</h2>
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
          ⭐ <strong>${prod.rating}</strong> (Based on ${prod.sold} orders)
        </div>
        <div style="font-size: 1.4rem; font-weight: 800; color: var(--brand-600); margin-bottom: 1rem;">
          ${formatCurrency(prod.price)}
          <span style="font-size: 0.9rem; color: var(--text-light); text-decoration: line-through; margin-left: 0.5rem;">
            ${formatCurrency(prod.originalPrice)}
          </span>
        </div>

        <!-- AI Product Synthesis -->
        <div class="ai-summary-box">
          <div class="ai-summary-title">
            <span>✨</span>
            <span>AI Review Synthesis & Analysis</span>
          </div>
          <ul class="ai-summary-list">
            <li><strong>Pros:</strong> ${prod.pros}</li>
            <li><strong>Cons:</strong> ${prod.cons}</li>
            <li><strong>Best Suited For:</strong> ${prod.bestFor}</li>
          </ul>
        </div>

        <button class="btn-checkout-proceed" style="margin-top: 1rem;" onclick="addToCart('${prod.id}'); closeQuickView();">
          🛒 Add to Cart (${formatCurrency(prod.price)})
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeQuickView() {
  document.getElementById('quickViewModal')?.classList.remove('open');
}

// ==========================================================================
// 10. Checkout & Local Payment Flow (KBZPay, WavePay, COD)
// ==========================================================================
let selectedPaymentMethod = 'kbzpay';

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your cart is empty! Add items first.', '⚠️');
    return;
  }
  closeCartDrawer();
  document.getElementById('checkoutModal')?.classList.add('open');
  renderPaymentMethodUI();
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal')?.classList.remove('open');
}

function selectPaymentMethod(method) {
  selectedPaymentMethod = method;
  document.querySelectorAll('.payment-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.method === method);
  });
  renderPaymentMethodUI();
}

function renderPaymentMethodUI() {
  const box = document.getElementById('paymentMethodDetailsBox');
  if (!box) return;

  if (selectedPaymentMethod === 'kbzpay') {
    box.innerHTML = `
      <div style="font-weight: 700; color: #1e3a8a; margin-bottom: 0.5rem;">KBZPay (KPay) Instant Dynamic QR</div>
      <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem;">
        Scan this QR code with your KBZPay mobile app or tap "Pay with App" on mobile.
      </p>
      <!-- Simulated Crisp SVG QR Code -->
      <svg class="kbz-qr-code-img" viewBox="0 0 100 100" fill="#0f172a">
        <rect width="100" height="100" fill="#ffffff" />
        <rect x="10" y="10" width="25" height="25" fill="#1e3a8a" />
        <rect x="15" y="15" width="15" height="15" fill="#ffffff" />
        <rect x="18" y="18" width="9" height="9" fill="#1e3a8a" />
        <rect x="65" y="10" width="25" height="25" fill="#1e3a8a" />
        <rect x="70" y="15" width="15" height="15" fill="#ffffff" />
        <rect x="73" y="18" width="9" height="9" fill="#1e3a8a" />
        <rect x="10" y="65" width="25" height="25" fill="#1e3a8a" />
        <rect x="15" y="70" width="15" height="15" fill="#ffffff" />
        <rect x="18" y="73" width="9" height="9" fill="#1e3a8a" />
        <rect x="42" y="12" width="6" height="6" fill="#1e3a8a" />
        <rect x="52" y="18" width="6" height="6" fill="#1e3a8a" />
        <rect x="42" y="32" width="16" height="6" fill="#1e3a8a" />
        <rect x="42" y="45" width="16" height="16" fill="#dc2626" />
        <rect x="65" y="45" width="6" height="16" fill="#1e3a8a" />
        <rect x="75" y="55" width="15" height="6" fill="#1e3a8a" />
        <rect x="65" y="75" width="25" height="15" fill="#1e3a8a" />
      </svg>
      <div style="font-size: 0.75rem; color: #dc2626; font-weight: 600;">⏱️ Valid for 10:00 minutes</div>
    `;
  } else if (selectedPaymentMethod === 'wavepay') {
    box.innerHTML = `
      <div style="font-weight: 700; color: #ca8a04; margin-bottom: 0.5rem;">WavePay (Wave Money)</div>
      <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem;">
        Enter your WavePay registered phone number. You will receive an instant approval prompt on your phone.
      </p>
      <div style="max-width: 280px; margin: 0 auto;">
        <input type="text" class="form-input" placeholder="09-xxxxxxxxx" value="09798881234" />
      </div>
    `;
  } else if (selectedPaymentMethod === 'cod') {
    box.innerHTML = `
      <div style="font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">Cash on Delivery (COD)</div>
      <p style="font-size: 0.8rem; color: var(--text-muted);">
        Pay in cash directly to our logistics partner when your order is delivered to your doorstep. (Yangon & Mandalay Townships only).
      </p>
    `;
  }
}

function processCheckoutOrder(e) {
  e.preventDefault();

  const orderId = 'MM-' + Math.floor(100000 + Math.random() * 900000);
  closeCheckoutModal();

  // Clear Cart
  cart = [];
  saveCart();

  showToast(`🎉 Order ${orderId} confirmed successfully!`, '🚀');

  // Confirmation Alert
  setTimeout(() => {
    alert(`Thank you for shopping with Myan Mart!\n\nOrder Reference: ${orderId}\nPayment Method: ${selectedPaymentMethod.toUpperCase()}\nEstimated Delivery: 24 to 48 Hours\n\nA confirmation SMS has been dispatched.`);
  }, 400);
}

// ==========================================================================
// 11. Bilingual & Event Bindings
// ==========================================================================
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'mm' : 'en';
  const btn = document.getElementById('langSwitchBtn');
  if (btn) btn.textContent = currentLang === 'en' ? 'မြန်မာ' : 'English';

  applyLanguage();
  renderProductsGrid();
  updateCartUI();
  showToast(`Language switched to ${currentLang === 'en' ? 'English' : 'မြန်မာ (Unicode)'}`);
}

function applyLanguage() {
  const dict = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT') {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}

// Global Init on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderProductsGrid();
  updateCartUI();

  // Category chip clicks
  document.querySelectorAll('.cat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.cat || 'all';
      renderProductsGrid();
    });
  });

  // Omnibox Search input
  const searchInput = document.getElementById('mainSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderProductsGrid();
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        renderProductsGrid();
      }
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderProductsGrid();
    });
  }

  // AI Chat form submit
  const aiForm = document.getElementById('aiChatForm');
  if (aiForm) {
    aiForm.addEventListener('submit', handleAiSubmit);
  }
});
