const server=require('./app')
const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
});


// const http=require('http')
// const getCharById=require('./controllers/getCharById')

// http.createServer((req,res)=>{
//   res.setHeader('Access-Control-Allow-Origin', '*');
// if (req.url.includes('/rickandmorty/character')) {
//  const ids=req.url.split('/').at(-1);
//   getCharById(res,+ids)
// }
// })  
// const express = require('express');
// const server = express();
// const PORT = 3001;

// server.listen(PORT, () => {
//    console.log('Server raised in port: ' + PORT);
// });



// .listen(3001,'localhost')


  //   const ids=req.url.split('/').at(-1);
  //   // let characterFilter=character.filter(char=>char.id==Number(id)) array
  //   const characterFilter=character.find((char)=>{
  //     return char.id=== +ids
  //   })// objeto
  //   console.log(characterFilter)

  // return res
  // .writeHead(200,{"Content-type":"application/json"})
  // .end(JSON.stringify(characterFilter))
