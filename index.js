var Entity = require('entitydb-entity');

var uuid = require('node-uuid');

var dbOptions = {
  valueEncoding: 'json',
};

var DB = Entity.extend({
  type: "DB",
  constructor: function (db) {
    if (!db) {
      throw new Error("DB Entity requires a levelup db!");
    }
    this.db = db;
  },
  properties: {},
  methods: {
    get: {
      type: 'async',
      fn: function (id, callback) {
        this.db.get(id, dbOptions, callback);
      },
      input: {
        id: {
          type: 'string',
          required: true,
        },
      },
    },
    put: {
      type: 'async',
      fn: function (object, callback) {
        object = object || {};
        var id = object.id = object.id || uuid();

        this.db.put(id, object, dbOptions, function (err) {
          callback(err, object);
        });
      },
      input: {
        object: {
          id: {
            type: 'any',
          },
        },
      },
    },
    del: {
      type: 'async',
      fn: function (id, callback) {
        this.db.del(id, dbOptions, callback);
      },
      input: {
        id: {
          type: 'string',
          required: true,
        },
      },
    },
  },
  config: {},
});

module.exports = DB;