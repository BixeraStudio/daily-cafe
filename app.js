/**
 * ==========================================================================
 * THE DAILY CAFE & BISTRO - KOLKATA
 * 5, Satyen Dutta Road, Lake Market, Kalighat, Kolkata - 700029
 * Direct Phone / WhatsApp: +91 80170 99950
 * Zomato: https://www.zomato.com/kolkata/the-daily-desapriya-park
 * Swiggy: https://www.swiggy.com/city/kolkata/the-daily-cafe-desapriya-park-rest241166
 * ==========================================================================
 */

// ---------------------------------------------------------------------------
// 0. OWNER & PLATFORM CONFIGURATION
// ---------------------------------------------------------------------------
const OWNER_CONFIG = {
  name: "The Daily",
  brandSubtitle: "CAFE & BISTRO • DESAPRIYA PARK, KOLKATA",
  tagline: "Global Cuisine, Specialty Curated Coffee & Fresh Produce",
  phone: "918017099950",
  displayPhone: "+91 80170 99950",
  telLink: "tel:+918017099950",
  whatsappUrl: "https://wa.me/918017099950",
  upiId: "8017099950@upi",
  address: "5, Satyen Dutta Road, Lake Market, Kalighat, Desapriya Park, Kolkata, West Bengal 700029",
  landmark: "Same lane as Maharaja Tea Stall, off Rash Behari Avenue, near Desapriya Park",
  zomatoUrl: "https://www.zomato.com/kolkata/the-daily-desapriya-park",
  zomatoMenuUrl: "https://www.zomato.com/kolkata/the-daily-desapriya-park/menu",
  swiggyUrl: "https://www.swiggy.com/city/kolkata/the-daily-cafe-desapriya-park-rest241166",
  googleMapsPlace: "https://www.google.com/maps/place/the+daily+kolkata/data=!4m2!3m1!1s0x3a0271fad96c306d:0x698a6b3fdb6e4c73?sa=X&ved=1t:242&ictx=111",
  googleMapsDirections: "https://www.google.com/maps/dir/?api=1&destination=The+Daily+Cafe+5+Satyen+Dutta+Road+Kolkata",
  instagramUrl: "https://www.instagram.com/thedailykolkata/?hl=en",
  facebookUrl: "https://www.facebook.com/thedailykolkata/",
  rating: "4.3",
  reviewsCount: "1,673",
  zomatoRating: "4.0",
  zomatoReviewsCount: "663",
  pricePerPerson: "₹400–1,000",
  avgTwo: "₹1,000 for two",
  founder: "Urvika Kanoi",
  sisterCafe: "@cafeduco (Bandra, Bombay)",
  hoursWeekdays: "12:00 PM – 10:30 PM",
  hoursSunday: "10:30 AM – 10:30 PM",
  popularTimes: "6:00 PM – 11:00 PM"
};

