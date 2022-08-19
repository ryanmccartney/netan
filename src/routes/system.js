"use strict";

const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const hashResponse = require("@utils/hash-response");
const getRoutes = require("@services/get-routes");
const getConfig = require("@services/get-config");
const setConfig = require("@services/set-config");

/**
 * @swagger
 * /hello:
 *    get:
 *      description: API says hello.
 *      tags: [system]
 *      produces:
 *        - application/json
 *      responses:
 *        '200':
 *          description: Success
 */
router.get(
    "/hello",
    asyncHandler(async (req, res) => {
        hashResponse(res, req, {
            status: "success",
            data: { message: "Hello" },
        });
    })
);

/**
 * @swagger
 * /routes:
 *    get:
 *      description: Get system routing table.
 *      tags: [system]
 *      produces:
 *        - application/json
 *      responses:
 *        '200':
 *          description: Success
 */
router.get(
    "/routes",
    asyncHandler(async (req, res) => {
        hashResponse(res, req, {
            status: "success",
            data: await getRoutes(),
        });
    })
);

/**
 * @swagger
 * /config:
 *    get:
 *      description: Gets the system config with variables rendered
 *      tags: [system]
 *      produces:
 *        - application/json
 *      responses:
 *        '200':
 *          description: Success
 */
router.get(
    "/config",
    asyncHandler(async (req, res) => {
        hashResponse(res, req, {
            status: "success",
            data: await getConfig(),
        });
    })
);

/**
 * @swagger
 * /config/raw:
 *    get:
 *      description: Gets the system config with variables NOT rendered
 *      tags: [system]
 *      produces:
 *        - application/json
 *      responses:
 *        '200':
 *          description: Success
 */
router.get(
    "/config/raw",
    asyncHandler(async (req, res) => {
        hashResponse(res, req, {
            status: "success",
            data: await getConfig(false),
        });
    })
);

/**
 * @swagger
 * /config:
 *    put:
 *      description: Sets the system config.
 *      tags: [system]
 *      produces:
 *        - application/json
 *      responses:
 *        '200':
 *          description: Success
 */
router.put(
    "/config",
    asyncHandler(async (req, res) => {
        const status = await setConfig(req.body);
        hashResponse(res, req, {
            status: "success",
            data: status,
        });
    })
);

module.exports = router;
