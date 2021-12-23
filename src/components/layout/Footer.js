import styles from './Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer () {
    return (
        <footer className={styles.footer}>       
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.h4}>
                <span>WBR</span> &copy; 2024 - Todos os direitos reservados
            </p>
        </footer>
    )
}

export default Footer