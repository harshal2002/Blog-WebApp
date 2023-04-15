import mongoose from 'mongoose';

const Connection = async (username, password) => {
     const URL = `mongodb://${username}:${password}@ac-rlchuhp-shard-00-00.d4ltk3e.mongodb.net:27017,ac-rlchuhp-shard-00-01.d4ltk3e.mongodb.net:27017,ac-rlchuhp-shard-00-02.d4ltk3e.mongodb.net:27017/?ssl=true&replicaSet=atlas-jj8hdi-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
        
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;