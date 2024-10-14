import styles from './App.module.css'
import MeLogo from './assets/me.png'
import Me from './assets/meDev.jpg'
import barberImg from './assets/barber.png'
import dashgoImg from './assets/dashgo.png'
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
          <a href='https://github.com/erildojs' target='blank' className={styles.social}>
            <BsGithub size={18} className={styles.socialIcon} />
            Github
          </a>
          <a href='https://www.linkedin.com/in/erildojs/' target='blank' className={styles.social}>
            <BsLinkedin size={18} className={styles.socialIcon} />
            Linkedin
          </a>
          <a href='https://www.instagram.com/erildo_francisco/' target='blank' className={styles.social}>
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
        <section className={styles.projects}>
          <article className={styles.project}>
            <img src={barberImg} className={styles.projectImg} alt="barbearia" />
            <a href='https://barber-kappa-one.vercel.app/' target='blank' className={styles.projectLink}>Acessar</a>
          </article>
          <article className={styles.project}>
            <img src={dashgoImg} className={styles.projectImg} alt="dashgo" />
            <a href='https://github.com/erildojs/dashgo' target='blank' className={styles.projectLink}>Acessar</a>
          </article>
          {/* <article className={styles.project}>
            <img src={barberImg} className={styles.projectImg} alt="barbearia" />
            <a href='https://barber-kappa-one.vercel.app/' target='blank' className={styles.projectLink}>Acessar</a>
          </article>
          <article className={styles.project}>
            <img src={barberImg} className={styles.projectImg} alt="barbearia" />
            <a href='https://barber-kappa-one.vercel.app/' target='blank' className={styles.projectLink}>Acessar</a>
          </article> */}
        </section>
      </main>
    </>
  )
}

