function clock (){
  var date = new Date();
  day = date.getDay();
  month = date.getMonth();
  dt = date.getDate();


  if(day == 0){
    day = "Sun"
  }

  else if (day == 1 ){
    day = "Mon"
  }

  else if (day == 2){
    day = "Tue"
  }

  else if (day == 3){
    day = "Wed"
  }

  else if (day == 4){
    day ="Thu"
  }

  else if (day == 5){
    day = "Fri"
  }

  else if (day == 6){
    day = "Sat"
  }


  if(month == 0){
    month = "Jan"
  }

  else if (month == 1 ){
    month = "Feb"
  }

  else if (month == 2){
    month = "Mar"
  }

  else if (month == 3){
    month = "Apr"
  }

  else if (month == 4){
    month ="May"
  }

  else if (month == 5){
    month = "Jun"
  }

  else if (month == 6){
    month = "Jul"
  }

  else if (month == 7){
    month = "Aug"
  }

  else if (month == 8){
    month = "Sep"
  }

  else if (month == 9){
    month = "Oct"
  }

  else if (month == 10){
    month = "Nov"
  }

  else if (month == 11){
    month = "Dec"
  }
  

  

  


  


document.querySelectorAll('.date')[0].innerHTML = day + ', ' + dt + ' ' + month;


}


setInterval (clock, 1000);