// ---------------------------------------------------------------------------
// 1. MENU DATABASE (REAL HIGHLIGHTS, DISHES & ACTUAL PRICES FROM THE DAILY)
// ---------------------------------------------------------------------------
const MENU_ITEMS = [
  // --- SPECIALTY COFFEES & CURATED BEVERAGES ---
  {
    id: "td-coffee-brownbutter",
    name: "Brown Butter Cappuccino",
    category: "coffee",
    price: 295,
    portion: "Artisanal Cup",
    description: "Espresso pulled from single-origin arabica beans, layered with nutty caramelized brown butter foam and a touch of organic cinnamon.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
    badge: "Must Try Coffee",
    dietary: ["veg", "special"],
    tastingNotes: ["Nutty Brown Butter", "Velvety Foam", "Cinnamon Notes"],
    customizable: true
  },
  {
    id: "td-coffee-vietnamese",
    name: "Vietnamese Coffee",
    category: "coffee",
    price: 245,
    portion: "Chilled / Hot",
    description: "Authentic slow-drip dark roast robusta blended with rich sweetened condensed milk, served over hand-cracked crystal ice.",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop",
    badge: "House Favourite",
    dietary: ["veg"],
    tastingNotes: ["Slow Drip Brew", "Condensed Milk", "Bold Roast"],
    customizable: true
  },
  {
    id: "td-coffee-mangomatcha",
    name: "Mango Matcha",
    category: "coffee",
    price: 395,
    portion: "Iced Tall Glass",
    description: "Ceremonial grade Japanese Uji matcha whisked fresh, layered over sweet Alphonso mango purée and chilled velvety milk.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop",
    badge: "Bestseller",
    dietary: ["veg", "special"],
    tastingNotes: ["Ceremonial Uji Matcha", "Alphonso Mango", "Refreshing Balance"],
    customizable: true
  },
  {
    id: "td-coffee-flatwhite",
    name: "Artisan Flat White",
    category: "coffee",
    price: 265,
    portion: "Double Ristretto",
    description: "Double ristretto shot with micro-textured silky steamed milk and delicate latte art, showcasing bright caramel undertones.",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop",
    badge: "Barista Pick",
    dietary: ["veg"],
    tastingNotes: ["Smooth Microfoam", "Double Ristretto", "Caramel Finish"],
    customizable: true
  },

  // --- ALL-DAY BRUNCH & EGGS ---
  {
    id: "td-brunch-benedict",
    name: "Egg Benedicts Omelette Scramble Brunch",
    category: "brunch",
    price: 345,
    portion: "Full Brunch Plate",
    description: "Toasted artisanal sourdough topped with your choice of farm poached eggs with velvety citrus hollandaise, folded omelette, or buttery scrambled eggs with roasted cherry tomatoes.",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=800&auto=format&fit=crop",
    badge: "Brunch Classic",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Citrus Hollandaise", "Farm Fresh Eggs", "Artisanal Sourdough"],
    customizable: true
  },
  {
    id: "td-brunch-pancakes",
    name: "Blueberry Pancakes",
    category: "brunch",
    price: 345,
    portion: "Stack of 3",
    description: "Fluffy buttermilk pancake stack studded with wild blueberries, finished with whipped vanilla mascarpone, warm pure maple syrup, and toasted almond flakes.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=800&auto=format&fit=crop",
    badge: "Guest Favourite",
    dietary: ["veg", "special"],
    tastingNotes: ["Wild Blueberries", "Whipped Mascarpone", "Pure Maple Syrup"],
    customizable: true
  },
  {
    id: "td-brunch-koreanbun",
    name: "Korean Cream Cheese Bun",
    category: "brunch",
    price: 310,
    portion: "Warm Brioche Bun",
    description: "Freshly baked soft brioche bun cut into petals, piped with rich sweetened cream cheese, and drenched in roasted garlic herb butter.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    badge: "Viral Hit",
    dietary: ["veg"],
    tastingNotes: ["Garlic Butter Glaze", "Sweet Cream Cheese", "Golden Brioche"],
    customizable: false
  },
  {
    id: "td-brunch-goatcheese",
    name: "Goat Cheese Spread with Toast",
    category: "brunch",
    price: 345,
    portion: "Platter for Two",
    description: "Silky whipped goat cheese with wildflower honey, toasted walnuts, and fresh herbs, served alongside golden crunchy sourdough crisps.",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop",
    badge: "Must Have Dip",
    dietary: ["veg", "special"],
    tastingNotes: ["Whipped Goat Cheese", "Wild Honey", "Crusty Sourdough"],
    customizable: true
  },

  // --- PASTAS, MAINS & STEAKS ---
  {
    id: "td-pasta-truffle",
    name: "Creamy Truffle Pasta",
    category: "pasta-mains",
    price: 425,
    portion: "Chef Signature Bowl",
    description: "Fettuccine or penne bathed in a luscious black truffle emulsion, sautéed wild forest mushrooms, roasted garlic, and aged 24-month Grana Padano.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281541?q=80&w=800&auto=format&fit=crop",
    badge: "Signature Dish",
    dietary: ["veg", "special"],
    tastingNotes: ["Black Truffle Cream", "Wild Forest Mushrooms", "Aged Parmesan"],
    customizable: true
  },
  {
    id: "td-mains-steakfries",
    name: "Steak and Fries Tenderloin",
    category: "pasta-mains",
    price: 565,
    portion: "Full Platter",
    description: "Hand-trimmed prime tenderloin steak grilled to your preferred temperature, accompanied by cafe-style shoestring fries, herb butter, and roasted garlic jus.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    badge: "Bestseller Main",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Juicy Tenderloin", "Herb Garlic Butter", "Shoestring Fries"],
    customizable: true
  },
  {
    id: "td-pasta-tortellini",
    name: "Forest Mushroom Tortellini",
    category: "pasta-mains",
    price: 345,
    portion: "Handmade Plate",
    description: "Handcrafted pasta pockets generously stuffed with roasted porcini and button mushrooms, tossed in a fragrant browned sage butter reduction.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
    badge: "Handmade Fresh",
    dietary: ["veg"],
    tastingNotes: ["Porcini Stuffing", "Sage Brown Butter", "Handmade Pasta"],
    customizable: true
  },
  {
    id: "td-pasta-pesto",
    name: "Pesto Pasta",
    category: "pasta-mains",
    price: 365,
    portion: "Al Dente Bowl",
    description: "Artisanal pasta coated in fragrant Genovese sweet basil and pine nut pesto, blistered cherry tomatoes, toasted pine nuts, and shaved parmesan.",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=800&auto=format&fit=crop",
    badge: "Classic Italian",
    dietary: ["veg"],
    tastingNotes: ["Genovese Basil", "Pine Nuts", "Sundried Tomatoes"],
    customizable: true
  },
  {
    id: "td-pasta-pomodoro",
    name: "Pomodoro Pasta",
    category: "pasta-mains",
    price: 325,
    portion: "Classic Bowl",
    description: "Slow-simmered San Marzano tomato sugo infused with garlic, cold-pressed olive oil, fresh basil leaves, and torn buffalo mozzarella.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    badge: "Comfort Classic",
    dietary: ["veg"],
    tastingNotes: ["San Marzano Tomatoes", "Fresh Basil", "Buffalo Mozzarella"],
    customizable: true
  },
  {
    id: "td-pasta-pumpkin",
    name: "Pumpkin Stuffed Pasta in Sun Dried Tomato Sauce",
    category: "pasta-mains",
    price: 365,
    portion: "Chef Creation",
    description: "Delicate stuffed pasta pillows with sweet roasted pumpkin purée and nutmeg, draped in a rich, tangy sun-dried tomato cream sauce.",
    image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?q=80&w=800&auto=format&fit=crop",
    badge: "Seasonal Pick",
    dietary: ["veg", "special"],
    tastingNotes: ["Roasted Pumpkin", "Nutmeg Hint", "Sun Dried Tomato Sauce"],
    customizable: true
  },
  {
    id: "td-pasta-ravioli",
    name: "Handmade Ravioli Pasta",
    category: "pasta-mains",
    price: 385,
    portion: "Handmade Portion",
    description: "Tender stuffed ravioli with spinach, seasoned ricotta, and toasted pine nuts tossed in a light herb butter with fresh lemon zest.",
    image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?q=80&w=800&auto=format&fit=crop",
    badge: "Artisanal",
    dietary: ["veg"],
    tastingNotes: ["Spinach & Ricotta", "Herb Butter", "Lemon Zest"],
    customizable: true
  },
  {
    id: "td-mains-salmon",
    name: "Pan Seared Salmon",
    category: "pasta-mains",
    price: 695,
    portion: "Premium Entrée",
    description: "Crispy-skinned fresh Atlantic salmon fillet served over buttery garlic mashed potatoes, sautéed French beans, and a caper dill cream sauce.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
    badge: "Chef Signature",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Crispy Skin Salmon", "Garlic Mash", "Lemon Caper Sauce"],
    customizable: true
  },
  {
    id: "td-mains-grilledfish",
    name: "Grilled Fish with Herb Lemon Butter",
    category: "pasta-mains",
    price: 495,
    portion: "Generous Fillet",
    description: "Fresh catch of the day grilled to tender perfection, basted with herb lemon butter emulsion, served with baby potatoes and seasonal greens.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
    badge: "Light & Wholesome",
    dietary: ["non-veg"],
    tastingNotes: ["Tender Fish Fillet", "Lemon Butter", "Roasted Baby Potatoes"],
    customizable: true
  },
  {
    id: "td-mains-chickensteak",
    name: "Grilled Chicken Steak",
    category: "pasta-mains",
    price: 475,
    portion: "Full Platter",
    description: "Succulent chicken breast marinated in rosemary and garlic, grilled juicy, served with creamy mash, charred veggies, and black pepper jus.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=800&auto=format&fit=crop",
    badge: "High Protein",
    dietary: ["non-veg"],
    tastingNotes: ["Charred Rosemary", "Pepper Jus", "Creamy Mash"],
    customizable: true
  },

  // --- SMALL PLATES, TAPAS & STARTERS ---
  {
    id: "td-starter-trufflefries",
    name: "Truffle Fries",
    category: "tapas",
    price: 295,
    portion: "Basket to Share",
    description: "Golden crispy shoestring fries tossed in white truffle oil, grated parmesan cheese, and rosemary, served with truffle garlic mayo.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
    badge: "Top Rated",
    dietary: ["veg"],
    tastingNotes: ["White Truffle Essence", "Rosemary Parm", "Truffle Mayo"],
    customizable: true
  },
  {
    id: "td-starter-nachos",
    name: "Overload Nachos",
    category: "tapas",
    price: 275,
    portion: "Loaded Platter",
    description: "Crispy stone-ground tortilla chips smothered in warm cheese sauce, refried beans, pico de gallo, pickled jalapeños, and guacamole dip.",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop",
    badge: "Group Favourite",
    dietary: ["veg"],
    tastingNotes: ["Warm Queso", "Fresh Guacamole", "Zesty Pico de Gallo"],
    customizable: true
  },
  {
    id: "td-starter-beefchilli",
    name: "Beef Chilli",
    category: "tapas",
    price: 395,
    portion: "Sizzling Bowl",
    description: "Tender beef slices wok-tossed with dark soy, crushed black pepper, spicy green chillies, garlic flakes, and scallions.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    badge: "Spicy Hit",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Spicy Green Chilli", "Dark Soy Reduction", "Tender Strips"],
    customizable: true
  },
  {
    id: "td-starter-beefcarpaccio",
    name: "Beef Carpaccio",
    category: "tapas",
    price: 495,
    portion: "Artisanal Platter",
    description: "Razor-thin cured tenderloin slices drizzled with cold pressed extra virgin olive oil, caper berries, wild arugula, and shaved parmesan.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    badge: "Gourmet Specialty",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Cured Tenderloin", "Wild Arugula", "Caper Berries"],
    customizable: false
  },
  {
    id: "td-starter-chipotleprawns",
    name: "Chipotle Prawns",
    category: "tapas",
    price: 425,
    portion: "6 Jumbo Prawns",
    description: "Pan-seared jumbo prawns glazed in a smoky Mexican chipotle adobo reduction, lime zest, and micro cilantro, with grilled sourdough crisps.",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=800&auto=format&fit=crop",
    badge: "Seafood Treat",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Smoky Chipotle", "Juicy Prawns", "Lime Zest"],
    customizable: true
  },
  {
    id: "td-starter-hotfriedchicken",
    name: "Hot Fried Chicken",
    category: "tapas",
    price: 265,
    portion: "Crispy Basket",
    description: "Buttermilk marinated chicken thigh fillets fried ultra-crispy, dusted in secret spicy cayenne rub, served with sweet pickle relish and ranch.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
    badge: "Super Crunchy",
    dietary: ["non-veg"],
    tastingNotes: ["Nashville Spice", "Crunchy Batter", "Buttermilk Tender"],
    customizable: true
  },
  {
    id: "td-starter-hotwings",
    name: "Hot Wings",
    category: "tapas",
    price: 285,
    portion: "6 Glazed Wings",
    description: "Crispy chicken wings tossed in smoked habanero butter glaze, topped with toasted sesame and served with blue cheese dip.",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800&auto=format&fit=crop",
    badge: "Spicy & Tangy",
    dietary: ["non-veg"],
    tastingNotes: ["Smoked Habanero", "Crispy Skin", "Creamy Dip"],
    customizable: true
  },
  {
    id: "td-starter-thaisalad",
    name: "Thai Salad",
    category: "tapas",
    price: 325,
    portion: "Fresh Bowl",
    description: "Crisp raw papaya, cherry tomatoes, mint, cilantro, and toasted peanuts tossed in a fiery sweet-sour tamarind and lime dressing.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    badge: "Fresh & Healthy",
    dietary: ["veg"],
    tastingNotes: ["Crispy Papaya", "Crushed Peanuts", "Tangy Lime Chilli"],
    customizable: true
  },

  // --- BURGERS, BOWLS & SANDWICHES ---
  {
    id: "td-main-everythaang",
    name: "The Every Thaang Burger",
    category: "burgers",
    price: 345,
    portion: "Gourmet Burger + Fries",
    description: "Signature smashed double patty, melted sharp cheddar, caramelized shallots, crisp lettuce, sunnyside fried egg, and secret house bistro sauce in a toasted brioche bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    badge: "Burger Lover",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Smashed Patty", "Melted Cheddar", "Brioche Bun"],
    customizable: true
  },
  {
    id: "td-main-yallayalla",
    name: "Yalla Yalla Sandwich",
    category: "burgers",
    price: 495,
    portion: "Double Cut Sandwich",
    description: "Middle Eastern spiced chicken or halloumi, roasted bell peppers, garlic toum, pickled turnip, and sumac vinaigrette pressed inside freshly toasted artisanal sourdough.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop",
    badge: "Artisan Melt",
    dietary: ["non-veg", "special"],
    tastingNotes: ["Middle Eastern Spice", "Garlic Toum", "Toasted Sourdough"],
    customizable: true
  },
  {
    id: "td-main-burritobowl",
    name: "Burrito Bowl",
    category: "burgers",
    price: 390,
    portion: "Nutritious Bowl",
    description: "Cilantro lime brown rice topped with black beans, charred sweet corn, fresh avocado guacamole, pico de gallo, shredded cheese, and chipotle dressing.",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop",
    badge: "Wholesome Choice",
    dietary: ["veg"],
    tastingNotes: ["Cilantro Lime Rice", "Fresh Guac", "Chipotle Drizzle"],
    customizable: true
  },
  {
    id: "td-main-holamejico",
    name: "Chicken Hola Mejico",
    category: "burgers",
    price: 425,
    portion: "Platter",
    description: "Fiesta seasoned grilled chicken supreme served over warm Mexican rice, char-grilled bell peppers, salsa roja, and crema.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    badge: "Fiesta Special",
    dietary: ["non-veg"],
    tastingNotes: ["Mexican Spices", "Salsa Roja", "Charred Peppers"],
    customizable: true
  },

  // --- DESSERTS & ARTISANAL BAKERY ---
  {
    id: "td-dessert-rocher",
    name: "Rocher",
    category: "desserts",
    price: 345,
    portion: "Indulgent Dome",
    description: "Rich dark Belgian chocolate and roasted hazelnut mousse filled with a gooey praline core, encased in a crisp roasted hazelnut rocher shell.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    badge: "Most Ordered Dessert",
    dietary: ["veg", "special"],
    tastingNotes: ["Belgian Chocolate", "Praline Core", "Roasted Hazelnuts"],
    customizable: false
  },
  {
    id: "td-dessert-tresleches",
    name: "Raspberry Tres Leches",
    category: "desserts",
    price: 345,
    portion: "Pastry Square",
    description: "Airy sponge cake soaked generously in three sweetened milks, layered with tart wild raspberry compote, and topped with delicate chantilly cream.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop",
    badge: "Chef Creation",
    dietary: ["veg", "special"],
    tastingNotes: ["Three Milk Soak", "Tart Raspberry", "Fluffy Chantilly"],
    customizable: false
  }
];

