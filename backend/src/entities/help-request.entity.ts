import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ExtendedBaseEntity } from './base.entity';

export enum HelpRequestStatus {
  NEW = 'new',
  IN_PROGRESS = 'in_progress',
  ON_HOLD = 'on_hold',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

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

  @Column({
    type: 'enum',
    enum: HelpRequestStatus,
    default: HelpRequestStatus.NEW
  })
  status: HelpRequestStatus;

  @Column({ nullable: true })
  assignedTo: string;

  @Column({ type: 'text', nullable: true })
  statusComment: string;

  @Column({ type: 'timestamptz', nullable: true })
  statusUpdatedAt: Date;
} 