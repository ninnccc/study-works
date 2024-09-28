function countMyCatAge(){
  var catAge= document.getElementById("cat_age").value;
  var catHumanAge = (catAge * 12) * 4 / 12;
  document.getElementById("result").innerHTML = "貓咪" + catAge + "歲是人類的" + catHumanAge + "歲!";
}