const moment = require('moment');
const { addDays, parseISO } = require('date-fns');
/** 
  An event could look like this:
  ```
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z', 
    endsAt: '2021-01-27T15:01:11Z', 
    title: 'Daily walk',
  }
  ```
*/

const arrayOfEvents = [
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Coding challenges',
  },
  {
    id: 115,
    startsAt: '2021-01-27T11:01:11Z',
    endsAt: '2021-01-29T15:01:11Z',
    title: 'Cofference',
  },
  {
    id: 110,
    startsAt: '2021-01-27T12:01:11Z',
    endsAt: '2021-01-27T22:01:11Z',
    title: 'Playing a guitar',
  },
  {
    id: 108,
    startsAt: '2021-01-20T13:01:11Z',
    endsAt: '2021-01-23T15:01:11Z',
    title: 'Relaxing time',
  },
  {
    id: 109,
    startsAt: '2021-01-20T13:01:11Z',
    endsAt: '2021-01-23T15:01:11Z',
    title: 'Relaxing time',
  },
];

/** 
  Take an array of events and return an object that is a  mapping from the 'day' to the events occuring on that day.
  The keys should be the day-difference to the earliest occuring event.
  Each days events should be sorted in ascending order of startsAt

  A result could look like:
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      { id: 156, startsAt: '2021-01-27T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
    ],
    2: [
      { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
    ]
  }
 ```

 Your solution should not modify any of the function arguments
*/

const sortArrayOfEvents = (events) => {
  return events.sort(
    (firstEvent, secondEvent) =>
      new Date(firstEvent.startsAt) - new Date(secondEvent.startsAt),
  );
};

const groupEventsByDay = (events) => {
  if (events && typeof events === 'object' && events !== []) {
    const arrayOfEventsSorted = sortArrayOfEvents(events);
    const firstEventObj = arrayOfEventsSorted[0];

    // convert first date
    const momentOfFirstDate = moment(firstEventObj.startsAt);

    // Adding a difference property to each event and grouping events according to the day differences
    const eventsGroupedByDay = events.reduce((allEvents, event) => {
      const date = moment(event.startsAt);
      const dateDifference = date.diff(momentOfFirstDate, 'days');
      event = {
        ...event,
        difference: dateDifference,
      };

      allEvents[event.difference] = allEvents[event.difference] || [];
      allEvents[event.difference].push(event);
      return allEvents;
    }, {});

    events = eventsGroupedByDay;
    // Restore the event's object structure to its original structure
    Object.keys(events).map((key) => {
      events[key] = events[key].map((event) => {
        return {
          id: event.id,
          startsAt: event.startsAt,
          endsAt: event.endsAt,
          title: event.title,
        };
      });
    });
    return events;
  } else {
    return `Invalid input`;
  }
};

groupEventsByDay(arrayOfEvents);
/** 
  Adjust the start and end date of an event so it maintains its total duration, but is moved `toDay`.
  `eventsByDay` should be the same as the return value of `groupEventsByDay`
  `id` will be the event that should be moved
  `toDay` will be a number that indicates the key of `eventsByDay` that the target event should be moved to

  Example:
  ```
  eventsByDay(
    {
      0: [
        { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
      ],
      2: [
        { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
      ]
    },
    5676,
    3,
  )
  ```
  Should return something like 
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
    ],
    3: [
      { id: 5676, startsAt: '2021-01-30T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
    ]
  },
  ```

  Your solution should not modify any of the function arguments
*/

const moveEventToDay = (eventsByDay, id, toDay) => {
  if (eventsByDay && id && toDay) {
    if (
      typeof eventsByDay === 'object' &&
      typeof id === 'number' &&
      id >= 0 &&
      typeof toDay === 'number' &&
      toDay >= 0
    ) {
      const firstEvent = eventsByDay[0][0];
      Object.keys(eventsByDay).map((key) => {
        const eventsFromKeys = eventsByDay[key];
        const targetedEvent = eventsFromKeys.filter((event) => event.id === id);

        // Change dates of the targeted event
        const targetedEventUpdated = targetedEvent.map((event) => {
          const eventStartsAt = JSON.stringify(
            addDays(parseISO(firstEvent.startsAt), toDay),
          );

          const eventEndsAt = JSON.stringify(
            addDays(parseISO(firstEvent.endsAt), toDay),
          );
          return {
            ...event,
            startsAt: eventStartsAt.replace(/["]/g, ''),
            endsAt: eventEndsAt.replace(/["]/g, ''),
          };
        });

        const eventsWithoutTheTargetedOne = eventsByDay[key].filter(
          (event) => event.id !== id,
        );

        eventsByDay[key] = [...eventsWithoutTheTargetedOne];

        if (eventsByDay[toDay] && eventsByDay[toDay] !== []) {
          const eventMovedToDay = eventsByDay[toDay];
          const eventMovedToDayWithPreviousEvents = [
            ...eventMovedToDay,
            targetedEventUpdated[0],
          ];

          // Remove any undefined event if there is in the events
          const updatedMovedToDayEvent = eventMovedToDayWithPreviousEvents.filter(
            (event) => event !== undefined,
          );

          eventsByDay[toDay] = updatedMovedToDayEvent;
        } else {
          eventsByDay[toDay] = [targetedEventUpdated[0]]; // It can be undefined
        }
      });
      return eventsByDay;
    } else {
      return `Invalid input! Verify your inputs: eventsByDay must be an object, id and toDay must be numbers and positive`;
    }
  } else {
    return `Missing one or more arguments`;
  }
};

moveEventToDay(groupEventsByDay(arrayOfEvents), 110, 9);

module.exports = {
  sortArrayOfEvents,
  groupEventsByDay,
  moveEventToDay,
};
