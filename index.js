//console.log('Hello World')
const express = require('express');
const app = express();
//require is a key word that helps us get the packages we finna use
//we want to create a server where browsers can connect
app.listen(202, function(){
console.log('listening on 1000')
})
/*the browser reads by getting. app=express as earlier declared
app.get(path, callback)*/
app.get('/', function(req,res){
    res.send('Hello World')
}
)
