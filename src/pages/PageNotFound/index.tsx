import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './PageNotFound.module.css'

function PageNotFound() {
    return(
        <>
        <Header/>
        <Container>
            <section className={styles.pagenotfound}>
                <h1>404: Página Não Encontrada</h1>
            </section>
        </Container>
        <Footer/>
        </> 
    )
}

export default PageNotFound