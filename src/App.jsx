import styles from './App.module.css';

import Co_navibar from './pages/navibar/navibar';

import Co_top from './pages/about/top/top';
import Co_suMenh from './pages/about/suMenh/suMenh';
import Co_taiSao from './pages/about/taiSao/taiSao';
import Co_thamGia from './pages/about/thamGia/thamGia';
import Co_footer from './pages/about/footer/footer';

function App() {

  return (
    <div className={styles.main}>

      <Co_navibar />

      <Co_top />
      <Co_suMenh />
      <Co_taiSao />
      <Co_thamGia />
      <Co_footer />

    </div>
  )
}

export default App