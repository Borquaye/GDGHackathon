class NavBarController {

  /*@ngInject*/
  constructor() {

    this.brand = 'Find Me';

    this.items = [{
      href: '/home',
      label: 'Home',
      isActive: true
    }];

  }

  onItemClicked(clickedItem) {
    this.items = this.items.map((item) => {
      item.isActive = item.label === clickedItem.label;
      return item;
    });
  }
}

const Navbar = {
  template: require('./navbar.html'),
  controller: NavBarController
};

export default Navbar;
