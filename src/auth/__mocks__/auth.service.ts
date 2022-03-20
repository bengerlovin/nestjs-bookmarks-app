import { AuthTokenStub } from '../test/stubs/auth.stub';

export const AuthService = jest.fn().mockReturnValue({
  signin: jest.fn().mockReturnValue(AuthTokenStub()),
  signup: jest.fn().mockReturnValue(AuthTokenStub()),
});
