var server = require('./server');
var ds = server.dataSources.db;
var lbTables = ['Billing', 'category','Company_details', 'Services', 'Users'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Looback tables [' + lbTables + '] created in ', ds.adapter.name);
  ds.disconnect();
});