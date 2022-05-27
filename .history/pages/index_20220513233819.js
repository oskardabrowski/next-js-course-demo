import { useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "FirstMeetUp",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "FirstMeetUp",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is first meetup",
  },
  {
    id: "m3",
    title: "FirstMeetUp",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is first meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
