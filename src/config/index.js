const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
        PORT: Joi.number().default(3000),
        SEQUELIZE_DB_NAME: Joi.string().required(),
        SEQUELIZE_DB_HOST: Joi.string().required(),
        SEQUELIZE_DB_PORT: Joi.string().required(),
        SEQUELIZE_DB_USER: Joi.string().required(),
        SEQUELIZE_DB_PASSWORD: Joi.string().required(),
        SEQUELIZE_DB_DIALECT: Joi.string().required(),

    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    sequelizeDbName: envVars.SEQUELIZE_DB_NAME,
    sequelizeDbHost: envVars.SEQUELIZE_DB_HOST,
    sequelizeDbPort: envVars.SEQUELIZE_DB_PORT,
    sequelizeDbUser: envVars.SEQUELIZE_DB_USER,
    sequelizeDbPassword: envVars.SEQUELIZE_DB_PASSWORD,
    sequelizeDbDialect: envVars.SEQUELIZE_DB_DIALECT,
};