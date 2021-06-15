import React from 'react';

export default function NotificationContainer() {
  return (
    <div className="notification_container">
      <div className="greeting_container">
        <h1 className="greeting">Hi, Jared!</h1>
        <span className="date">23 Jan, 2021</span>
      </div>
      <div className="notification_icon_container">
        <a className="notifications" href="#notifications">
          <img
            className="notifications_icon"
            src="./assets/bell.svg"
            alt="notification icon"
          />
        </a>
      </div>
    </div>
  );
}
