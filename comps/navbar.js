import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navigasi = () => {
    return ( 
        <nav>
            <Link href='/'><div><img className={styles.logomxm} src="../../Logo_MXM.png" alt="Maxima22" layout="responsive"/></div></Link>
        </nav>
     );
}
 
export default Navigasi;