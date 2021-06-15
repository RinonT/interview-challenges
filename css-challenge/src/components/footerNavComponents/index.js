import React from 'react';

export function NavigationList({ listClass, linkClass, imagePath }) {
  return (
    <li className={`menu ${listClass}`}>
      <a className={`${linkClass}`} href="#home">
        <img src={`${imagePath}`} alt="" />
      </a>
    </li>
  );
}

export default function AppNavigation() {
  return (
    <footer className="app_footer">
      <nav className="app_navigation_menu">
        <ul className="navigation_menu_lists">
          <NavigationList
            listClass={'active_menu'}
            linkClass={'home_icon'}
            href={'#home'}
            imagePath={'./assets/home.png'}
          />
          <NavigationList
            listClass={'allmenu_icon'}
            linkClass={'allmenu'}
            href={'#seeallmenu'}
            imagePath={'./assets/menu-icon.svg'}
          />
          <NavigationList
            listClass={'email_menu_icon'}
            linkClass={'email'}
            href={'#sendemail'}
            imagePath={'./assets/email.svg'}
          />
          <NavigationList
            listClass={'user_menu_icon'}
            linkClass={'user'}
            href={'#seeuser'}
            imagePath={'./assets/user.svg'}
          />
        </ul>
      </nav>
    </footer>
  );
}
