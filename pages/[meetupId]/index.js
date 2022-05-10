//our-domain.com/meetup-by-id
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupId() {
  return (
    <MeetupDetail
      image="https://pics4.city-data.com/cpicv/vfiles30453.jpg"
      title="First Meetup"
      description="`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.`"
      address="97 Nut Swamp Ave, Unit A, Orland Park, IL 60462"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
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
  // console.log(context);

  return {
    props: {
      description: "",
      address: "",
      image: "",
      title: "",
      id: meetupId,
    },
    revalidate: 10,
  };
}

export default MeetupId;
