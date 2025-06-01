export interface IExtendedRequestWithUser extends Request {
  user: IUserIdAndLogin;
}

export interface IUserIdAndLogin extends Request {
  id: string;
  login: string;
}

export interface I_Id {
  id: string;
}
