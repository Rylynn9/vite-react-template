import { useMount } from 'ahooks';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  useMount(() => {
    navigate('/home');
  });
  return null;
};
