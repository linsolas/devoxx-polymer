function createAnimation(elt, win) {
    console.log('Create animation');
    var animation = new Animation(elt, [
        { "box-shadow": "3px 3px 3px darkgrey" },
        { "box-shadow": "0 0 50px " + (win ? 'green' : 'red') }
    ], {
        duration: 2,
        delay: win ? 0 : 0.5
    });
    return animation;
};
