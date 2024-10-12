import styles from './App.module.css'
import MeLogo from './assets/me.png'
import Me from './assets/meDev.jpg'
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export function App() {
  return (
    <>
      <header className={styles.header}>
        <a href="/">
          <img src={MeLogo} alt="Logo" />
        </a>
      </header>
      <section className={styles.main}>
        <div className={styles.info}>
          <h1 className={styles.infoTitle}>Meu nome é Erildo Francisco</h1>
          <p className={styles.infoSubTitle}>Desenvolvedor web com foco principalmente em reactjs e nodejs</p>
          <a href='https://github.com/erildojs' className={styles.social}>
            <BsGithub size={18} className={styles.socialIcon} />
            Github
          </a>
          <a href='https://www.linkedin.com/in/erildojs/' className={styles.social}>
            <BsLinkedin size={18} className={styles.socialIcon} />
            Linkedin
          </a>
          <a href='https://www.instagram.com/erildo_francisco/' className={styles.social}>
            <BsInstagram size={18} className={styles.socialIcon} />
            Instagram
          </a>
        </div>

        <div className={styles.me}>
          <img src={Me} alt="minha cara" className={styles.meFace} />
        </div>
      </section>
      <main className={styles.content}>
        <h1 className={styles.contentTitle}>Projectos</h1>
        <article className={styles.projects}></article>
      </main>
    </>
  )
}

