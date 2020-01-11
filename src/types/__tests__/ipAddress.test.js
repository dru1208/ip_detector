const IpAddress = require("../ipAddress.js")

test("access the ip", () => {
  const ipValue = "12345"
  const ipAddress = new IpAddress(ipValue)
  expect(ipAddress.value()).toEqual(ipValue)
})

test("determine valid IPs", () => {
  const validIp = "12345"
  const validAddress = new IpAddress(validIp)
  expect(validAddress.isValid()).toBe(true)

  const invalidIp = null
  const invalidAddress = new IpAddress(invalidIp)
  expect(invalidAddress.isValid()).toBe(false)
})