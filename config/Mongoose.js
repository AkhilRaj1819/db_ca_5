const mongoose = require('mongoose')

function mongoConnect() {
   mongoose.connect(process.env.MONGO)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
}

module.exports = mongoConnect

