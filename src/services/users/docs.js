/**
  * @api {post} /users Create User
  * @apiName PostUsers
  * @apiGroup Users
  *
  * @apiHeader {String} Content-Type Data Type.
  * @apiHeaderExample {json} Header-Example:
        { "Content-Type", "application/json" }
  *
  *
  * @apiParamExample {json} Request-Example:
  * {
      "email": "example@test.com",
      "password": "password",
    }
  *
  * @apiSuccess {String} name User full name.
  * @apiSuccess {String} type User account type.
  * @apiSuccess {String} googleId User google ID.
  * @apiSuccess {String} _id MongoDB object id.
  * @apiSuccess {String} email User email.
  * @apiSuccess {Date} createdAt Timestamp.
  * @apiSuccess {Date} updatedAt Timestamp.
  * @apiSuccess {Number} __v Mongoose versionKey.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 201 Created
  *     {
            "fullname": "",
            "type": "user",
            "googleId": "",
            "_id": "5e3cda29e39ea547ceb35cc3",
            "email": "example@test.com",
            "createdAt": "2020-02-07T03:31:53.697Z",
            "updatedAt": "2020-02-07T03:31:53.697Z",
            "__v": 0
        }
  *
  * @apiError BadRequest Validation failed.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
            "name": "BadRequest",
            "message": "users validation failed: password: Path `password` is required.",
            "code": 400,
            "className": "bad-request",
            "errors": {
                "password": {
                    "message": "Path `password` is required.",
                    "name": "ValidatorError",
                    "properties": {
                        "message": "Path `password` is required.",
                        "type": "required",
                        "path": "password"
                    },
                    "kind": "required",
                    "path": "password"
                }
            }
        }
*/

/**
  * @api {get} /users/:id Get user object
  * @apiName GetUser
  * @apiGroup Users
  * 
  * @apiHeader {String} Authorization Users unique access-token.
  * @apiHeaderExample {json} Header-Example:
        {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g"
        }
  *
  * @apiParam {String} id Users unique ID.
  *
  * @apiSuccess {String} name User full name.
  * @apiSuccess {String} type User account type.
  * @apiSuccess {String} googleId User google ID.
  * @apiSuccess {String} _id MongoDB object id.
  * @apiSuccess {String} email User email.
  * @apiSuccess {Date} createdAt Timestamp.
  * @apiSuccess {Date} updatedAt Timestamp.
  * @apiSuccess {Number} __v Mongoose versionKey.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
            "fullname": "",
            "type": "user",
            "googleId": "",
            "_id": "5e3cda29e39ea547ceb35cc3",
            "email": "example@test.com",
            "createdAt": "2020-02-07T03:31:53.697Z",
            "updatedAt": "2020-02-07T03:31:53.697Z",
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
  * @apiName PatchUser
  * @apiGroup Users
  * 
  * @apiHeader {String} Authorization Users unique access-token.
  * @apiHeaderExample {json} Header-Example:
        {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g"
        }
  *
  * @apiParam {String} id Users unique ID.
  * 
  * @apiParamExample {json} Request-Example:
  * {
      "passwordRecovery": {
        "token": "6da3afc459704606afa5d60c783f6591",
        "expiry": "2019-10-19T13:09:23.573Z"
      }
    }
  *
  * @apiSuccess {Any} Any Any field in the user model.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
            "_id": "5e3cda29e39ea547ceb35cc3",
            "fullname": "",
            "type": "user",
            "googleId": "",
            "email": "example@test.com",
            "createdAt": "2020-02-07T03:31:53.697Z",
            "updatedAt": "2020-02-07T03:47:54.696Z",
            "__v": 0,
            "passwordRecovery": {
                "token": "6da3afc459704606afa5d60c783f6591",
                "expiry": "2019-10-19T13:09:23.573Z"
            }
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
  * @api {delete} /users/:id Delete user
  * @apiName DeleteUser
  * @apiGroup Users
  * 
  * @apiHeader {String} Authorization Users unique access-token.
  * @apiHeaderExample {json} Header-Example:
        {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g"
        }
  *
  * @apiParam {String} id Users unique ID.
  *
  * @apiSuccess {String} name User full name.
  * @apiSuccess {String} type User account type.
  * @apiSuccess {String} googleId User google ID.
  * @apiSuccess {String} _id MongoDB object id.
  * @apiSuccess {String} email User email.
  * @apiSuccess {Date} createdAt Timestamp.
  * @apiSuccess {Date} updatedAt Timestamp.
  * @apiSuccess {Number} __v Mongoose versionKey.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
            "fullname": "",
            "type": "user",
            "googleId": "",
            "_id": "5e3cda29e39ea547ceb35cc3",
            "email": "example@test.com",
            "createdAt": "2020-02-07T03:31:53.697Z",
            "updatedAt": "2020-02-07T03:31:53.697Z",
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

module.exports = 'docs';
