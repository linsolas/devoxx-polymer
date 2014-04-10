function winnerAnimation(elt) {
    var animation = new Animation(elt, [
        { "box-shadow": "3px 3px 3px darkgrey" },
        { "box-shadow": "0 0 50px green" }
    ], {
        duration: 2
    });
    return animation;
};

function loserAnimation(elt) {
    var animation = new Animation(elt, [
        { "opacity": 1 },
        { "opacity": 0 },
        { "opacity": 1 }
    ], {
        duration: 2,
        delay: 1
    });
    return animation;
};
