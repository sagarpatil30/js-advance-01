//
const bookings = [];
function createBookings(flightNum='LH321', price, passengers) {
 
// setting the default parameters 
  price = price || 30000;
  passengers = passengers || 59;

  const booking = {
    flightNum,
    price,
    passengers,
  };
  console.log(booking);
  //   bookings.push(booking);
}

createBookings();
