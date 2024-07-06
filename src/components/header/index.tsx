import Image from "next/image";
import Title from "../shared/title";
import styles from './../../styles-modules/header.module.css'

const Header = () => {
  return (
    <header style={{ width: "100%" }}>
      <section style={header}>
        <div
          style={{
            backgroundColor: "#151414",
            width: "30%",
            position: "relative",
          }}
        >
          <div
            className={styles.titleContent}
          >
            <Title text="Miguel Contreras" size={50} width={300} />
          </div>
        </div>
        <div
          className={styles.imageContent}
        >
          <Image
            src="/about/me.jfif"
            alt="Next.js Logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </section>
    </header>
  );
};

export default Header;

const header = {
  width: "100%",
  display: "flex",
  height: 600,
};
