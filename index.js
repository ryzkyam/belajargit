const { log } = require("console");
const http = require("http");
const { type } = require("os");
const { start } = require("repl");
const host = "127.0.0.1";
const port = 3002;
// request adalah data yang masuk dari user
// respons adalah data yang keluar dari sistem
const server = http.createServer(function (request, respons) {
  statusCode = 203;
  respons.end(
    "ini adalah respons node js dengan seratus 203 <h1>RESPONS SERVERS</h1>"
  );
});

server.listen(port, host, function () {
  console.log(`server menyala ${host}:${port}  `);
});

//loop
const nama = 'reza rizki ramadhan'
for(let i = 0; i < 10; i++) {
  console.log(nama)
};

// object dan method pada javascript
var car = 'livina';

//property
var car ={

  model:'livina',
  type:'ciat',
  color: 'white',

// method
down: function(){
  console,log("blabalbalbal")
}, 

mulai: function(){
  console.log("untuk memulai ")
},

drive: function(){
  console.log("valvalvalva")
},
};

// 



