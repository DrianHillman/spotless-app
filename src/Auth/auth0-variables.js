require('dotenv').config();

export const AUTH_CONFIG = {
  domain: '{process.env.DOMAIN}',
  clientId: '{process.env.CLIENT_ID}',
  callbackUrl: 'http://localhost:3000/callback'
};