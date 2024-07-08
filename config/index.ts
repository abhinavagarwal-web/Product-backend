require('dotenv').config();
export const MONGOURI: string = process.env.MONGOURI || 'defaultMongoURI';
export const APP_SECRET: string = process.env.APP_SECRET || 'defaultAppSecret';