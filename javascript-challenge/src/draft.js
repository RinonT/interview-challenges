// const moveEventToDay = (eventsByDay, id, toDay) => {
//   // Find the event that has the id argument
//   const eventWithGivenId = Object.keys(eventsByDay)
//     .map((key) => {
//       return eventsByDay[key].find((event) => event.id === id);
//     })
//     .filter((event) => event !== undefined);

//   // Get keys of events
//   const keys = Object.keys(eventsByDay).sort(function (a, b) {
//     return a - b;
//   });

//   let getPreviousEvent = function (key, i) {
//     let index = keys.indexOf(key);
//     if ((i == -1 && index > 0) || (i == 1 && index < keys.length - 1)) {
//       index = index + i;
//     }
//     return eventsByDay[keys[index]];
//   };

//   const getEventKey = (eventObject, event) => {
//     let key = Object.keys(eventObject).find((key) =>
//       eventsByDay[key].find((eventExtention) => eventExtention === event)
//         ? true
//         : false,
//     );
//     return key;
//   };

//   const givenEventKey = getEventKey(eventsByDay, eventWithGivenId[0]);
//   const previousEventDateArray = getPreviousEvent(givenEventKey, -1);
//   // Get the last event in the event array if there is more than one
//   const previousEventDate =
//     previousEventDateArray.length > 0
//       ? previousEventDateArray[previousEventDateArray.length - 1]
//       : previousEventDateArray[0];

//   const eventsMovedByDay = Object.keys(eventsByDay).map((key) => {
//     const eventsFromEventKeys = eventsByDay[key];
//     const eventsWithDatesModified = eventsFromEventKeys.map((event) => {
//       if (event.id === id) {
//         const startDate = addDays(parseISO(previousEventDate.startsAt), toDay);
//         const endDate = addDays(parseISO(previousEventDate.endsAt), toDay);

//         return {
//           ...event,
//           startsAt: JSON.stringify(startDate),
//           endsAt: JSON.stringify(endDate),
//         };
//       }
//       return { ...event };
//     });

//     return eventsWithDatesModified;
//   });

//   console.log(eventsMovedByDay);
//   console.log(eventsByDay);
//   // Change the key to today argument
//   return eventsByDay;
// };
// const moveEventToDay = (eventsByDay, id, toDay) => {
//   // Find the event that has the id argument
//   const eventWithGivenId = Object.keys(eventsByDay)
//     .map((key) => {
//       return eventsByDay[key].find((event) => event.id === id);
//     })
//     .filter((event) => event !== undefined);

//   // Get keys of events
//   const keys = Object.keys(eventsByDay).sort(function (a, b) {
//     return a - b;
//   });

//   let getPreviousEvent = function (key, i) {
//     let index = keys.indexOf(key);
//     if ((i == -1 && index > 0) || (i == 1 && index < keys.length - 1)) {
//       index = index + i;
//     }
//     return eventsByDay[keys[index]];
//   };

//   const getEventKey = (eventObject, event) => {
//     let key = Object.keys(eventObject).find((key) =>
//       eventsByDay[key].find((eventExtention) => eventExtention === event)
//         ? true
//         : false,
//     );
//     return key;
//   };

//   const givenEventKey = getEventKey(eventsByDay, eventWithGivenId[0]);
//   const previousEventDateArray = getPreviousEvent(givenEventKey, -1);
//   // Get the last event in the event array if there is more than one
//   const previousEventDate =
//     previousEventDateArray.length > 0
//       ? previousEventDateArray[previousEventDateArray.length - 1]
//       : previousEventDateArray[0];

//   const eventsMovedByDay = Object.keys(eventsByDay).map((key) => {
//     const eventsFromEventKeys = eventsByDay[key];
//     const eventsWithDatesModified = eventsFromEventKeys.map((event) => {
//       if (event.id === id) {
//         const startDate = addDays(parseISO(previousEventDate.startsAt), toDay);
//         const endDate = addDays(parseISO(previousEventDate.endsAt), toDay);

//         return {
//           ...event,
//           startsAt: JSON.stringify(startDate),
//           endsAt: JSON.stringify(endDate),
//         };
//       }
//       return { ...event };
//     });

//     return eventsWithDatesModified;
//   });

//   console.log(eventsMovedByDay);
//   console.log(eventsByDay);
//   // Change the key to today argument
//   return eventsByDay;
// };

if (eventWithGivenId.length > 0) {
  let dayDifferance = toDay - key;
  const eventWithGivenIdUpdated = eventWithGivenId.map((event) => {
    return {
      ...event,
      startsAt: moment(event.startsAt)
        .add(dayDifferance, 'days')
        .format(DATE_FORMAT),
      endsAt: moment(event.endsAt)
        .add(dayDifferance, 'days')
        .format(DATE_FORMAT),
    };
  });
  if (!eventsByDay[toDay]) {
    eventsByDay[toDay] = new Array(eventWithGivenIdUpdated[0]);
  } else {
    eventsByDay[toDay].push(eventWithGivenIdUpdated[0]);
  }
}
// let previousEvent = eventsByDay[0];
// console.log(previousEvent, 'prev');

// if (previousEvent.length > 0) {
//   previousEvent = previousEvent[previousEvent.length - 1];
// } else {
//   previousEvent = previousEvent[0];
// }
// Find dates of the first event
