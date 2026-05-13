# MongoDB Practice

This workspace contains MongoDB learning scripts for database setup, queries, updates, aggregation pipelines, and indexing.

Files included:

- `01_learning.setup.mongodb.js`
- `02_reading.mongodb.js`
- `03_update.mongodb.js`
- `04_aggregation.mongodb.js`
- `05_index.mongodb.js`
- `revise/setup.mongodb.js`

## 01_learning.setup.mongodb.js

This file sets up the sample `ecommerce` database and includes example document inserts for three collections:

- `products`
- `orders`
- `contacts`

### Concepts covered

- `use("ecommerce")` — switch the active database context.
- `db.collection.insertMany([...])` — insert multiple documents in one operation.
- `new Date()` — generate timestamps for `createdAt` fields.
- Arrays and embedded objects in documents (`tags`, `products`).

### Collections and fields

- `products`: stores product details such as `name`, `price`, `category`, `stock`, `ratings`, `tags`, and `createdAt`.
- `orders`: stores order records with `orderId`, `user`, `products` (embedded array), `total`, `status`, and `createdAt`.
- `contacts`: stores messages from users with `name`, `message`, `phone`, and `createdAt`.

## 02_reading.mongodb.js

This file shows how to read data from the `products` collection using a range of query patterns.

### Concepts covered

- `db.collection.find(query)` — query documents in a collection.
- query operators: `$gt`, `$gte`, `$lte`, `$lt`, and `$or`.
- projection with `find({}, { field: 1, _id: 0 })` to return only selected fields.
- sorting and pagination with `sort()`, `skip()`, and `limit()`.

### Example query patterns

- exact match by `name` or `category`
- comparison filters on `price`
- logical `OR` queries across fields
- retrieving only selected fields (projection)
- sorting by `price` and limiting the result set

## 03_update.mongodb.js

This file demonstrates update and delete operations in MongoDB.

### Concepts covered

- `db.collection.updateOne(filter, update)` — update a single matching document.
- `db.collection.updateMany(filter, update)` — update all documents matching a filter.
- update operators: `$set`, `$inc`, `$push`.
- `db.collection.deleteOne(filter)` — delete a single matching document.

### Example operations

- update the price of a product using `$set`
- increment stock values using `$inc`
- add a new tag to an array field using `$push`
- remove a contact document using `deleteOne`

## 04_aggregation.mongodb.js

This file explains MongoDB aggregation pipelines using the `sales` collection.

### Concepts covered

- `db.collection.aggregate([...])` — run an aggregation pipeline.
- pipeline stages: `$match`, `$project`, `$group`.
- `$match` for filtering documents like `find()`.
- `$project` for selecting or reshaping fields.
- `$group` for aggregation operations such as `sum` and `multiply`.
- stage chaining: output from one stage is passed to the next.

### Example aggregation patterns

- filter sales by category
- project specific fields while hiding `_id`
- group documents by category and compute total sales with `$sum` and `$multiply`

## 05_index.mongodb.js

This file shows how to inspect and create indexes.

### Concepts covered

- `db.collection.getIndexes()` — list all indexes on a collection.
- `db.collection.createIndex(indexSpec)` — create a new index.
- index direction: `1` for ascending indexes.

### Example pattern

- create an ascending index on the `quantity` field in the `sales` collection.
- inspect indexes after creation.

## revise/setup.mongodb.js

This file contains a duplicate setup script for the `ecommerce` database with explicit insert examples.

### Concepts covered

- repeated insert examples for `products`, `orders`, and `contacts`
- showing how arrays and embedded objects are structured in sample data
- using the same `use("ecommerce")` database context

## Summary

Together, these scripts walk through a complete MongoDB learning path:

- database selection with `use()`
- inserting documents with `insertMany()`
- reading documents with `find()` and query operators
- updating documents with `updateOne()` / `updateMany()`
- deleting documents with `deleteOne()`
- building aggregation pipelines with `aggregate()`
- creating and inspecting indexes with `createIndex()` and `getIndexes()`
