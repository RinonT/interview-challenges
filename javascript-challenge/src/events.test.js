const events = require('./events');
const { sortArrayOfEvents, groupEventsByDay, moveEventToDay } = events;

const mockArrayOfEvents = [
  {
    id: 106,
    startsAt: '2021-01-27T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  },
  {
    id: 5676,
    startsAt: '2021-01-29T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  },
  {
    id: 156,
    startsAt: '2021-01-27T17:01:11Z',
    endsAt: '2021-01-27T22:01:11Z',
    title: 'Dinner',
  },
];

const mockArrayOfEventsSorted = [
  {
    id: 106,
    startsAt: '2021-01-27T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  },
  {
    id: 156,
    startsAt: '2021-01-27T17:01:11Z',
    endsAt: '2021-01-27T22:01:11Z',
    title: 'Dinner',
  },
  {
    id: 5676,
    startsAt: '2021-01-29T13:01:11Z',
    endsAt: '2021-01-27T15:01:11Z',
    title: 'Daily walk',
  },
];

const eventsGroupedByDay = {
  0: [
    {
      id: 106,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
    {
      id: 156,
      startsAt: '2021-01-27T17:01:11Z',
      endsAt: '2021-01-27T22:01:11Z',
      title: 'Dinner',
    },
  ],
  2: [
    {
      id: 5676,
      startsAt: '2021-01-29T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
  ],
};

const mockEventsByDayResult = {
  0: [
    {
      id: 106,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
    {
      id: 156,
      startsAt: '2021-01-27T17:01:11Z',
      endsAt: '2021-01-27T22:01:11Z',
      title: 'Dinner',
    },
  ],
  2: [
    {
      id: 5676,
      startsAt: '2021-01-29T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
  ],
};

describe('test groupEventsByday function', () => {
  test('sorting events by startsAt value works correctly', () => {
    const sortedEvents = sortArrayOfEvents(mockArrayOfEvents);
    expect(sortedEvents).toEqual(mockArrayOfEventsSorted);
  });

  test('sorts input events that is given in a random order', () => {
    expect(sortArrayOfEvents(mockArrayOfEvents)).toEqual(
      mockArrayOfEventsSorted,
    );
  });
  test('throws errors if missing an argument', () => {
    expect(groupEventsByDay()).toBe('Invalid input');
  });

  test('does not accept when passed en empty array', () => {
    expect(mockArrayOfEvents).not.toBe([]);
  });

  test('throws an error when the input data type is not the type of array', () => {
    expect(groupEventsByDay(5)).toBe('Invalid input');
  });

  test('checks if the events that is being returned is correct', () => {
    expect(groupEventsByDay(mockArrayOfEvents)).toStrictEqual(
      eventsGroupedByDay,
    );
  });

  test('checks if the events provided in the example are working correctly', () => {
    expect(groupEventsByDay(mockArrayOfEvents)).toStrictEqual(
      mockEventsByDayResult,
    );
  });

  test('the startsAt date of the returned events is "2021-01-27T13:01:11Z" and a string', () => {
    const firstEvent = groupEventsByDay(mockArrayOfEvents)[0];
    const firstEventStartDate = firstEvent[0].startsAt;
    expect(typeof firstEventStartDate).toBe('string');
    expect(firstEventStartDate).toEqual('2021-01-27T13:01:11Z');
  });
});

describe('moveEvent', () => {
  const mokeEventId = 106;
  const mokeToDay = 7;
  const eventsGroupedByDay = groupEventsByDay(mockArrayOfEvents);
  const eventsMovedToDay = moveEventToDay(
    eventsGroupedByDay,
    mokeEventId,
    mokeToDay,
  );

  test('type of eventsByDay is object', () => {
    expect(typeof mockEventsByDayResult).toBe('object');
  });

  test('throws an error if missing the groupByDay argument', () => {
    expect(moveEventToDay(115, 9)).toBe('Missing one or more arguments');
  });

  test('throws an error if missing the id argument', () => {
    expect(moveEventToDay(eventsGroupedByDay, 9)).toBe(
      'Missing one or more arguments',
    );
  });

  test('rejects if there is no passed argument', () => {
    expect(moveEventToDay()).toBe('Missing one or more arguments');
  });

  test('rejects invalid parameters', () => {
    expect(moveEventToDay(eventsGroupedByDay, '115', mokeToDay)).toBe(
      'Invalid input! Verify your inputs: eventsByDay must be an object, id and toDay must be numbers and positive',
    );
  });

  test('rejects a negative id or toDay value', () => {
    expect(moveEventToDay(eventsGroupedByDay, mokeEventId, -7)).toBe(
      'Invalid input! Verify your inputs: eventsByDay must be an object, id and toDay must be numbers and positive',
    );
  });

  test('gives the correct first event', () => {
    const firstEvent = mockEventsByDayResult[0][0];
    expect(firstEvent).toStrictEqual(mockArrayOfEventsSorted[0]);
  });

  test('checks if the passed id exists in the result of moved to day events', () => {
    expect(eventsMovedToDay[mokeToDay][0].id).toBe(mokeEventId);
  });

  test('moveEventToDay returns the right value', () => {
    expect(moveEventToDay(eventsGroupedByDay, 115, mokeToDay)).toStrictEqual(
      eventsMovedToDay,
    );
  });
});
