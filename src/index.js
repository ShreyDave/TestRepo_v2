const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath));
app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});