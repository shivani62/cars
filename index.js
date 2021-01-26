function fillCars() {
  emptyCars()
  switch (cmpy.selectedIndex) {
    case 1:
      mt_cars = ['-select-', 'Swift', 'Baleno', 'Dzire', 'Alto 800', 'Wagon Rs']
      fillDD(mt_cars)
      break
    case 2:
      hy_cars = ['-select-', 'i20', 'Venue', 'Creta', 'Grand i10 Nios']
      fillDD(hy_cars)
      break
    case 3:
      ho_cars = ['-select-', 'Amaze', 'Jazz', 'CR-V']
      fillDD(ho_cars)
      break
    case 4:
      mh_cars = ['-select-', 'Bolero', 'XUV500', 'Marazzo']
      fillDD(mh_cars)
      break
  }

  function fillDD(array) {
    for (i = 0; i < array.length; i++) {
      var opt = document.createElement("option")
      opt.value = array[i]
      opt.text = array[i]
      cars.add(opt)
    }
  }


  function emptyCars()
   {
    for (j = cars.options.length - 1; j >= 0; j--)
    {
      cars.remove(j)
    }
  }

}

function sp()
{
if(cars.value=="Swift")
{
  var rate=700000
}
else if (cars.value=="Baleno") {
  var rate=100000
}
else if(cars.value=="Dzire")
{
  var rate=490000
}
else if(cars.value=="Alto 800")
{
  var rate=560000
}
else if (cars.value=="Wagon Rs") {
  var rate=900000
}
else if(cars.value=="i20")
{
  var rate=800000
}
else if (cars.value=="Venue") {
  var rate=790000
}
else if (cars.value=="Creta") {
  var rate=650000
}
else if (cars.value=="Grand i10 Nios") {
  var rate=970000
}
else if (cars.value=="Amaze") {
  var rate=700000
}
else if (cars.value=="Jazz") {
  var rate=590000
}
else if (cars.value=="CR-V") {
  var rate=970000
}
else if (cars.value=="Bolero") {
  var rate=400000
}
else if (cars.value=="XUV500") {
  var rate=390000
}
else if (cars.value=="Marazzo") {
  var rate=856000
}

  speci.innerHTML = "Company Name: " + cmpy.value + "<br> Car Name: " + cars.options[cars.selectedIndex].text +
    "<br>Car Price: &#8377; " + rate

  cimg.src = cars.options[cars.selectedIndex].text + ".jpeg"


}
