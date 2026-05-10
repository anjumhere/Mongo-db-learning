# MongoDB Practice

This workspace contains two MongoDB practice files:

- `01_learning.setup.mongodb.js`
- `02_reading.mongodb.js`

## 01_learning.setup.mongodb.js

This file sets up the sample `ecommerce` database and inserts documents into three collections.

### What is done here

- `use("ecommerce")`
  - Switches to the `ecommerce` database. If the database does not exist, MongoDB creates it when data is inserted.

- `db.products.insertMany([...])`
  - Inserts multiple documents into the `products` collection.
  - Each product document includes fields such as `name`, `price`, `category`, `stock`, `ratings`, `tags`, and `createdAt`.

- `db.orders.insertMany([...])`
  - Inserts multiple documents into the `orders` collection.
  - Each order document includes fields like `orderId`, `user`, `products` (embedded array), `total`, `status`, and `createdAt`.

- `db.contacts.insertMany([...])`
  - Inserts multiple documents into the `contacts` collection.
  - Each contact document includes fields `name`, `message`, `phone`, and `createdAt`.

### Methods used

- `use(dbName)` — change active database context.
- `db.collection.insertMany(array)` — insert many documents in a single operation.
- `new Date()` — set the current timestamp for `createdAt` fields.

## 02_reading.mongodb.js

This file demonstrates reading data from the `products` collection using different query filters.

### What is done here

- `use("ecommerce")`
  - Ensures the script is running against the same `ecommerce` database.

- `db.products.find({...})`
  - Reads documents from the `products` collection that match the query filter.

### Queries shown

- `db.products.find({ name: "Mechanical Keyboard" })`
  - Finds products with the exact `name` value.

- `db.products.find({ category: "Electronics" })`
  - Finds products in the `Electronics` category.

- `db.products.find({ price: { $gt: 1000 } })`
  - Finds products with `price` greater than `1000`.

- `db.products.find({ price: { $gte: 1000, $lte: 50000 } })`
  - Finds products with `price` between `1000` and `50000` inclusive.

- `db.products.find({ $or: [{ category: "Electronics" }, { stock: { $gt: 80 } }] })`
  - Finds products where either the `category` is `Electronics` or the `stock` is greater than `80`.

### Methods/operators used

- `db.collection.find(query)` — read documents that match a query.
- `$gt`, `$gte`, `$lte` — comparison operators for greater than, greater than or equal, and less than or equal.
- `$or` — logical OR operator to match documents that satisfy at least one condition.

## Summary

These files show practical MongoDB usage for:

- selecting a database with `use()`;
- inserting multiple documents using `insertMany()`;
- reading documents using `find()` with filters;
- using comparison operators (`$gt`, `$gte`, `$lte`) and logical operators like `$or`.