// ---------------------------------------------------------------------------
// 2. CART & APPLICATION STATE
// ---------------------------------------------------------------------------
function formatPrice(amount) {
  return `₹${Number(amount).toLocaleString('en-IN')}`;
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("thedaily_cafe_cart");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error("Error loading cart:", e);
    return [];
  }
}

const state = {
  cart: loadCartFromStorage(),
  discount: 0,
  promoApplied: false,
  tipPercent: 0,
  orderType: "delivery", // 'delivery' | 'takeaway' | 'dinein'
  selectedCategory: "all",
  searchQuery: "",
  dietaryFilter: "all"
};

function saveCartToStorage() {
  try {
    localStorage.setItem("thedaily_cafe_cart", JSON.stringify(state.cart));
    updateCartUI();
    // Also re-render menu steppers if on menu page
    renderMenuCardButtons();
  } catch (e) {
    console.error("Error saving cart:", e);
  }
}

// ---------------------------------------------------------------------------
// 3. THEME ENGINE (DARK ROAST & WARM CREAM)
// ---------------------------------------------------------------------------
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const savedTheme = localStorage.getItem("thedaily_theme") || "dark";
  
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("thedaily_theme", nextTheme);
      updateThemeIcon(nextTheme, themeIcon);
      showToast(nextTheme === "dark" ? "Dark Roast Mode Activated ☕" : "Warm Cream Mode Activated ☀️");
    });
  }
}

function updateThemeIcon(theme, iconEl) {
  if (!iconEl) return;
  if (theme === "dark") {
    iconEl.className = "ph ph-sun";
    iconEl.setAttribute("title", "Switch to Warm Cream daylight mode");
  } else {
    iconEl.className = "ph ph-moon";
    iconEl.setAttribute("title", "Switch to Dark Roast espresso mode");
  }
}

