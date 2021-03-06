'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todo_app');
var db = _mongoose2.default.connection;

function connectMongoose() {
  return new Promise(function (resolve, reject) {
    db.on('error', function () {
      reject(Error('connection error'));
    });
    db.once('open', function () {
      resolve('we\'re connected!');
    });
  });
}

exports.default = connectMongoose;