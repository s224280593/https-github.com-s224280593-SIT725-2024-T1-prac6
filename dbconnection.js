const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ThoufiyaShaik:24112003@cluster0.vnmbusa.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function connect() {
    await client.connect();
}

module.exports = client;