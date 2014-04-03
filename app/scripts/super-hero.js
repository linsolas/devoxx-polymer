function createAnimation(elt, win) {
    var animation = new Animation(elt, [
        { "box-shadow": "3px 3px 3px darkgrey" },
        { "box-shadow": "0 0 50px green" }
    ], {
        duration: 2
    });
    return animation;
};
