import { Test } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { AuthDto, TokenResponse } from '../dto';
import { AuthStub, AuthTokenStub } from './stubs/auth.stub';

jest.mock('../auth.service');

describe('Auth Controller', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const moduleReference = await Test.createTestingModule({
      imports: [],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    authController = moduleReference.get<AuthController>(AuthController);
    authService = moduleReference.get<AuthService>(AuthService);
    jest.clearAllMocks(); // make sure any values from previous mock calls are cleared
  });

  describe('Sign up user', () => {
    describe('When signup() is invoked it should:', () => {
      let accessToken: TokenResponse;

      beforeEach(async () => {
        accessToken = await authService.signin(AuthStub());
      });

      test('call AuthService', () => {
        expect(authService.signin).toHaveBeenCalled();
      });

      test('return an accesstoken', () => {
        expect(accessToken).toEqual(AuthTokenStub());
      });
    });
  });
});
