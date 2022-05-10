//our-domain.com/
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://pics4.city-data.com/cpicv/vfiles30453.jpg",
    description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    address: "97 Nut Swamp Ave, Unit A, Orland Park, IL 60462",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "https://pics4.city-data.com/cpicv/vfiles3302.jpg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    address: "8 Cardinal Avenue, Asheville, NC 28803",
  },
];

function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps(context) {
  console.log(context);

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   console.log(req);
//   console.log(res);

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
