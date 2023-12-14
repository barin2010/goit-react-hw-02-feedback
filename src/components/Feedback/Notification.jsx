import css from './Notification.module.css'
const Notification = ({ message }) => (
    <p className={css.notificationText}>{message}</p>
  );
  
  export  {Notification};