import { Avatar } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
//-----------Style-Sheet----------
import "./meeting-card.scss";
function MeetingCard() {
  return (
    <div className="meeting-card-container">
      <div className="user-avatar-container">
        <Avatar className="user-avatar">U</Avatar>
      </div>
      <div className="user-data-container">
        <h4>Name</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <p>
          <EventIcon />
          Date
        </p>
        <p>
          <ScheduleIcon />
          Time
        </p>
      </div>
    </div>
  );
}

export default MeetingCard;
