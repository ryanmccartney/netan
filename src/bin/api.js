const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const favicon = require("serve-favicon");
const helmet = require("helmet");

// import environment variables from .env file
require("dotenv").config();

// get environment
const nodeEnv = process.env.NODE_ENV || "production";

// load routes
const documentation = require("@middleware/documentation");
const interfacesRouter = require("@routes/interfaces");
const neighborsRouter = require("@routes/neighbors");
const systemRouter = require("@routes/system");
const linksRouter = require("@routes/links");
const pingRouter = require("@routes/ping");

const api = express();

api.set("json spaces", 2);
api.use(cors());
api.use(
    helmet.contentSecurityPolicy({
        reportOnly: true,
        directives: {
            upgradeInsecureRequests: null,
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "https:", "http:", "'unsafe-inline'"],
            defaultSrc: ["'self'"],
            "base-uri": ["'self'"],
            "block-all-mixed-content": [],
            "font-src": ["'self'", "https:", "http:", "data:"],
            "frame-ancestors": ["'self'"],
            "img-src": ["'self'", "data:", "https:"],
            "object-src": ["'none'"],
        },
    })
);

api.use(favicon(path.join(__dirname, "..", "client", "public", "icons", "favicon.ico")));
api.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "./data",
    })
);

api.use(express.json());
api.use(express.urlencoded({ extended: false }));

api.use("/documentation", documentation);
api.use("/api/interfaces", interfacesRouter);
api.use("/api/neighbors", neighborsRouter);
api.use("/api/system", systemRouter);
api.use("/api/links", linksRouter);
api.use("/api/ping", pingRouter);

// Redirect /api to /documentation
api.use("/api", function (req, res, next) {
    res.redirect("/documentation");
});

// Redirect /api to /documentation
api.use("*", function (req, res, next) {
    res.redirect("/api/system/hello");
});

if (nodeEnv === "production") {
    const root = require("path").join(__dirname, "..", "client", "build");

    // production: include react build static client files
    api.use(express.static(root));

    // production: serve react frontend for netan on the default route
    api.get("*", (req, res) => {
        res.sendFile("index.html", { root });
    });
} else {
    // development: serve files in the public folder
    api.use(express.static(path.join(__dirname, "..", "client", "public")));
}

// catch 404 and forward to error handler
api.use(function (req, res, next) {
    const err = new Error("File Not Found");
    err.status = 404;
    next(err);
});

// error handler
api.use(function (error, req, res, next) {
    res.status(error.status || 500).json({
        status: error.status,
        message: error.message,
        stack: nodeEnv !== "production" ? error?.stack?.split("\n") : undefined,
    });
});

module.exports = api;
