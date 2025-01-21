export interface LoginDTO {
  username: string;
  password: string;
}

export interface RegisterDTO {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface RegisterGuideDTO extends RegisterDTO {
  cadasturCode?: string;
}

export interface RecoveryDTO {
  email: string;
}

export interface UpdateProfileDTO {
  email: string;
  name: string;
  password?: string | undefined;
  phone: string;
}
