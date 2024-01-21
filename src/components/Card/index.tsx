import styles from "./Card.module.css"

type CardProps = {
  id: string
}

function Card({ id }: CardProps) {
  return (
    <section className={styles.card}>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="external"
      >
        <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} />
      </a>
    </section>
  )
}

export default Card
