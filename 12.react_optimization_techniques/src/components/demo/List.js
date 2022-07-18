import React, { memo, useMemo } from "react";
import styles from "./List.module.css";

const List = ({ title, items }) => {
  console.log("LIST");

  const sortedList = useMemo(() => {
    console.log("SORTED");
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div className={styles.list}>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(List);
