"use strict";

const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const hashResponse = require("@utils/hash-response");
const getPing = require("@services/get-ping");
const getPings = require("@services/get-pings");

/**
 * @swagger
 * /ping:
 *    get:
 *      description: Pings a host and returns the result.
 *      tags: [ping]
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: body
 *          name: (various)
 *          schema:
 *            type: object
 *            required: true
 *          example:
 *            host: 8.8.8.8
 *          description: Host to ping
 *      responses:
 *        '200':
 *          description: Success
 */
router.get(
    "/",
    asyncHandler(async (req, res) => {
        hashResponse(res, req, {
            status: "success",
            data: await getPing(req.body.host),
        });
    })
);

/**
 * @swagger
 * /ping/all:
 *    get:
 *      description: Gets the ping results as specified by user configuration.
 *      tags: [ping]
 *      produces:
 *        - application/json
 *      responses:
 *        '200':
 *          description: Success
 */
router.get(
    "/all",
    asyncHandler(async (req, res) => {
        hashResponse(res, req, {
            status: "success",
            data: await getPings(),
        });
    })
);

module.exports = router;
