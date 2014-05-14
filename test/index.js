var expect = require('chai').expect;

var level;
var leveldb;
var DB;
var db;
var doge;

describe("DB", function () {

  before(function () {
    level = require('level-test')();
    leveldb = level('db');
  });
    
  it("should load DB", function () {
    DB = require('../');
    expect(DB).to.exist;
  });

  describe("#db", function () {

    it("should create db", function () {
      db = new DB(leveldb)
      expect(db).to.exist;
      expect(db.get).to.exist;
      expect(db.put).to.exist;
      expect(db.del).to.exist;
      expect(db.methods).to.exist;
      expect(Object.keys(db.methods).length).to.equal(3);
    });

    it("should put value at id", function (done) {
      doge = {
        id: "doge",
        such: "awesome",
        very: "beautiful",
        wow: true,
      };

      db.put(doge, function (err, doged) {
        expect(err).to.not.exist;
        expect(doged).to.equal(doge);
        
        done();
      });
    });

    it("should get value at id", function (done) {
      db.get("doge", function (err, doged) {
        expect(err).to.not.exist;
        expect(doge).to.deep.equal(doged);

        done();
      });
    });

    it("should delete value at id", function (done) {
      db.del("doge", function (err) {
        expect(err).to.not.exist;

        db.get("doge", function (err, doged) {
          expect(err).to.exist;
          expect(doged).to.not.exist;

          done();
        });
      });
    });
  });
});