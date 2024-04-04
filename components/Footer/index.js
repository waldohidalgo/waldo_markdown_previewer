import Image from "next/image";
import styles from "./footer.module.css";
import Typewriter from "typewriter-effect";
export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_contenido}>
        <div style={{ overflow: "hidden" }} translate="no">
          <Typewriter
            options={{
              strings: "Developed by:",
              autoStart: true,
              delay: 50,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>

        <div className={styles.logo}>
          <a
            href="https://linktr.ee/waldohidalgo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              priority={true}
              src="/images/logo_waldo.png"
              alt="logo waldo hidalgo"
              layout="responsive"
              width={820}
              height={218}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
