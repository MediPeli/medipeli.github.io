import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

const IPREGISTRY_API_KEY = process.env.IPREGISTRY_API_KEY;
const IP_BLOCKED_MESSAGE = process.env.IP_BLOCKED_MESSAGE || 'Access Cannot Be Granted';
const IS_TURKEY_BLOCKED = process.env.IS_TURKEY_BLOCKED || 'YES';
const IS_VPN_BLOCKED = process.env.IS_VPN_BLOCKED || 'YES';
const WHITELISTED_IPS_URL = process.env.WHITELISTED_IPS_URL || 'NOPE';

const blockIPs = async (req: Request, res: Response, next: NextFunction) => {
  let clientIp = (req.headers['x-forwarded-for'] || req.socket.remoteAddress) as string;

  if (!clientIp) {
    return res.status(400).send('IP address could not be determined');
  }

  if (clientIp.includes(',')) {
    clientIp = clientIp.split(',')[0].trim();
  }

  try {
    // Fetch whitelisted IPs
    if (WHITELISTED_IPS_URL.length > 5) {
      const whitelistResponse = await axios.get(WHITELISTED_IPS_URL);
      const whitelistedIps = whitelistResponse.data.whitelisted_ips;

      if (whitelistedIps.includes(clientIp)) {
        console.log(`Whitelisted IP: ${clientIp} is allowed`);
        return next();
      }
    }

    const response = await axios.get(`https://api.ipregistry.co/${clientIp}?key=${IPREGISTRY_API_KEY}`);
    const { data } = response;

    console.log('IP Registry Response:', data);

    if (data && data.location && data.location.country && data.location.country.code) {
      const countryCode = data.location.country.code;
      const securityFields = data.security;
      const isUsingVPN = securityFields.is_vpn || securityFields.is_proxy || securityFields.is_tor || securityFields.is_anonymous || securityFields.is_relay || securityFields.is_tor_exit;

      console.log(`Country Code: ${countryCode}`);
      const isLocalBan = countryCode === 'TR' && IS_TURKEY_BLOCKED === 'YES';
      const isVPNBan = isUsingVPN && IS_VPN_BLOCKED === 'YES';

      if (isLocalBan || isVPNBan) {
        console.log(`Blocked request from IP: ${clientIp}, Reason: ${isLocalBan ? 'No access from Turkey is allowed' : 'No access with VPN/Proxy/Tor/Anonymous is allowed'}`);
        return res.status(403).send(IP_BLOCKED_MESSAGE);
      }
    } else {
      console.error('Unexpected response structure:', data);
      return res.status(500).send('Internal Server Error');
    }

    next();
  } catch (error) {
    console.error('Error fetching IP information', error);
    return res.status(500).send('Internal Server Error');
  }
};

export default blockIPs;
