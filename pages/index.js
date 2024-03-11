import {
  useEffect
} from 'react';

const index = () => {
  useEffect(() => {
    window.location = '/create';
  }, []);
};

export default index;
