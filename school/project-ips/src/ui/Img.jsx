import styles from "./Img.module.css"

function Img({path}) {
    return (
        <img src={path} className={styles.img}/>
    )
}

export default Img
