var friends = ['Ashley', 'Fehzan', 'John', 'James', 'Starla'];
var locations = ['Alley', 'Shed', 'Basement', 'Cave', 'Car', 'Mount Doom', 'Popeyes', 'Downtown', 'Bakery', 'Boat'];
var weapons = ['Knife', 'Gun', 'Bat', 'Ball', 'CD', 'Keyboard', 'Sword', 'Pickaxe', 'Shovel', 'Dr. Pepper', 'Candle', 'Pitchfork', 'Lava Lamp', 'One Ring to Rule them All', 'Toothbrush', 'Hairbrush', 'Toothpick', 'Donut', 'Bone', 'Speaker'];

$(document).ready(function () {
    for (var i = 0; i < 100; i++) {
        displayAlert(i);
    };
});

function displayAlert(i) {
    var friend = friends[i % 5];
    var location = locations[i % 10];
    var weapon = weapons[i % 20];

    var newh3 = $('<h3 class="col-6 text-center">Accusation ' + i + '</h3>');
    newh3.click(function () {
        console.log('I accuse ' + friend + ', with the ' + weapon + ' in the ' + location);
    });
    $('body').append(newh3);
}


//HOW I MESSED UP BELOW, I KEPT ADDING THE NEW CLICK LISTENER EVERYTIME THE LOOPS WOULD GO THRU INSTEAD OF ON EACH UNIQUE h3 CREATED
//
// $(document).ready(function(){
//     for (var i = 0; i < 100; i++) {
//         var newh3 = $('<h3 class="col-6 text-center">Accusation ' + i +'</h3>');
//         newh3.click(function(){
//             var display = displayAlert(i);
//             display();
//         })
//         $('body').append(newh3);
//     };
// });

// function displayAlert(i){
//     var friend = friends[i % 5];
//     var location = locations[i % 10];
//     var weapon = weapons[i % 20];
//     function displaymessage(){
//         console.log('I accuse ' + friend + ', with the ' + weapon + ' in the ' + location);
//         console.log(i);
//     }
//     return displaymessage;
// }

//ALL DONE NOW

