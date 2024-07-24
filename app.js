"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var models_1 = require("./models");
var controllers_1 = require("./controllers");
// configures dotenv to work in your application
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.get("/", function (request, response) {
    response.status(200).send("Hello World");
});
(0, controllers_1.createUsers)();
(0, controllers_1.createProjects)();
(0, controllers_1.createUserProjects)();
models_1.default.sequelize.sync().then(function () {
    app
        .listen(port, function () {
        console.log("Your application running at http://localhost:".concat(port));
    })
        .on("error", function (error) {
        // gracefully handle error
        throw new Error(error.message);
    });
});
