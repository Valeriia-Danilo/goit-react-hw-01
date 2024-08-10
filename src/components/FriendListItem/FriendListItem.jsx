import css from './FriendListItem.module.css';
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
       const statusClsx = clsx(
    css.status,
    isOnline ? css.online: css.offline
  );
    return (
        <div className={css.card}>
  <img src={avatar} alt={name} width="48" />
  <p className={css.title}>{name}</p>
  <p className={statusClsx}>{isOnline ? "Online":"Offline"}</p>
</div>
    )
}