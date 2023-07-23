import Ticket from '../Ticket/Ticket';
import './lane.css';

const Lane = ({ name, list }) => {
  return (
    <div className="lane_container">
      <h2>{name}</h2>
      {list.map((task) => {
        return <Ticket name={task.name} description={task.description} />;
      })}
    </div>
  );
};

export default Lane;
