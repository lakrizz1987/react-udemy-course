import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetup = () => {
    
    function onAddHandler(meetupData) {
        console.log(meetupData);
    }

    return <NewMeetupForm onAddMeetup={onAddHandler} />
}

export default NewMeetup;