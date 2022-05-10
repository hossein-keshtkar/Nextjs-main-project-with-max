//our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetups() {
  const newMeetupHandler = (newMeetup) => {
    console.log(newMeetup);
  };
  return <NewMeetupForm onAddMeetup={newMeetupHandler} />;
}

export default NewMeetups;
