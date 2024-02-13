/* MongoDB Default _id Index */
/* The _id Properties */
var _idProperties = [{
    'Title': 'Cloud Computing',
    'Year': '2019',
    'ISBN': '9789388511407',
    'Pages': 330,
    'Weight': '570gm',
    'Dimension': '23x19x1.5cm',
    'Tags': ['Cloud Computing', 'Cloud Computing Concepts', 'Non Programming'],
    'InStock': [{
            'Type': 'Paperback',
            'Quantity': 3000
        },
        {
            'Type': 'Hardcover',
            'Quantity': 1500
        }
    ],
    'SpecialOfferDiscount': '100'
}, {
    'Title': 'Introduction to Digital Marketing 101 : Easy to Learn and Implement Hands-on Guide for Digital Marketing',
    'Year': '2019',
    'ISBN': '9789389328189',
    'Pages': 464,
    'Tags': ['Digital Marketing', 'Digital Marketing Tips', 'Non Programming'],
    'InStock': [{
            'Type': 'Paperback',
            'Quantity': 4000
        },
        {
            'Type': 'Hardcover',
            'Quantity': 2300
        }
    ]
}, {
    'Title': 'IOT and Smart Cities: Your Smart City Planning Guide',
    'Year': '2019',
    'ISBN': '9789388511322',
    'Pages': 242,
    'Weight': '357gm',
    'Dimension': '22.5x15x1.5gm',
    'Tags': ['Internet of Things', 'IoT', 'Smart City', 'Planning Guide', 'Non Programming'],
    'InStock': [{
            'Type': 'Paperback',
            'Quantity': 2000
        },
        {
            'Type': 'Hardcover',
            'Quantity': 1000
        }
    ] ,
    'SpecialOfferDiscount': '200'
}, {
    'Title': 'Machine Learning with Python',
    'Year': '2018',
    'ISBN': '9789386551931',
    'Pages': 267,
    'Tags': ['Python', 'Machine Learning', 'Python Programming', 'Programming'],
    'InStock': [{
            'Type': 'Paperback',
            'Quantity': 4500
        },
        {
            'Type': 'Hardcover',
            'Quantity': 1300
        }
    ]
}, {
    'Title': 'Artificial Intelligence Ethics and International Law: An Introduction',
    'Year': '2019',
    'ISBN': ' 9789388511629',
    'Pages': 188,
    'Weight': '268gm',
    'Tags': ['Artificial Intelligence', 'International Law', 'AI', 'Artificial Intelligence Ethics', 'Non Programming'],
    'InStock': [{
            'Type': 'Paperback',
            'Quantity': 5200
        },
        {
            'Type': 'Hardcover',
            'Quantity': 3300
        }
    ]
}, {
    'Title': 'A Practical Approach for Machine Learning and Deep Learning Algorithms',
    'Year': '2019',
    'ISBN': '9789388511131',
    'Pages': 280,
    'Weight': '424gm',
    'Tags': ['Machine Learning', 'Deep Learning', 'Algorithms', 'Programming'],
    'InStock': [{
            'Type': 'Paperback',
            'Quantity': 2800
        },
        {
            'Type': 'Hardcover',
            'Quantity': 1250
        }
    ] ,
    'SpecialOfferDiscount': '150'
}, {
    '_id': '20021111',
    'Title': 'Introduction to Database Management',
    'Year': '2002',
    'ISBN': ' 9788176566384',
    'Pages': 342,
    'Tags': ['Database Management', 'DBMS', 'Programming'],
    'InStock': [{
            'Type': 'Paperback',
            'Quantity': 4000
        },
        {
            'Type': 'Hardcover',
            'Quantity': 3450
        }
    ]
}];
db.myBooksCollectionIndex.insert(_idProperties);

/* Creating an Index */
/* Example – Creating an Index in a MongoDB Collection */
db.myBooksCollectionIndex.createIndex({Title : 1});

/* Index Types in MongoDB */
/* Single Field Index */
db.myBooksCollectionIndex.createIndex({Year : 1});

/* Compound Index */
db.myBooksCollectionIndex.createIndex({Title : 1, Year : -1});

/* Multi Key Index */
db.myBooksCollectionIndex.createIndex({"InStock.Type" : 1, "InStock.Quantity" : 1});

/* Text Index */
db.myBooksCollectionIndex.createIndex({Title: "text"});

/* Index Properties */

/* Unique Index */
db.myBooksCollectionIndex.createIndex(
    {ISBN: 1},
    {unique: true}
);

/* Partial Index */
db.myBooksCollectionIndex.createIndex(
    {Title: -1},
    {partialFilterExpression: {Year: "2019"}}
);

/* Sparse Index */
db.myBooksCollectionIndex.createIndex(
    {ISBN: 1},
    {sparse: true}
);

/* TTL Index */
db.myBooksCollectionIndex.createIndex(
    {SpecialOfferDiscount: 1},
    {expireAfterSeconds: 604800}
);

/* Using an Index */
db.myBooksCollectionIndex.createIndex({Title : 1, Year : 1});
db.myBooksCollectionIndex.find().sort({Title : 1, Year : 1}).pretty();

/* Indexes and Collation */

// collation: {
//    locale: <string>,
//    caseLevel: <boolean>,
//    caseFirst: <string>,
//    strength: <int>,
//    numericOrdering: <boolean>,
//    alternate: <string>,
//    maxVariable: <string>,
//    backwards: <boolean>
// }

db.myBooksCollectionIndex.createIndex({Title : 1, Tags: 1}, { collation: { locale: "en_US" } });

/* View Index Information */
db.myBooksCollectionIndex.getIndexes();

/* Deleting an Index */
db.myBooksCollectionIndex.dropIndex({Title:1});

/* Example 2 – Deleting Multiple Index in a MongoDB Collection */
db.myBooksCollectionIndex.dropIndexes({Title:1, Year:1});

/* Example 3 – Deleting Multiple Index in a MongoDB Collection using Array Type Values as Parameter */
db.myBooksCollectionIndex.dropIndexes(["Title_1_Tags_1", "ISBN_1", "SpecialOfferDiscount_1"]);

/* Example 4 – Deleting All Indexes in a MongoDB Collection */
db.myBooksCollectionIndex.dropIndexes();


/* Some Restrictions in MongoDB Index */

// •	In case you don’t require to read the collections very frequently try avoiding Indexing
// •	As MongoDB Index uses Memory Space (RAM), It is recommended that Indexing doesn’t exceed the Memory Limits
// •	If Index exceed the Memory Limits then MongoDB can remove some of the Indexes and which can lead to Performance Issues
// •	Index name should be less than equal to 164 Characters
// •	In MongoDB Collection cannot have Index more than 64
// •	A Compound Index cannot have more than 31 Fields
