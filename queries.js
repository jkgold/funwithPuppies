var promise = require('bluebird');

var options = {
// initialization  options
promiseLib: promise
};

var pgp = require ('pg-promise')(options);
var connectionString = 'postgress:local//host:5432/puppies';
var db = pgp(connectionString);


//add query functions

module.exports = {
  getAllPuppies: getAllPuppies,
  getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy,
  updatePuppy: undatePuppy,
  removePuppy: removePuppy
};
