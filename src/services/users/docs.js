/**
 * @api {post} /users Create User
 * @apiName postUsers
 * @apiGroup Users
 *
* @apiHeader {String} Authorization Users unique access-token.
* @apiHeaderExample {json} Header-Example:
      {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g"
      }
*
*
* @apiParamExample {json} Request-Example:
* {
    "name": "John Doe",
    "email": "example@test.com",
    "password": "password",
  }
*
* @apiSuccess {Array} selectedGoals An array of user selected goals.
* @apiSuccess {Array} completedTasks An array of user completed tasks.
* @apiSuccess {String} _id MongoDB object id.
* @apiSuccess {String} name User fullname.
* @apiSuccess {String} email User email.
* @apiSuccess {Date} createdAt Timestamp.
* @apiSuccess {Date} updatedAt Timestamp.
* @apiSuccess {Number} __v Mongoose versionKey.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 201 Created
*     {
          "selectedGoals": [],
          "completedTasks": [],
          "_id": "5dab0b0311f86874e7b51234",
          "name": "John Doe",
          "email": "example@test.com",
          "createdAt": "2019-10-19T13:09:23.573Z",
          "updatedAt": "2019-10-19T13:09:23.573Z",
          "__v": 0
      }
*
* @apiError BadRequest Validation failed.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 Bad Request
*     {
          "name": "BadRequest",
          "message": "users validation failed: name: Path `name` is required.",
          "code": 400,
          "className": "bad-request",
          "errors": {
              "name": {
                  "message": "Path `name` is required.",
                  "name": "ValidatorError",
                  "properties": {
                      "message": "Path `name` is required.",
                      "type": "required",
                      "path": "name"
                  },
                  "kind": "required",
                  "path": "name"
              }
          }
      }
*/

/**
  * @api {get} /users/:id Get user object
  * @apiName getUsers
  * @apiGroup Users
  * 
  * @apiHeader {String} Authorization Users unique access-token.
  * @apiHeaderExample {json} Header-Example:
        {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g"
        }
  *
  * @apiParam {Number} id Users unique ID.
  *
  * @apiSuccess {Array} selectedGoals An array of user selected goals.
  * @apiSuccess {Array} completedTasks An array of user completed tasks.
  * @apiSuccess {String} _id MongoDB object id.
  * @apiSuccess {String} name User fullname.
  * @apiSuccess {String} email User email.
  * @apiSuccess {Date} createdAt Timestamp.
  * @apiSuccess {Date} updatedAt Timestamp.
  * @apiSuccess {Number} __v Mongoose versionKey.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
            "selectedGoals": [],
            "completedTasks": [],
            "_id": "5dab0b0311f86874e7b51234",
            "name": "John Doe",
            "email": "example@test.com",
            "createdAt": "2019-10-19T13:09:23.573Z",
            "updatedAt": "2019-10-19T13:09:23.573Z",
            "__v": 0
        }
  *
  * @apiError BadRequest Cast to ObjectId failed.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
            "name": "BadRequest",
            "message": "Cast to ObjectId failed for value \"5dab0b0311f86874e7b5872cs\" at path \"_id\" for model \"users\"",
            "code": 400,
            "className": "bad-request",
            "errors": {}
        }
*/

/**
  * @api {patch} /users/:id Patch user object
  * @apiName patchUsers
  * @apiGroup Users
  * 
  * @apiHeader {String} Authorization Users unique access-token.
  * @apiHeaderExample {json} Header-Example:
        {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g"
        }
  *
  * @apiParam {Number} id Users unique ID.
  * 
  * @apiParamExample {json} Request-Example:
  * {
      "selectedGoals": ["5dabe9d14993401226b60769"]
    }
  *
  * @apiSuccess {Any} Any Any field in the user object.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
            "selectedGoals": ["5dabe9d14993401226b60769"],
            "completedTasks": [],
            "_id": "5dab0b0311f86874e7b51234",
            "name": "John Doe",
            "email": "example@test.com",
            "createdAt": "2019-10-19T13:09:23.573Z",
            "updatedAt": "2019-10-19T13:09:23.573Z",
            "__v": 0
        }
  *
  * @apiError BadRequest Cast to ObjectId failed.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
            "name": "BadRequest",
            "message": "Cast to ObjectId failed for value \"5dab0b0311f86874e7b5872cs\" at path \"_id\" for model \"users\"",
            "code": 400,
            "className": "bad-request",
            "errors": {}
        }
*/

module.exports =  'docs';

