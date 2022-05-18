const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send({
        message: "REST API ayakta..."
    });
});

app.listen(5001, () => {
    console.log("5001 portu üzerinden çalışıyor.");
});
