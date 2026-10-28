# 19th October 2026

### What I did today

- Built a /health endpoint that returns JSON
- Added GET '/tasks' with array of tasks
- Learnt big O time complexity patterns for types, e.g constant(doesnt change regardless of size), linear(as size grows, work increases), quadratic(mostly nested loops), logarithmic(half discarded)
- Glance at two sum problem but didnt do it cuz elvis was burnt out and confused

### What confused me

- npx commands for setup (npm installs, npx runs a tool)

### Tomorrow

- POST /tasks with express.json(), test both

# 20th October 2026

### What I did today

- Added POST for '/tasks' endpoint
- Learnt diff btw 200 and 201 response(200 is successful and 201 is successful and theres a new resource created most times);
- What middleware is(modifying req before res is created)
- Learnt that req.body is empty and middleware is what allows it to have data/meaning
- Learnt Thunder Client is used to test requests so installed it and you have to run the server first before using it
- A POST test needs a body sent as JSON, and req.body is undefined otherwise.
- res.status(201) on its own only sets the status and never sends a response, so the request hangs. It has to end in .json() or .send()


### What confused me

- How to test POST endpoint | Understood: The body must be sent as JSON, and the Postman extension didn’t do that

### Tomorrow

- Check if Elvis is keeping up so we can do two sum together
- POST with no body, an empty {}, or a bad title returns 400 with a clear message, saves nothing, and never crashes the server.
- Test all three cases in Thunder Client and save them as separate requests, so you can rerun them whenever you change the route.

# 23rd October 2026

### What I did today

- Added validation for POST '/tasks' (missing body, missing title, empty title, whitespace-only title, non-string title all return 400)
- Tested all six cases and all work now
- Learnt that .trim() only works on strings
- Learnt that you can't read a property from something that might be undefined: with no body, `req.body.title` crashes because `req.body` itself is undefined
- Learnt optional chaining (?.): `req.body?.title` returns undefined instead of throwing
- Learnt that the order of checks matters: undefined first, then string, then empty after trimming

### What confused me

- How to send an error message without JSON | Fix: res.send() sends plain text (res.json() sends a JSON object)
- Why the empty body test wasn't working | Fix: the crash happened on `req.body.title` before my check could run, because I was checking whether the title was undefined when the missing thing was req.body. Using `req.body?.title` fixed it

### Tomorrow

- Rewrite the POST checks with Zod so all six cases still pass
- Finish the faster Two Sum in JavaScript and log it (name, pattern, date, result, hint or not), with the joint session with Elvis
- Friday DSA: moved to Saturday


# 28th October 2026

### What I did today

- Added validation for POST '/tasks' using Zod
- Tested all six cases and all work now
- Learnt that zod uses safeParse() with success, data and error properties
- Learnt that defining a schema uses z.object({}) for comparisons 

### What confused me

- What parts of the input to compare | Concluded the req.body
- How to use get result from safeParse | Copilot completed with .success condidtion and i read doc to understand it fully

### Tomorrow

- Add `DELETE /tasks/:id` to tasks-api-ts. Done when:
  - `DELETE /tasks/1` removes the task and returns a clear success response
  - `DELETE /tasks/999` returns `404` and changes nothing
  - `DELETE /tasks/abc` returns the status I decided on, and I can say why
  - `GET /tasks` afterwards shows the task gone, and a new POST doesn't reuse an existing id