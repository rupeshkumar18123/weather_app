const express = require("express");
const cors = require("cors");
const app =express();

app.use(cors({
    origin: "*", // Allows requests from any origin
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    
}));
app.use(express.json());

const weatherRoute = require("./src/routes/weatherRoutes");

// Enable CORS for all origins
// app.use(
//     cors({
//       origin: "*",  // Allows requests from any origin
//       methods: "GET, POST, PUT, DELETE, OPTIONS",
//       allowedHeaders: "Content-Type, Authorization",
//     })
//   );
  
  // Handle preflight requests
  // app.options("*", cors());
app.get("/",(req,resp)=>{
resp.send("this is weather app server page");
});
app.use("/api",weatherRoute);




// app.listen(3000,()=>{
// console.log("server started at port number 3000");
// });

// Set up server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

module.exports = app;