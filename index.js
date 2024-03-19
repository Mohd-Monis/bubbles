express = require("express")
app = express();
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("main");
})
app.listen(3000);