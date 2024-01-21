import home from "../../components/Banner/images/banner-home.png"
import assistir from "../../components/Banner/images/banner-assistir.png"
import favoritos from "../../components/Banner/images/banner-favoritos.png"
import styles from "./Banner.module.css"

export const img = [home, assistir, favoritos]

type BannerProps = { image: string }

function Banner({ image }: BannerProps) {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${image})` }}
    ></section>
  )
}

export default Banner
