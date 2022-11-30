//domain/
import MeetupList from "../components/meetups/MeetupList";

const HomePage = () => {
  return <MeetupList meetups={DATA_MEETUPS} />;
};

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
