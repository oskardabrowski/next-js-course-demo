import { Fragment } from "react/cjs/react.production.min";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/c/c2/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg"
      title="First meetup"
      address="Some street 5, 12345 Some city"
      description="The meetup desc"
    />
  );
}

export default MeetupDetails;