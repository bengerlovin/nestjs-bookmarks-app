import { AuthDto, TokenResponse } from 'src/auth/dto';

export const AuthStub = (): AuthDto => {
  return {
    email: 'email@example.com',
    password: 'password123',
  };
};

export const AuthTokenStub = (): TokenResponse => {
  return {
    access_token: 'accesstokenexample123',
  };
};
