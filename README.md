![cse-theme preview](/img/banner.png)

# Jekyll theme for lecture notes <!-- omit in toc -->

This Jekyll theme was devloped for one of my courses, you can view the course (and thus this theme) [here](https://chauff.github.io/Web-Teaching/). Jekyll is a static site generator that can be used to customize ones' GitHub Pages. 

This Jekyll theme is built on top of [Minima](https://github.com/jekyll/minima), Jekyll's default theme. Only the necessary files were kept, the rest was stripped from the repo.

It should be possible to develop the lecture materials entirely in markdown, without regard for the `cse-theme`.

**Spoilers**, **highlighting** and **note-taking** are built into the theme. All highlights and notes are stored in the browser's localStorage.

Your repo should have the following files and folders in the root folder:
- folders: `_lectures`, `_practicals`, `_extras`
- files: `index.md`, `404.html`, `_config.yml`

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Customization in `_config.yml`](#customization-in-_configyml)
  - [Color themes](#color-themes)
  - [Code color theme](#code-color-theme)
  - [Header image](#header-image)
  - [Footer imagery](#footer-imagery)
  - [Warning](#warning)
  - [Exam](#exam)
- [Responsiveness](#responsiveness)
- [Course content](#course-content)
  - [Course information](#course-information)
  - [Adding a lecture](#adding-a-lecture)
  - [Adding practicals](#adding-practicals)
  - [Figure captions, spoilers and questions](#figure-captions-spoilers-and-questions)
- [Other information](#other-information)
  - [Adding additional (analytics) scripts/content](#adding-additional-analytics-scriptscontent)
  - [CSS split](#css-split)
  - [How to develop the theme further](#how-to-develop-the-theme-further)
  - [Misc](#misc)

## Installation

This theme was devloped for one of my courses, you can view the course (and thus this theme) [here](https://chauff.github.io/Web-Teaching/). This repository does not have to be forked or cloned. It can be used as [remote theme](https://github.blog/2017-11-29-use-any-theme-with-github-pages/). All that is needed in the repository to apply the theme to is to copy `_config.yml` and `404.html` to your repository's root directory and add the following two lines to `_config.yml`:

```
baseurl: "/your-repository-name/"
remote_theme: chauff/cse-theme
```

The `baseurl` is used to set the root of the website (minus the hostname). The `remote_theme` has the format `GITHUBUSERNAME/REPO` and should be left as-is, unless the `cse-theme` repo was forked. That's it. Once the `_config.yml` file is added to the repository of choice this Jekyll theme will apply to it. 

## Customization in `_config.yml`

This section walks through the site-wide options that can be set in the `_config.yml` file.

### Color themes

Set the color theme (`cssTheme`), either `light-blue`, `light-green`, `light-grey`, `light-pink`, `light-red`, `dark-pink`, `dark-red` or `dark-blue`.

![cse-theme preview](/img/screenshot-light-red.png)

![cse-theme preview](/img/screenshot-light-blue.png)

![cse-theme preview](/img/screenshot-light-pink.png)

![cse-theme preview](/img/screenshot-light-green.png)

![cse-theme preview](/img/screenshot-light-grey.png)

![cse-theme preview](/img/screenshot-dark-pink.png)

![cse-theme preview](/img/screenshot-dark-blue.png)

![cse-theme preview](/img/screenshot-dark-red.png)

### Code color theme

Set the code color theme (`cssCodeTheme`), prepackaged are `monokai`, `dracula` (bboth have a dark background color) and `perldoc` (light background color). 

![cse-theme preview](/img/screenshot-code-monokai.png)

![cse-theme preview](/img/screenshot-code-dracula.png)

![cse-theme preview](/img/screenshot-code-perldoc.png)

### Header image

Set the header image (`headerImage`). Included already are two variants,  `../images/tudelft_ewi.jpg` shows TU Delft's iconic EWI building and `../images/tudelft_ewi_bw.jpg` is its grayscale variant.

### Footer imagery

Set the footer image (`footerImage`). Included already is a typical Dutch scene ([by day](assets/images/tudelft-ewi-light-footer.svg) and [by night](assets/images/tudelft-ewi-dark-footer.svg)). The imagery has been created by [David Maxwell](https://www.dmax.org.uk/)!

The daytime image goes well with a light theme:

![cse-theme preview](/img/screenshot-light-footer.png)

The night-time image goes well with a dark theme:

![cse-theme preview](/img/screenshot-dark-footer.png)

### Warning

Decide whether to show a warning of some type. If yes, set the `warning` string. This is one *global* warning string for the site. Whether or not a particular page shows the warning is determined by setting `warning: true` in each individual page's front matter (explained below in more detail). My standard use case is the updating of lecture materials throughout the year. Each page that has not been updated yet for the new year contains the warning. The warning appears just above the start of the page's content:

![cse-theme preview](/img/screenshot-warning.png)

### Exam

During the exam, you may want to remove access to the lecture materials without setting the GitHub repo to private. If the setting `exam: false` is changed to `exam: true`, a JavaScript snippet is triggered which places an opaque `<div>` across the entire viewport with the text *Exam time*. Note though that this can easily be circumvented by disabling JavaScript ... it is not more than a reminder that the lecture materials should not be accessed. It typically takes 2-3 minutes for this change in the configuration file to take effect when reloading the page (as on GitHub's end the page is rebuilt).

![cse-theme preview](/img/screenshot-exam.png)

## Responsiveness

The design has basic responsiveness, it looks decent across large screens, tablets and phones.

![cse-theme preview](/img/screenshot-mobile.png)


## Course content

This section describes how to set up the course content for this specific theme. Instead of starting from scratch, you can copy the respective files and folders from here: they have been included to make development of the theme easier.

### Course information

The course information (overview, instructors, grading, etc.) should all be contained in `index.md`.

### Adding a lecture

Place the lectures (each one in a separate markdown file) in the `_lectures` folder and add the [YAML front matter](https://jekyllrb.com/docs/front-matter/) at the top of each file, separated by tripple dashes:

```yaml
---
layout: default
permalink: /http/
linkname: HTTP
ordering: 4
warning: true
---

OTHER CONTENT
```

The `layout` variable is always `default` in our case (other Jekyll themes may have different types of pages depending on the content type). 

The `permalink` variable beautifies the URL (instead of just going with the filename, which may be rather ugly) and the `linkname` variable determines how the link appears in the navigation bar of the site. 

As lectures are typically in a specific order, the `ordering` variable (just use integers, ascending order) determines the order of the lectures. Without this explicit ordering, the links would show up in alphabetic order. 

Lastly, setting the `warning` variable to `true` ensures that there will be a warning box shown at the top of the page (removing the variable or another setting yields no warning box). The warning string itself should be set in `_config.yml`. Note that the `div` sizing and resizing based on the viewport size was **hardcoded** based on my typical update warning string -- significantly longer/shorter update strings may look odd or even overflow the `div`. 

Note: all content appearing after the front matter is pushed into the `content` attribute, accessed as `{{content}}` in `default.html`.

### Adding practicals

Practicals (assignments, exercises, old exams, etc.) are added to the `_practicals` folder. The front matter is the same as for the lectures.

### Figure captions, spoilers and questions

There is no special tag for **figure captions** in Markdown. The current regime is to use `<sup>My caption.</sup>` (note the extra empty line) :point_down::

```markdown
![caniuse indexedb](/img/caniuse-indexedb.png)

<sup>Screenshot taken on September 3, 2020.</sup>
```

The result looks like this:

![screenshot caption](/img/screenshot-caption.png)

**Spoilers** (text that should onl be visible once the mouse hovers over it) can be added with a bit of HTML :point_down::

```html
<span class="spoiler">Besides a little broken image icon not much is happening.</span>
```

The result looks like this:

![screenshot caption](/img/screenshot-spoiler.png)

To add a set of **questions/answers** (e.g. at the end of a transcript as self-check questions), the `<details>`/`<summary>` tag combination works well :point_down::

```html
<details> 
  <summary>What does JavaScript's hoisting principle refer to?</summary>
  Declarations are processed before any code is executed.
</details>
```
![screenshot summary](/img/screenshot-summary.png)

*Note that the `<details>` tag does clash at the moment with how markdown handles code snippets. Ccode snippets are marked by backticks and rendered in a specific way; inside the `<details>` tag though this does not happen, the text is treated as normal text. A workaround is to place the code snippet to ask questions about right before the `<details>` tag.*

## Other information

The following sections are not necessary to know, but they may be useful if you want to develop the theme further or do a bit more than just adding transcripts.

### Adding additional (analytics) scripts/content

To track for instance site visits, add a folder `_extras`: any file in this folder will be included right before the `</body>` tag in the default layout page. For the file content to be included, the file needs to start with an empty frontmatter. As an example, the [statcounter](https://statcounter.com/) snippet (which allows you to track site visits once you set up your own account) looks as follows:

```yaml
---
---
<!-- Default Statcounter code  -->
  <script type="text/javascript">
    var sc_project = xxx;
    var sc_invisible = 1;
    var sc_security = "xxx"; 
  </script>
  <script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async></script>
  <!-- End of Statcounter Code -->
```

### CSS split

The CSS is split across a number of files:

- `/assets/css/skin.css` contains the CSS for the layout of the entire page (CSS grid) and the header, navbar and footer.
- `/assets/css/github-markdown.css` contains the CSS for the layout of the lectures/exercises, etc. The CSS comes from [sindresorhus](https://github.com/sindresorhus/github-markdown-css) (with slight adaptations).
- `/assets/css/text-highlighting.css` contains the CSS for the highlighting and note-taking features.

The color themes reside in `/assets/css/themes/`. To change the theme, go to `_config.yml` and change the `cssTheme` variable. The color theme of the page is separate from the color theme of the code snippets: these themes reside in `/assets/css/themes/code`. Change `cssCodeTheme` in `_config.yml` if you want to switch to another code highlighter. Code highlighter CSS files have to be compatible with [pygments](https://github.com/pygments/pygments).

### How to develop the theme further

Clone this repository and in the root folder run `bundle exec jekyll serve --watch`. The `watch` flag ensures that the Jekyll site is rebuilt when a file changes. The console output should look something like this:

```
Configuration file: /Users/claudia/GitHub/cse-theme/_config.yml
            Source: /Users/claudia/GitHub/cse-theme
       Destination: /Users/claudia/GitHub/cse-theme/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 1.001 seconds.
 Auto-regeneration: enabled for '/Users/claudia/GitHub/cse-theme'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

The **server address** tells you which URL to open to view the theme in action.

*Note, that changing the `_config.yml` file (e.g. to switch to a different css theme) requires a restart of the server.*

### Misc

GitHub Pages does not run the latest Jekyll version, make sure to check the right Jekyll version when looking at the documentation. GitHub's Jekyll version can be found [here](https://pages.github.com/versions/). For example, the very useful `sort_by` is a Jekyll 4 feature.

If you made changes to the configuration but don't see them reflected on the served pages, clear the browser's cache or try the private mode (Firefox likes caching a lot ...).

The table of contents for each transcript can be easily generated with VS Code's [Markdown all in one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) extension. In general, writing your Markdown in VSC is a nice way of doing things!

