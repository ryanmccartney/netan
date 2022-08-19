const express = require("express");
const documentation = express.Router();

const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const host = process.env.NETAN_HOST || "localhost";
const port = process.env.NETAN_PORT || "3101";
const url = `http://${host}:${port}/api/`;

const options = {
    customCssUrl: "/css/documentation.css",
};

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Netan API",
            version: "0.1.0",
            description: "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://github.com/ryanmccartney/netan/blob/main/LICENSE",
            },
            contact: {
                name: "Ryan McCartney",
                url: "https://github.com/ryanmccartney/netan",
                email: "ryan@mccartney.info",
            },
        },
        servers: [
            {
                url: url,
            },
        ],
    },
    apis: ["./routes/*.js", "./modules/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
documentation.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));

module.exports = documentation;
