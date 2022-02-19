import { useNavigate } from 'react-router-dom';
import { Button } from 'antd-mobile';
import { useMount } from 'ahooks';
import styles from './index.module.less';

export default () => {
  const navigate = useNavigate();
  console.log(import.meta.env.VITE_REQUESET_IMAGE_DOMIN);
  useMount(() => {
    console.log('home');
  });
  return (
    <div className={styles.page}>
      Home
      <div onClick={() => navigate('/payment')}>跳转payment</div>
      <div onClick={() => navigate('/inhosp', { replace: true })}>
        跳转inhosp
      </div>
      <Button color="primary">button</Button>
    </div>
  );
};
