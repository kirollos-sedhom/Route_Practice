const myhttp = require("http")

const server = myhttp.createServer(
    (req,res)=>{

    }
)

server.listen(3000, ()=> {
    console.log("server is running :D");
    
})