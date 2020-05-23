PUT request in Postman:
{
	"name": "new course"
}

Response:
{
    "id": 1,
    "name": "course1"
}

GET request in Postman:
http://localhost:3000/api/courses/

Response:
[
    {
        "id": 1,
        "name": "new course"
    },
    {
        "id": 2,
        "name": "course2"
    },
    {
        "id": 3,
        "name": "course3"
    }
]

PUT request with invalid Id:
http://localhost:3000/api/courses/10

Reponse:
The course with the given id was not found.


PUT request with invalid input:
{
}

Response:
"name" is required
