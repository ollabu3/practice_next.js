//domain/
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

// export async function getServerSideProps(context) {
//   // fetch
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DATA_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // 정적 페이지에서 데이터를 가져와야 할 때
  // fetch
  return {
    //항상 객체를 반환한다
    props: {
      meetups: DATA_MEETUPS,
    },
    revalidate: 1, // 페이지에 요청이 새로 들어오면 10초에서 서버를 다시 생성
  };
}

export default HomePage;

const DATA_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 5, 12345",
    description: "First meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 5, 12345",
    description: "Second meetup",
  },
];
