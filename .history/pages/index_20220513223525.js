import MeetupList from "../components/meetups/MeetupList";


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: "FirstMeetUp",
    image: ""
  }
];

function HomePage() {
  return <MeetupList meetups={} />;
}

export default HomePage;
