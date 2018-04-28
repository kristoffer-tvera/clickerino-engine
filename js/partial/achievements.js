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

  function achievementPop(popup) {

    var listAchievement = popup.name;

    // Changes the content of the little popup window
    document.getElementById("snackbar").innerHTML = listAchievement;
      
    // Shows / Hides the window in a set timer.
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
 
