const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 2;
const TodoSchema = new mongoose.Schema({
    password: String,
    text: String,
    status: { type: Boolean, default: false },
  });

TodoSchema.methods.checkpassword = async function (plainpassword){
    const matched = await bcrypt.compare(plainPassword, this.password); // this method takes hash and the plain password to match according to the hash
    return matched;
}

TodoSchema.pre("save", async function(next)
{
    this.password = await bcrypt.hash(this.password, saltRounds);

}
);

const TodoModel = mongoose.model("Todos", TodoSchema);
module.exports = TodoModel;