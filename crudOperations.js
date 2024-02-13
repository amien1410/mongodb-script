/* MongoDB Create Operations */
db.collection.insert()
db.collection.insertOne() 
db.collection.insertMany()

/* MongoDB db.collection.insert() Method */
var sample1 = {
    'Title': 'Cloud Computing',
    'Year': '2019',
    'ISBN': '9789388511407',
    'Pages': 330,
    'Weight': '570gm',
    'Dimension': '23x19x1.5cm'
};
db.myBooksCollection.insert(sample1);

/* Example 2 – Creating a Multiple Documents in MongoDB Collection */
var sample2 = [{
    'Title': 'Introduction to Digital Marketing 101 : Easy to Learn and Implement Hands-on Guide for Digital Marketing',
    'Year': '2019',
    'ISBN': '9789389328189',
    'Pages': 464
}, {
    'Title': 'IOT and Smart Cities: Your Smart City Planning Guide',
    'Year': '2019',
    'ISBN': '9789388511322',
    'Pages': 242,
    'Weight': '357gm',
    'Dimension': '22.5x15x1.5gm'
}];
db.myBooksCollection.insert(sample2);

/* MongoDB db.collection.insertOne() Method */
/* Example – Creating a Single Document in MongoDB Collection using insertOne() Method */
var sample3 = {
    'Title': 'Machine Learning with Python',
    'Year': '2018',
    'ISBN': '9789386551931',
    'Pages': 267
};
db.myBooksCollection.insertOne(sample3);

/* MongoDB db.collection.insertMany() Method */
var sample4 = [{
    'Title': 'Artificial Intelligence Ethics and International Law: An Introduction',
    'Year': '2019',
    'ISBN': '9789388511629',
    'Pages': 188,
    'Weight': '268gm'
}, {
    'Title': 'A Practical Approach for Machine Learning and Deep Learning Algorithms',
    'Year': '2019',
    'ISBN': '9789388511131',
    'Pages': 280,
    'Weight': '424gm'
}];
db.myBooksCollection.insertMany(sample4);

/* Example - Creating a new document by specifying _id key */
var sample5 = {
    '_id': '20021111',
    'Title': 'Introduction to Database Management',
    'Year': '2002',
    'ISBN': ' 9788176566384',
    'Pages': 342
};
db.myBooksCollection.insert(sample5);

/* MongoDB Read Operations */

/* MongoDB db.collection.find() */
db.collection.find(query, projection)

/* Example 1 – Reading Documents in MongoDB Collection without Query */
db.myBooksCollection.find();

/* Example 2 – Reading Documents in MongoDB Collection with Query */
db.myBooksCollection.find({'Year': '2002'});

/* Example 3 – Reading Documents in MongoDB Collection with Query and Pretty Method */
db.myBooksCollection.find({'Year': '2019'}).pretty();

/* MongoDB Update Operations */
db.collection.update()
db.collection.updateOne() 
db.collection.updateMany()

/* MongoDB db.collection.update() Method */
/* Example 1 – Updating a Single Document in MongoDB Collection using update() Method */

/* Code 1 */

var query1 = {
    'Title': 'Introduction to Database Management'
};
var update1 = {
    'Title': 'Introduction to Database Management (The Complete Text Book for Computer Science Students)'
};
db.myBooksCollection.update(query1, {
    $set: update1
});

/* Example 2 – Updating Multiple Documents in MongoDB Collection using update() Method */

/* Code 1 */

var query2 = {
    'Year': '2019'
};

var BPBBooksDatatoUpdate = {
    'Publisher': 'BPB Publications'
};

/* MongoDB db.collection.updateOne() Method */

/* Method Definition */

db.collection.updateOne(
<filter>,
<update>,
   {
     upsert: <boolean>
   }
)

/* Example – Updating a Single Document in MongoDB Collection using updateOne() Method */

/* Code 1 */

var query2 = {
    'Title': 'IOT and Smart Cities: Your Smart City Planning Guide'
};
var update2 = {
    'Title': 'IOT and Smart Cities',
    'Year': '2020'
};
db.myBooksCollection.updateOne(query2, {
    $set: update2
});

/* MongoDB db.collection.updateMany() Method */
/* Example – Updating Multiple Documents in MongoDB Collection using updateMany() Method */

/* Code 1 */

var query3 = {
    'Year': '2019'
};
var update3 = {
    'Discount': '10%'
};
db.myBooksCollection.updateMany(query3, {
    $set: update3
});

/* MongoDB Delete Operations */

•	db.collection.remove()
•	db.collection.deleteOne() 
•	db.collection.deleteMany()

/* MongoDB db.collection.remove() Method */
/* remove() Method is a depreciated function and it is going to be unavailable in the future versions of MongoDB so it is better to use the deleteOne() and deleteMany() Methods instead of remove() Method. */
/* Example 1 – Deleting a Single Document in MongoDB Collection using remove() Method */

/* Code 1 */

var deleteQuery = {
    'Year': '2002'
};

db.myBooksCollection.remove(
deleteQuery, 
{
    justOne: true
}
);

/* Example 2 – Deleting Multiple Documents in MongoDB Collection using remove() Method */
var deleteQuery2 = {
    'Year': '2019'
};
db.myBooksCollection.remove(deleteQuery2);

/* MongoDB db.collection.deleteOne() Method */
/* Example – Deleting a Single Document in MongoDB Collection using deleteOne() Method */
var deleteQuery3 = {
    'Year': '2020'
};
db.myBooksCollection.deleteOne(deleteQuery3);

/* MongoDB db.collection.deleteMany() Method */
/* Example – Deleting multiple Documents in MongoDB Collection using deleteMany() Method */
var deleteQuery4 = {
    'Year': '2019'
};
db.myBooksCollection.deleteMany(deleteQuery4);

/* MongoDB Bulk Write Operations */

/* MongoDB db.collection.bulkWrite() Method */
db.myBooksCollection.bulkWrite([
  { insertOne: { "document": { "_id": 4, "Title": "Learn C++", "Year": "2000", "Price": 450 } } },
  { insertOne: { "document": { "_id": 5, "Title": "Mastering Java", "Year": "2005", "Price": 700 } } },
  { updateOne : {
     "filter" : { "Title" : "Learn C++" },
     "update" : { $set : { "Publisher" : "BPB Publication" } }
  } },
  { deleteOne : { "filter" : { "Year" : "2010"} } },
  { replaceOne : {
     "filter" : { "Title" : "Introduction to Python" },
     "replacement" : { "Title" : "Mastering Python", "Year" : "2020", "Price": 800 }
  } }
]);
