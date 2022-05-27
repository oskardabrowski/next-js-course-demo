import MeetupList from "../components/meetups/MeetupList";


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: "FirstMeetUp",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg"
  }
];

function HomePage() {
  return <MeetupList meetups={} />;
}

export default HomePage;
