import { Fragment } from "react/cjs/react.production.min";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";

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

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://learning:mongodblearning@cluster0.oabxf.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();
  return {
    fallback: false,
    paths: meetups.map(meetup => ({params: {
      meetupId: meetup._id.toString();
    }}))
    
    [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: "m1",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c2/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg",
        title: "First meetup",
        address: "Some street 5, 12345 Some city",
        description: "The meetup desc",
      },
    },
  };
}

export default MeetupDetails;