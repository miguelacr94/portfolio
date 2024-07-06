import Image from "next/image";
import Wrapper from "../header/wrapper";
import Title from "../shared/title";
import Typography from "../shared/typography";
import styles from "./../../styles-modules/page.module.css";
const AboutMe = () => {
  return (
    <Wrapper>
      <section
        style={{
          width: "100%",
          paddingTop: 100,
          paddingBottom: 50,
          padding: 30,
        }}
        className={styles.twoColumnGrid}
      >
        <div className={styles.column}>
          <div
            style={{ padding: 10, position: "relative" }}
            className={styles.imageContent}
          >
            <Image
              src="/about/me.jfif"
              alt="Next.js Logo"
              width={300}
              height={300}
              priority
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.contentText}>
          <Title text="Sobre mi" width={200} color="black" size={40} />
          <div style={{ marginTop: 20 }}>
            <Typography type="standard" color="black" width={500} size={16}>
            Soy Miguel, tengo 29 años y soy ingeniero de sistemas. Me apasiona la programación y disfruto enfrentándome a desafíos tecnológicos para crear soluciones innovadoras. Me mantengo al día con las últimas tendencias y tecnologías en el campo, lo que me permite desarrollar proyectos efectivos y de alta calidad. Además, tengo un gran interés por el deporte y el estudio, lo que me ayuda a mantener un equilibrio saludable entre mente y cuerpo.            </Typography>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default AboutMe;
