
// contains blockchain meta data
// LastBlock = new Mongo.Collection('lastblock', {connection: null});
// new PersistentMinimongo(LastBlock);
// if(!LastBlock.findOne('latest'))
//     LastBlock.insert({
//         _id: 'latest',
//         blockNumber: 0,
//         gasPrice: 0,
//         checkpoint: 0
//     });

// Blockchain = new Mongo.Collection('blockchain', {connection: null});

// Contains the accounts
Tabs = new Mongo.Collection('tabs', {connection: null});
new PersistentMinimongo(Tabs);


// Contains the accounts
DoogleLastVisitedPages = new Mongo.Collection('doogle-last-visted-pages', {connection: null});
new PersistentMinimongo(DoogleLastVisitedPages);

DoogleHistory = new Mongo.Collection('doogle-history', {connection: null});
new PersistentMinimongo(DoogleHistory);