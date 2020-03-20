<p align="center">
  <a href="https://storeen.now.sh">
    <img src="https://github.com/murillo94/storeen/blob/master/packages/web/src/public/static/images/logo-all-horizontal.svg" alt="Storeen" width="250px">
  </a>
</p>

> WIP

**Storeen** is a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) real application with your own design system and component library in comprised of modern, responsive, living components.

The storeen frontend structure was designed to try use shared code in all the application pages taking the design system into consideration.

## Usage

```
$ yarn install
$ yarn dev
# or
$ yarn dev -p <custom_port>
```

## Design System

The [@storeen/system](./packages/system) is the core of all components theme-based style props for building all the components inside **storeen**.

## Component Library

The [@storeen/components](./packages/components) is the UI components built on top of **storeen** design system.

## Styleguide

The [@storeen/styleguide](./packages/styleguide) is our design system, the home for all our reusable/principles patterns, components and assets.

Check out our [styleguide](https://storeen.now.sh/styleguide) documentation for more details.
