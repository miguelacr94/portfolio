// requires a loader
"use client";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { interestsData } from "../../utils/data";
import Wrapper from "../header/wrapper";
import Title from "../shared/title";
import styles from "./../../styles-modules/page.module.css";
import InterestCard from "./interes-card";
const Interest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCarouselChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <section style={{ paddingBottom: 100 }}>
      <Wrapper>
        <div>
          <div style={{ width: "100%", marginTop: 100 }}>
            <Title
              color="black"
              text="Intereses"
              width={100}
              align="center"
              size={40}
            />
          </div>

          <div className={styles.fourColumnGrid} style={{ marginTop: 50 }}>
            {interestsData.map((interest) => {
              return <InterestCard key={interest.title} data={interest} />;
            })}
          </div>

          <div
            className={styles.carouselView}
            style={{ marginTop: 50, width: 380 }}
          >
            <Carousel
              autoPlay
              interval={3000}
              infiniteLoop
              selectedItem={activeIndex}
              onChange={handleCarouselChange}
              showStatus={false}
              centerMode
            >
              {interestsData.map((interest, index) => (
                <InterestCard
                  key={interest.title}
                  data={interest}
                  isActive={index === activeIndex}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Interest;
