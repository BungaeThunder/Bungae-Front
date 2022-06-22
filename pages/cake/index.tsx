import type { NextPage } from 'next';
import Image from 'next/image';

// TODO: 절대경로로 바꾸기
import { AddLetterButton } from '../../component/cake/AddLetterButton';
import { DdayCount } from '../../component/cake/DdayCount';
import styles from '../../styles/Cake.module.css';

const Cake: NextPage = () => {
	const isArticle = true;
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.cake}>
					<Image src="/images/cake.png" alt="cake" height={500} width={500} />
				</div>
				<div className={styles.button}>
					<AddLetterButton isArticle={isArticle} />
				</div>
				<div className={styles.dday}>
					<DdayCount Birthday="2022-08-09"></DdayCount>
				</div>
			</main>
		</div>
	);
};

export default Cake;
