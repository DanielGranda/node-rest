//=============
//Puerto
//=============
process.env.PORT = process.env.PORT || 3000;

//=============
//Entorno
//=============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=============
//Base de datos
//=============
let urleDB;
if (process.env.NODE_ENV === 'dev') {
    urleDB = 'mongodb://localhost:27017/cafe';
} else {
    urleDB = 'mongodb://strider:UWFOSbqoLOyAOpmZ@cluster0-shard-00-00-reak0.mongodb.net:27017,cluster0-shard-00-01-reak0.mongodb.net:27017,cluster0-shard-00-02-reak0.mongodb.net:27017/cafe?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin'
}


process.env.URLDB = urleDB;