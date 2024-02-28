const path = require('path');
//assuming app is express Object.
app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname,'about.html')); //__dirname : Ritorna la cartella del progetto
 });
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});