## Default Front-End

#![logo](app/assets/img/logo-default.png)

## Introduction
Welcome to <b>Default FrontEnd</b>, a workflow for rapid development of interface, facing the front-end developers. Its architecture, and standard nomenclature was created on [Styleguide FrontEnd](http://github.com/Renatodeluna/styleguide-frontend) a very good style guide, which gathered itself several technical architectures and standards.

With these two tools your workflow will be much more productive, easy to maintain and scalable, thus reducing to the learning curve of new members in the team.

## Benefits

* <b>Facilitate the maintenance of long-term projects;</b>
* <b>Code understanding facility;</b>
* <b>Scalable code;</b>
* <b>Standard designs;</b>
* <b>Code reuse;</b>
* <b>Reduce the learning curve for new team members;</b>
* <b>Modularization design;</b>

## Concept of structure

* <b>HTML</B>: [@mdo](http://mdo.github.io/code-guide/) and [idiomatic HTML](https://github.com/necolas/idiomatic-html); 
* <b>CSS - SASS</B>: [BEM](http://bem.info/), [SMACSS](http://smacss.com/) [SUIT CSS](https://suitcss.github.io/) and [Idiomatic CSS](https://github.com/necolas/idiomatic-css);
* <b>Javascript</B>: [idiomatic JS](https://github.com/necolas/idiomatic-js);

## Best of

For you to enjoy all the benefits `Default FrontEnd` strongly recommend reading the [Styleguide FrontEnd](http://github.com/Renatodeluna/styleguide-frontend).

## Instalation and usage

Install the Grunt tasks:

```shell
    npm install
```

Install the Bower packages:

```shell
    bower install
```

To development, simply do:

```shell
    grunt
```
or
```shell
    grunt default
```

This will start a server for you on `localhost:9000` or `127.0.0.1:9000`, with a watch task for your HTML, Sass and JavaScript files, with LiveReload activated.

If you want to generate the deploy version, run:

```shell
    grunt build
```

It will create a `dist` folder only the with the files you need to deploy: concatenated and uglyfied `JavaScript` files, along with minified `CSS` and optimized imagery.

## Structure file

```
  default-frontend
  ├── app
  |   ├── assets
  |   |   ├── fonts/
  |   |   |
  |   |   ├── img
  |   |   |   ├── public/
  |   |   |   └── sprites
  |   |   |       ├── default
  |   |   |       └── retina
  |   |   |
  |   |   ├── js
  |   |   |   ├── modules/
  |   |   |   └── vendor
  |   |   |       └── jquery
  |   |   |
  |   |   ├── sass
  |   |	  |   ├── base
  |   |	  |   |   ├── _reset.scss
  |   |	  |   |   ├── _typography.scss  
  |   |	  |   |   ├── _fonts.scss
  |   |	  |   |   └── _grid.scss
  |   |	  |   |
  |   |	  │   ├── modules
  |   |	  |   |   ├── _buttons.scss
  |   |	  |   |   ├── _dropdown.scss
  |   |	  |   |   ├── _gallery.scss
  |   |	  |   |   └── _modal.scss
  |   |	  |   |
  |   |	  │   ├── layouts
  |   |   |   |   ├── _header.scss
  |   |   |   |   ├── _main.scss
  |   |   |   |   ├── _footer.scss
  |   |   |   |   └── pages
  |   |   |   |       ├── _home.scss
  |   |   |   |       └── _about.scss
  |   |   |   |
  |   |	  │   ├── helpers
  |   |	  |   |   ├── _class.scss
  |   |	  |   |   ├── _functions.scss
  |   |	  |   |   ├── _mixins.scss
  |   |	  |   |   ├── _placeholder.scss
  |   |	  |   |   └── _variables.scss
  |   |	  |   |
  |   |	  |   ├── breakpoints
  |   |	  |   |   ├── _mobile.scss
  |   |	  |   |   ├── _tablets.scss
  |   |	  |   |   └── _desktop.scss
  |   |	  |   |
  |   |	  │   ├── style.scss
  |   |	  |   └── style-ie.scss
  |   |	  |
  |   |	  └── css
  |   |	      |── style.css
  |   |	      └── style-ie.css
  |   |
  |   └── index.html
  |
  ├── dist/
  |
  |── Gruntfile.js
  |── package.json
  |── bower.json
  |── .bowerrc
  |── .editorconfig
  |── .gitattributes
  |── .gitignore
  |── .jshintrc
  |── .scc-lint.yml
  └── .csscomb.json
  
```

## EditorConfig

Set your editor with the following settings to avoid common inconsistencies in the code dirty and diffs:

* Use soft-tabs with 2 spaces
* Delete the blanks to save
* Set the encoding to UTF-8
* Place a new line at the end of files

Consider document and apply these settings for your project with [EditorConfig](http://editorconfig.org).

## License

[MIT License](http://opensource.org/licenses/MIT). © Copyright 2015, [@renatodeluna](http://twitter.com/renatodeluna).
