import type { NextPage } from 'next';
import { Icon } from '@iconify/react';

// import { signUpForm } from '../../../component';
import styles from '../../../styles/authSignUp.module.css';

const SignUp: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.introductoryPhrase}>
          <p>Light on your cakey with letters from dears</p>
        </div>

        <Icon className={styles.cakeicon} icon="noto-v1:birthday-cake" color="#f8f8f8" />

        {/* <div className={}>
          <signUpForm />
        </div> */}
      </main>
    </div>
  );
};

export default SignUp;
