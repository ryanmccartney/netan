"use strict";

const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const hashResponse = require("@utils/hash-response");
const getLinks = require("@services/get-links");
const getLink = require("@services/get-link");

/**
 * @swagger
 * /links:
 *    get:
 *      description: Gets information about active links.
 *      tags: [links]
 *      produces:
 *        - application/json
 *      responses:
 *        '200':
 *          description: Success
 */
router.get(
    "/",
    asyncHandler(async (req, res) => {
        hashResponse(res, req, {
            status: "success",
            data: await getLinks(),
        });
    })
);

/**
 * @swagger
 * /links/{interface}:
 *    get:
 *      description: Gets information about individual interface
 *      tags: [links]
 *      produces:
 *        - application/json
 *      parameters:
 *       - in: path
 *         name: interface
 *         schema:
 *           type: string
 *         required: true
 *         description: The interface name. For example "wlan0"
 *      responses:
 *        '200':
 *          description: Success
 */
router.get(
    "/:interface",
    asyncHandler(async (req, res) => {
        hashResponse(res, req, {
            status: "success",
            data: await getLink(req.params?.interface),
        });
    })
);

module.exports = router;
