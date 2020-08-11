# cse-theme

This Jekyll theme has been derived from [Minima](https://github.com/jekyll/minima), Jekyll's default theme. Only the necessary files were kept, the rest was stripped from the repo.

For this theme to work, the lectures and practicals need to reside in specific folders (see below). The general course information needs to reside in `index.md`. Apart from those prerequisites, it should be possible to develop the lecture materials entirely in markdown, without regard for the `cse-theme`.

![cse-theme preview](/screenshot.png)

# Course content

## Adding a lecture

Place thes lecture (each one in a separate markdown file) in the `_lectures` folder and add the [YAML front matter](https://jekyllrb.com/docs/front-matter/) at the top of each page file tripple dashes:

```
---
layout: default
permalink: /http/
linkname: HTTP
ordering: 4
---

OTHER CONTENT
```

The `layout` variable is always `default` in our case (other Jekyll themes may have different types of pages depending on the content type). The `permalink` variable beautifies the URL and the `linkname` variable determines how the link appears in the navigation bar. As lessons are typically in a specific order, the `ordering` variable determines the order of the lectures (otherwise the lectures would be orderd alphabetically).

Note: all content appearing after the front matter is pushed into the `content` attribute, accessed as `{{content}}` in `default.html`.


## Adding practicals

Practicals (assignments, exercises, etc.) are added to the `_practicals` folder. The front matter is the same as for the lectures.

## Course information

The course information should all be contained in `index.md`.

# Layout

The CSS is split across files:

- `/assets/css/personalizable.css` contains the colors (and a few other bits and pieces) to personalize the skin.
- `/assets/css/skin.css` contains the CSS for the layout of the entire page (CSS grid) and the header, navbar and footer.
- `/assets/css/github-markdown.css` contains the CSS for the layout of the lectures/exercises, etc. The CSS comes from [sindresorhus](https://github.com/sindresorhus/github-markdown-css) (with slight adaptations).


## Installation


Add this line to your Jekyll site's Gemfile:

```ruby
gem "minima"
```

And then execute:

    $ bundle


## Local Testing

To test the theme, start the server with `bundle exec jekyll serve` and open the URL `http://localhost:4000`. Modifications to the theme are visible immediately (no need to restart the server).