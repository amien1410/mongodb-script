/* Integer Data Types */

/* Code 1 */

db.myBooksCollection.insert({
    "Data Type Alias": "int",
    "Data Type Number": "16",
    "Data Type Value": 7777
});


/* Code 2 */


db.myBooksCollection.find({
    "Data Type Alias": "int"
}).pretty();


/* String Data Types */

/* Code 1 */

db.myBooksCollection.insert({
    "Data Type Alias": "string",
    "Data Type Number": "2",
    "Data Type Value": "BPB Publications – The Largest Online Resource for IT Books"
});


/* Code 2 */


db.myBooksCollection.find({
    "Data Type Alias": "string"
}).pretty();


/* Double Data Types */

/* Code 1 */

db.myBooksCollection.insert({
    "Data Type Alias": "double",
    "Data Type Number": "1",
    "Data Type Value": 777.27
});

/* Code 2 */

db.myBooksCollection.find({
    "Data Type Alias": "double"
}).pretty();

/* Array Data Types */

/* Code 1 */

var indonesia = ['Banjarmasin', 'Jakarta', 'Bandung', 'Surabaya'];
var usa = ['New York', 'Atlanta', 'Arizona', 'New Jersey'];

/* Code 2 */

db.myBooksCollection.insert({
    "Data Type Alias": "array",
    "Data Type Number": "4",
    "Data Type Value 1": indonesia,
    "Data Type Value 2": usa
});

/* Code 3 */

db.myBooksCollection.find({
    "Data Type Alias": "array"
}).pretty();

/* Object Data Types */

/* Code 1 */

var myBooksLatestEditions = [{
    'Title': 'Instant Approach to Software Testing: Principles, Applications, Techniques, and Practices',
    'Year': '2019',
    'ISBN': '9789388511162',
    'Pages': 368,
    'Weight': '677gm',
    'Dimension': '24x18x2cm'
}, {
    'Title': 'IOT and Smart Cities: Your Smart City Planning Guide',
    'Year': '2019',
    'ISBN': '9789388511322',
    'Pages': 242,
    'Weight': '357gm',
    'Dimension': '22.5x15x1.5gm'
}];

/* Binary Data Types */

/* Code 1 */

var myBooksBinaryData = BinData(1, "SGVsbG8gV29ybGQgRnJvbSBCUEIgUHVibGljYXRpb25z"); 

/* Code 2 */

db.myBooksCollection.insert({
    "Data Type Alias": "binData",
    "Data Type Number": "5",
    "Data Type Value": myBooksBinaryData
});

/* Code 3 */

db.myBooksCollection.find({
    "Data Type Alias": "binData"
}).pretty();

/* ObjectId Data Types */

/* Code 1 */

var myBooksObjectId = ObjectId(); 

/* Code 2 */

db.myBooksCollection.insert({
    "Data Type Alias": "objectid",
    "Data Type Number": "7",
    "Data Type Value": myBooksObjectId
});


/* Code 3 */

db.myBooksCollection.find({
    "Data Type Alias": "objectid"

}).pretty();

/* Date Data Types */

/* Code 1 */

var myBooksDate1 = Date(); 
var myBooksDate2 = new Date(); 

/* Code 2 */

db.myBooksCollection.insert({
    "Data Type Alias": "date",
    "Data Type Number": "9",
    "Data Type Value 1": myBooksDate1,
    "Date Type Value 2": myBooksDate2
});

/* Code 3 */

db.myBooksCollection.find({
    "Data Type Alias": "date"
}).pretty();

/* Null Data Types */

/* Code 1 */

var myBooksNull = null; 

/* Code 2 */

db.myBooksCollection.insert({
    "Data Type Alias": "null",
    "Data Type Number": "10",
    "Data Type Value": myBooksNull
});

/* Code 3 */

db.myBooksCollection.find({
    "Data Type Alias": "null"
}).pretty();

/* Regular Expression Data Types */

/* Code 1 */

var myBooksRegEx = RegExp("%BPB");     

/* Code 2 */

db.myBooksCollection.insert({
    "Data Type Alias": "regex",
    "Data Type Number": "11",
    "Data Type Value": myBooksRegEx
});

/* Code 3 */

db.myBooksCollection.find({
    "Data Type Alias": "regex"
}).pretty();


/* JavaScript Data Types (Without Scope) */

/* Code 1 */

var myBooksFunction = "function(){var bpb; bpb=100;}";
var myBooksFunctionScope =  {};

/* Code 2 */

db.myBooksCollection.insert({
    "Data Type Alias": "javascript",
    "Data Type Number": "13",
    "Data Type Value Function": myBooksFunction,
    "Data Type Value Function Scope": myBooksFunctionScope
});

/* Code 3 */

db.myBooksCollection.find({
    "Data Type Alias": "javascript"
}).pretty();


/* Javascript Data Types (With Scope) */

/* Code 1 */

var myBooksFunction = "function(){var bpb; bpb=2000;}";
var myBooksFunctionScope = ["object"]; 

/* Code 2 */

db.myBooksCollection.insert({
    "Data Type Alias": "javascriptWithScope",
    "Data Type Number": "15",
    "Data Type Value Function": myBooksFunction,
    "Data Type Value Function Scope": myBooksFunctionScope
});

/* Code 3 */

db.myBooksCollection.find({
    "Data Type Alias": "javascriptWithScope"
}).pretty();

/* Timestamp Data Types */

/* Code 1 */

var myBooksTimestamp = new Timestamp();

/* Code 2 */

db.myBooksCollection.insert({
    "Data Type Alias": "timestamp",
    "Data Type Number": "17",
    "Data Type Value": myBooksTimestamp
});

/* Code 3 */

db.myBooksCollection.find({
    "Data Type Alias": "timestamp"
}).pretty();


/* Boolean Data Types */

/* Code 1 */

var myBooksBoolean1 = true;
var myBooksBoolean2 = false;

/* Code 2 */

db.myBooksCollection.insert({
    "Data Type Alias": "bool",
    "Data Type Number": "8",
    "Data Type Value 1": myBooksBoolean1,
    "Data Type Value 2": myBooksBoolean2
});

/* Code 3 */

db.myBooksCollection.find({
    "Data Type Alias": "bool"
}).pretty();


/* Comparison and Sort Order */
/* Code 1 */

var myBooksVar1 = 100000;
var myBooksVar2 = "BPB Publications";
var myBooksVar3 = 77.07;
var myBooksVar4 = true;
var myBooksVar5 = null;
var myBooksVar6 = MinKey;
var myBooksVar7 = MaxKey;

/* Code 2 */

db.myBooksCollection.insert([{
    "Data Type Alias": "int",
    "Data Type Value": myBooksVar1
}, {
    "Data Type Alias": "string",
    "Data Type Value": myBooksVar2
}, {
    "Data Type Alias": "double",
    "Data Type Value": myBooksVar3
}, {
    "Data Type Alias": "bool",
    "Data Type Value": myBooksVar4
}, {
    "Data Type Alias": "null",
    "Data Type Value": myBooksVar5
}, {
    "Data Type Alias": "minKey",
    "Data Type Value": myBooksVar6
}, {
    "Data Type Alias": "maxKey",
    "Data Type Value": myBooksVar7
}]);

/* Code 3 */

db.myBooksCollection.find().sort({
    "Data Type Value": 1
});

