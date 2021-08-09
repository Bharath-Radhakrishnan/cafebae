import { Button } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
function MeetingCardTailwind({ data }) {
  var event = {
    summary: "Google I/O 2021",
    location: "800 Howard St., San Francisco, CA 94103",
    description: "A chance to hear more about Google's developer products.",
    start: {
      dateTime: "2021-08-15T09:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: "2021-08-20T17:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
    attendees: [
      { email: "lpage@example.com" },
      { email: "sbrin@example.com" },
      { email: "bharath.jrgunner@gmail.com" },
      { email: "bharath.radhakrishnan16@gmil.com.com" },
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 },
      ],
    },
  };
  var gapi = window.gapi;
  /* 
    Update with your own Client Id and Api key 
  */
  var CLIENT_ID =
    "827505988598-ch7qvic7uslgdtuelq6dlp2gqv90okiu.apps.googleusercontent.com";

  var API_KEY = "AIzaSyBnxarhsUZm-VTd1eD_uIILs1Qf0l2Ltg8";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];

  var SCOPES = "https://www.googleapis.com/auth/calendar";
  const handleClick = async () => {
    gapi.load("client:auth2", async () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("bam!"));
      const result = gapi.auth2.getAuthInstance().isSignedIn.get();
      console.log(result);
      updateSigninStatus(result);
    });
  };

  const handleSignoutClick = (event) => {
    gapi.auth2.getAuthInstance().signOut();
  };

  function updateSigninStatus(isSignedIn) {
    console.log("is signed", isSignedIn);
    if (isSignedIn) {
      // listUpcomingEvents();
      createEvent();
    } else {
      gapi.auth2.getAuthInstance().signIn();
    }
  }
  const createEvent = () => {
    var request = gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });
    request.execute(function (event) {
      console.log(request, event, event.htmlLink);

      // appendPre("Event created: " + event.htmlLink);
    });
  };
  function listUpcomingEvents() {
    const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
    if (isSignedIn)
      gapi.client.calendar.events
        .list({
          calendarId: "primary",
          timeMin: new Date().toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: "startTime",
        })
        .then(function (response) {
          var events = response.result.items;
          // appendPre('Upcoming events:');
          console.log("Upcoming events:");

          if (events.length > 0) {
            for (var i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              // appendPre(event.summary + ' (' + when + ')')
              console.log(event.summary + " (" + when + ")");
            }
          } else {
            // appendPre('No upcoming events found.');
            console.log("No upcoming events found.");
          }
        });
    else console.log("Not Signed in");
  }

  return (
    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
      <img
        className="w-32 h-32 md:w-48 md:h-auto md:rounded-xl md:rounded-r-none rounded-full mx-auto object-cover"
        src="/user-img-1.jpeg"
        alt=""
      />
      <div className="pt-6 md:p-8 text-left">
        <div className="text-cyan-600">
          <h5>{data.name}</h5>
        </div>
        <div className="text-gray-500">
          <p>{data.job}</p>
        </div>

        <p className="text-lg font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="pt-6 md:p-8 mr-24 text-left md:flex md:flex-col items-center justify-center">
        <p className="flex">
          <EventIcon />
          <span>{data.date}</span>
        </p>
        <p className="flex">
          <ScheduleIcon />
          {data.time}
        </p>
        <Button onClick={handleClick}>Add Event</Button>
        <Button onClick={listUpcomingEvents}>Out</Button>

        {/* <Button onClick={fun}>Check</Button> */}
      </div>
    </figure>
  );
}

export default MeetingCardTailwind;

// var CLIENT_ID =
//   "123327700592-c5jm2iong3aeihttjhum8mufcj2q8gj4.apps.googleusercontent.com";
// var API_KEY = "AIzaSyC4W6X32XazWt44W5ukjwD_Mjd5m-SllRU";
