const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const { ProjectRoutes, UserRoutes } = require("./api-routes");
const loaders = require("./loaders");
const events = require("./scripts/events");

config();
loaders();
events();

const app = express();
app.use(express.json());
app.use(helmet());

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on port " + process.env.APP_PORT);
    app.use("/users", UserRoutes);
});
