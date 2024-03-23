import React from "react";
import "./numCard.css";
import icon1 from "../../assets/images/icon-1.png";
import icon2 from "../../assets/images/icon-2.png";
import icon3 from "../../assets/images/icon-3.png";
import icon4 from "../../assets/images/icon-4.png";

const NumCard = () => {
  const numCardData = [
    {
      image: icon1,
      title: "Total Workforce",
      numbers: "3657485",
    },
    {
      image: icon2,
      title: "Access Granted",
      numbers: "3657485",
    },
    {
      image: icon3,
      title: "Access Denied",
      numbers: "3657485",
    },
    {
      image: icon4,
      title: "Device Alarms",
      numbers: "3657485",
    },
  ];

  return (
    <div className="numCardMain">    
    {numCardData?.map((index,i)=>(
            <div className="numCard" key={i}>
            <div className="iconImgss">
            <img src={index.image} alt="icon-1" />
            <h6>{index.title}</h6>
            <h5>{index.numbers}</h5>
          </div>
          </div>
        ))}
         
    </div>
  );
};

export default NumCard;
