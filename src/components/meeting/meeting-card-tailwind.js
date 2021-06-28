import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
function MeetingCardTailwind() {
  return (
    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
      <img
        className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="/logo.png"
        alt=""
        width={384}
        height={512}
      />
      <div className="pt-6 md:p-8 pr-16 text-left md:text-left space-y-4">
        <div className="text-cyan-600">
          <h5>Sarah Dayan</h5>
        </div>
        <div className="text-gray-500">Staff Engineer, Algolia</div>

        <p className="text-lg font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="pt-6 md:p-8 mr-24 text-left md:text-left space-y-4">
        <p>
          <EventIcon />
          <span>Date</span>
        </p>
        <p>
          <ScheduleIcon />
          Time
        </p>
      </div>
    </figure>
  );
}

export default MeetingCardTailwind;
