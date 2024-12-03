export interface RegisterModel {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  cadasturCode: string | null;
  profileImageUrl: string;
  isApproved: boolean | null;
  phone: string;
  activeAdmin: boolean;
}

export default RegisterModel;
