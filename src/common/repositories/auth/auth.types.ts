export interface LoginDTO {
  username: string;
  password: string;
}

export interface RegisterDTO {
  username: string;
  password: string;
  fullName: string;
  phone: string;
  isGuide: boolean;
}

export interface RegisterGuideDTO extends RegisterDTO {
  cadastur: string;
}
