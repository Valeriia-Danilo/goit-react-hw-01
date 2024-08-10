import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
      <div className={css.profileContainer}>
  <div>
    <img
      src={image}
      alt={name}
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.stats}>
      <span>Followers</span>
      <span className={css.value}>{stats.followers}</span>
    </li>
    <li className={css.stats}>
      <span>Views</span>
      <span className={css.value}>{stats.views}</span>
    </li>
    <li className={css.stats}>
      <span>Likes</span>
      <span className={css.value}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
}