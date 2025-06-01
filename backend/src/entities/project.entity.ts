import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ExtendedBaseEntity } from './base.entity';

@Entity()
export class Project extends ExtendedBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  content: string;

  @Column()
  image: string;

  @Column()
  targetAmount: string;

  @Column()
  currentAmount: string;

  @Column('simple-array', { nullable: true })
  medias: string[];
}
