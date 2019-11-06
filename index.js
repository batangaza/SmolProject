//console.log('Hello World')
const express = require('express');
const app = express();
//require is a key word that helps us get the packages we finna use
//we want to create a server where browsers can connect
app.listen(3000, ()=>{
console.log('listening on 3000')
})
/*the browser reads by getting. app=express as earlier declared
app.get(path, callback)*/
app.get('/',(req,res)=>{
    res.send('Hello World')
}
)
app.get('/about',(req,res)=>{
    res.send('This is an about us page')
}
)

