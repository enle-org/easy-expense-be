/**
  * @api {post} /organisations Create Organisations
  * @apiName PostOrganisations
  * @apiGroup Organisations
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
        "name": "enle co",
        "createdBy": "5e3cf02b3c851759a8aba037",
        "invites": [],
        "members": []
    }
  *
  * @apiSuccess {String[]} members Organisation's member ids.
  * @apiSuccess {String} _id MongoDB object id.
  * @apiSuccess {String} name Name of the organisation.
  * @apiSuccess {String} createdBy Organisation's creator id.
  * @apiSuccess {Object[]} invites Sent invites - email and token.
  * @apiSuccess {Date} createdAt Timestamp.
  * @apiSuccess {Date} updatedAt Timestamp.
  * @apiSuccess {Number} __v Mongoose versionKey.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 201 Created
  *     {
            "members": [],
            "_id": "5e3d00337dc0d66375d26997",
            "name": "test org",
            "createdBy": "5e3cf02b3c851759a8aba037",
            "invites": [],
            "createdAt": "2020-02-07T06:14:11.298Z",
            "updatedAt": "2020-02-07T06:14:11.298Z",
            "__v": 0
        }
  *
  * @apiError BadRequest Validation failed.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
            "name": "BadRequest",
            "message": "organisations validation failed: name: Path `name` is required.",
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
  * @api {get} /organisations/:id Get organisations
  * @apiName GetOrganisations
  * @apiGroup Organisations
  * 
  * @apiHeader {String} Authorization Users unique access-token.
  * @apiHeaderExample {json} Header-Example:
        {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g"
        }
  *
  *
  * @apiParam {String} id Organisation's unique ID.
  *
  * @apiSuccess {String[]} members Organisation's member ids.
  * @apiSuccess {String} _id MongoDB object id.
  * @apiSuccess {String} name Name of the organisation.
  * @apiSuccess {String} createdBy Organisation's creator id.
  * @apiSuccess {Object[]} invites Sent invites - email and token.
  * @apiSuccess {Date} createdAt Timestamp.
  * @apiSuccess {Date} updatedAt Timestamp.
  * @apiSuccess {Number} __v Mongoose versionKey.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 201 Created
  *     {
            "members": [],
            "_id": "5e3d00337dc0d66375d26997",
            "name": "test org",
            "createdBy": "5e3cf02b3c851759a8aba037",
            "invites": [],
            "createdAt": "2020-02-07T06:14:11.298Z",
            "updatedAt": "2020-02-07T06:14:11.298Z",
            "__v": 0
        }
  *
  * @apiError BadRequest ast to ObjectId failed.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
            "name": "BadRequest",
            "message": "Cast to ObjectId failed for value \"5e3d063560c9246b12883d08z\" at path \"_id\" for model \"organisations\"",
            "code": 400,
            "className": "bad-request",
            "errors": {}
        }
*/

/**
  * @api {delete} /organisations/:id Delete organisation
  * @apiName DeleteOrganisation
  * @apiGroup Organisations
  * 
  * @apiHeader {String} Authorization Users unique access-token.
  * @apiHeaderExample {json} Header-Example:
        {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g"
        }
  *
  *
  * @apiParam {String} id Organisation's unique ID.
  *
  * @apiSuccess {String[]} members Organisation's member ids.
  * @apiSuccess {String} _id MongoDB object id.
  * @apiSuccess {String} name Name of the organisation.
  * @apiSuccess {String} createdBy Organisation's creator id.
  * @apiSuccess {Object[]} invites Sent invites - email and token.
  * @apiSuccess {Date} createdAt Timestamp.
  * @apiSuccess {Date} updatedAt Timestamp.
  * @apiSuccess {Number} __v Mongoose versionKey.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 201 Created
  *     {
            "members": [],
            "_id": "5e3d00337dc0d66375d26997",
            "name": "test org",
            "createdBy": "5e3cf02b3c851759a8aba037",
            "invites": [],
            "createdAt": "2020-02-07T06:14:11.298Z",
            "updatedAt": "2020-02-07T06:14:11.298Z",
            "__v": 0
        }
  *
  * @apiError BadRequest ast to ObjectId failed.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
            "name": "BadRequest",
            "message": "Cast to ObjectId failed for value \"5e3d063560c9246b12883d08z\" at path \"_id\" for model \"organisations\"",
            "code": 400,
            "className": "bad-request",
            "errors": {}
        }
*/

module.exports = 'docs';
