class LoginController {

  /*@ngInject*/
  constructor() {

    this.brand = 'Find Me';

    this.items = [{
      href: '/home',
      label: 'Home',
      isActive: true
    }, {
      href: '#',
      label: 'About',
      isActive: false
    }, {
      href: '#',
      label: 'Contact',
      isActive: false
    }];

  }

  onItemClicked(clickedItem) {
    this.items = this.items.map((item) => {
      item.isActive = item.label === clickedItem.label;
      return item;
    });
  }
}

const Login = {
  template: require('./navbar.html'),
  controller: LoginController
};

export default Login;
