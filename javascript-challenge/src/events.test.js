const events = require('./events');

const mockArrayOfEvents = [
  {
    id: 115,
    startsAt: '2021-01-27T11:01:11Z',
    endsAt: '2021-01-29T15:01:11Z',
    title: 'Cofference',
  },
  {
    id: 108,
    startsAt: '2021-01-20T13:01:11Z',
    endsAt: '2021-01-23T15:01:11Z',
    title: 'Relaxing time',
  },
];

const mockArrayOfEventsSorted = [
  {
    id: 108,
    startsAt: '2021-01-20T13:01:11Z',
    endsAt: '2021-01-23T15:01:11Z',
    title: 'Relaxing time',
  },
  {
    id: 115,
    startsAt: '2021-01-27T11:01:11Z',
    endsAt: '2021-01-29T15:01:11Z',
    title: 'Cofference',
  },
];

const eventsGroupedByDay = {
  0: [
    {
      id: 108,
      startsAt: '2021-01-20T13:01:11Z',
      endsAt: '2021-01-23T15:01:11Z',
      title: 'Relaxing time',
    },
  ],
  6: [
    {
      id: 115,
      startsAt: '2021-01-27T11:01:11Z',
      endsAt: '2021-01-29T15:01:11Z',
      title: 'Cofference',
    },
  ],
};

describe('test group eventsByday', () => {
  test('sort event by startsAt value', () => {
    const sortedEvents = events.sortArrayOfEvents(mockArrayOfEvents);
    expect(sortedEvents).toEqual(mockArrayOfEventsSorted);
  });

  test('throws an errow when passed en empty array types', () => {
    expect(typeof mockArrayOfEvents).not.toBe([]);
  });

  test('check if the events that is being returned is correct', () => {
    expect(events.groupEventsByDay(mockArrayOfEvents)).toStrictEqual(
      eventsGroupedByDay,
    );
  });

  test('the startsAAt date of the returned events must be "2021-01-20T13:01:11Z" and a string', () => {
    const firstEvent = events.groupEventsByDay(mockArrayOfEvents)[0];
    const firstEventStartDate = firstEvent[0].startsAt;
    expect(typeof firstEventStartDate).toBe('string');
    expect(firstEventStartDate).toEqual('2021-01-20T13:01:11Z');
  });
});

describe('moveEvent', () => {
  const mokeEventId = 115;
  const mokeToDay = 7;
  const eventsGroupedByDay = events.groupEventsByDay(mockArrayOfEvents);
  const eventsMovedToDay = events.moveEventToDay(
    eventsGroupedByDay,
    115,
    mokeToDay,
  );

  test('rejects invalid parameters', () => {
    expect(events.moveEventToDay(eventsGroupedByDay, '115', mokeToDay)).toBe(
      'Invalid input! Verify your inputs: eventsByDay must be an object, id and toDay must be numbers and positive',
    );
  });

  test('rejects a negative id or toDay value', () => {
    expect(events.moveEventToDay(eventsGroupedByDay, mokeEventId, -7)).toBe(
      'Invalid input! Verify your inputs: eventsByDay must be an object, id and toDay must be numbers and positive',
    );
  });

  test('gives the correct first event', () => {
    const firstEvent = eventsGroupedByDay[0][0];
    expect(firstEvent).toStrictEqual(mockArrayOfEventsSorted[0]);
  });

  test('check if the passed id exists in the result of moved to day events', () => {
    expect(eventsMovedToDay[mokeToDay][0].id).toBe(mokeEventId);
  });

  test('moveEventToDay returns the right value', () => {
    expect(
      events.moveEventToDay(eventsGroupedByDay, 115, mokeToDay),
    ).toStrictEqual(eventsMovedToDay);
  });
});
