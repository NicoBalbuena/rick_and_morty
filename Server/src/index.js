const http=require('http');
const data=require('./utils/data')

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if(req.url.includes('/rickandmorty/')){
        const id = req.url.split('/').at(-1);
        
        const characterFinded=data.find((character)=>{
            return character.id === +id
        })
        return res
        .writeHead(200,{"Content-type": "application/json"})
        .end(JSON.stringify(characterFinded)) //convierto el objeto en js,sino no viaja la info

    }
})
.listen(3001)