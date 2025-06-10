import { DataSource } from 'typeorm';
import { Note } from './notes/entities/note.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3308,
  username: 'root',
  password: '',
  database: 'apinestnotesDB',
  entities: [Note],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
