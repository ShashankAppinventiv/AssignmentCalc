const express=require("express")
const app=express();
const port=3000
app.use(express.json())

//Working Check

app.get('/',(req,res)=>{

    res.send("Server responding \n Please make some changes to URL to perform operations")
    res.end()
})



//Addition function

app.get('/addition/:a/:b',(req,res)=>{
    res.send("Addition of two number is "+(Number(req.params.a)+Number(req.params.b)))
    res.end()
})

app.post('/addition',(req,res)=>{
    console.log(req.body.a)
    res.send(`Addition of two number ${req.body.a+req.body.b}`)
})

//subtract function

app.get('/subtraction/:a/:b',(req,res)=>{
    res.send("subtraction of two number is "+(Number(req.params.a)-Number(req.params.b)))
    res.end()
})

app.post('/subtraction',(req,res)=>{
        res.send(`subtraction of two number ${req.body.a-req.body.b}`)
})

//multiplication function

app.get('/multiplication/:a/:b',(req,res)=>{
    res.send("multiplication of two number is "+(Number(req.params.a)*Number(req.params.b)))
    res.end()
})

app.post('/multiplication',(req,res)=>{
    res.send(`multiplication of two number ${req.body.a*req.body.b}`)
})

//division function

app.get('/division/:a/:b',(req,res)=>{
    res.send("division of two number is "+(Number(req.params.a)/Number(req.params.b)))
    res.end()
})

app.post('/division',(req,res)=>{
    res.send(`division of two number ${req.body.a/req.body.b}`)
})

//Power

app.get('/power/:a/:b',(req,res)=>{
    let a=Number(req.params.a);
    let b=Number(req.params.b);
    res.send(`power of ${a} by ${Number(req.params.b)} is ${Math.pow(a,b)}`)
    res.end()
})

app.post('/power',(req,res)=>{
    let a=req.body.a
    let b=req.body.b
    res.send(`power of ${a} by ${b} is ${Math.pow(a,b)}`)
    res.end()
})


//log
app.get('/log/:a/:b',(req,res)=>{
    let a=Number(req.params.a);
    res.send(`Log of ${a} is ${Math.log(a)}`)
    res.end()
})

app.post('/log',(req,res)=>{
    let a=req.body.a
    res.send(`Log of ${a} is ${Math.log(a)}`)
    res.end()
})


//sqrt

app.get('/sqrt/:a/:b',(req,res)=>{
    let a=Number(req.params.a);
    res.send(`sqrt of ${a} is ${Math.sqrt(a)}`)
    res.end()
})

app.post('/sqrt',(req,res)=>{
    let a=req.body.a
    res.send(`sqrt of ${a} is ${Math.sqrt(a)}`)
    res.end()
})


//Listener Function

app.listen(port,(error)=>{
    if(!error){
        console.log("Working in listener")
    }else{
        console.log("Not Working")
    }
})