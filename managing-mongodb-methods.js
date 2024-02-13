/* Create Database Command */
use myBooks
db.myBooksCollection.insert({"book-title":"Mastering MongoDB"})

/* Create Collection */
use myBooks
db.createCollection("myBooksCollection-V2")

/* Inserting a Document in a Collection */
db.myBooksCollection.insert({"book-title":"Mastering MongoDB with JavaScript"})

/* Dropping or Deleting a Database */
use myBooks
db.dropDatabase()

/* Dropping or Deleting a Collection */
use myBooks
db.myBooksCollection.drop()

/* Read Document Command */
use myBooks
db.myBooksCollection.find()
OR
db.myBooksCollection.find().pretty()

/* Delete Document Command */
use myBooks
db.myBooksCollection.remove()
OR
db.myBooksCollection.remove({"_id" : ObjectId("5e8e94513c9f251e6d749109")})

/* Role Based Authentication in MongoDB */
use myBooks
db.createUser(
  {
    user: "amien1410",
    pwd: "admin1234",
    roles:
    [
      {
        role: "userAdmin",
        db: "myBooks"
      }
    ]
  }
)

/* Restarting the MongoDB Service with Auth Flag */
mongod --auth --port 27017
mongo -u "amien1410" -p "admin1234" --authenticationDatabase  "myBooks"
