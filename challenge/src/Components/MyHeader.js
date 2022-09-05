import styles from "./MyHeader.module.css";
import health from "./Images/saude.png"

const MyHeader = () => {
    return(
        <>
            <header id={styles.header}>
                
            <div className={styles.logo}>
                    <div className={styles.logoImage_area}>
                        <img src={health} alt="Imagem referente à saúde"/>
                    </div>

                    <div className={styles.logoText_area}>
                        <p>SaúdeMais</p>
                    </div>
                </div>

                

            </header>
        </>
    );
};

export default MyHeader;