module.exports = {
    apps: [
        {
            name: 'slik-api',
            script: 'dist/src/main.js', // Path to your compiled JavaScript entry file
            instances: 'max',       // Number of instances to run
            exec_mode: 'cluster',   // Cluster mode for load balancing
            env: {
                NODE_ENV: 'development',
                PORT: 3000,              // Example port for development
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 8080,              // Example port for production
            },
            env_staging: {
                NODE_ENV: 'staging',
                PORT: 4000,              // Example port for staging
            },
        },
    ],
};
