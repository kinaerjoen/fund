import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ExtendedBaseEntity } from './base.entity';

@Entity()
export class HelpRequest extends ExtendedBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ type: 'text' })
  comment: string;

  @Column({ default: false })
  isProcessed: boolean;

  @Column({ nullable: true })
  processedBy: string;

  @Column({ type: 'timestamptz', nullable: true })
  processedAt: Date;
} 