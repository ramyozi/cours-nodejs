require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

const clientOptions = {
    serverApi: { version: '1', strict: true, deprecationErrors: true }
  };
async function run() {
  try {
    console.log("Connecting to MongoDB...");
    console.log('uri' + uri);

    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await mongoose.disconnect();
  }
}

run().catch(console.dir);
