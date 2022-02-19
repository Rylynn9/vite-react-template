import { useState } from 'react';
import { createContainer } from 'unstated-next';

export default createContainer(() => {
  const [login, setLogin] = useState(false);
  return {
    login,
    setLogin,
  };
});
