import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, profile }) {
  return <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={`https://github.com/${profile}.png`} />;
}