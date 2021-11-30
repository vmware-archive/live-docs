# Live Docs

Enables Angular based UI component libraries to embed editable code snippets win their showcase style application.

See https://vmware.github.io/vmware-cloud-director-ui-components/dataExporter for an example

This is a monorepo with three projects:

## [NG Live docs](./projects/ng-live-docs/README.md)

This is the project that is used from Angular applications, `@vmw/live-docs`. This is what is used directly by
[VCD's Common UI Components package](https://vmware.github.io/vmware-cloud-director-ui-components)

## Plain JS Live Docs

The intent of this was so that plain JS applications could also use this package but has not fully been developed. It
currently contains a tabbed panel that is built with plain JS.

## Example application

A minimal example application that showcases one of the components from @vmw/ng-live-docs. This is used mainly to
be able to test changes locally without requiring a local installation of @vmw/ng-live-docs from your clone of
https://github.com/vmware/vmware-cloud-director-ui-components

## Background

By running a script to scour through your projects containing your UI components and their respective examples,
Live Docs will be able to showcase their examples with the added benefit of a play button that opens
the example in a stackblitz editor.

# Features

This library is for library developers that want to write an "Examples Application" that can

-   Display source code for examples
-   Display documentation including `@Inputs` and `@Outputs` for a component
-   Allow users to run the example in [stackblitz](https://stackblitz.com/) for quicker learning.

We are using [Angular Material Docs](https://material.angular.io/components) as inspiration.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). Our unit tests make use
of a WidgetObject pattern to minimize duplication of code accessing HTML in tests making the specs easier to read.

## Publishing

-   Make a change to [projects/ng-live-docs/package.json](./projects/ng-live-docs/package.json) or
    [projects/plain-js-live-docs/package.json](./projects/plain-live-docs/package.json).
-   Create a PR
-   When the PR is merged, an action will run and publish the packages to npm.
    -   By creating a version that ends with `next`, for example `"version" : "1.2.3-next""`, the npm version will be tagged
        with `@next`
    -   Versions that don't end with `next` will be published without a tag, which means it will be considered `@latest`.

## To run dev server with simple examples

After having installed the library, you must also include Prism's CSS in your `styles.scss`, allowing you to choose
a theme to be used.

# How to use it

For Angular based libraries, please look at 'How to use it' it section of [a relative link](./projects/ng-live-docs/README.md)
