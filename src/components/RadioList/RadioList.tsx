import styles from "./RadioList.module.css";

type Item = { id: number; name: string };
type props = {
  items: Item[];
  radioGroupName: string;
  radioListCaption: string;
  activeItem: Item | null;
  onChange: (item: Item | null) => void;
};

function RadioList({
  items,
  radioGroupName,
  radioListCaption,
  activeItem,
  onChange,
}: props) {
  return (
    <div className={styles["radio-list"]}>
      <span>{radioListCaption}</span>
      {items.map((item) => (
        <div>
          <input
            type="radio"
            id={`${radioGroupName}-${item.id}`}
            name={radioGroupName}
            checked={activeItem === item}
            onChange={() => onChange(item)}
          />
          <label htmlFor={`${radioGroupName}-${item.id}`}>{item.name}</label>
        </div>
      ))}

      <div>
        <input
          type="radio"
          id={`All${radioGroupName}`}
          name={radioGroupName}
          checked={activeItem === null}
          onChange={() => onChange(null)}
        />
        <label htmlFor={`All${radioGroupName}`}>همه</label>
      </div>
    </div>
  );
}
export default RadioList;
