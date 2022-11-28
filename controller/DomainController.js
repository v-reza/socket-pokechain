let domain = [];

const addDomainIPAddress = (domainName, ipAddress, socketId) => {
  !domain.some((domain) => domain.ipAddress === ipAddress) &&
    domain.push({ domainName, ipAddress, socketId });
}

module.exports = {
  domain,
  addDomainIPAddress
}