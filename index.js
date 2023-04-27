const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const catagories = require("./data/catagories.json")
app.use(cors());

app.get('/', (req, res) =>{
    res.send("The News Dragon Server is running")
})
app.get('/catagories', (req, res) =>{
    res.send(catagories)
}); 


app.listen(port,()=> {
    console.log("The News Dragon Server is listening on");
})
