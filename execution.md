0. Introduction
===============

Presentation of speakers + short introduction to Google Polymer. Also, what we want to do = create a Super Hero, and Fight!


1. Create a super-hero with plain HTML
======================================

Start with an empty HTML page, generate by yeoman.

Create a super-hero with the HTML code:

```
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
```

**Template** ```x```

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

and use the new tag ```<super-hero></super-hero>``` in HTML.

Integrate CSS in Polymer component ```<link rel="stylesheet" href="../styles/super-hero.css">``

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

**Template** ```x```


4. Start the fight!
===================

Add a button fight:

```
    <div class="row row-fight">
        <button class="btn btn-danger btn-lg col-lg-2 col-lg-offset-1" onclick="selectOne()"><span class="glyphicon glyphicon-fire"></span> FIGHT</button>
        <pre class="col-lg-7 col-lg-offset-1" id="results">No fight yet</pre>
    </div>
```

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

**Template** ```x```

Add ```win()``` and ```lose()``` functions in ```<super-hero>``` component:

```
    <div class="fights">
        {{ success }}% |
        <span style="color: green">{{ wins }} <span class="glyphicon glyphicon-thumbs-up"></span></span> |
        <span style="color: red">{{ losses }} <span class="glyphicon glyphicon-thumbs-down"></span></span>
    </div>
```


```
    get success() {
        if (this.wins + this.losses == 0) {
            return '-';
        }
        return Math.floor((this.wins / (this.wins + this.losses)) * 100);
    },
    win: function() {
        this.wins++;
    },
    loose: function() {
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

**Template** ```x```


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

**Template** ```x```

and for ```lose()```:

```
    loose: function() {
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

**Template** ```x```

Move this code in ```super-hero.js``` and add ```<script src="../scripts/super-hero.js"></script>``` in Polymer component.

Move all ```<polymer-element>``` code in ```super-hero.html``` and add ```<link rel="import" href="webcomponents/super-hero.html">``` in HTML page.


6. Finish presentation with Polymer overview
============================================

