// import React from "react";
import styles from "./BannerCard.module.css";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

function BannerCard(props) {
  return (
    <div
      className={`${styles.container} ${props.isPrimary ? styles.primary : styles.secondary}`}
      style={{ backgroundColor: `${props.bgColor}` }}
    >
      <div className={styles["info-div"]}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.subtitle}>{props.description}</p>
        <button style={{ width: `${props.btnSize}` }}>
          {props.btnText}
          <HiOutlineArrowCircleLeft className={styles.arrow} />
        </button>
      </div>
      <img src={props.img} className={styles.pic} />
    </div>
  );
}

//
// type Props = {
//   title: string;
//   description: string;
//   img: string;
//   btnText: string;
//   btnSize: string;
//   bgColor: string;
// };
//
// function BannerCard({
//   title,
//   description,
//   img,
//   btnText,
//   btnSize,
//   bgColor,
// }: Props) {
//   return (
//     <div className={styles.container} style={{ backgroundColor: `${bgColor}` }}>
//       <div className={styles["info-div"]}>
//         <div></div>
//
//         <p className={styles.title}>{title}</p>
//         <p className={styles.subtitle}>{description}</p>
//         <button style={{ width: `${btnSize}` }}>
//           {btnText}
//           <HiOutlineArrowCircleLeft className={styles.arrow} />
//         </button>
//       </div>
//       <img src={img} className={styles.pic} />
//     </div>
//   );
// }

export default BannerCard;