// ---------------------------------------------------------------------------
// 4. REAL-TIME OPERATING HOURS ENGINE (KOLKATA TIME - UTC+5:30)
// ---------------------------------------------------------------------------
function initCafeHours() {
  const statusEl = document.getElementById("liveStatusText");
  const hoursList = document.getElementById("hoursList");
  
  const now = new Date();
  const utcOffset = now.getTimezoneOffset() * 60000;
  const kolkataOffset = 5.5 * 3600000;
  const kolkataNow = new Date(now.getTime() + utcOffset + kolkataOffset);
  
  const currentDay = kolkataNow.getDay();
  const currentHour = kolkataNow.getHours();
  const currentMinute = kolkataNow.getMinutes();
  const currentTimeDec = currentHour + currentMinute / 60;

  if (hoursList) {
    const todayLi = hoursList.querySelector(`li[data-day="${currentDay}"]`);
    if (todayLi) {
      todayLi.classList.add("today-highlight");
    }
  }

  let openTime = 12.0;
  const closeTime = 22.5;

  if (currentDay === 0) {
    openTime = 10.5;
  }

  const isOpen = currentTimeDec >= openTime && currentTimeDec < closeTime;

  if (statusEl) {
    if (isOpen) {
      statusEl.innerHTML = `<span class="live-dot pulse"></span> <strong style="color:#6cd27d;">Open Now</strong> • Closes 10:30 PM`;
    } else {
      const nextOpenText = currentDay === 6 ? "Tomorrow 10:30 AM (Sunday Brunch)" : "Today 12:00 PM";
      statusEl.innerHTML = `<span class="live-dot closed"></span> <strong style="color:#f28b82;">Closed Now</strong> • Opens ${nextOpenText}`;
    }
  }
}

// ---------------------------------------------------------------------------
// 5. MOBILE DRAWER NAVIGATION
// ---------------------------------------------------------------------------
function initMobileDrawer() {
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const closeBtn = document.getElementById("mobileCloseBtn");
  const backdrop = document.getElementById("drawerBackdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!mobileToggle || !mobileDrawer) return;

  function openDrawer() {
    mobileDrawer.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    document.body.style.overflow = "";
  }

  mobileToggle.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

// ---------------------------------------------------------------------------
// 6. MENU ENGINE (RENDER, SEARCH, FILTER & INSTANT ADD TO CART)
// ---------------------------------------------------------------------------
function renderMenuCardButtons() {
  const container = document.getElementById("menuContainer");
  if (!container) return;

  container.querySelectorAll(".menu-card").forEach(card => {
    const itemId = card.dataset.id;
    const actionsWrapper = card.querySelector(".card-action-btns");
    if (!actionsWrapper) return;

    const cartItem = state.cart.find(i => i.id === itemId);
    const item = MENU_ITEMS.find(m => m.id === itemId);
    if (!item) return;

    if (cartItem && cartItem.quantity > 0) {
      actionsWrapper.innerHTML = `
        <div class="card-in-cart-stepper">
          <button class="menu-qty-minus" data-id="${itemId}" title="Decrease quantity"><i class="ph ph-minus"></i></button>
          <span>${cartItem.quantity}</span>
          <button class="menu-qty-plus" data-id="${itemId}" title="Increase quantity"><i class="ph ph-plus"></i></button>
        </div>
        ${item.customizable ? `<button class="btn-customize-link" data-id="${itemId}" title="Customize options"><i class="ph ph-sliders"></i></button>` : ''}
      `;
    } else {
      actionsWrapper.innerHTML = `
        <button class="btn btn-primary btn-sm add-to-cart-btn" data-id="${itemId}">
          <i class="ph ph-plus-circle"></i> Add to Cart
        </button>
        ${item.customizable ? `<button class="btn-customize-link" data-id="${itemId}" title="Customize options"><i class="ph ph-sliders"></i></button>` : ''}
      `;
    }
  });

  // Re-attach card button event listeners
  container.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const itemId = btn.dataset.id;
      const item = MENU_ITEMS.find(m => m.id === itemId);
      if (item) {
        addToCart(item, 1, {});
      }
    });
  });

  container.querySelectorAll(".btn-customize-link").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const itemId = btn.dataset.id;
      const item = MENU_ITEMS.find(m => m.id === itemId);
      if (item) {
        openCustomizeModal(item);
      }
    });
  });

  container.querySelectorAll(".menu-qty-minus").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const itemId = btn.dataset.id;
      const cartIndex = state.cart.findIndex(i => i.id === itemId);
      if (cartIndex > -1) {
        updateCartQuantity(cartIndex, -1);
      }
    });
  });

  container.querySelectorAll(".menu-qty-plus").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const itemId = btn.dataset.id;
      const cartIndex = state.cart.findIndex(i => i.id === itemId);
      if (cartIndex > -1) {
        updateCartQuantity(cartIndex, 1);
      }
    });
  });
}

function initMenu() {
  const container = document.getElementById("menuContainer");
  const searchInput = document.getElementById("menuSearchInput");
  const categoryButtons = document.querySelectorAll(".menu-filters .filter-btn");
  const dietaryChips = document.querySelectorAll(".dietary-chip");

  if (!container) return;

  function renderMenu() {
    let filtered = MENU_ITEMS.filter(item => {
      const matchesCat = state.selectedCategory === "all" || item.category === state.selectedCategory;
      let matchesDiet = true;
      if (state.dietaryFilter === "veg") matchesDiet = item.dietary.includes("veg");
      if (state.dietaryFilter === "non-veg") matchesDiet = item.dietary.includes("non-veg");
      if (state.dietaryFilter === "special") matchesDiet = item.dietary.includes("special");

      const q = state.searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.name.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) ||
        item.tastingNotes.some(t => t.toLowerCase().includes(q));

      return matchesCat && matchesDiet && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-menu-state">
          <i class="ph ph-magnifying-glass"></i>
          <h3>No culinary creations match your search</h3>
          <p>Try searching for "Truffle", "Cappuccino", "Steak", "Pancake" or reset filters.</p>
          <button class="btn btn-secondary btn-sm" id="resetMenuFilterBtn">Show Full Menu</button>
        </div>
      `;
      const resetBtn = document.getElementById("resetMenuFilterBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          state.selectedCategory = "all";
          state.dietaryFilter = "all";
          state.searchQuery = "";
          if (searchInput) searchInput.value = "";
          categoryButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.category === "all"));
          dietaryChips.forEach(chip => chip.classList.toggle("active", chip.dataset.diet === "all"));
          renderMenu();
        });
      }
      return;
    }

    container.innerHTML = filtered.map(item => {
      const isVeg = item.dietary.includes("veg");
      const dietBadgeClass = isVeg ? "diet-badge-veg" : "diet-badge-nonveg";
      const dietIcon = isVeg ? "ph-leaf" : "ph-fork-knife";
      const dietLabel = isVeg ? "Veg" : "Non-Veg";

      return `
        <article class="menu-card" data-id="${item.id}">
          <div class="menu-card-img-wrap">
            <img src="${item.image}" alt="${item.name} at The Daily Kolkata" loading="lazy" class="menu-card-img">
            ${item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : ""}
            <div class="diet-indicator ${dietBadgeClass}">
              <i class="ph ${dietIcon}"></i>
              <span>${dietLabel}</span>
            </div>
          </div>
          <div class="menu-card-body">
            <div class="menu-card-header">
              <h3 class="menu-card-title">${item.name}</h3>
              <div class="menu-card-price">${formatPrice(item.price)}</div>
            </div>
            <p class="menu-card-desc">${item.description}</p>
            
            <div class="menu-card-tags">
              ${item.tastingNotes.map(t => `<span class="tasting-tag"><i class="ph ph-sparkle"></i> ${t}</span>`).join("")}
            </div>

            <div class="menu-card-footer">
              <span class="portion-label"><i class="ph ph-bowl-food"></i> ${item.portion}</span>
              <div class="card-action-btns">
                <!-- Injected by renderMenuCardButtons -->
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");

    renderMenuCardButtons();
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedCategory = btn.dataset.category;
      renderMenu();
    });
  });

  dietaryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      dietaryChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.dietaryFilter = chip.dataset.diet;
      renderMenu();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderMenu();
    });
  }

  renderMenu();
}

