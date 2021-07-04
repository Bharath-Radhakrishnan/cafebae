import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
function MeetingCardTailwind() {
  return (
    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
      <img
        className="w-32 h-32 md:w-48 md:h-auto md:rounded-xl md:rounded-r-none rounded-full mx-auto object-cover"
        src="/user-img-1.jpeg"
        alt=""
      />
      <div className="pt-6 md:p-8 text-left">
        <div className="text-cyan-600">
          <h5>Sarah Dayan</h5>
        </div>
        <div className="text-gray-500">
          <p>Staff Engineer, Algolia</p>
        </div>

        <p className="text-lg font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="pt-6 md:p-8 mr-24 text-left md:flex md:flex-col items-center justify-center">
        <p className="flex">
          <EventIcon />
          <span>Date</span>
        </p>
        <p className="flex">
          <ScheduleIcon />
          Time
        </p>
      </div>
    </figure>
  );
}

export default MeetingCardTailwind;
