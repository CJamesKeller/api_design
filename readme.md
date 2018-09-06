# API_DESIGN

## Description

This Node app allows users to fetch product data from a remote source, combine it with local data,
and return the result, as well as push changes to the local data store for a given product.

The app is well-tested, and follows general conventions for the structure and tools used.

## Running

To run, obtain the code (often by cloning the repo), run `npm i` in your terminal, and then `npm start`!
The application will be available on port 5000 (often interacted with using a browser) unless otherwise specified.

To make a PUT request, send a body with this format:
```json
{
  "value": "some value",
  "currencyMode": "some currency mode"
}
```

## Testing

To run tests, run `npm run test` or `npm run test:coverage`.
The tests use the tools below:

## Tools Used

* chalk (to make the logs you have to look at a little prettier)
* helmet (for securing request headers)
* mongoose (to facilitate mongodb connection)
* nodemon (for running the app during development)
* nyc (for test coverage reporting)
* semistandard (to enforce code style)
* sinon (for request spies and stubs in testing)
* supertest (for testing requests)
* tap-spec (for formatting test output)
* tape (for testing)
* tape-nock (for recording and replaying requests)
* xhr (for making requests)

## Next Steps

<aside class="notice">
Next steps for the project, were it to be treated as enterprise-scale, would be to implement a standard versioning,
build, and deployment process for the app. This may include environment-specific config, if any lower environments
would be used (Test, Stage) prior to Production.
</aside>
