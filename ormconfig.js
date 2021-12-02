// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'currency_db',
  entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: [
    path.join(__dirname, '**', 'migrations', isDev ? '*.ts' : '*.js'),
  ],
  cli: {
    migrationsDir: `${isDev ? 'src' : 'dist'}/migrations`,
  },
  synchronize: false,
};
