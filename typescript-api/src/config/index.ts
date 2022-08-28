import * as dotenv from 'dotenv'
const envConfig = dotenv.config().parsed;
if (! envConfig) {
    throw Error('env is undefined!')
}
console.log(envConfig.PORT);
export default {
    /**
     * APIサーバーのPORT番号
     */
    port: parseInt(envConfig.PORT, 10),

    /**
     * databaseの設定
     */
    db: {
        host: envConfig.DB_HOST,
        port: parseInt(envConfig.DB_PORT, 10),
        user: envConfig.DB_USER,
        password: envConfig.DB_PASSWORD,
        database: envConfig.DB_DATABASE,
        multipleStatements: true,
    },
};