// Marc Nettles 06/27/2022
//
// The intent of this project is to set up my own private
// web server which will host my public website containing
// my coding and webdev projects.
//
//
// Things I want to use: Back-end/Front-end separation, Bootstrap, NodeJS, ExpressJS, EJS, maybe try some reactJS



// Setting up server using ExpressJS
const express = require('express')
const app = express()
const port = 8080


// Need to add this for it to recongize EJS, otherwise it gives an error on page load
app.set('view engine', 'ejs');


// TESTING trying to fix a file relation issue
app.use(express.static(__dirname + "/public"));


//---------------------------------------------------
// Probably useless, but just testing some stuff.
var users = [
    { name: 'ex', email: 'ex@ex.com' },
    { name: 'xe', email: 'xe@xe.com' },
    { name: 'xx', email: 'xx@xx.com' }
];
//---------------------------------------------------



// Handle all GET method requests
//===================================================================================>


// Default, for when people go to example.com/, it's like a home page. 
// req -> stuff being pulled in
// res -> stuff to send back
app.get('/', (req,res) => {

    // res.render will send the page "index", which can be html but in this case I'm using EJS
    // The reason index is in "pages/index" and not "view/pages/index" is because EJS already
    // knows to look in the views folder, so we can leave that out.
    res.render('pages/index', {
        title: "Placeholder Title" // index includes title when it includes the head
    });

});


app.get('/about', (req,res) => {

    res.render('pages/about', {
        title: "About Us"
    });

});


app.get('/projects', (req,res)=> {
    res.render('pages/projects', {
        title: "Personal Projects"
    });
});

app.get('/signup', (req,res)=> {
    res.render('pages/signup', {
        title: "Signup/Login"
    });
});

app.get('/flickr', (req,res)=>{
    res.render('pages/flickr', {
        title:"Flickr Api Access Example"
    });

});

//===================================================================================>



// Handle all POST method requests
//===================================================================================]


// Default, for when people go to example.com/, it's like a home page.
app.post('/', (req,res) => {
    res.send("Hello World! from METHOD=POST")
});
//===================================================================================]



// Handle all PUT method requests
//===================================================================================<


// Default, for when people go to example.com/, it's like a home page.
app.put('/', (req,res) => {
    res.send("Hello World! from METHOD=PUT")
}); 


//===================================================================================<


// Listen for activity on the specified port 
//-- (while this code is running with "node app.js", 
//-- it will continue to listen on this port and route 
//-- the requests according to the code above)
app.listen(port, ()=> {
    console.log(`Connected to port ${port}`)
})
