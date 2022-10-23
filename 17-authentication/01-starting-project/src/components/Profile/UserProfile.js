import { useState } from 'react';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  const [isChanged, setIsCanged] = useState(false);

  const changeStateSuccess = () => {
    setIsCanged(true)
  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      {isChanged && <h2>Password changed successfuly!</h2>}
      <ProfileForm changeStateSuccess={changeStateSuccess} />
    </section>
  );
};

export default UserProfile;
