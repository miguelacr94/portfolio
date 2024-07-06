import AboutMe from "../components/about-me";
import Contact from "../components/contact";
import Header from "../components/header";
import Interest from "../components/interests";

export default function Home() {
  return (
    <main style={{ backgroundColor: "white", overflow: "hidden" }}>
      <Header />
      <AboutMe />
      <Interest />
      <Contact />
    </main>
  );
}

// <Image
// className={styles.logo}
// src="/next.svg"
// alt="Next.js Logo"
// width={180}
// height={37}
// priority
// />
