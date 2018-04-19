function sumAchievementPoints(achiPts) {
  if(achiPts.length == 0) {
    return 0; 
  }

  var total = 0;
  for(var i = 0; i < achiPts.length; i++){
    total += parseInt(achiPts[i].score);
  }
  return total;

}
