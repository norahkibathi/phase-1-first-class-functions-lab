const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };

  // returnLastTwoDrivers 
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };

  // array of functions 
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  // FareMultiplier
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };

  // fareDoubler 
  const fareDoubler = createFareMultiplier(2);

  // fareTripler
  const fareTripler = createFareMultiplier(3);

  // selectDifferentDrivers 
  const selectDifferentDrivers = function(drivers, fctn) {
    return fctn(drivers);
  };
