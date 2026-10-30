use retail_db;

db.sales.insertMany([
  {
    orderId: 101,
    product: "Laptop",
    category: "Electronics",
    price: 60000,
    quantity: 2,
    totalAmount: 120000
  },
  {
    orderId: 102,
    product: "T-Shirt",
    category: "Apparel",
    price: 800,
    quantity: 10,
    totalAmount: 8000
  },
  {
    orderId: 103,
    product: "Phone",
    category: "Electronics",
    price: 25000,
    quantity: 4,
    totalAmount: 100000
  }
]);

db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalRevenue: { $sum: "$totalAmount" },
      totalQuantitySold: { $sum: "$quantity" },
      avgOrderValue: { $avg: "$totalAmount" }
    }
  },
  { $sort: { totalRevenue: -1 } }
]);