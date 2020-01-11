class IpAddress {
  constructor(ip) {
    this.ip = ip
  }

  value() {
    return this.ip
  }

  isValid() {
    return this.ip != null
  }
}

module.exports = IpAddress