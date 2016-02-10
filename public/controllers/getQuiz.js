
module.exports = function(req, res){
  var set_ID = getID();
  var needle = require('needle');

  console.log(set_ID);
      needle.get("https://api.quizlet.com/2.0/sets/" + set_ID + "/terms/?client_id=j6rxWE7dx4&whitespace=1", function(error, resp){
        console.log("Using needle");

        //check that get request returns proper set of terms
        if(!error && resp.statusCode == 200){
          console.log("success");
          res.send(resp.body);
        }

        else{
          console.log(resp.body.error + " error");
          res.send('error');
        }

      });
}

//random id to get random set from Quizlet API
function getID(){
  return Math.floor(Math.random() * (20000000 - 1000000)) + 1000000;
}