const express = require("express")
const path = require("path")
const bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/form',function(req,res){
    res.sendFile(path.join(__dirname+'/validationForm.html'));
});

app.post('/validation', function (req, res){
    var bracket=req.body.bracket;
    function check(my_string){
        var brackets = ['()', '{}', '[]'] 
        for (let x in my_string){
            for (let x in brackets){
                for (let i in brackets){
                    var my_string = my_string.replace(brackets[i], '')
                }
            }
        return !(my_string)
    }
    }
        if (check(bracket)){
            res.send("True") 
        }
        else{
            res.send("False")
        }
})

app.listen(5000,()=>{
    console.log("server is listening 5000.........")
});
