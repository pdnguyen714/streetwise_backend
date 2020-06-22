'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('pins', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    longitude: 'number',
    latitude: 'number',
    title: 'string',
    comment: 'string',
    link: 'string'
  })
};

exports.down = function(db) {
  return db.dropTable('pins')
}

exports._meta = {
  "version": 1
};
