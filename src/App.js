import styles from "./Styles/App.module.css";
import Navbar from "./Components/Navbar.js";
import Routings from "./Routes/Routings";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routings />
    </div>
  );
}

export default App;
