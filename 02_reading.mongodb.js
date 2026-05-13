// Switch to the `ecommerce` database so the read operations use the same database.
use("ecommerce");

// Find products by exact field match.
// db.products.find({ name: "Mechanical Keyboard" });
// db.products.find({ category: "Electronics" });

// Use comparison operators to filter numeric fields.
// db.products.find({ price: { $gt: 1000 } });
// db.products.find({ price: { $gte: 1000, $lte: 50000 } });
// db.products.find({ price: { $lt: 5000 } });

// Use the $or operator to match documents satisfying any one of several conditions.
// db.products.find({
//   $or: [{ category: "Electronics" }, { stock: { $gt: 80 } }],
// });
// db.products.find({
//   $or: [{ category: "Electronics" }, { price: { $gt: 50000 } }],
// });

// Projection returns only selected fields, while excluding `_id`.
// db.products.find({}, { name: 1, price: 1, _id: 0 });

// Sorting and pagination with sort(), skip(), and limit().
// db.products.find().sort({ price: -1 }).limit(6);
// db.products.find().sort({ price: -1 }).skip(1).limit(1);
// db.products.find().sort({ price: -1 }).skip(1).limit(1).toArray();
