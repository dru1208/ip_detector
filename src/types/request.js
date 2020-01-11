const IpAddress = require("./ipAddress.js")

class Request {
  constructor(req) {
    this.req = req
    this.ip = new IpAddress(this.rawIp(req))
  }

  get ip() {
    return this.ip
  }

  rawIp(req) {
    return req.ip
  }
}

module.exports = Request