
import styles from"@/styles/components/navbar.module.css"
const Navbar = () =>{
    return (
    <>
    <div className={styles.navbar}>
        <h1>Ayesha saeed</h1>
   
    <ul className={styles.navitems}>
       
    <li>Resume</li>
    <li>Work</li>
    <li>Blog</li>
    <li>About</li>
    </ul>
    </div>
    
    </>

    );
}
export default Navbar