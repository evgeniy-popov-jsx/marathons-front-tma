import { Header } from '@src/presentation/components/Header';
import { Link } from 'react-router-dom';
import { Routes } from '@src/routes';
import styles from './Home.module.css';
import { Icon } from '@src/presentation/components/Icon';
import userStore from '@src/application/store/userStore';
import { observer } from 'mobx-react-lite';

export const Home = observer(() => {

  return (
    <div className={styles.wrapper}>
      <Header 
        title={'Марафоны'}
        desc={'Выбери свой путь'}
        avatar
        background={'main'}
      />
      <div className={styles.cards}>
        <div className={styles.card}>
          <Link to={Routes.Badgirl}>
            <div className={styles.header}>
              <div className={styles.name}>Плохая девочка</div>
              <div className={styles.time}>6 дней</div>
            </div>
            <div className={styles.desc}>
              <div className={styles.text}>
                Перестань быть удобной,<br/>
                начни играть по своим правилам
              </div>
              <div className={styles.count}>{userStore.completedDaysCount}/6</div>
            </div>
            <Icon name={'arrowRightFill'}  className={styles.icon}/>
          </Link>
        </div>
      </div>
    </div>
  );
});
