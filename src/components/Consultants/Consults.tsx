import Consult, { Person } from "./components/Consult/Consult.tsx";
import Title, { titleProps } from "../Title/Title.tsx";
import Indicator from "../../components/Indicator/Indicator.tsx";
import styles from "./Consults.module.css";
type props = {
  title: titleProps;
  persons: Person[];
};
function Consults({ title, persons }: props) {
  return (
    <div className={styles.consults}>
      <Title
        prefix={title.prefix}
        suffix={title.suffix}
        main={title.main}
      ></Title>
      <div className={styles.container}>
        {persons.map((person) => (
          <Consult key={person.ID} person={person} />
        ))}
      </div>
      <Indicator />
    </div>
  );
}

export default Consults;
