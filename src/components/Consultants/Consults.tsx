import Consult from "./components/Consult/Consult.tsx";
import Title, { titleProps } from "../Title/Title.tsx";
import Indicator from "../../components/Indicator/Indicator.tsx";
import styles from "./Consults.module.css";
import { Consultant } from "../../models/consultant.ts";

type props = {
  title: titleProps;
  consultants: Consultant[];
};

function Consults({ title, consultants }: props) {
  return (
    <div className={styles.consults}>
      <Title
        prefix={title.prefix}
        suffix={title.suffix}
        main={title.main}
      ></Title>
      <div className={styles.container}>
        {consultants.map((person) => (
          <Consult key={person.ID} consultant={person} />
        ))}
      </div>
      <Indicator />
    </div>
  );
}

export default Consults;
