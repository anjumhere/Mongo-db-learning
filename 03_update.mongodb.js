use("ecommerce");

db.products.find();
// CRUD OPERATIONS
// update, push,set, delete

//UPDATE,SET,PUSH,INC OPERATION

// db.products.updateOne({ name: "Wireless Mouse" }, { $set: { price: 1399 } });

// db.products.updateMany({ category: "Electronics" }, { $inc: { stock: 50 } });

// db.products.updateOne(
//   { name: "Mechanical Keyboard" },
//   { $push: { tags: "low-latency" } },
// );

// DELETE OPERTAION
// db.contacts.deleteOne({ name: "Alice" });
