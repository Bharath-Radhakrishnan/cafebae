import MeetingCardTailwind from "../../../components/meeting/meeting-card-tailwind";
import meetingList from "../../../data/meetings";
function Meetings() {
  return (
    <div>
      <div>
        {meetingList.map((meeting) => {
          return <MeetingCardTailwind data={meeting} />;
        })}
      </div>
    </div>
  );
}

export default Meetings;
