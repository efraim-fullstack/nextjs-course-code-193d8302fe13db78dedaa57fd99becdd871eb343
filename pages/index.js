import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

const Homepage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      heaeder
      <EventList items={featuredEvents}/>
    </div>
  )
}
export default Homepage;