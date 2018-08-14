//This forces the HTML to load first before the javascript runs. 
$(document).ready(function () {

    //This is the target that the user will need to achieve when trying to make for the 
    var target = 50;
    $("#guessNumber").text(target);

    //Points that the user gains every time he hits a specific crystal. Rnadom numbers go anywhere from 1-10
    var C1Points = Math.floor((Math.random() * 10) + 1);
    var C2Points = Math.floor((Math.random() * 10) + 1);
    var C3Points = Math.floor((Math.random() * 10) + 1);
    var C4Points = Math.floor((Math.random() * 10) + 1);

    //Points that the user has accumulated over the period of the game. 
    var userPoints = 0;
    $('#userPoints').text(userPoints);

    //This is designed to increase the number points the user has.
    $('#C1').on('click', function () {
        userPoints += C1Points;
        $('#userPoints').text(userPoints);
        if (userPoints == target) {
            alert("You win!");
        }
        else if (userPoints > target) {
            alert("You lose");
        }
    });
    $('#C2').on('click', function () {
        userPoints += C2Points;
        $('#userPoints').text(userPoints);
   
        if (userPoints == target) {
            alert("You win!");
        }
        else if (userPoints > target) {
            alert("You lose");
        }
    });
    $('#C3').on('click', function () {
        userPoints += C3Points;
        $('#userPoints').text(userPoints);
        
       
        if (userPoints == target) {
            alert("You win!");
        }
        else if (userPoints > target) {
            $('#userPoints').text(userPoints);
            alert("You lose");
        }
    });
    $('#C4').on('click', function () {
        userPoints += C4Points;
        $('#userPoints').text(userPoints);
        
        alert("You now have this many points: " + userPoints);
        if (userPoints == target) {
            alert("You win!");

        }
        else if (userPoints > target) {
            alert("You lose");
        }
    });
});
