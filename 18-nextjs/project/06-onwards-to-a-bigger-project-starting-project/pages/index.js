import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'p1',
        title: 'First meetup!',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Windhill.jpg/1024px-Windhill.jpg',
        address: 'Some str. 456',
        description: 'This is a meetup description!!!'
    },
    {
        id: 'p2',
        title: 'Second meetup!',
        image: 'https://ukgbc.s3.eu-west-2.amazonaws.com/wp-content/uploads/2019/04/05150857/Cover-ANZ-Framework-920x540.jpg',
        address: 'Some str. 656',
        description: 'This is a meetup description!!!'
    }
]

const HomePage = () => {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;