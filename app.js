var friends = ['Ashley', 'Fehzan', 'John', 'James', 'Starla'];
var locations = ['Alley', 'Shed', 'Basement', 'Cave', 'Car', 'Mount Doom', 'Popeyes', 'Downtown', 'Bakery', 'Boat'];
var weapons = ['Knife', 'Gun', 'Bat', 'Ball', 'CD', 'Keyboard', 'Sword', 'Pickaxe', 'Shovel', 'Dr. Pepper', 'Candle', 'Pitchfork', 'Lava Lamp', 'One Ring to Rule them All', 'Toothbrush', 'Hairbrush', 'Toothpick', 'Donut', 'Bone', 'Speaker'];

$(document).ready(function(){
    for (var i = 0; i < 100; i++) {
        var newh3 = $('<h3 class="col-6 text-center">Accusation ' + i +'</h3>');
        $('body').append(newh3);
        newh3.click(function(){
            displayAlert();
        })
    };
});
