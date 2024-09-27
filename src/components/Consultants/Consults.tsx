import Consult from "./Consult/Consult.tsx";
import Title, { titleProps } from "../Title/Title.tsx";
import styles from "./Consults.module.css";
type props = {
  title: titleProps;
  persons: object[];
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
          <Consult person={person} />
        ))}
      </div>
    </div>
  );
}

export default Consults;
