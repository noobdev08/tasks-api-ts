# 20th October 2026

- POST crashed with req.body undefined. Cause: body was not sent as JSON, so express.json() didn’t parse it | (Fixed: Postman extension outdated and express.json() only parses a body when the request is sent as JSON., used Thunder Client instead)
- POST {} returns 201 and saves a task with no task field. Cause: no validation
- POST with no body at all causes undefined and makes a crash. Cause: no validation 