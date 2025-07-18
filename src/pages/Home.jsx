import Navbar from "../components/Navbar"
import NavHome from "../components/NavHome";
import styles from '../styles/home.module.css';
import { useNavigate } from "react-router-dom";

function Home(){

    const Nav = useNavigate();

    const PageHandle = ()=>{
        Nav('/collection')
    }

    return(
        <>      
        <NavHome/>
        <div className={styles.container}>
        <header className={styles.hero}>
            <h1>Welcome to NueWear 👕</h1>
            <p>Explore the latest fashion for Men, Women, and Kids</p>
            <button className={styles.cta} onClick={PageHandle}>Shop Now</button>
        </header>

        <section className={styles.categories}>
            <div className={styles.card}>
            <h2>Men</h2>
            <p>Stylish and comfortable fashion for men</p>
            </div>
            <div className={styles.card}>
            <h2>Women</h2>
            <p>Elegant and trendy outfits for women</p>
            </div>
            <div className={styles.card}>
            <h2>Kids</h2>
            <p>Colorful and fun clothes for kids</p>
            </div>
        </section>
        </div>

        </>
    )
}
export default Home