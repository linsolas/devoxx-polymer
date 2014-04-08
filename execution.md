1. Empty page
=============

Start with an empty HTML page.

2. Create a super-hero with plain HTML
======================================

Create a super-hero with the HTML code:

```
<div class="col-lg-4">
    <div id="box" class="hero">
        <span class="profile">
            <img src="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg">
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

*Template* ```html-hero```.

Create a second super-hero with a copy-paste!

3. Create a basic Polymer component
===================================

```
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

4. Add attribute heroId in component
====================================

Add heroId attribute:

```
<polymer-element name="super-hero" attributes="heroId">
    <link rel="stylesheet" href="../styles/super-hero.css">
    <div class="col-lg-4">
        <div id="box" class="hero">
            <span class="profile">
                <img src="{{ hero.thumbnail.path + '.' + hero.thumbnail.extension }}">
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
    <div class="row">
        <super-hero heroId="1009718"></super-hero>
        <super-hero heroId="1009351"></super-hero>
        <super-hero heroId="1009610"></super-hero>
    </div>
    <br>
    <div class="row">
        <super-hero heroId="1009368"></super-hero>
        <super-hero heroId="1009664"></super-hero>
        <super-hero heroId="1009220"></super-hero>
    </div>
```

*Template* ```x```


5. Start the fight!
===================

