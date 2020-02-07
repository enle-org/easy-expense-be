/**
  * @api {post} /invite Create organisation invite
  * @apiName PostInvite
  * @apiGroup Invite
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
      "url": "https://easy-expense-fe.herokuapp.com",
      "invites": ["david@enle.co"]
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
                "message": "Invites sent successfully."
            }
        }
  *
  * @apiError GeneralError Invites need to be an array.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
            "name": "GeneralError",
            "message": "Invites need to be an array.",
            "code": 500,
            "className": "general-error",
            "errors": {}
        }
*/

/**
  * @api {get} /invite/:inviteToken Get invite details
  * @apiName GetInvite
  * @apiGroup Invite
  * 
  * @apiHeader {String} Authorization Users unique access-token.
  * @apiHeaderExample {json} Header-Example:
        {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g"
        }
  *
  * @apiParam {String} token Invite token.
  *
  * @apiSuccess {Boolean} sucess Operation result.
  * @apiSuccess {json} data Response message.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
          "sucess": true,
          "data": {
              "orgID": "5e3d07850741166b75b79dfd",
              "orgName": "test org",
              "invitedBy": "test@gmail.com",
              "inviteEmail": {
                  "_id": "5e3d10a7ff59ef6cfa77e365",
                  "email": "testInvite@test.com",
                  "token": "b5d1c9d6efd1d009ba395b8f8a6cd05390548d1b"
              }
          }
      }
  *
  * @apiError GeneralError Invite Error finding organisation with this invite token.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 500 GeneralError
  *     {
            "name": "GeneralError",
            "message": "Cannot read property 'createdBy' of null",
            "code": 500,
            "className": "general-error",
            "data": {},
            "errors": {}
        }
*/

/**
  * @api {get} /invite/join?orgId={organisationId} Join an organisation
  * @apiName AcceptInvite
  * @apiGroup Invite
  * 
  * @apiHeader {String} Authorization Users unique access-token.
  * @apiHeaderExample {json} Header-Example:
        {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g"
        }
  *
  * @apiParam {String} organisationId Organisation Id.
  *
  * @apiSuccess {Boolean} sucess Operation result.
  * @apiSuccess {json} data Response message.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
            "success": true,
            "data": {
                "organisation": {
                    "members": [
                        "5e3cf02b3c851759a8aba037"
                    ],
                    "_id": "5e31c9e800b4f10017b30273",
                    "name": "enle co xs",
                    "createdBy": "5e31c6cb23fd400017f172d4",
                    "invites": [],
                    "createdAt": "2020-01-29T18:07:36.545Z",
                    "updatedAt": "2020-01-29T18:08:04.644Z",
                    "__v": 0
                }
            }
        }
  *
  * @apiError GeneralError Cast to ObjectId failed.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 500 Not Found
  *     {
            "name": "GeneralError",
            "message": "Cast to ObjectId failed for value \"5e31c9e800b4f10017b30273z\" at path \"_id\" for model \"organisations\"",
            "code": 500,
            "className": "general-error",
            "data": {},
            "errors": {}
        }
*/

module.exports = 'docs';
