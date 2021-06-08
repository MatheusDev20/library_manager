import { UserSector } from '../../infra/entities/enums/UserRole';

export interface ICreateUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  admin: boolean
  recoveryEmail: string;
  role: UserSector
}
