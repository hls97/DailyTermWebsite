  var needle = require('needle');
  var webTerms = [];

  var id = "j6rxWE7dx4";
var stream = needle.get("https://api.quizlet.com/2.0/sets/1202340/terms/?client_id=" + 
    id + "&whitespace=1" ); 
  stream.on('readable', function() {
    while(data = this.read()){
      webTerms = data;
    }
  })

  console.log(webTerms);