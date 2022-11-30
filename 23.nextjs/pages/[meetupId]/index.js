//domain/new-meetup
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const NewMeetupDetailPage = () => {
  return (
    <MeetupDetail
      image={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      }
      title={"title"}
      address={"address"}
      descirption={"descirption"}
    />
  );
};

export default NewMeetupDetailPage;
