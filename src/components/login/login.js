class LoginController {

  /*@ngInject*/
  constructor() {
  }

  
    login(){
        // return window.location.href = "https://api.imgur.com/oauth2/authorize?client_id=" + "CLIENT_ID_HERE" + "&response_type=token";
    }
}

const Login = {
  template: require('./navbar.html'),
  controller: LoginController
};

export default Login;
