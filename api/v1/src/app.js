const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const {UserRoutes, CourseRoutes} = require("./api-routes");
const loaders = require("./loaders");
const events = require("./scripts/events");
var cors = require('cors')

config();
loaders();
events();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors())

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on port " + process.env.APP_PORT);
    app.use(`${process.env.API_ROUTE_PREFIX}users`, UserRoutes);
    app.use(`${process.env.API_ROUTE_PREFIX}courses`, CourseRoutes);
});
