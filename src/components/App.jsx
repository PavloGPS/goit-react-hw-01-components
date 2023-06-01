import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

import user from '../data/user.json';
import data from '../data/data.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {data && data.length > 0 ? (
        <>
          {data.title && <Statistics title={data.title} stats={data} />}
          {!data.title && <Statistics stats={data} />}
        </>
      ) : null}
    </>
  );
};
