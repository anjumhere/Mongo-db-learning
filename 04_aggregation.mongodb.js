use("ecommerce");

// Example sample data for the `sales` collection.
// db.sales.insertMany([
//   { _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
//   { _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
//   { _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
//   { _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
// ]);

// Aggregation pipelines run in ordered stages. Each stage receives the output of the previous stage.
// db.collection.aggregate([...]) executes the pipeline.

// $match filters documents like a query filter.
// db.sales.aggregate([
//   { $match: { category: "Fruit" } },
//   { $project: { _id: 0, quantity: 1, price: 1 } },
// ]);

// $project selects which fields should appear in the output.
// It can also rename fields or compute new fields.
// db.sales.aggregate([
//   { $match: { category: "Fruit" } },
//   { $project: { _id: 0, item: 1, quantity: 1, totalPrice: { $multiply: ["$quantity", "$price"] } } },
// ]);

// $group aggregates documents by a grouping key.
// Use $sum, $avg, $min, $max, and other accumulator operators inside $group.
// db.sales.aggregate([
//   {
//     $group: {
//       _id: "$category",
//       totalSales: {
//         $sum: { $multiply: ["$quantity", "$price"] },
//       },
//     },
//   },
// ]);
