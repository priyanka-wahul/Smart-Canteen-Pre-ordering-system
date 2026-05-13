const sampleMenu = 
[
  // Breakfast 
  {
    name: "Pancakes",
    price: 120,
    category: "Breakfast",
    image: { url: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    filename: "menuimage" },
  },
  {
    name: "Masala Dosa",
    price: 130,
    category: "Breakfast",
    image: { url: "https://images.unsplash.com/photo-1743517894265-c86ab035adef?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    filename: "menuimage" },
  },
  {
    name: "vada pav",
    price: 90,
    category: "Breakfast",
    image: { url: "https://images.unsplash.com/photo-1769030905851-c0e0a4fe5c51?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filename: "menuimage" },
  },
  {
    name: "misal pav",
    price: 70,
    category: "Breakfast",
    image: { url: "https://images.unsplash.com/photo-1665156958464-90a8b463e1e6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filename: "menuimage" },
  },
  {
    name: "Upma",
    price: 80,
    category: "Breakfast",
    image: { url: "https://images.unsplash.com/photo-1630409349197-b733a524b24e?q=80&w=1241&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filename: "menuimage" },
  },
  {
    name: "Idli Sambhar",
    price: 100,
    category: "Breakfast",
    image: { url: "https://images.unsplash.com/photo-1632104667384-06f58cb7ad44?q=80&w=860&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filename: "menuimage" },
  },
  {
    name: "Sandwich",
    price: 110,
    category: "Breakfast",
    image: { url: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filename: "menuimage" },
  },

  // Lunch 
  {
    name: "Veg Thali",
    price: 200,
    category: "Lunch",
    image: { url: "https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filename: "menuimage" },
  },
  
  {
    name: "Veg Biryani",
    price: 180,
    category: "Lunch",
    image: { url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filename: "menuimage" },
  },
  {
    name: "Fried Rice",
    price: 160,
    category: "Lunch",
    image: { url: "https://images.unsplash.com/photo-1664717698774-84f62382613b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       filename: "menuimage" },
  },
  {
    name: "Noodles",
    price: 140,
    category: "Lunch",
    image: { url: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filename: "menuimage" },
  },
  {
    name: "Veg Burger",
    price: 150,
    category: "Lunch",
    image: { url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", filename: "menuimage" },
  },

  // Snacks 
  {
    name: "French Fries",
    price: 80,
    category: "Snacks",
    image: { url: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      filename: "menuimage" },
  },
  {
    name: "Samosa",
    price: 30,
    category: "Snacks",
    image: { url: "https://images.unsplash.com/photo-1732519970445-8f2d6998961f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       filename: "menuimage" },
  },
  {
    name: "Pakora",
    price: 60,
    category: "Snacks",
    image: { url: "https://images.unsplash.com/photo-1765360024331-25b63e85272e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       filename: "menuimage" },
  },
  {
    name: "Spring Rolls",
    price: 120,
    category: "Snacks",
    image: { url: "https://images.unsplash.com/photo-1582454235987-1e597bafcf58?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       filename: "menuimage" },
  },
  
  {
    name: "Popcorn",
    price: 70,
    category: "Snacks",
    image: { url: "https://plus.unsplash.com/premium_photo-1676049461933-28e3e6ee359c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       filename: "menuimage" },
  },
  

  // Beverages 
  {
    name: "Coffee",
    price: 100,
    category: "Beverages",
    image: { url: "https://images.unsplash.com/photo-1530373239216-42518e6b4063?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       filename: "menuimage" },
  },
  {
    name: "Tea",
    price: 20,
    category: "Beverages",
    image: { url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=721&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      filename: "menuimage" },
  },
  
  {
    name: "Mango Shake",
    price: 90,
    category: "Beverages",
    image: { url: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      filename: "menuimage" },
  },
  {
    name: "Lemon Juice",
    price: 50,
    category: "Beverages",
    image: { url: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      filename: "menuimage" },
  },
  {
    name: "Smoothie",
    price: 120,
    category: "Beverages",
    image: { url: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       filename: "menuimage" },
  },
  

  // Desserts  — keep lowercase "desserts"
  {
    name: "Chocolate Cake",
    price: 200,
    category: "desserts",
    image: { url: "https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      filename: "menuimage" },
  },
  {
    name: "Ice Cream",
    price: 150,
    category: "desserts",
    image: { url: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      filename: "menuimage" },
  },
  {
    name: "Brownie",
    price: 120,
    category: "desserts",
    image: { url: "https://images.unsplash.com/photo-1606313564573-104197cf8f91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    filename: "menuimage" },
  },
  {
    name: "Cupcake",
    price: 90,
    category: "desserts",
    image: { url: "https://plus.unsplash.com/premium_photo-1663839412043-418eca597a2e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      filename: "menuimage" },
  },
  {
    name: "Donut",
    price: 80,
    category: "desserts",
    image: { url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    filename: "menuimage" },
  },
  
  
];

module.exports = {data : sampleMenu};