// ---------------------------------------------------------------------------
// 7. CUSTOMIZATION MODAL (OPTIONAL REFINEMENTS)
// ---------------------------------------------------------------------------
function openCustomizeModal(item) {
  const modal = document.getElementById("customizeModal");
  if (!modal) {
    addToCart(item, 1, {});
    return;
  }

  const modalBody = document.getElementById("customizeModalBody");
  const modalTitle = document.getElementById("customizeModalTitle");
  
  if (modalTitle) modalTitle.textContent = `Customize: ${item.name}`;

  const isCoffee = item.category === "coffee";

  modalBody.innerHTML = `
    <div class="customize-item-preview">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p class="price">${formatPrice(item.price)} • ${item.portion}</p>
        <p class="desc">${item.description}</p>
      </div>
    </div>

    <form id="customizeForm" class="customize-options-form">
      ${isCoffee ? `
        <div class="custom-group">
          <label class="custom-group-label">Milk Preference</label>
          <div class="radio-pill-group">
            <label class="pill-radio"><input type="radio" name="milk" value="Regular Cream Milk" checked> <span>Regular Cream</span></label>
            <label class="pill-radio"><input type="radio" name="milk" value="Oat Milk (+₹45)"> <span>Oat Milk (+₹45)</span></label>
            <label class="pill-radio"><input type="radio" name="milk" value="Almond Milk (+₹45)"> <span>Almond Milk (+₹45)</span></label>
          </div>
        </div>
        <div class="custom-group">
          <label class="custom-group-label">Temperature / Serving</label>
          <div class="radio-pill-group">
            <label class="pill-radio"><input type="radio" name="temp" value="Hot Barista Serve" checked> <span>Hot</span></label>
            <label class="pill-radio"><input type="radio" name="temp" value="Over Crystal Ice"> <span>Iced / Cold</span></label>
          </div>
        </div>
      ` : `
        <div class="custom-group">
          <label class="custom-group-label">Preparation Preference</label>
          <div class="radio-pill-group">
            <label class="pill-radio"><input type="radio" name="prep" value="Chef Default" checked> <span>Chef's Classic</span></label>
            <label class="pill-radio"><input type="radio" name="prep" value="Mild Spices"> <span>Mild / Less Spicy</span></label>
            <label class="pill-radio"><input type="radio" name="prep" value="Extra Spiced"> <span>Extra Spicy / Bold</span></label>
          </div>
        </div>
        <div class="custom-group">
          <label class="custom-group-label">Add-ons</label>
          <div class="checkbox-pill-group">
            <label class="pill-check"><input type="checkbox" name="addons" value="Extra Shaved Parmesan (+₹60)"> <span>Extra Shaved Parmesan (+₹60)</span></label>
            <label class="pill-check"><input type="checkbox" name="addons" value="Truffle Oil Drizzle (+₹80)"> <span>Truffle Oil Drizzle (+₹80)</span></label>
            <label class="pill-check"><input type="checkbox" name="addons" value="Toasted Sourdough Slice (+₹45)"> <span>Toasted Sourdough (+₹45)</span></label>
          </div>
        </div>
      `}

      <div class="custom-group">
        <label for="customInstructions" class="custom-group-label">Special Cooking Instructions (Optional)</label>
        <textarea id="customInstructions" class="form-control" rows="2" placeholder="e.g. Less sugar, sauce on the side..."></textarea>
      </div>

      <div class="modal-action-bar">
        <button type="button" class="btn btn-secondary" id="cancelCustomizeBtn">Cancel</button>
        <button type="submit" class="btn btn-primary" id="confirmCustomizeBtn">Add to Order • ${formatPrice(item.price)}</button>
      </div>
    </form>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  const form = document.getElementById("customizeForm");
  const cancelBtn = document.getElementById("cancelCustomizeBtn");
  const closeBtn = document.getElementById("closeCustomizeModalBtn");

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let options = {};
    let extraCost = 0;

    if (isCoffee) {
      const milk = form.querySelector('input[name="milk"]:checked')?.value || "Regular";
      const temp = form.querySelector('input[name="temp"]:checked')?.value || "Hot";
      if (milk.includes("+₹45")) extraCost += 45;
      options.milk = milk;
      options.temp = temp;
    } else {
      const prep = form.querySelector('input[name="prep"]:checked')?.value || "Standard";
      const checkedAddons = Array.from(form.querySelectorAll('input[name="addons"]:checked')).map(el => el.value);
      checkedAddons.forEach(a => {
        if (a.includes("+₹60")) extraCost += 60;
        if (a.includes("+₹80")) extraCost += 80;
        if (a.includes("+₹45")) extraCost += 45;
      });
      options.prep = prep;
      options.addons = checkedAddons;
    }

    const note = document.getElementById("customInstructions")?.value.trim();
    if (note) options.note = note;

    const itemWithCustomPrice = {
      ...item,
      price: item.price + extraCost
    };

    addToCart(itemWithCustomPrice, 1, options);
    closeModal();
  });
}

// ---------------------------------------------------------------------------
// 8. CART SYSTEM, DRAWER MANAGEMENT & MOBILE VIEWS
// ---------------------------------------------------------------------------
function addToCart(item, quantity = 1, options = {}) {
  const optionsKey = JSON.stringify(options);
  const existingIndex = state.cart.findIndex(i => i.id === item.id && JSON.stringify(i.options || {}) === optionsKey);

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      portion: item.portion,
      category: item.category,
      quantity: quantity,
      options: options
    });
  }

  saveCartToStorage();
  
  // Show full view on desktop, or open drawer on mobile
  openCartDrawer();
  showToast(`Added "${item.name}" to your cart! 🍽️`);
}

function updateCartQuantity(index, delta) {
  if (state.cart[index]) {
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    saveCartToStorage();
  }
}

function removeCartItem(index) {
  if (state.cart[index]) {
    const name = state.cart[index].name;
    state.cart.splice(index, 1);
    saveCartToStorage();
    showToast(`Removed "${name}" from cart`);
  }
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = state.promoApplied ? Math.round(subtotal * (state.discount / 100)) : 0;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const gst = Math.round(taxableAmount * 0.05);
  
  let deliveryFee = 0;
  if (state.orderType === "delivery" && subtotal > 0) {
    deliveryFee = subtotal >= 1000 ? 0 : 50;
  }
  const tipAmount = Math.round(taxableAmount * (state.tipPercent / 100));
  const total = taxableAmount + gst + deliveryFee + tipAmount;

  return { subtotal, discountAmount, gst, deliveryFee, tipAmount, total };
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update badges
  document.querySelectorAll(".cart-count, #cartCount, #mobileCartCount").forEach(el => {
    el.textContent = totalCount;
    el.style.display = totalCount > 0 ? "inline-flex" : "none";
  });

  const cartItemsContainer = document.getElementById("cartDrawerItems");
  const cartSubtotalEl = document.getElementById("cartSubtotal");
  const cartDiscountRow = document.getElementById("cartDiscountRow");
  const cartDiscountAmount = document.getElementById("cartDiscountAmount");
  const cartGstEl = document.getElementById("cartGst");
  const cartDeliveryEl = document.getElementById("cartDeliveryFee");
  const cartTotalEl = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("cartCheckoutBtn");
  const stickyMobileBar = document.querySelector(".mobile-sticky-cart-bar");

  const totals = calculateCartTotals();

  // Update Mobile Sticky Bottom Cart Bar
  if (stickyMobileBar) {
    if (totalCount > 0) {
      stickyMobileBar.classList.add("visible");
      const stickyInner = stickyMobileBar.querySelector(".btn-sticky-cart") || stickyMobileBar.querySelector(".btn");
      if (stickyInner) {
        stickyInner.innerHTML = `
          <div class="sticky-cart-left">
            <span class="sticky-cart-count-badge">${totalCount} ${totalCount === 1 ? 'item' : 'items'}</span>
            <span>View Full Cart</span>
          </div>
          <strong class="sticky-cart-right">${formatPrice(totals.total)} →</strong>
        `;
        stickyInner.onclick = openCartDrawer;
      }
    } else {
      stickyMobileBar.classList.remove("visible");
    }
  }

  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-message">
        <i class="ph ph-shopping-bag-open"></i>
        <h4>Your plate is empty</h4>
        <p>Explore The Daily's specialty brunch, pasta, steaks & coffees to start your order.</p>
        <a href="menu.html" class="btn btn-secondary btn-sm" id="closeDrawerMenuJump">Browse The Menu</a>
      </div>
    `;
    const jumpBtn = document.getElementById("closeDrawerMenuJump");
    if (jumpBtn) {
      jumpBtn.addEventListener("click", () => {
        closeCartDrawer();
      });
    }
    if (checkoutBtn) checkoutBtn.disabled = true;
    if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(0);
    if (cartTotalEl) cartTotalEl.textContent = formatPrice(0);
    if (cartDiscountRow) cartDiscountRow.style.display = "none";
    return;
  }

  if (checkoutBtn) {
    checkoutBtn.disabled = false;
    checkoutBtn.innerHTML = `Proceed to Checkout • ${formatPrice(totals.total)} <i class="ph ph-arrow-right"></i>`;
  }

  cartItemsContainer.innerHTML = state.cart.map((item, idx) => {
    const opts = item.options || {};
    let optionsList = [];
    if (opts.milk) optionsList.push(opts.milk);
    if (opts.temp) optionsList.push(opts.temp);
    if (opts.prep) optionsList.push(opts.prep);
    if (opts.addons && opts.addons.length) optionsList.push(...opts.addons);
    if (opts.note) optionsList.push(`"${opts.note}"`);

    return `
      <div class="cart-item-row" data-index="${idx}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <div class="cart-item-title-wrap">
            <h4 class="cart-item-title">${item.name}</h4>
            <button class="cart-item-remove-btn" onclick="removeCartItem(${idx})" title="Remove item">
              <i class="ph ph-trash"></i>
            </button>
          </div>
          <div class="cart-item-meta">${item.portion || "Standard"} • ${formatPrice(item.price)}</div>
          ${optionsList.length ? `<div class="cart-item-options">${optionsList.map(o => `<span>${o}</span>`).join(" • ")}</div>` : ""}
          <div class="cart-item-qty-bar">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="updateCartQuantity(${idx}, -1)" aria-label="Decrease quantity"><i class="ph ph-minus"></i></button>
              <span class="qty-number">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity(${idx}, 1)" aria-label="Increase quantity"><i class="ph ph-plus"></i></button>
            </div>
            <div class="cart-item-row-total">${formatPrice(item.price * item.quantity)}</div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(totals.subtotal);
  if (cartGstEl) cartGstEl.textContent = formatPrice(totals.gst);
  if (cartDeliveryEl) cartDeliveryEl.textContent = totals.deliveryFee === 0 ? "FREE" : formatPrice(totals.deliveryFee);
  if (cartTotalEl) cartTotalEl.textContent = formatPrice(totals.total);

  if (cartDiscountRow) {
    if (state.promoApplied && totals.discountAmount > 0) {
      cartDiscountRow.style.display = "flex";
      if (cartDiscountAmount) cartDiscountAmount.textContent = `-${formatPrice(totals.discountAmount)}`;
    } else {
      cartDiscountRow.style.display = "none";
    }
  }
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer) {
    drawer.classList.add("open");
    if (backdrop) backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    updateCartUI();
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer) {
    drawer.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function initCartDrawer() {
  const cartTrigger = document.getElementById("cartTrigger");
  const mobileCartTrigger = document.getElementById("mobileCartTrigger");
  const closeBtn = document.getElementById("closeCartDrawerBtn");
  const backdrop = document.getElementById("cartBackdrop");
  const checkoutBtn = document.getElementById("cartCheckoutBtn");
  const promoBtn = document.getElementById("applyPromoBtn");
  const promoInput = document.getElementById("cartPromoInput");
  const orderTypeSelect = document.querySelectorAll('input[name="drawerOrderType"]');
  const tipButtons = document.querySelectorAll(".tip-btn");

  if (cartTrigger) cartTrigger.addEventListener("click", openCartDrawer);
  if (mobileCartTrigger) mobileCartTrigger.addEventListener("click", openCartDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeCartDrawer);
  if (backdrop) backdrop.addEventListener("click", closeCartDrawer);

  if (promoBtn && promoInput) {
    promoBtn.addEventListener("click", () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === "DAILY10" || code === "THEDAILY10" || code === "KOLKATA10") {
        state.promoApplied = true;
        state.discount = 10;
        showToast("Success! 10% Kolkata Bistro Discount applied! 🎉");
        updateCartUI();
      } else {
        showToast("Invalid code. Use 'DAILY10' for 10% off!", "ph-warning");
      }
    });
  }

  orderTypeSelect.forEach(radio => {
    radio.addEventListener("change", (e) => {
      state.orderType = e.target.value;
      updateCartUI();
    });
  });

  tipButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tipButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.tipPercent = Number(btn.dataset.tip || 0);
      updateCartUI();
    });
  });

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (state.cart.length === 0) {
        showToast("Your cart is empty! Please add some delicious dishes first.", "ph-warning");
        return;
      }
      closeCartDrawer();
      openCheckoutModal();
    });
  }

  document.querySelectorAll(".quick-add-cart-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const itemId = btn.dataset.id;
      const item = MENU_ITEMS.find(m => m.id === itemId);
      if (item) {
        addToCart(item, 1, {});
      }
    });
  });

  updateCartUI();
}

// ---------------------------------------------------------------------------
// 9. CHECKOUT MODAL & DIRECT ORDER / WHATSAPP INTEGRATION
// ---------------------------------------------------------------------------
function openCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  const totals = calculateCartTotals();
  const checkoutSummaryList = document.getElementById("checkoutSummaryList");
  const checkoutFinalTotal = document.getElementById("checkoutFinalTotal");

  if (checkoutSummaryList) {
    checkoutSummaryList.innerHTML = state.cart.map(i => `
      <div class="checkout-summary-row" style="display:flex; justify-content:space-between; margin-bottom:4px;">
        <span>${i.quantity}x ${i.name}</span>
        <strong>${formatPrice(i.price * i.quantity)}</strong>
      </div>
    `).join("");
  }

  if (checkoutFinalTotal) {
    checkoutFinalTotal.textContent = formatPrice(totals.total);
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function initCheckoutEngine() {
  const closeBtn = document.getElementById("closeCheckoutModalBtn");
  const cancelBtn = document.getElementById("cancelCheckoutBtn");
  const checkoutForm = document.getElementById("checkoutForm");
  const sendWhatsAppBtn = document.getElementById("checkoutWhatsAppBtn");

  if (closeBtn) closeBtn.addEventListener("click", closeCheckoutModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeCheckoutModal);

  function generateOrderData() {
    const name = document.getElementById("checkoutName")?.value.trim() || "Guest Patron";
    const phone = document.getElementById("checkoutPhone")?.value.trim() || "";
    const address = document.getElementById("checkoutAddress")?.value.trim() || "Dine-in / Pickup at The Daily Desapriya Park";
    const payment = document.querySelector('input[name="checkoutPayment"]:checked')?.value || "UPI / Cash";
    const notes = document.getElementById("checkoutNotes")?.value.trim() || "None";
    const totals = calculateCartTotals();
    const orderId = "TD-" + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });

    return {
      orderId,
      name,
      phone,
      address,
      payment,
      notes,
      orderType: state.orderType,
      items: state.cart,
      totals,
      dateStr
    };
  }

  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const phoneInput = document.getElementById("checkoutPhone");
      if (phoneInput && !phoneInput.value.trim()) {
        showToast("Please enter your mobile phone number", "ph-warning");
        phoneInput.focus();
        return;
      }

      const order = generateOrderData();
      
      let msg = `*NEW ORDER FROM THE DAILY WEBSITE* ☕🍽️\n`;
      msg += `*Order Reference:* #${order.orderId}\n`;
      msg += `*Date/Time:* ${order.dateStr}\n`;
      msg += `*Customer:* ${order.name}\n`;
      msg += `*Phone:* ${order.phone}\n`;
      msg += `*Order Type:* ${order.orderType.toUpperCase()}\n`;
      if (order.orderType === "delivery") {
        msg += `*Delivery Address:* ${order.address}\n`;
      }
      msg += `*Payment Method:* ${order.payment}\n\n`;
      msg += `*ITEMS ORDERED:*\n`;
      order.items.forEach((item, idx) => {
        msg += `${idx + 1}. ${item.name} (${item.quantity}x) - ${formatPrice(item.price * item.quantity)}\n`;
        const opts = item.options || {};
        if (opts.milk) msg += `   - Milk: ${opts.milk}\n`;
        if (opts.temp) msg += `   - Temp: ${opts.temp}\n`;
        if (opts.prep) msg += `   - Prep: ${opts.prep}\n`;
        if (opts.addons && opts.addons.length) msg += `   - Addons: ${opts.addons.join(", ")}\n`;
        if (opts.note) msg += `   - Note: ${opts.note}\n`;
      });
      msg += `\n*Subtotal:* ${formatPrice(order.totals.subtotal)}\n`;
      if (order.totals.discountAmount > 0) msg += `*Discount:* -${formatPrice(order.totals.discountAmount)}\n`;
      msg += `*GST (5%):* ${formatPrice(order.totals.gst)}\n`;
      if (order.totals.deliveryFee > 0) msg += `*Delivery Fee:* ${formatPrice(order.totals.deliveryFee)}\n`;
      if (order.totals.tipAmount > 0) msg += `*Tip:* ${formatPrice(order.totals.tipAmount)}\n`;
      msg += `*TOTAL PAYABLE:* ${formatPrice(order.totals.total)}\n`;
      if (order.notes !== "None") msg += `*Notes:* ${order.notes}\n`;
      msg += `\nPlease confirm my order. Thank you!`;

      const waUrl = `https://wa.me/${OWNER_CONFIG.phone}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank");

      showOrderSuccessTicket(order);
    });
  }

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const order = generateOrderData();
      showOrderSuccessTicket(order);
    });
  }
}

function showOrderSuccessTicket(order) {
  closeCheckoutModal();

  const successModal = document.getElementById("orderSuccessModal");
  if (!successModal) {
    showToast(`Order #${order.orderId} placed successfully! Thank you.`);
    state.cart = [];
    saveCartToStorage();
    return;
  }

  const ticketContainer = document.getElementById("orderSuccessTicket");
  if (ticketContainer) {
    ticketContainer.innerHTML = `
      <div class="order-receipt-card">
        <div class="receipt-header">
          <div class="receipt-brand">THE DAILY</div>
          <div class="receipt-tagline">Cafe & Bistro • Desapriya Park, Kolkata</div>
          <div class="receipt-id">Order Ticket #${order.orderId}</div>
          <div class="receipt-time">${order.dateStr}</div>
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-details">
          <div><span>Customer:</span> <strong>${order.name}</strong></div>
          <div><span>Phone:</span> <strong>${order.phone}</strong></div>
          <div><span>Type:</span> <strong style="text-transform:uppercase;">${order.orderType}</strong></div>
          <div><span>Payment:</span> <strong>${order.payment}</strong></div>
          ${order.orderType === "delivery" ? `<div><span>Address:</span> <strong>${order.address}</strong></div>` : ""}
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-items-table">
          ${order.items.map(i => `
            <div class="receipt-item-row">
              <span class="r-name">${i.quantity}x ${i.name}</span>
              <span class="r-price">${formatPrice(i.price * i.quantity)}</span>
            </div>
          `).join("")}
        </div>
        <div class="receipt-divider"></div>
        <div class="receipt-breakdown">
          <div><span>Subtotal:</span> <span>${formatPrice(order.totals.subtotal)}</span></div>
          ${order.totals.discountAmount > 0 ? `<div><span>Discount (DAILY10):</span> <span>-${formatPrice(order.totals.discountAmount)}</span></div>` : ""}
          <div><span>GST (5%):</span> <span>${formatPrice(order.totals.gst)}</span></div>
          ${order.totals.deliveryFee > 0 ? `<div><span>Delivery:</span> <span>${formatPrice(order.totals.deliveryFee)}</span></div>` : ""}
          <div class="receipt-final-row"><span>Grand Total:</span> <span>${formatPrice(order.totals.total)}</span></div>
        </div>
        <div class="receipt-footer">
          <p>Thank you for choosing The Daily! We're preparing your artisanal feast with love and fresh local produce.</p>
          <p><strong>Hotline: +91 80170 99950</strong></p>
        </div>
      </div>
    `;
  }

  successModal.classList.add("active");
  document.body.style.overflow = "hidden";

  state.cart = [];
  state.promoApplied = false;
  saveCartToStorage();

  const printBtn = document.getElementById("printReceiptBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  const closeSuccessBtn = document.getElementById("closeOrderSuccessBtn");
  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener("click", () => {
      successModal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
}

// ---------------------------------------------------------------------------
// 10. ONLINE ORDERING HUB (ZOMATO & SWIGGY MODAL)
// ---------------------------------------------------------------------------
function initOnlineOrderHub() {
  const orderModal = document.getElementById("onlineOrderModal");
  const openButtons = document.querySelectorAll(".open-order-modal-btn");
  const closeBtn = document.getElementById("closeOnlineOrderModalBtn");

  if (!orderModal) return;

  function openOrderModal() {
    orderModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeOrderModal() {
    orderModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openOrderModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeOrderModal);

  orderModal.addEventListener("click", (e) => {
    if (e.target === orderModal) closeOrderModal();
  });
}

// ---------------------------------------------------------------------------
// 11. TABLE RESERVATIONS ENGINE
// ---------------------------------------------------------------------------
function initReservations() {
  const reservationForm = document.getElementById("reservationForm");
  if (!reservationForm) return;

  const dateInput = document.getElementById("resDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("resName")?.value.trim();
    const phone = document.getElementById("resPhone")?.value.trim();
    const email = document.getElementById("resEmail")?.value.trim() || "Not provided";
    const date = document.getElementById("resDate")?.value;
    const time = document.getElementById("resTime")?.value;
    const guests = document.getElementById("resGuests")?.value || "2 Guests";
    const seating = document.getElementById("resSeating")?.value || "Main Cozy Bistro";
    const occasion = document.getElementById("resOccasion")?.value || "Casual Dining";
    const notes = document.getElementById("resNotes")?.value.trim() || "None";

    const resId = "TD-RES-" + Math.floor(1000 + Math.random() * 9000);

    const ticketModal = document.getElementById("resTicketModal");
    const ticketBody = document.getElementById("resTicketBody");

    if (ticketModal && ticketBody) {
      ticketBody.innerHTML = `
        <div class="res-ticket-card">
          <div class="res-ticket-header">
            <i class="ph ph-calendar-check" style="font-size: 2.4rem; color: var(--accent-primary);"></i>
            <h3>Reservation Confirmed</h3>
            <span class="ticket-badge">Booking Ref #${resId}</span>
          </div>
          <div class="res-ticket-info-grid">
            <div class="t-col"><span>Guest Name:</span> <strong>${name}</strong></div>
            <div class="t-col"><span>Phone:</span> <strong>${phone}</strong></div>
            <div class="t-col"><span>Date:</span> <strong>${date}</strong></div>
            <div class="t-col"><span>Time Slot:</span> <strong>${time}</strong></div>
            <div class="t-col"><span>Party Size:</span> <strong>${guests}</strong></div>
            <div class="t-col"><span>Seating:</span> <strong>${seating}</strong></div>
            <div class="t-col"><span>Occasion:</span> <strong>${occasion}</strong></div>
            <div class="t-col"><span>Status:</span> <strong style="color:#6cd27d;">VIP Guaranteed</strong></div>
          </div>
          ${notes !== "None" ? `<div class="res-ticket-notes"><span>Special Requests:</span> ${notes}</div>` : ""}
          <div class="res-ticket-instructions">
            <p><i class="ph ph-map-pin"></i> <strong>Location:</strong> 5 Satyen Dutta Road, Lake Market, Kalighat (Same lane as Maharaja Tea Stall, near Desapriya Park).</p>
            <p><i class="ph ph-clock"></i> Please arrive 10 minutes prior to your reserved time. Tables are held for 15 minutes.</p>
          </div>
        </div>
      `;

      ticketModal.classList.add("active");
      document.body.style.overflow = "hidden";

      const waBtn = document.getElementById("resWhatsAppShareBtn");
      if (waBtn) {
        waBtn.onclick = () => {
          const msg = `*TABLE RESERVATION AT THE DAILY KOLKATA* 🥂\n*Ref:* #${resId}\n*Name:* ${name}\n*Phone:* ${phone}\n*Date:* ${date} at ${time}\n*Guests:* ${guests}\n*Seating:* ${seating}\n*Notes:* ${notes}\nSee you soon at 5 Satyen Dutta Road!`;
          window.open(`https://wa.me/${OWNER_CONFIG.phone}?text=${encodeURIComponent(msg)}`, "_blank");
        };
      }

      const closeTicketBtn = document.getElementById("closeResTicketBtn");
      if (closeTicketBtn) {
        closeTicketBtn.onclick = () => {
          ticketModal.classList.remove("active");
          document.body.style.overflow = "";
          reservationForm.reset();
        };
      }
    } else {
      showToast(`Reservation #${resId} confirmed for ${name}! See you on ${date}.`);
      reservationForm.reset();
    }
  });
}

// ---------------------------------------------------------------------------
// 12. AMBIENT CAFE SOUNDSCAPE (WEB AUDIO API SYNTHESIZER)
// ---------------------------------------------------------------------------
let audioCtx = null;
let soundNodes = [];
let isAudioPlaying = false;

function initAmbientSound() {
  const toggleBtn = document.getElementById("soundToggle");
  const icon = document.getElementById("soundIcon");

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    if (!isAudioPlaying) {
      startAmbientAudio();
      isAudioPlaying = true;
      if (icon) icon.className = "ph ph-speaker-high";
      toggleBtn.classList.add("playing");
      showToast("Cozy European bistro soundscape playing 🎵");
    } else {
      stopAmbientAudio();
      isAudioPlaying = false;
      if (icon) icon.className = "ph ph-speaker-slash";
      toggleBtn.classList.remove("playing");
      showToast("Soundscape paused 🔇");
    }
  });
}

function startAmbientAudio() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.08;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(320, audioCtx.currentTime);

    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.06, audioCtx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    whiteNoise.start();
    soundNodes.push(whiteNoise, filter, gainNode);
  } catch (e) {
    console.warn("Ambient sound could not start:", e);
  }
}

