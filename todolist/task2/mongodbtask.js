db.tasks.insert({name: 'addtodo', completed: 'true', addedAt: ISODate("2017-07-13T21:00:00Z")});

db.tasks.insert({name: 'addtodo', completed: 'true', addedAt: ISODate("2017-07-13T22:00:00Z")});

db.tasks.insert({name: 'edittodo', completed: 'true', addedAt: ISODate("2017-07-13T22:10:00Z")});

db.tasks.insert({name: 'deletetodo', completed: 'true', addedAt: ISODate("2017-07-13T22:20:00Z")});

db.tasks.insert({name: 'gettodos', completed: 'true', addedAt: ISODate("2017-07-13T22:30:00Z")});


db.tasks.find();

db.tasks.find( { name: 'addtodo'});

db.tasks.find( { _id: ObjectId("596872e8889d98abbda18e6a") } );

db.tasks.updateOne(  { _id: ObjectId("596872e8889d98abbda18e6a") }, { $set: { completed:"false"}} );

db.tasks.deleteOne( { _id: ObjectId("596871d1889d98abbda18e69") } );
