
const express = require("express");
const app = express();
const cors = require('cors') ;
app.use(cors())
    
require("./server/config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMySportRoutes = require("./server/routes/sport.routes");
AllMySportRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));