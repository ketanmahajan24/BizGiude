const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require("path");
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Set public folder for static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));
// Set EJS as the template engine

// Set views folder and EJS as template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Database Connection
main()
.then(()=>{console.log("Connect to DB ");
})
.catch((err)=>{
    console.log(err);
});
    async function main() {
        await mongoose.connect(process.env.MONGO_URI);
    }
 
// Default Route
app.get('/', (req, res) => {
  res.render("landing/home.ejs")
    // res.send('Welcome to BizzGuide API');
});

// Default Route
app.get('/demo', (req, res) => {
    res.render("landing/demo.ejs")
      // res.send('Welcome to BizzGuide API');
  });

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
