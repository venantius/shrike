# Thank you for purchasing an Official Bootstrap Theme <3 #

Within your Bootstrap Theme you’ll find the following directories and files, grouping common resources and providing both compiled and minified distribution files, as well as raw source files.

```
toolkit/
  ├── gulpfile.js
  ├── package.json
  ├── README.md
  ├── docs/
  ├── less/
  │   ├── bootstrap/
  │   ├── custom/
  │   ├── variables.less
  │   └── toolkit.less
  ├── js/
  │   ├── bootstrap/
  │   └── custom/
  ├── fonts/
  │   ├── bootstrap-entypo.eot
  │   ├── bootstrap-entypo.svg
  │   ├── bootstrap-entypo.ttf
  │   ├── bootstrap-entypo.woff
  │   └── bootstrap-entypo.woff2
  └── dist/
      ├── toolkit.css
      ├── toolkit.css.map
      ├── toolkit.min.css
      ├── toolkit.min.css.map
      ├── toolkit.js
      └── toolkit.min.js
```


#### Gulpfile.js

Bootstrap Themes are built with Gulp, a build tool that compiles our CSS, JS, and docs with ease. You’ll need to install Node.js and Gulp before using our included gulpfile.js.

To install Node visit [https://nodejs.org/download](https://nodejs.org/download/).

To install gulp, run the following command:

```
$ npm install gulp -g
```

When you’re done, install the rest of the theme's dependencies:

```
$ npm install
```


#### Gulp Tasks

The two tasks immediately useful for you are `$ gulp` and `$ gulp docs`.

+ `gulp` - recompiles and minifies your theme assets.
+ `gulp docs` - starts the static doc server and opens it in your preferred browser.


#### Support

If you experience any problems with the above, or if you think you've found a bug with your theme - please don't hesitate to reach out to themes@getbootstrap.com. thanks!
