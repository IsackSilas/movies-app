import styles from './Container.module.css'

type ContainerProps = {children: React.ReactNode}

function Container({children}: ContainerProps) {
    return(
        <section className={styles.container}>
                {children}
        </section>
    )
}

export default Container