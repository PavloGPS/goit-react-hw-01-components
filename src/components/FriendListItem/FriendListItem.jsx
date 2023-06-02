import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.friendIsOnline : css.friendIsNotOnline}>
        {' '}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
