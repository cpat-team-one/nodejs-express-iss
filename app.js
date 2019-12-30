const app = require('express')()

app.get('/', (req, res) => {
  res.send("I'm Pickle Rick!");
});
 
module.exports.app = app;
