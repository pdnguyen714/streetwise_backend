const config = {
    "dev": {
        "driver": "pg",
        "user": "bri",
        "password": "",
        "host": "localhost",
        "database": "street_wise",
        "port": "5432"
    },
    "production": {
        "connectionString": process.env.DATABASE_URL,
        "ssl": {
          "rejectUnauthorized": false
        }
    }
}

module.exports = config.dev