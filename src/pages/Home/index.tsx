import Banner, { img } from "../../components/Banner"
import Card from "../../components/Card"
import Category, { categories, filterCategory } from "../../components/Category"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "./Home.module.css"

function Home() {
  return (
    <>
      <section className={styles.home}>
        <header>
          <Header />
        </header>
        <main>
          <Banner image={img[0]} />
          <Container>
            {categories.map((category: string, index: number) => (
              <Category category={category}>
                {filterCategory(index).map((video) => (
                  <Card id={video.id} />
                ))}
              </Category>
            ))}
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  )
}

export default Home
