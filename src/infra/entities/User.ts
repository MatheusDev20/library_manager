/* eslint-disable camelcase */
import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserSector } from './enums/UserRole';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  admin: boolean

  @Column()
  email: string;

  @Column()
  recoveryEmail: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  update_at: Date

  @Column({
    type: 'enum',
    enum: UserSector,
    default: UserSector.EMPLOYER,
  })
  role: UserSector

  @Column()
  avatar: string
}
