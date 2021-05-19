const mongoose = require("mongoose");

const connect = () =>
  mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );

module.exports = connect;
