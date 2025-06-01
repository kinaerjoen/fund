import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { New } from 'src/entities/new.entity';
import { Participant } from 'src/entities/participant.entity';
import { Pdf } from 'src/entities/pdf.entity';
import { Project } from 'src/entities/project.entity';
import { Report } from 'src/entities/report.entity';
import { Thank } from 'src/entities/thank.entity';
import { User } from 'src/entities/user.entity';
import { HelpRequest } from 'src/entities/help-request.entity';
import { config } from './app.config';

const { DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST } = config;

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [User, New, Participant, Thank, Project, Pdf, Report, HelpRequest],
  synchronize: true,
  autoLoadEntities: true,
  logging: ['error'],
};

export const OrmConfig = {
  ...typeOrmModuleOptions,
  migrationsTableName: 'migrations',
  migrations: ['dist/migrations/*.{js,ts}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default OrmConfig;
