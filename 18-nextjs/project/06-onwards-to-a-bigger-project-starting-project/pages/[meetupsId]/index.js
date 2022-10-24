import MeetupDetails from "../../components/meetups/MeetupDetails"

const MeetupDetailsPage = (props) => {
    return <MeetupDetails
        image='https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Windhill.jpg/1024px-Windhill.jpg'
        title='First meetup'
        description='This is some description!'
        address='Some Str.5, Some City'
    />
}

export async function getStaticPaths(){
    return{
        fallback: false,
        paths:[
            {
                params:{
                    meetupsId: 'p1'
                }
            },
            {
                params:{
                    meetupsId: 'p2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {

    const id = context.params.meetupsId;
    console.log(id)

    return {
        props: {
            meetupDetails: {
                image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Windhill.jpg/1024px-Windhill.jpg',
                title: 'First meetup',
                description: 'This is some description!',
                address: 'Some Str.5, Some City'
            }
        }
    }
}

export default MeetupDetailsPage;