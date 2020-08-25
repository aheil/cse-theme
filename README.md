# cse-theme

A theme for lectures notes.

This Jekyll theme is built on top of [Minima](https://github.com/jekyll/minima), Jekyll's default theme. Only the necessary files were kept, the rest was stripped from the repo.

For this theme to work, the course information, lectures and practicals need to reside in specific folders/files (see below). Apart from those prerequisites, it should be possible to develop the lecture materials entirely in markdown, without regard for the `cse-theme`.

**Highlighting** and **note-taking** is built into the theme. All data is stored in the browser's localStorage.

![cse-theme preview](/screenshot.png)
*default color theme*

![cse-theme preview](/blue-theme.png)
*blue color theme*

![cse-theme preview](/grey-theme.png)
*grey color theme*

## Acknowledgements

The EWI building [image](assets/images/tudelt-ewi.svg), which resides at the footer of each page, has been created by [David Maxwell](https://www.dmax.org.uk/)!

## Installation

This theme repo was designed for the [CSE1500 course materials](https://github.com/chauff/Web-Teaching/). It does not have to be forked, cloned or anything else. It can be used as [remote theme](https://github.blog/2017-11-29-use-any-theme-with-github-pages/). All that is needed in the repository to apply the theme to is to copy the contents of `_config.yml`, remove the line `theme: minima` (at the bottom of the file) and add the following two lines:

```
baseurl: "/Web-Teaching/"
remote_theme: chauff/cse-theme
```

The `baseurl` is used to set the root of the website (minus the hostname). The `remote_theme` has the format `GITHUBUSERNAME/REPO`. That's it. Once the `_config.yml` file is added to the repository of choice this theme will apply to it. 

The custom 404 page (`404.html`) should also be copied to the repository (do not hide it away in a folder, otherwise it won't be found) that uses the remote theme.

## Customization in `_config.yml`

The copied `_config.yml` file has a few options to allow for easy customization:

- Pick one of (so far) three color themes.
- Pick the header image.
- Pick the footer image.
- Decide whether to show an update warning.

*More information on how and what to customize is provided below.*

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
updateWarning: true
---

OTHER CONTENT
```

The `layout` variable is always `default` in our case (other Jekyll themes may have different types of pages depending on the content type). The `permalink` variable beautifies the URL and the `linkname` variable determines how the link appears in the navigation bar. As lectures are typically in a specific order, the `ordering` variable (just use integers, ascending order) determines the order of the lectures. Without this explicit ordering, the links would show up in alphabetic order. Lastly, setting the `updateWarning` variable to `true` ensures that there will be a warning box shown at the top of the page (removing the variable or another setting yields no warning box). The warning string itself should be set in `_config.yml`. Note that the `div` sizing and resizing based on the viewport size was hardcoded based on the initial update warning string -- significantly longer/shorter update strings may look odd or even overflow the `div`. 

Note: all content appearing after the front matter is pushed into the `content` attribute, accessed as `{{content}}` in `default.html`.


### Adding practicals

Practicals (assignments, exercises, old exams, etc.) are added to the `_practicals` folder. The front matter is the same as for the lectures.

### I don't like these folder names

No worries, you can always change the folder names in `_config.yml`.

## CSS

The CSS is split across a number of files:

- `/assets/css/skin.css` contains the CSS for the layout of the entire page (CSS grid) and the header, navbar and footer.
- `/assets/css/github-markdown.css` contains the CSS for the layout of the lectures/exercises, etc. The CSS comes from [sindresorhus](https://github.com/sindresorhus/github-markdown-css) (with slight adaptations).
- `/assets/css/text-highlighting.css` contains the CSS for the highlighting and note-taking features.

So far, three themes have been implemented:
- `default.css` picks up the red/blue colors (though mostly red) of TU Delft's EWI building
- `light-blue-theme.css` consists mostly of various shades of indigo with red accents
- `light-grey-theme.css` consists mostlfy of grey shades with orange accents

To change the theme, go to `_config.yml` and change the `cssTheme` variable (for now it expects all CSS files to reside in the `/assets/css` folder). 

Next to the color theme, the header and footer image can also be changed in `_config.yml` by setting new `headerImage` and `footerImage` values.

## Notes

- GitHub Pages does not run the latest Jekyll version, make sure to check the right Jekyll version when looking at the documentation. GitHub's Jekyll version can be found [here](https://pages.github.com/versions/). For example, the very useful `sort_by` is a Jekyll 4 feature.
- `_layouts/default.html` contains a hardcoded page visit counter
- If you made changes to the configuration but don't see them reflected on the served pages,  clear the browser's cache or try the private mode (Firefox likes caching a lot ...).
