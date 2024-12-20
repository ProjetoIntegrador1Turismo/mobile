interface UserModel {
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
  authToken: string;
  authTokenExpiresIn: string;
  refreshToken: string;
  refreshTokenExpiresIn: string;
  cadasturCode: string | null;
  profileImageUrl: string;
  phone: string;
}

export default UserModel;
