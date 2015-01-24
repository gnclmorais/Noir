# Noir

[Ghost](http://github.com/tryghost/ghost/) theme, built upon 
[Casper](https://github.com/TryGhost/Casper).
Inspired by [Detox](http://eatapapaya.com/Detox/detox.html) and 
[Heidi](https://github.com/interslice/ghost-theme-heidi).

This theme will be a work in progress, since it will go through several
iterations throughout time. Every time I would want change or improve
on my blog, this theme will probably change. Stay tuned.

Favicon based on a concept I presented on [Dribbble](https://dribbble.com/shots/558569-Game-Of-Webs-House-Clarke?list=users&offset=6).


## Instructions

### Install
`git clone` this project to the `content/themes` folder of a Ghost instalation.
To run Ghost, just type `npm start` on its folder. Don’t forget that you need
to go to Ghost’s administration page and select this theme before using it.

### Compile SCSS
To compile Sass (SCSS) files into a single CSS file, run the following command on
`assets/stylesheets`:
```
sass --watch scss/main.scss:style.css \
     --style compressed
```

### Live preview
If you have [BrowserSync](https://github.com/shakyShane/browser-sync)
installed, you can run it as well to instantly check the changes you make to
your `.hbs`, `.scss` and `.js` files:
```
browser-sync start --proxy "localhost:2368" \
                   --files "assets/stylesheets/*.css, *.hbs, *.js"
```


## Copyright & License

Copyright (c) 2013-2014 Ghost Foundation - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
sell copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
