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

We recommend that a separate PR be created when publishing a new version of the library. To publish a new version
of `@vmw/plain-js-live-docs` or `@vmw/ng-live-docs`, you must add the following anywhere in your commit message:

-   `[publish @vmw/plain-js-live-docs]` to publish @vmw/plain-js-live-docs@next
-   `[publish @vmw/ng-live-docs]` to publish @vmw/ng-live-docs@next
-   `[publish @vmw/plain-js-live-docs@latest]` to publish @vmw/plain-js-live-docs@latest
-   `[publish @vmw/ng-live-docs@latest]` to publish @vmw/ng-live-docs@latest

And modify the corresponding package.json files:

-   [projects/ng-live-docs/package.json](./projects/ng-live-docs/package.json)
-   [projects/plain-js-live-docs/package.json](./projects/plain-live-docs/package.json).

Note that `@latest` releases are only to be created when we release a version of VCD. Most releases, except for the
final release that is used by a release of VCD, should be `@next`

## To run dev server with simple examples

After having installed the library, you must also include Prism's CSS in your `styles.scss`, allowing you to choose
a theme to be used.

# How to use it

For Angular based libraries, please look at 'How to use it' it section of [NG LiveDocs](./projects/ng-live-docs/README.md)
