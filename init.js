const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
 .then(() => {
   console.log("connection successful");
 })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsup');
}

let allChats = [
{
  from: "Adam",
  to: "eve",
  msg: "hello, how are you?",
  created_at: new Date(),
},

{
  from: "dessy",
  to: "casey",
  msg: "teach me js callbacks",
  created_at: new Date(),
},

{
  from: "fiya",
  to: "gunn",
  msg: "good luck for your journey ",
  created_at: new Date(),
},

{
  from: "hessy",
  to: "jiu",
  msg: "all is well",
  created_at: new Date(),
},

];

Chat.insertMany(allChats);