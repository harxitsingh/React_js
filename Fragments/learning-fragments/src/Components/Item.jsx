import styles from "./Item.module.css";

const Item = ({ FoodItem }) => {
  return (
    <li className={styles.list}>
      <span>{FoodItem}</span>
    </li>
  );
};

export default Item;
