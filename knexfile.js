module.exports = {
    development:{
        client: 'mysql',
        connection: {
            database: 'mind_case',
            user: 'root',
            password: 'marelu',
        },
        useNullAsDefault: true,
        migrations: {
            directory: `${__dirname}/src/database/migrations`,
          },
          seeds: {
            directory: `${__dirname}/src/database/seeds`,
          },
    },
    
}