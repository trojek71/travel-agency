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
    output = output.filter(trip => (trip.days>=filters.duration.from&&trip.days<=filters.duration.to));
    console.log('output- duration',output);
  }

  // TODO - filter by tags
  if (filters.tags){

    const newArray=[];

    for( let trip of output){
      for (let tag of trip.tags)

        if (filters.tags.indexOf(tag)>=0 && newArray.indexOf(trip)<=0 ) {

          newArray.push(trip);
          console.log('lista wycieczek',newArray);
        }
        //newArray.push(trip);
    }

    output=newArray;

  }




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
