const express = require('express');
// const ProductData = require('./src/model/Productdata');
const BookData = require('./src/model/Bookdata');
const AuthorData = require('./src/model/Authordata');
const UserData = require('./src/model/Userdata');

// node express should enable cors, then only data will get shared to the angular server
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken');
const { request } = require('express');
var app = new express();
app.use(cors());
app.use(express.json());

app.get('/books',function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
  BookData.find()
  .then(function(books){
    res.send(books);
  });

});
app.get('/authors',function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
  AuthorData.find()
  .then(function(authors){
    res.send(authors);
  });
  

});

// username='admin';
// password='1234';


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

app.post('/addb',verifyToken,function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
   
    console.log(req.body);
   
    var book = {       
        
        title : req.body.book.title,
        author : req.body.book.author,
        genre : req.body.book.genre,
        image : req.body.book.image,
        about : req.body.book.about
        
        
   }       
   var book = new BookData(book);
   book.save();
});
app.post('/adda',verifyToken,function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
   
    console.log(req.body);
   
    var author = {       
        
        
        author : req.body.author.author,
        born : req.body.author.born,
        image : req.body.author.image,
        about : req.body.author.about
        
        
   }       
   var author = new AuthorData(author);
   author.save();
});
app.post('/adduser',function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
   
    console.log(req.body);
   
    var user = {       
        
        
      usrname : req.body.user.usrname,
      number : req.body.user.number,
      email : req.body.user.email,
      password : req.body.user.password
        
        
   }       
   var user = new UserData(user);
   user.save();
});
// app.post('/adduser', function(req,res){
//   res.header("Access-Control-Allow-Origin","*")
//   res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
//   console.log(req.body);
//   var newUser = {
//     usrname : request.body.newUser.usrname,
//     number : request.body.newUser.number,
//     email : request.body.newUser.email,
//     password : request.body.newUser.password
//   }
//   var newUser = new Userdata(newUser);
//   newUser.save();

// });
// app.get('/products',function(req,res){
    
//     ProductData.find()
//                 .then(function(products){
//                     res.send(products);
//                 });
// });
// app.get('/:id',  (req, res) => {
  
//   const id = req.params.id;
//     ProductData.findOne({"_id":id})
//     .then((product)=>{
//         res.send(product);
//     });
// })

app.post('/login', (req, res) => {

    var usr=req.body.usr;
    var pwd=req.body.pwd;
    
    UserData.findOne({usrname:usr})
    .then(function(user){
      if ( user.password != pwd) {
        res.status(401).send('Invalid Password')
      }
      else{
        let payload ={subject:usr+pwd}
        let token = jwt.sign(payload,'secretKey')
        res.status(200).send({token})
      }

    })
   
    })

  //   app.put('/update',(req,res)=>{
  //     console.log(req.body)
  //     id=req.body._id,
  //     productId= req.body.productId,
  //     productName = req.body.productName,
  //     productCode = req.body.productCode,
  //     releaseDate = req.body.releaseDate,
  //     description = req.body.description,
  //     price = req.body.price,
  //     starRating = req.body.starRating,
  //     imageUrl = req.body.imageUrl
  //    ProductData.findByIdAndUpdate({"_id":id},
  //                                 {$set:{"productId":productId,
  //                                 "productName":productName,
  //                                 "productCode":productCode,
  //                                 "releaseDate":releaseDate,
  //                                 "description":description,
  //                                 "price":price,
  //                                 "starRating":starRating,
  //                                 "imageUrl":imageUrl}})
  //    .then(function(){
  //        res.send();
  //    })
  //  })
   
// app.delete('/remove/:id',(req,res)=>{
   
//      id = req.params.id;
//      ProductData.findByIdAndDelete({"_id":id})
//      .then(()=>{
//          console.log('success')
//          res.send();
//      })
//    })
     

app.listen(3000, function(){
    console.log('listening to port 3000');
});

