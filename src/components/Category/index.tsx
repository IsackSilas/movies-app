import Videos from "../../json/videos.json"
import styles from "./Category.module.css"

export const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia",
]

export function filterCategory(id: number) {
  return Videos.filter((video) => video.category === categories[id])
}

type CategoryProps = {
  children: React.ReactNode
  category: string
}

function Category({ children, category }: CategoryProps) {
  return (
    <main className={styles.category}>
      <div>
        <h1>{category}</h1>
      </div>
      <section>{children}</section>
    </main>
  )
}

export default Category
