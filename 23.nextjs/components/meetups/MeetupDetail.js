import { Fragment } from "react";
import styles from "./meetupdetail.module.css";

const MeetupDetail = ({ meetupData }) => {
  return (
    <section className={styles.detail}>
      <img className={styles.a} src={meetupData.image} alt={meetupData.title} />
      <h1>{meetupData.title}</h1>
      <address>{meetupData.address}</address>
      <p>{meetupData.descirption}</p>
    </section>
  );
};

export async function getStaticPaths() {}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log({ meetupId });
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        title: "title",
        address: "address",
        descirption: "descirption",
      },
    },
  };
}

export default MeetupDetail;
