console.log("hello!!!")

// WHEN YOU CLICK BAR
$(".bar").click(function(ev){
  let number = ev.target.getAttribute('number')
  if(isNaN(number)){
    number = 0
  }
  number ++
  ev.target.setAttribute('number',number)
  $(".popup").html("Engaging in my passion is " + number + "%");
})
 $(".bar").hover(function(ev) {

  let data = ev.target.getAttribute('data')
     $(".popup").html(data);

})

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "It's a a scam. There is no such a thing as free lunch") {
    x.innerHTML = "Bitcoin offers a small chance for early users to make money, but it is irrational for users who entered the market in the later stages. However, I think sweetcoin(bitcoin) founder Anton Derlyatka's wish for everyone to be healthy is being fulfilled.";
  } else {
    x.innerHTML = "It's a a scam. There is no such a thing as free lunch";
  }
}
//     <span style='font-size:50px;'> Is Bitcoin useful as a moneymaker or a scam? </span>
