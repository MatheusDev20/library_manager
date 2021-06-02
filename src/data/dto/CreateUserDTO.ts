import { UserSector } from '../../infra/entities/enums/UserRole'
export interface CreateUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  recoveryEmail: string;
  role: UserSector
}