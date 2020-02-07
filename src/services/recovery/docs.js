/**
 * @api {post} /recovery Password Reset
 * @apiName PostRecovery
 * @apiGroup Recovery
 *
* @apiHeader {String} Content-Type Data Type.
* @apiHeaderExample {json} Header-Example:
      { "Content-Type", "application/json" }
*
*
* @apiParamExample {json} Request-Example:
* {
      "email": "test@gmail.com",
      "url": "https://easy-expense-fe.herokuapp.com"
  }
*
* @apiSuccess {Boolean} sucess Operation result.
* @apiSuccess {json} data Response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 201 Created
*     {
          "sucess": true,
          "data": {
              "message": "Recovery email has been sent, please check your indox."
          }
      }
*
* @apiError BadRequest Validation failed.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
          "name": "NotFound",
          "message": "User does not exist",
          "code": 404,
          "className": "not-found",
          "errors": {}
      }
*/

/**
  * @api {get} /recovery/:token Validate recovery token
  * @apiName GetToken
  * @apiGroup Recovery
  * 
  * @apiHeader {String} Content-Type Data Type.
  * @apiHeaderExample {json} Header-Example:
        { "Content-Type", "application/json" }
  *
  *
  * @apiParam {String} token Recovery token.
  *
  * @apiSuccess {Boolean} sucess Operation result.
  * @apiSuccess {json} data Response message.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
            "sucess": true,
            "data": {
                "message": "Token is valid"
            }
        }
  *
  * @apiError NotFound Recovery token does not exist.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
            "name": "NotFound",
            "message": "Recovery token does not exist",
            "code": 404,
            "className": "not-found",
            "errors": {}
        }
*/

/**
  * @api {patch} /revocery/:token Update user password
  * @apiName PatchPassword
  * @apiGroup Recovery
  * 
  * @apiHeader {String} Content-Type Data Type.
  * @apiHeaderExample {json} Header-Example:
        { "Content-Type", "application/json" }
  *
  * @apiParam {String} token Recovery token.
  * 
  * @apiParamExample {json} Request-Example:
  * {
        "password": "123454321"
    }
  *
  * @apiSuccess {Any} Any Any field in the user model.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
            "success": true,
            "data": {
                "message": "Password has been successfully reset",
                "response": {
                    "passwordRecovery": {
                        "expiry": "2020-02-07T06:08:23.210Z",
                        "token": "d6def9016fe0b2987eecc2c03475a01371b40395"
                    },
                    "fullname": "",
                    "type": "user",
                    "googleId": "",
                    "_id": "5e3cf02b3c851759a8aba037",
                    "email": "test@gmail.com",
                    "password": "$2a$10$CeaP0tB6aqmJSA3HKfGpkOcG4jmoij0PnZeFhsA4r65vFBtxawzAO",
                    "createdAt": "2020-02-07T05:05:47.094Z",
                    "updatedAt": "2020-02-07T05:36:01.427Z",
                    "__v": 0
                }
            }
        }
  *
  * @apiError GeneralError Id and password required.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 500 Internal Server Error
  *     {
            "name": "GeneralError",
            "message": "Id and password required.",
            "code": 500,
            "className": "general-error",
            "errors": {}
        }
*/
