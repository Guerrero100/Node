const express = require('express');
const servidor = express();
const port = 3001;

servidor.get('/', (req, res)=>{
    res.send(`Proyecto ${port}`);
    

})

servidor.listen(port, ()=>{
    console.log('Proyecto Nuevo')
    
});