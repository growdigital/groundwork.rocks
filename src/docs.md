---
layout: layout.hbs
pageTitle: Groundwork documentation
pageClass: docs

---

# Groundwork Documentation

1. [CSS Organisation](#1-css-organisation)
2. [Syntax](#2-syntax)
3. [Principles](#3-principles-of-modular-css)

## 1. CSS Organisation

The CSS organisation is based on [Inverted Triangle CSS](https://github.com/itcss) by [Harry Roberts](https://twitter.com/csswizardry), from the most applicable styles (variables, base) to specific modules (objects and components) and to _very specific_ trumping [utilities](https://github.com/suitcss/utils) and [shameful hacks](https://csswizardry.com/2013/04/shame-css/).

1. **Variables**: global variables and site-wide settings eg `responsive.css`
2. **Base**: unclassed HTML elements eg `a {}`
3. **Objects**: cosmetic-free objects, abstractions, and design patterns eg `o-media.css`
4. **Components**: discrete, complete chunks of UI eg `button.css`
5. **Utilities**: high-specificity, very explicit selectors that trump
everything else. Overrides and helper classes eg `.u-hiddenvisually {}`
6. **Shameful**: _temporarily disorganised_ CSS lives in `shame.css`

![Rainbow coloured Inverted CSS Triangle](/assets/images/inverted-css-triangle.png)

**All files relating to a particular module go in that module folder**: eg JavaScript, PNGs, SVGs, CSS and the Handlebars test snippet. 

### Simplified [directory structure](https://github.com/growdigital/groundwork/tree/master/src) 

```
src
├── assets
│   ├── css
│   │   ├── settings
│   │   └── shame.css
│   ├── images
│   └── js
└── modules
    ├── components
    │   └── forms
    |       └── button
    ├── objects
    └── utilities
```

## 2. Syntax

### Modified BEM syntax

In short, [this](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/):

```css
.block {}
.block__element {}
.block--modifier {}
```

The `block` is the module (object or component), the `block__element` is a _descendant_ of that module and the `block--modifier` is a variation on that module.

For example:

```css
.search {}
.search__field {}
.search--full {}
```

### BEM ground rules

* Hyphen to separate words in long names & two underscores to separate the name of the block from the name of the element:  
`block-name__element-name`
* CSS class for a block coincides with its block name
* A modifier is a property of a block or an element that alters its look or behavior.
* A modifier has a name and a value. Several modifiers can be used at once.
* Double dash to separate name of block/element from name of modifier:  
`menu menu--big`

### Namespacing

To add clarity to the `block__element--modifier` convention, use “namespacing”: prefixing a module with an identifying character:

```css
.o-object {}
.component {}
.u-utility {}
.js-javascript {}
._-hack {}
.is-state {}, has-state {}
```

For example, `.button {}`, `.o-media {}`, `.u-cf`, `_-messy-hack`. The odd one is out **component** – no `c-` prefix here, because components are the most common type of module, and if it doesn’t have a prefix, it’ll be a component.

### Comments

```css
/* ==========================================================================
   Section comment block
   ========================================================================== */

/* Sub-section comment block
   ========================================================================== */

/**
 * Short description using Doxygen-style comment format
 * @tag This is a tag named 'tag'
 */

/* Basic comment */
```

## 3. Principles of Modular CSS

Modular CSS is a way of organising your CSS, and other assets, into discrete and re&#8209;usable chunks.

* Each module is written as _separate_ files in their own directory.
* [Version control](https://git-scm.com/about) is much easier.
* Finding specific modules is simple.
* [Building a style guide](http://fractal.build/guide) requires minimal setup.

### Some key principles

> Build what you need. Start simple. Stay simple.

1. **ID-based CSS selectors must not be used**. IDs have a much higher specificity, which can then lead to all sorts of [specifity wars](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html) when trying to apply a style.  
2. **HTML elements must not be used in CSS selectors**. This means classes can be applied to _any_ element eg `<input class="button" type="submit">` and `<button class="button">pushme</button>`.
3. **Only use the module for one bit of functionality**. This is the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).
4. **Class names should be _functional_ & independent of content**. Again, this makes a module _re-usable_ in different contexts.
5. Modules must have **unique names**.

### Visibility

A guiding principle in [Kanban](https://en.wikipedia.org/wiki/Kanban_(development) development is to **make work visible** (Kanban 看板 literally means billboard in Japanese). To this end, **use a styleguide**, from the beginning. Groundwork recommends [Fractal](http://fractal.build/), a magnificent, _automated_, styleguide builder.

## Credits & further reading

* [MindBEMding – getting your head ’round BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) by [Harry Roberts](https://twitter.com/csswizardry)
* [More transparent UI code with namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/) by [Harry Roberts](https://twitter.com/csswizardry)
* [CSS Wizardry blog](https://csswizardry.com/archive/) by [Harry Roberts](https://twitter.com/csswizardry)
* [SUIT CSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) by [Nicolas Gallagher](https://twitter.com/necolas)
* [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) by [Nicolas Gallagher](https://twitter.com/necolas)
* [SUIT CSS documentation](https://github.com/suitcss/suit/blob/master/doc/README.md) by [Nicolas Gallagher](https://twitter.com/necolas)
* [SUIT CSS utilities](https://github.com/suitcss/utils) by [Nicolas Gallagher](https://twitter.com/necolas)
* [Scalable and Modular Architecture for CSS](https://smacss.com/) by [Jonathan Snook](https://twitter.com/snookca)
* [BEM Methodology](https://en.bem.info/) (Block Element Modifier) by [Yandex](https://www.yandex.com/) 
* [BEM Resources](https://github.com/sturobson/BEM-resources) (awesome) by [Stu Robson](http://www.alwaystwisted.com/)
* [Pattern Lab](http://patternlab.io/) by [Brad Frost](https://twitter.com/brad_frost)
* Website [http://styleguides.io/](http://styleguides.io/) of **styleguides** curated by [Brad Frost](https://twitter.com/brad_frost) and [Anna Debenham](https://twitter.com/anna_debenham)
* [Front-end Style Guides](http://www.maban.co.uk/projects/front-end-style-guides/) book by [Anna Debenham](https://twitter.com/anna_debenham)
