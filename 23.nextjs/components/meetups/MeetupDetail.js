import { Fragment } from "react";
import styles from "./meetupdetail.module.css";

const MeetupDetail = ({ image, title, address, descirption }) => {
  return (
    <section className={styles.detail}>
      <img className={styles.a} src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{descirption}</p>
    </section>
  );
};

export default MeetupDetail;
