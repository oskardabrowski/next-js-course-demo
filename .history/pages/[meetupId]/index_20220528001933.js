import { Fragment } from "react/cjs/react.production.min";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
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

  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://learning:mongodblearning@cluster0.oabxf.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const selectedMeetup = await meetupsCollections.findOne({
    _id: ObjectId(meetupId),
  });

  console.log(selectedMeetup);

  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString();
      },
    },
  };
}

export default MeetupDetails;
