import { Link } from 'react-router-dom'
import styles from './Header.module.css'

type header = React.ReactNode

function Header():header {
    return(
        <header className={styles.header}>
            <Link to='/'>
                <span>FakeFlix</span>
            </Link>
            <nav>
            <Link to='/'>
                Home
            </Link>
            <Link to='/watch'>
                Assistir
            </Link>
            </nav>
        </header>
    )
}

export default Header