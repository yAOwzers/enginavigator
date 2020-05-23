From postman:

{
    "isJoi": true,
    "name": "ValidationError",
    "details": [
        {
            "message": "\"name\" is required",
            "path": [
                "name"
            ],
            "type": "any.required",
            "context": {
                "key": "name",
                "label": "name"
            }
        }
    ],
    "_object": {}
}

with the alteration to: res.status(400).send(result.error.details[0].message); //make it more specific for the user
From postman:

"name" is required
----------------------
when user inputs { "name" : "1" }

From Postman:
"name" length must be at least 3 characters long
