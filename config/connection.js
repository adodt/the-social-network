const { connect, connection } = require("mongoose");

//Connect mongoose to local DB connection
const connectionString =
    process.env.MONGODB_URI || "mongodb://127.0.0.127017/studentsDB";

    connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    module.exports = connection;