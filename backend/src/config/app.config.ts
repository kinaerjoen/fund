import 'dotenv/config';

const isRequired = (propName: string): never => {
  throw new Error(`Config property ${propName} is required`);
};

export const config = {
  PORT: process.env.PORT ?? isRequired('PORT'),
  DOMAIN: process.env.APP_DOMAIN ?? isRequired('APP_DOMAIN'),
  APP_CLIENT_PUBLIC_URL:
    process.env.APP_CLIENT_PUBLIC_URL ?? isRequired('APP_CLIENT_PUBLIC_URL'),
  DB_PORT: Number(process.env.POSTGRES_PORT) ?? isRequired('POSTGRES_PORT'),
  DB_USER: process.env.POSTGRES_USER ?? isRequired('POSTGRES_USER'),
  DB_PASSWORD: process.env.POSTGRES_PASSWORD ?? isRequired('POSTGRES_PASSWORD'),
  DB_HOST: process.env.POSTGRES_HOST ?? isRequired('POSTGRES_HOST'),
  DB_DATABASE: process.env.POSTGRES_DB ?? isRequired('POSTGRES_DB'),
  POSTGRES_DB_DATA_SOURCE_HOST:
    process.env.POSTGRES_DB_DATA_SOURCE_HOST ??
    isRequired('POSTGRES_DB_DATA_SOURCE_HOST'),
  REFRESH_TOKEN_EXPIRES_DAYS:
    Number(process.env.JWT_REFRESH_EXPIRES_DAYS) ??
    isRequired('JWT_REFRESH_EXPIRES_DAYS'),
  REFRESH_TOKEN_EXPIRES_DAYS_IN_MILLISECONDS:
    Number(process.env.JWT_REFRESH_EXPIRES_DAYS) * 86400000 ??
    isRequired('JWT_REFRESH_EXPIRES_DAYS'), // 24 * 60 * 60 * 1000
  ACCESS_TOKEN_EXPIRES_HOURS:
    Number(process.env.JWT_ACCESS_EXPIRES_HOURS) ??
    isRequired('ACCESS_TOKEN_EXPIRES_HOURS'),
  JWT_ACCESS_SECRET:
    process.env.JWT_ACCESS_SECRET ?? isRequired('JWT_ACCESS_SECRET'),
  JWT_REFRESH_SECRET:
    process.env.JWT_REFRESH_SECRET ?? isRequired('JWT_REFRESH_SECRET'),
  JWT_CONFIRM_EMAIL_SECRET:
    process.env.JWT_CONFIRM_EMAIL_SECRET ??
    isRequired('JWT_CONFIRM_EMAIL_SECRET'),
  JWT_CONFIRM_EMAIL_EXPIRES_DAYS:
    process.env.JWT_CONFIRM_EMAIL_EXPIRES_DAYS ??
    isRequired('JWT_CONFIRM_EMAIL_EXPIRES_DAYS'),
  MEDIA_FOLDER_PATH:
    process.env.MEDIA_FOLDER_PATH ?? isRequired('MEDIA_FOLDER_PATH'),
};
