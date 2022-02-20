import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';
import { Exclude } from 'class-transformer';
@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

//   @ManyToOne(type => User, user => user.tasks, { eager: false })
//   user: User;

  @Column()
  userId: number;
}
