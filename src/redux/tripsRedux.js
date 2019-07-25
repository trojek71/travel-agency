/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  else if (filters.duration){
    let tripdays=[];
    trips.forEach(function(obj){
      tripdays.push(obj.days);
    });
    for (let i=0; i<tripdays.length; i++){
      let day= tripdays[i];
      if ((day>=filters.duration.from)&&(day<=filters.duration.to))
        console.log('output', day);
    }

    //output = output.filter(trip => (tripdays==filters.duration.from).test(trip.name));
  // TODO - filter by duration

  //console.log('tripsRedux.j from ',filters.duration.from);
  //console.log('tripsRedux.j to',filters.duration.to);
  //console.log('czas wycieczki',tripdays);
  //console.log('output', output);
  }
  // TODO - filter by tags

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips;

  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;

  // TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
