import './css/global.css';
import styles from './css/App.module.css';

import { Header } from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <h1>a</h1>
      </div>
    </div>
  )
}

export default App
