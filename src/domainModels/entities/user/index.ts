interface UserParams {
  id: UserId;
  userName: UserName;
}

class User {
  id: UserId;
  userName: UserName;

  constructor(params: UserParams) {
    this.id = params.id;
    this.userName = params.userName;
  }
}