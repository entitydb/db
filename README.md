# db

[![server tests](https://travis-ci.org/entitydb/db.png)](https://travis-ci.org/entitydb/db)
[![test coverage](https://coveralls.io/repos/entitydb/db/badge.png)](https://coveralls.io/r/entitydb/db)
[![npm version](https://badge.fury.io/js/entitydb-db.png)](https://npmjs.org/package/entitydb-db)
[![dependency status](https://david-dm.org/entitydb/db.png)](https://david-dm.org/entitydb/db)
[![devDependency status](https://david-dm.org/entitydb/db/dev-status.png)](https://david-dm.org/entitydb/db#info=devDependencies)

[![browser tests](https://ci.testling.com/entitydb/db.png)](https://ci.testling.com/entitydb/db)

## how to

### install

```
npm install --save entitydb-db
```

### use

```
var level = require('level');
var db = level('./db');
var DB = require('db');
var dbDB = DB(db);
```

#### dbDB.get(id, callback)

#### dbDB.put(db, callback)

#### dbDB.del(id, callback)

### develop

```
git clone https://github.com/entitydb/db
npm install
```

hack away!

### test

```
npm test
```

## license

AGPLv3