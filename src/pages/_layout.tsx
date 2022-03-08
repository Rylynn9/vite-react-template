import { Outlet } from 'react-router-dom';
import { useLocation, useParams, useNavigationType } from 'react-router-dom';
import { RouterTransition } from '@/components';
import styles from '../layouts/index.module.less';

export default () => {
  const params = useParams();
  const location = useLocation();
  const type = useNavigationType();
  console.log('====', params, location, type);
  return (
    <RouterTransition action={type} location={location}>
      <div className={styles.layout}>
        <Outlet />
      </div>
    </RouterTransition>
  );
};
