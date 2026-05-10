// Switch to the `ecommerce` database so the read operations use the same database.
use("ecommerce");

// Find documents in the `products` collection by exact match.
// db.products.find({ name: "Mechanical Keyboard" });
// db.products.find({ category: "Electronics" });

// Use comparison operators to filter by price.
// db.products.find({ price: { $gt: 1000 } });
// db.products.find({ price: { $gte: 1000, $lte: 50000 } });

// Use the $or logical operator to find documents that match either condition.
db.products.find({
  $or: [{ category: "Electronics" }, { stock: { $gt: 80 } }],
});
