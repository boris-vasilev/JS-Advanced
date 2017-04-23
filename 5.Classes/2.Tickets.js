class Ticket{
  constructor(destination,price,status){
    this.destination=destination;
    this.price=price;
    this.status=status;
  }
}
let ticketList = ['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed']
ticketList = ticketList.map(function(element){
  let ticket = element.split('|');
  return new Ticket(ticket[0],ticket[1],ticket[2]);
})
ticketList.sort(function(a,b){
  return a.destination>b.destination;
})
console.log(ticketList);
