const mongoose = require("mongoose");
async function connectdb(){
await mongoose.connect("mongodb+srv://aligohar:LUkdSqHFqxw3JbTO@cluster0.yll3xil.mongodb.net/Todolist?retryWrites=true&w=majority")
.then(
    ()=> {
        console.log("db connected")
    }
).catch((e)=> console.log(e));
}

module.exports = connectdb;