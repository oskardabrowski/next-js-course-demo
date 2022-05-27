import { useEffect, useState } from "react";

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
    description: "This is second meetup",
  },
  {
    id: "m3",
    title: "FirstMeetUp",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is third meetup",
  },
];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   // send http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: DUMMY_MEETUPS,
//   };
// }

export async function getStaticProps() {
  const result = fetch("/api/meetups");
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
