
//declaring a variable day
var day = {
  fullName: function() {
    return this.first + " " + this.last;
  }
}
var day1 = {
  first:"Its a",
  last: "HotDay"
}
var day2 = {
  first:"Its a",
  last: "Cold Day"
}

//calling function
day.fullName.call(day1);