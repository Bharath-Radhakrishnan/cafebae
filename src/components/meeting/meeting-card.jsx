import "./meeting-card.scss";
function MeetingCard() {
  return (
    <div className="meeting-card-container">
      <div>
        <h3>Meeting</h3>
        <p>Member1</p>
        <p>Member2</p>
      </div>
      <div>
        <p>Time</p>
        <p>Link goes here</p>
      </div>
    </div>
  );
}

export default MeetingCard;
