require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

// lets solve cors policy 
const corsOptions = {
    origin:["https://www.sistecrsih.in", "http://localhost:3000"],
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}

const authRoute = require('./router/auth-router');
const contactRoute = require("./router/contact-router");
const teamRoute = require('./router/teamRouter');
const adminRoute = require('./router/admin-router'); 
const emailRoute = require("./router/email-router");
const problemStatementRouter = require('./router/problemStatementRouter');

app.use(cors(corsOptions)); 

app.use(express.json());//express middleware it will make server handle json files

app.use("/api/auth",authRoute); //admin login+registration
app.use("/api/form",contactRoute); //contact form submission
app.use('/api/team', teamRoute); //team registration form submission
app.use('/api/admin',adminRoute);//for getting all admin users, 
app.use("/api/email", emailRoute); // for sending replies
app.use('/api', problemStatementRouter);
app.use(express.static('uploads'))

// ✅ test route
app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Render server is working perfectly 🚀",
  });
});

app.use(errorMiddleware);


const PORT = process.env.PORT || 5000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port: ${PORT}`);
    });
});
