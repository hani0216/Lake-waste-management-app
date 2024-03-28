const { MongoClient } = require('mongodb');

const { MongoClient } = require('mongodb');

async function testDBConnection() {
    const uri = 'mongodb://localhost:27017'; // L'URI de votre base de données MongoDB
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('nom-de-votre-base-de-donnees'); // Remplacez "nom-de-votre-base-de-donnees" par le nom de votre base de données
        const collection = db.collection('ma-collection'); // Remplacez "ma-collection" par le nom de votre collection
        const result = await collection.findOne({}); // Récupérer un document de votre collection

        console.log('Test result:', result);
        return result;
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        return null;
    } finally {
        await client.close(); // Fermer la connexion à la base de données
    }
}

module.exports = testDBConnection;

async function connectToMongoDB() {
    const uri = 'mongodb://localhost:27017'; 
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('EcoPactDB'); 
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

module.exports = connectToMongoDB;
