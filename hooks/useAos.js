import {
  useEffect
} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useAos = (options = {}) => {
  useEffect(() => {
    const aosSettings = {
      easing: 'ease-out-cubic',
      once: true,
      duration: 600,
      offset: 0
    };

    const newSettings = { ...aosSettings, ...options };

    Aos.init({
      easing: newSettings.easing,
      once: newSettings.once,
      duration: newSettings.duration,
      offset: newSettings.offset
    });
  }, []);
};

export default useAos;
