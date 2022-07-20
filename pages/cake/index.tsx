import type { NextPage } from 'next';
import Image from 'next/image';

// TODO: 절대경로로 바꾸기
import { AddLetterButton } from '../../component/cake/AddLetterButton';
import { DdayCount } from '../../component/cake/DdayCount';
import { Sidebar } from '../../component/common/Sidebar';
import styles from '../../styles/Cake.module.css';
const now = new Date();
const bday = new Date('2022-12-25');

const Cake: NextPage = () => {
  const isArticle = true;
  return (
    <div className={styles.container}>
      <Sidebar></Sidebar>
      <main className={styles.main}>
        <div className={styles.dday}>
          <div>Today: {now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()}</div>
          <div>Bday: {bday.getFullYear() + '-' + (bday.getMonth() + 1) + '-' + bday.getDate()}</div>
          <DdayCount
            Birthday={bday.getFullYear() + '-' + (bday.getMonth() + 1) + '-' + bday.getDate()}
            Today={now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()}
          ></DdayCount>
        </div>
        <div className={styles.cake}>
          <Image src="/images/cake.png" alt="cake" height={500} width={500} />
        </div>
        <div className={styles.button}>
          <AddLetterButton isArticle={isArticle} />
        </div>
      </main>
    </div>
  );
};

export default Cake;
