const mongoose = require('mongoose');
const initData = require("./sampleData.js");
const Service = require("../models/Service.js");

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//         process.exit(1);
//     }
// };

const MONGO_URL = "mongodb://127.0.0.1:27017/homeService";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB = async () => {
    await Service.deleteMany({});
    console.log("deleted");
    await Service.insertMany(initData.data);
    console.log("data added");
}

initDB();

