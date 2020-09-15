# cse-theme

A theme for lectures notes.

This Jekyll theme is built on top of [Minima](https://github.com/jekyll/minima), Jekyll's default theme. Only the necessary files were kept, the rest was stripped from the repo.

It should be possible to develop the lecture materials entirely in markdown, without regard for the `cse-theme`.

**Highlighting** and **note-taking** is built into the theme. All data is stored in the browser's localStorage.

Your repo should have the following files and folders in the root folder:
- folders: `_lectures`, `_practicals`, `_extras`
- files: `index.md`, `404.html`, `_config.yml`

## Color themes

Different color schemes are available:

![cse-theme preview](/screenshot-red.png)

<sup>Light red.</sup>

![cse-theme preview](/screenshot-blue.png)

<sup>Light blue.</sup>

![cse-theme preview](/screenshot-pink.png)

<sup>Light pink.</sup>

![cse-theme preview](/screenshot-green.png)

<sup>Light green.</sup>

![cse-theme preview](/screenshot-grey.png)

<sup>Light grey.</sup>

![cse-theme preview](/screenshot-dark-pink.png)

<sup>Dark pink.</sup>

![cse-theme preview](/screenshot-dark-blue.png)

<sup>Dark blue.</sup>

![cse-theme preview](/screenshot-dark-red.png)

<sup>Dark red.</sup>

## Acknowledgements

The EWI building ([by day](assets/images/tudelft-ewi-light-footer.svg) and [by night](assets/images/tudelft-ewi-dark-footer.svg)), which resides at the footer of each page, has been created by [David Maxwell](https://www.dmax.org.uk/)!

## Installation

This theme repo was designed for the [CSE1500 course materials](https://github.com/chauff/Web-Teaching/). It does not have to be forked or cloned. It can be used as [remote theme](https://github.blog/2017-11-29-use-any-theme-with-github-pages/). All that is needed in the repository to apply the theme to is to copy `_config.yml` and `404.html` to your repository's root directory and add the following two lines to `_config.yml`:

```
baseurl: "/your-repository-name/"
remote_theme: chauff/cse-theme
```

The `baseurl` is used to set the root of the website (minus the hostname). The `remote_theme` has the format `GITHUBUSERNAME/REPO` and should be left as-is, unless the `cse-theme` repo was forked. That's it. Once the `_config.yml` file is added to the repository of choice this Jekyll theme will apply to it. 

## Customization in `_config.yml`

The copied `_config.yml` file has a few options to customize the look of the site:

- Set the color theme (`cssTheme`), either `light-blue`, `light-green`, `light-grey`, `light-pink`, `light-red`, `dark-pink`, `dark-red` or `dark-blue`.
- Set the code color theme (`cssCodeTheme`), prepackaged are `monokai` (dark), `dracula` (dark) and `perldoc` (light).
- Set the header image: two variants exist already,  `../images/tudelft_ewi.jpg` shows TU Delft's EWI building and `../images/tudelft_ewi_bw.jpg` is its grayscale variant.
- Set the footer image: two variants exist already, `../images/tudelft-ewi-light-footer.svg` shows TU Delft's EWI building plus some Dutch things (bikes, bridge, windmill) and `../images/tudelft-ewi-dark-footer.svg` is its dark variant.
- Decide whether to show a warning of some type (can be switched on/off for each individual page).

## Responsiveness

The design has basic responsiveness, it looks good across large screens, tables and phones. The responsiveness is not overly sophisticated though (a couple of `@media` queries).

## Course content

### Course information

The course information (overview, instructors, grading, etc.) should all be contained in `index.md`.

### Adding a lecture

Place the lectures (each one in a separate markdown file) in the `_lectures` folder and add the [YAML front matter](https://jekyllrb.com/docs/front-matter/) at the top of each file, separated by tripple dashes:

```
---
layout: default
permalink: /http/
linkname: HTTP
ordering: 4
warning: true
---

OTHER CONTENT
```

The `layout` variable is always `default` in our case (other Jekyll themes may have different types of pages depending on the content type). The `permalink` variable beautifies the URL and the `linkname` variable determines how the link appears in the navigation bar. As lectures are typically in a specific order, the `ordering` variable (just use integers, ascending order) determines the order of the lectures. Without this explicit ordering, the links would show up in alphabetic order. Lastly, setting the `warning` variable to `true` ensures that there will be a warning box shown at the top of the page (removing the variable or another setting yields no warning box). The warning string itself should be set in `_config.yml`. Note that the `div` sizing and resizing based on the viewport size was **hardcoded** based on the initial update warning string -- significantly longer/shorter update strings may look odd or even overflow the `div`. 

Note: all content appearing after the front matter is pushed into the `content` attribute, accessed as `{{content}}` in `default.html`.

### Adding practicals

Practicals (assignments, exercises, old exams, etc.) are added to the `_practicals` folder. The front matter is the same as for the lectures.

## Adding additional (analytics) scripts/content

To track for instance site visits, add a folder `_extras`: any file in this folder will be included right before the `</body>` tag in the default layout page. For the file content to be included, the file needs to start with an empty frontmatter. As an example, the [statcounter](https://statcounter.com/) snippet looks as follows:

```
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

## CSS

The CSS is split across a number of files:

- `/assets/css/skin.css` contains the CSS for the layout of the entire page (CSS grid) and the header, navbar and footer.
- `/assets/css/github-markdown.css` contains the CSS for the layout of the lectures/exercises, etc. The CSS comes from [sindresorhus](https://github.com/sindresorhus/github-markdown-css) (with slight adaptations).
- `/assets/css/text-highlighting.css` contains the CSS for the highlighting and note-taking features.

The color themes reside in `/assets/css/themes/`. To change the theme, go to `_config.yml` and change the `cssTheme` variable. The color theme of the page is separate from the color theme of the code snippets: these themes reside in `/assets/css/themes/code`. Change `cssCodeTheme` in `_config.yml` if you want to switch to another code highlighter. Code highlighter CSS files have to be compatible with [pygments](https://github.com/pygments/pygments).

## Notes

GitHub Pages does not run the latest Jekyll version, make sure to check the right Jekyll version when looking at the documentation. GitHub's Jekyll version can be found [here](https://pages.github.com/versions/). For example, the very useful `sort_by` is a Jekyll 4 feature.

If you made changes to the configuration but don't see them reflected on the served pages, clear the browser's cache or try the private mode (Firefox likes caching a lot ...).

There is no special tag for figure captions. The current regime is to use `<sup>My caption.</sup>` (note the extra empty line):

```
![cse-theme preview](/screenshot-dark-red.png)

<sup>Dark red.</sup>
```
