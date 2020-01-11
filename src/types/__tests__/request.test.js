const Request = require("../request.js")

test("finding the ip from a request", () => {
  const req = { ip: "123" }
  const request = new Request(req)
  expect(request.ip()).toBe("123")
})