function stopAmbientAudio() {
  soundNodes.forEach(node => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch (e) {}
  });
  soundNodes = [];
}

// ---------------------------------------------------------------------------
// 13. CONTACT FORM & INQUIRIES
// ---------------------------------------------------------------------------
function initContactAndNewsletter() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName") ? document.getElementById("contactName").value.trim() : "";
      const phone = document.getElementById("contactPhone") ? document.getElementById("contactPhone").value.trim() : "";
      const msg = document.getElementById("contactMessage") ? document.getElementById("contactMessage").value.trim() : "";
      
      const waContactUrl = `https://wa.me/${OWNER_CONFIG.phone}?text=${encodeURIComponent(`Hi The Daily Kolkata! I'm ${name} (${phone}). Inquiry: ${msg}`)}`;
      
      showToast("Opening WhatsApp...", "ph-paper-plane-tilt");
      setTimeout(() => {
        window.open(waContactUrl, "_blank");
        contactForm.reset();
      }, 800);
    });
  }
}

// ---------------------------------------------------------------------------
// 14. TOAST NOTIFICATION UTILITY
// ---------------------------------------------------------------------------
function showToast(message, iconClass = "ph-info") {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-pill";
  toast.innerHTML = `
    <i class="ph ${iconClass}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("visible");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2800);
}

// ---------------------------------------------------------------------------
// 15. GLOBAL INITIALIZATION
// ---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCafeHours();
  initMobileDrawer();
  initMenu();
  initCartDrawer();
  initCheckoutEngine();
  initOnlineOrderHub();
  initReservations();
  initAmbientSound();
  initContactAndNewsletter();

  const header = document.getElementById("siteHeader") || document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  const copyCoupon = document.getElementById("copyCoupon");
  if (copyCoupon) {
    copyCoupon.addEventListener("click", () => {
      navigator.clipboard.writeText("DAILY10").then(() => {
        showToast("Coupon 'DAILY10' copied! Enjoy 10% off your order.");
      }).catch(() => {
        showToast("Use code 'DAILY10' at checkout!");
      });
    });
  }
});
