import React from 'react';

export default function NotificationContainer() {
  return (
    <div class="notification_container">
      <div class="greeting_container">
        <h1 class="greeting">Hi, Jared!</h1>
        <span class="date">23 Jan, 2021</span>
      </div>
      <div class="notification_icon_container">
        <a class="notifications" href="#notifications">
          <img class="notifications_icon" src="./assets/bell.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
