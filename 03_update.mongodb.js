// Switch to the `ecommerce` database.
use("ecommerce");

// Read example to confirm the collection exists before updates.
// db.products.find();

// CRUD operations for update and delete.
// db.products.updateOne({ name: "Wireless Mouse" }, { $set: { price: 1399 } });
//   - $set replaces or adds the specified field value.

// db.products.updateMany({ category: "Electronics" }, { $inc: { stock: 50 } });
//   - $inc increments numeric field values by the given amount.

// db.products.updateOne(
//   { name: "Mechanical Keyboard" },
//   { $push: { tags: "low-latency" } },
// );
//   - $push appends an item to an array field.

// Delete a single matching document from the contacts collection.
// db.contacts.deleteOne({ name: "Alice" });
