<<<<<<< HEAD
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
=======
import { Exclude } from 'class-transformer';
import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
>>>>>>> 7eaf9f80cfc3c9d6b15fabe757d2af1195a574de

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

<<<<<<< HEAD
//   @ManyToOne(type => User, user => user.tasks, { eager: false })
//   user: User;

  @Column()
  userId: number;
}
=======
  @ManyToOne((_type) => User, (user) => user.tasks, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
>>>>>>> 7eaf9f80cfc3c9d6b15fabe757d2af1195a574de
