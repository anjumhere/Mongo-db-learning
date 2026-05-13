// Switch to the `ecommerce` database for index operations.
use("ecommerce");

// Inspect all indexes defined on the `sales` collection.
// getIndexes() returns an array of index documents.
db.sales.getIndexes();

// Create an ascending index on the `quantity` field.
// db.sales.createIndex({ quantity: 1 });
//   - `1` means ascending order, `-1` would mean descending order.
