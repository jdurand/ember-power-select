[![Build Status](https://travis-ci.org/cibernox/ember-power-select.svg?branch=master)](https://travis-ci.org/cibernox/ember-power-select)

# Ember-Power-Select

Ember Power Select is an Ember-first select component modeled after [Select2](https://select2.github.io/).

## Installation

Ember Power Select works in Ember 1.13 or 2.0+.

As any other ember-cli addon, run:
```
ember install ember-power-select
```

## Usage

Check the full documentation with live examples at [www.ember-power-select.com](http://www.ember-power-select.com) and
please open an issue if something doesn't work or is not clear enough.

Good docs are important :)

## Browser support

About browers compatibility I just tested it in modern browsers but I there is no technical reason it
wouldn't work in IE9+. If you find any problem please file an issue.

## Motivation

> Why reinvent the wheel when there is already good framework-agnostic libraries out there that are
battle tested and can be wrapped?

> — Your brain, now.

Belive me, I tried. And it worked for a while. Two good ember examples of addons doing that are
[ember-cli-selectize](https://github.com/miguelcobain/ember-cli-selectize) and [https://github.com/iStefo/ember-select-2](ember-select-2).

However this approach has inherent downsides.

By accepting to use a framework agnosic library one needs to renounce to take advantege the more higher
level primitives that Ember and HTMLBars provide.

Let's say that by example you need to build a mildly complex select which, as you type in a searchbox,
shows you a list of users that match that search with their avatars, names, and other information,
and if there is no matcher it shows some message. When you select one user you navigate to his profile.

Using components and blocks this can be expressed very naturally.

```hbs
{{#my-select search=(action "findUsers") onchange=(action "seeProfile") as |user|}}
  <img src="{{user.avatarUrl}}" alt="{{t 'alts.avatar-of' user=user.fullName}}">
  <strong>{{user.fullName}}</strong>
  <em>{{user.email}}</em>
{{else}}
  <img src="sad-face.svg">
  <p>{{t "users.sorry-no-matches-try-again"}}</p>
{{/my-select}}
```

This is the kind of expresiveness I wanted to find but is actually not possible to achieve translating between
the "Ember world" where we solve problems in terms of actions and templates and the lower level world
of those libraries where things are expressed in terms of events and DOM nodes.

Even for things that are not impossible to do, translating between the bindings and data structures we use in
ember and those in the libraries requires a surprising amount of glue code and is very tricky task.

Also those libraries tend to be quite complex and bloated with functionality not directly related with
the task they have to solve, like internacionalization for example. We don't need that code making this
libraries weight ~100KB when we already have better and more natural ways to do it already.

I thought that we deserved a select component for ember projects built with from scratch with ember mind.
