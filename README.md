# Live Docs

Enables Angular based UI component libraries to embed editable code snippets win their showcase style application

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

## To install

`npm install @vmw/live-docs` for the latest stable release or
`npm install @vmw/live-docs@next` for the upcoming release, which could contain APIs that may not be stable

## To run dev server with simple examples

After having installed the library, you must also include Prism's CSS in your `styles.scss`, allowing you to choose
a theme to be used.

# How to use it

## Run Script

The script is run on both projects: the component's library project and the matching examples application. They will
output two JSON files that must be provided in app.module.ts

### Example
    npx ng-live-docs {projects/ui-lib/tsconfig.lib.json} {public-api.ts} {ui-lib-doc-ouput.json}
    npx ng-live-docs {projects/examples/tsconfig.app.json} {main.ts} {examples-doc-ouput.json}

### Create a StackBlitz Template

Create a StackBlitz project that will be used as a template when merging your examples. Feel free to modify the
template, adding boiler plate HTML for your editable examples and any package.json changed needed by your UI library.

## Provide generated data in app.module

The library needs to know the module for your example component. A strategy should be implemented in
```
export const sbInfo: StackBlitzInfo = {
  templateId: 'vcd-ui-cc-starter-clarity-v8-yhe4yg',
  projectName: 'Live docs',
  // How to get the name of a module for an example component
  // This strategy just replaces ExampleComponent with ExampleModule in a component name
  moduleFinder(componentName: string): string {
    return componentName.replace('ExampleComponent', 'ExampleModule');
  },
};
```

Then provide the information in your imports list for your application module

```
imports: [
    NgLiveDocsModule.forRoot([uiLibDocOutputJson, examplesDocOutputJson], sbInfo),
    ...
]
```

## Replace Example Components with <vmw-example-viewer>
Wherever you were loading
```
<app-example-component></app-example-component>
```

Replace that with
<vmw-examplew-viewer [component]="ExampleComponent"></vmw-examplew-viewer>
