var pgp = require('pg-promise')(/*options*/);
var db = pgp('postgres://darshan:block8@localhost:5432/testdb');

db.one('SELECT * from test where age=$1', 21)
  .then(function (data) {
    console.log('DATA:', data);
  })
  .catch(function (error) {
    console.log('ERROR:', error);
  });
