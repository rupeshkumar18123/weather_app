const express = require("express");
const cors = require("cors");
const app =express();
app.use(express.json());
app.use(cors());
const weatherRoute = require("./src/routes/weatherRoutes");

app.get("/",(req,resp)=>{
resp.send("this is weather app server page");
});
app.use("/api",weatherRoute);

app.listen(3000,()=>{
console.log("server started at port number 3000");
});

// Set up server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// module.exports = app;