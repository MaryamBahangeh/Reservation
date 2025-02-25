import Consult from "./components/Consult/Consult.tsx";
import Title, { titleProps } from "../Title/Title.tsx";
import Indicator from "../../components/Indicator/Indicator.tsx";
import { Consultant } from "../../model/consultant.ts";
import styles from "./Consults.module.css";
import { useState } from "react";

type props = {
  title: titleProps;
  consultants: Consultant[];
};
function Consults({ title, consultants }: props) {
  const [scrollerX, setScrollerX] = useState(0);
  const increaseButtonClickHandler = () => setScrollerX(scrollerX + 300);
  const decreaseButtonClickHandler = () => setScrollerX(scrollerX - 300);
  return (
    <div className={styles.consults}>
      <Title
        prefix={title.prefix}
        suffix={title.suffix}
        main={title.main}
      ></Title>
      <div className={styles.container}>
        <div
          className={styles.scroller}
          style={{ transform: `translateX(${scrollerX}px)` }}
        >
          {consultants.map((consultant) => (
            <Consult key={consultant.id} consultant={consultant} />
          ))}
        </div>
      </div>
      <Indicator
        onNext={increaseButtonClickHandler}
        onPrevious={decreaseButtonClickHandler}
      />
    </div>
  );
}

export default Consults;
