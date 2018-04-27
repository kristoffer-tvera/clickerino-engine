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

  var achievedList = [] // Placeholder global used for testing.

  // list of current list of earned achievements
  function earnedAchievements(  ) {
    return achievedList;
 
  }
 
   // Adds new achievements to the list of obtained achievements
  function newAchievement(update) {
   achievedList.push(update);
  }
 
