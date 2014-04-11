0. Introduction
===============

Presentation of speakers + short introduction to Google Polymer. Also, what we want to do = create a Super Hero, and Fight!


1. Create a super-hero with plain HTML
======================================

Start with an empty HTML page, generate by yeoman.

Create a super-hero with the HTML code:

```
<div class="row row-super-hero">
    <div class="col-lg-4">
        <div id="box" class="hero">
            <span class="profile">
                <img src="images/1009368.jpg">
            </span>
            <div class="info">
                <div class="desc">
                    <strong>Iron Man</strong>
                    <span>Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.</span>
                </div>
            </div>
        </div>
    </div>
</div>
```

**Template** ```dvx1```

Create a second super-hero with a copy-paste!

2. Create a basic Polymer component
===================================

```
<script src="bower_components/platform/platform.js"></script>
<script src="bower_components/polymer/polymer.js"></script>


<polymer-element name="super-hero">
    <template>
        -- HTML --
    </template>
    <script>
        var module = (function() {
        })();
        Polymer('super-hero', module);
    </script>
</polymer-element>
```

**Template** ```dvx2```

and use the new tag ```<super-hero></super-hero>``` in HTML.


3. Add attribute heroId in component
====================================

Add heroId attribute:

```
<polymer-element name="super-hero" attributes="heroId">
    <link rel="stylesheet" href="../styles/super-hero.css">
    <div class="col-lg-4">
        <div id="box" class="hero">
            <span class="profile">
                <img src="{{ heroId + '.' + hero.thumbnail.extension }}">
            </span>
            <div class="info">
                <div class="desc">
                    <strong>{{ hero.name }}</strong>
                    <span>{{ hero.description }}</span>
                </div>
            </div>
        </div>
    </div>
    <script>
        var module = (function() {
            var fetch = function(id) {
                var storedHero = localStorage.getItem('hero.' + id);
                return JSON.parse(storedHero);
            };
            return {
                ready: function () {
                    this.hero = fetch(this.heroId);
                }
            };
        })();
    </script>
</polymer-element>
```

Now create heroes:

```
    <div class="row row-super-hero">
        <super-hero heroId="1009718"></super-hero>
        <super-hero heroId="1009351"></super-hero>
        <super-hero heroId="1009610"></super-hero>
    </div>
    <div class="row row-super-hero">
        <super-hero heroId="1009368"></super-hero>
        <super-hero heroId="1009664"></super-hero>
        <super-hero heroId="1009220"></super-hero>
    </div>
```

**Template** ```dvx3```


4. Start the fight!
===================

Add a button fight:

```
    <div class="row row-fight">
        <button class="btn btn-danger btn-lg col-lg-2 col-lg-offset-1" onclick="selectOne()"><span class="glyphicon glyphicon-fire"></span> FIGHT</button>
        <pre class="col-lg-7 col-lg-offset-1" id="results">No fight yet</pre>
    </div>
```

**Template** ```dvx4```

and the JavaScript ```selectOne``` function:

```
<script>
    function selectOne() {
        var heroes = document.querySelectorAll('super-hero');
        var r = Math.floor(Math.random() * heroes.length);
        document.querySelector('#results').innerHTML = heroes[r].hero.name + ' wins';
    }
</script>
```

**Template** ```dvx5```

Add ```win()``` and ```lose()``` functions in ```<super-hero>``` component:

```
    <div class="fights">
        {{ success }}% |
        <span style="color: green">{{ wins }} <span class="glyphicon glyphicon-thumbs-up"></span></span> |
        <span style="color: red">{{ losses }} <span class="glyphicon glyphicon-thumbs-down"></span></span>
    </div>
```

**Template** ```dvx6```


```
    ready: function() {
        this.hero = fetch(this.heroId),
        this.wins = 0;
        this.losses = 0;
    },
    win: function() {
        this.wins++;
    },
    lose: function() {
        this.losses++;
    }
```

Update ```selectOne()``` method:

```
    function selectOne() {
        ...
        for (var i = 0; i < heroes.length; i++) {
            if (i == r) {
                heroes[i].win();
            } else {
                heroes[i].loose();
            }
        }
    }
```

Show that it works. Now introduce the ```get``` concept to calculate the success percentage:

```
    get success() {
        if (this.wins + this.losses == 0) {
            return '-';
        }
        return Math.floor((this.wins / (this.wins + this.losses)) * 100);
    },
```

**Template** ```dvx7```


5. Finalization
===============

Create a web-animation:

```<script src="bower_components/web-animations-js/web-animations.js"></script>```

in ```win()``` method:

```
    win: function() {
        this.wins++;
        var animation = new Animation(elt, [
            { "box-shadow": "3px 3px 3px darkgrey" },
            { "box-shadow": "0 0 50px green" }
        ], {
            duration: 2
        });
        document.timeline.play(animation);
    }
```

**Template** ```dvx8```

and for ```lose()```:

```
    lose: function() {
        this.losses++;
        var animation = new Animation(elt, [
            { "opacity": 1 },
            { "opacity": 0 },
            { "opacity": 1 }
        ], {
            duration: 2,
            delay: 1
        });
        document.timeline.play(animation);
    }
```

**Template** ```dvx9```

Move all ```<polymer-element>``` code in ```super-hero.html``` and add ```<link rel="import" href="webcomponents/super-hero.html">``` in HTML page.


Show it works. Now, before the ```<super-hero>```, add:

```
<style>
    .hero {
        border: solid 1px red;
    }
</styles>
```

and after:

```
<div class="hero">Hello</div>
```

Show that this red border is applied on ```<super-hero>``` and that the added ```div``` looks like a ```<super-hero>```.

Move CSS ```super-hero.css``` declaration in Polymer component ```<link rel="stylesheet" href="../styles/super-hero.css">```.

Show that there is no more conflict.


6. Finish presentation with Polymer overview
============================================

