// WHEN YOU CLICK PRINCESS

let optionOneClickCounter = 1
$(".option-one").click(function() {
  if (optionOneClickCounter == 1) {
    $(".type1").html("Hello, new resident. To congratulate you on your virtual life We would like to present you with a small gift a car");
    console.log("why1");
  }
  if (optionOneClickCounter == 2) {
    $(".type1").html("Welcome to this virtual world, Tina");
    console.log("why2");
  }
  if (optionOneClickCounter == 3) {
    $(".type1").html("You got a car. Go down and enjoy your virtual trip, and...");
document.getElementById("car-img").style.display = "block";
    console.log("why3");
  }
  else if (optionOneClickCounter == 4) {
  $(".type1").html("Let's have a little conversation about how you got into the game.");
    console.log("why4");
  } else if (optionOneClickCounter == 5) {
    document.body.classList.add('showAll')
    }

  optionOneClickCounter = optionOneClickCounter + 1;
});


let carImgEl = document.getElementById('car-img')
document.addEventListener('mousemove',function(event){
  if(event.clientY < 900){
      carImgEl.style.top = event.clientY + 'px'
  } else {
  }
})
//TRAFIC JAM PART
let carsideImgEl = document.getElementById('car-side')
document.addEventListener('mousemove',function(event){
  if(event.clientX < 900){
    console.log(event.clientX + 'px')
      carsideImgEl.style.left = event.clientX + 'px'
  }
  else if(event.clientX >= 900){
  }
})
//GAS PART
let carside2ImgEl = document.getElementById('car-side2')
document.addEventListener('mousemove',function(event){
  if(event.clientX < 900){
    console.log(event.clientX + 'px')
      carside2ImgEl.style.left = event.clientX + 'px'
  }
  else if(event.clientX >= 900){
  }
})

//LACK OF MONEY PART
let traficImgEl = document.getElementById('car-side3')
document.addEventListener('mousemove',function(event){
  if(event.clientX < 990){
    console.log(event.clientX + 'px')
      traficImgEl.style.left = event.clientX + 'px'
  }
  else if(event.clientX >= 990 && window.scrollY > 2000){
document.getElementById("trafic").style.display = "block";

  $("#TraficText").html("Uh-oh, trafic jam!");
    console.log("why5");
  }
})


// CLICK FUNCTION FOR GAS STATION 👻👻👻👻
let gasClickCounter = 1
$("#car-side2").click(function() {
  if (gasClickCounter == 1) {
    $("#GasText").html("Uh-oh! lack of money, but you can drive a few more miles");
    console.log("gasText");
  }
  gasClickCounter = gasClickCounter + 1;
});

let gasImgEl = document.getElementById('gas')

window.addEventListener('scroll',function(event){
  let gasRect = gasImgEl.getBoundingClientRect()
  if(gasRect.bottom > 600){
      $("#GasText").html("Let's fill up on gas here.");
  }
})
let nightImgEl = document.getElementById('night')

window.addEventListener('scroll',function(event){
  let nightRect = nightImgEl.getBoundingClientRect()
  console.log(event.clientX + 'px')
  if(nightRect.bottom < 600){
    // console.log(event.clientX + 'px')
      nightImgEl.style.left = event.clientX + 'px'
  }
  if(nightRect.bottom > 600){
      $("#MoneyText").html("OMG, it's so cold we gonna freezing to death, man!");
  }


  if(window.scrollY > 750){
    document.querySelector('.discription').style.display = 'none'

  }
})

  console.log("why5");
