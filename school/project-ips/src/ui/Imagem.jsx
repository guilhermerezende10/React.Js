import styles from "./Imagem.module.css"

function Imagem({path}) {
    return (
        <img src={path} className={styles.img}/>
    )
}

export default Imagem
