import { TaskStatus } from 'src/tasks/task-status.enum';
import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
  
  @Column()
  status: TaskStatus;

  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
