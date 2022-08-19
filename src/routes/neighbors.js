"use strict";

const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const hashResponse = require("@utils/hash-response");
const getLldpneighbors = require("@services/get-lldp-neighbors");
/**
 * @swagger
 * /:
 *    get:
 *      description: Gets neighbor information.
 *      tags: [neighbor]
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
            data: await getLldpneighbors(),
        });
    })
);

module.exports = router;
