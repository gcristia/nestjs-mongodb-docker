export const EnvConfigurations = () => ({
    environment: process.env.NODE_ENV || 'development',
    mongoDbUri: process.env.MONGODB_URI,
    port: process.env.PORT || 3000,
    defaultLimit: +process.env.DEFAULT_LIMIT || 10,
})
