import Image from "next/image";
import React from "react";
import Typography from "../shared/typography";
import style from "./../../styles-modules/page.module.css";

interface InterestCardInterface {
  title: string;
  icon: React.ReactNode;
  image: string;
}

interface CardProps {
  data: InterestCardInterface;
  isActive?: boolean;
}

const InterestCard = ({ data, isActive }: CardProps) => {
  const { icon, image, title } = data;

  // const styleCard = {
  //   objectFit: "fill",
  //   display: "flex",
  //   position: "relative",
  //   padding: 20,
  //   backgroundColor: " #151414",
  //   height: "300px",
  //   width: "300px",
  //   paddingTop: 100,
  //   paddingBottom: 100,
  // };

  const styleCard = {
    bottom: isActive ? 0 : 100,
    // Otros estilos aquí
  };

  return (
    <div className={style.interestCard}>
      <Image
        src={image}
        alt="Interest Image"
        width={250}
        height={250}
        priority
        className={style.imageInterest}
        // style={{
        //   objectFit: "fill",
        //   display: "flex",
        //   position: "relative",
        //   padding: 20,
        //   backgroundColor: " #151414",
        //   height: "300px",
        //   width: "300px",
        //   paddingTop: 100,
        //   paddingBottom: 100,
        // }}
      />
      <div className={style.textInterestContent}>
        <Typography type="standard" color="white">
          {title}
        </Typography>
        <div className={style.iconInterestContent}>{icon}</div>
      </div>
      <div className={style.textInterestContentMobil} style={styleCard}>
        <Typography type="standard" color="white">
          {title}
        </Typography>
        <div className={style.iconInterestContent}>{icon}</div>
      </div>
    </div>
  );
};

export default InterestCard;
