# Live Docs

Enables Angular based UI component libraries to embed editable code snippets win their showcase style application.

See https://vmware.github.io/vmware-cloud-director-ui-components/dataExporter

## Background
By running a script to scour through your projects containining your UI components and their respective examples,
UI comoponent libraries will be able to showcase their examples with the added benefit of a play button that opens
the example in a stackblitz editor.

# Features

This library is for library developers that want to write an examples application that can

- Display source code for examples
- Display documentation including `@Inputs` and `@Outputs` for a component
- Allow users to run the example in [stackblitz](https://stackblitz.com/) for quicker learning.

We are using [Angular Material Docs](https://material.angular.io/components) as inspiration.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). Our unit tests make use
of a WidgetObject pattern to minimize duplication of code accessing HTML in tests making the specs easier to read.

## To run dev server with simple examples

After having installed the library, you must also include Prism's CSS in your `styles.scss`, allowing you to choose
a theme to be used.

# How to use it

For Angular based libraries, please look at 'How to use it' it section of [a relative link](./projects/ng-live-docs/README.md)
