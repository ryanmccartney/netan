"use strict";

const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const hashResponse = require("@utils/hash-response");
const getInterfaces = require("@services/get-interfaces");
const setInterface = require("@services/set-interface");
const getCurrentInterface = require("@services/get-interface-current");
/**
 * @swagger
 * /:
 *    get:
 *      description: Gets information about interfaces.
 *      tags: [interfaces]
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
            data: await getInterfaces(),
        });
    })
);

/**
 * @swagger
 * /:
 *    put:
 *      description: Sets interface in config file.
 *      tags: [interfaces]
 *      produces:
 *        - application/json
 *      responses:
 *        '200':
 *          description: Success
 */
router.put(
    "/",
    asyncHandler(async (req, res) => {
        const status = await setInterface(req.body?.interface);
        hashResponse(res, req, {
            status: status ? "success" : "failure",
            data: status,
        });
    })
);

/**
 * @swagger
 * /current:
 *    get:
 *      description: Gets information about the current selected interface.
 *      tags: [interfaces]
 *      produces:
 *        - application/json
 *      responses:
 *        '200':
 *          description: Success
 */
router.get(
    "/current",
    asyncHandler(async (req, res) => {
        hashResponse(res, req, {
            status: "success",
            data: await getCurrentInterface(),
        });
    })
);
module.exports = router;
