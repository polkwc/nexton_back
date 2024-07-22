import dotenv from 'dotenv';
dotenv.config(); 

const config = {
  version: process.env.API_VERSION || '0.0.0',
  name: process.env.API_NAME || 'rest-api',
  
  env: process.env.API_ENV || 'development',
  
  host: process.env.API_HOST || 'localhost',
  port: process.env.API_PORT || 5000,
};

export default config;
