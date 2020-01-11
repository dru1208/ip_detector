class Request {
  constructor(req) {
    this.req = req
  }

  get ip() {
    return this.findIp
  }

  findIp() {
    return this.req.ip
  }
}

module.exports = Request