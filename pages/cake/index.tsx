import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// TODO: 절대경로로 바꾸기
import { AddLetterButton } from '../../component/cake/AddLetterButton';
import { DdayCount } from '../../component/cake/DdayCount';

const now = new Date();
const bday = new Date('2022-12-25');

const Cake: NextPage = () => {
  const isArticle = true;
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return !isSSR ? (
    <div>
      <main>
        <div>
          <div>Today: {now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()}</div>
          <div>Bday: {bday.getFullYear() + '-' + (bday.getMonth() + 1) + '-' + bday.getDate()}</div>
          <DdayCount
            Birthday={bday.getFullYear() + '-' + (bday.getMonth() + 1) + '-' + bday.getDate()}
            Today={now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()}
          ></DdayCount>
        </div>
        <div>
          <Image src="/images/cake.png" alt="cake" height={500} width={500} />
        </div>
        <div>
          <AddLetterButton isArticle={isArticle} />
        </div>
      </main>
    </div>
  ) : (
    // TODO: add loading page
    <div>
      <p>loading</p>
    </div>
  );
};

export default Cake;
