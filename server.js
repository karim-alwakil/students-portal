const { response } = require('express');
const express = require('express');
const router =express.Router();
const path=require('path');
const bodyParser =require('body-parser');
const cors =require('cors');
const app =express();
const db= require('./database');
const client = require('pg/lib/native/client');
const { stat } = require('fs');
app.use(express.json());
app.use(express.static('pulic'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
db.connect();
app.listen(3000,async function(req,res){
console.log('[ok]=HTTP Web Server Running on port ${3000}');})


app.get('/', async (req,res)=> {        
    res.sendfile(path.join('/Register.html'))    
    res.send();
    })
app.get('/student',async(req,res)=>{
    res.sendfile(path.join('/search.html'));
    res.send();

})

app.post('/register', async (req,res)=> {        
    const ID=req.body.ID
    const first_name= req.body.first_name
    const last_name=req.body.last_name
    const phone_code=req.body.phone_code
    const phone_number=req.body.phone_number
    const country_code=req.body.country_code
    const country_name=req.body.country_name
    const state =req.body.state
    const state_name=req.body.state_name
    const city_name=req.body.city_name
    const zip_code=req.body.zip_code
    const adress_line1=req.body.adress_line1
    const adress_line2=req.body.adress_line2
    const date_of_birth=req.body.date_of_birth
    const faculty=req.body.faculty
    const major=req.body.major
    const email = concat(first_name,'.',last_name,'@student.giu-uni.de');
    var values = [ID,first_name,last_name,phone_code,phone_number,country_code,country_name,state,state_name,city_name,zip_code,adress_line1,adress_line2,date_of_birth,faculty,major,email]
    var insert_query = 'insert into student(ID,fist_name,last_name,phone_code,phone_number,country_code,country_name,state,state_name,city_name,zip_code,adress_line1,adress_line2,date_of_birth,faculty,major,email)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)'


  client.query(insert_query,values,(err,res)=>{
    if(!err){
        console.log(res.row);

    }else{
        console.log(err.message);
    }
    })
})