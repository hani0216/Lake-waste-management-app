const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())


app.listen(3001,()=>{
  console.log("serve is running")
})

mongoose.connect('mongodb://localhost:27017/EcoPactDB')
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));
