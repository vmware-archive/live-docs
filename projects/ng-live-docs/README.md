# NgLiveDocs

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Code scaffolding

Run `ng generate component component-name --project ng-live-docs` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ng-live-docs`.
> Note: Don't forget to add `--project ng-live-docs` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ng-live-docs` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test ng-live-docs` to execute the unit tests via [Karma](https://karma-runner.github.io).

## How to use it
- Overview
    - [To install](#to-install)
    - [Generate documentation](#generate-documentation)
    - [Creating examples and their modules](#creating-examples-and-their-modules)
    - [App entry module changes](#app-entry-module-changes)
    - [Adding examples to the HTML](#Adding-examples-to-the-html)

#### To install

`npm install @vmw/ng-live-docs` for the latest stable release or
`npm install @vmw/ng-live-docs@next` for the upcoming release, which could contain APIs that may not be stable

#### Generate documentation:
- Once installed, documentation json files have to be generated for the angular components library and its examples app
in the following way:

        node $NODE_DEBUG_OPTION node_modules/@vmw/ng-live-docs/index.js <path_to_package_tsconfig> <path_to_package_entryPoint_Or_publicApi> <docJson_outputFile_path>

#### Creating examples and their modules:
- Two files are required for every example and they HAVE to be named in the following format for them to work with NgLiveDocs

    - <component_name>.example.component.ts. The component class name must be <component_name>ExampleComponent
    - <component_name>.example.module.ts. The module class name must be <component_name>ExampleModule. For every `.component` a `.module` has to be created.

Please refer to [apiviewer example](../example-ng-app/src/example-components/apiviewer) to get an idea about how to create an example and its module

#### App entry module changes:
- Import the generated doc jsons into app.module.ts as following

        import componentsDocumentationJson from '../../gen/components-doc.json';
        import examplesDocumentationJson from '../../gen/examples-doc.json';
        
        /**
         * The following 2 constants are declared for AOT compilation purpose. Otherwise, the compilation would silently fail and
         * the doc jsons are given as null to the NgLiveDocsModule.
         * NOTE: The following two has to be exported otherwise the AoT compiler won't see it.
         */
        export const docJson1: CompodocSchema = componentsDocumentationJson;
        export const docJson2: CompodocSchema = examplesDocumentationJson;


- We use the online IDE Stackblitz to run examples code. Create the Information required for Stackblitz service

        export const sbInfo: StackBlitzInfo = {
            /** ID of a URL to StackBlitz starter project. This has to be created before running the app. */
            templateId: 'vcd-ui-cc-starter-template',
        
            /** The name of the project displaying examples */
            projectName: 'VMware Cloud Director UI Components',
        
            /**
             * Finds a module for a component
             * If this is null or an empty string is returned, the module is not added to the example
             */
            moduleFinder?(componentName: string): string;
        };


- Provide the above 3 resources(2 docJsons and sbInfo) to the NgLiveDocs module inside AppModule

        @NgModule({
            ...
            imports: [
                ...
                NgLiveDocsModule.forRoot([docJson1, docJson2], sbInfo),
                ...
            ],
            ...
        })
        export class AppModule {
        }

- Import the <component_name>ExampleModule created in [previous step](#creating-examples-and-their-modules) into AppModule by adding it to list of imports

- Please refer to [example app module](../example-ng-app/src/app/app.module.ts) for this step

#### Adding examples to the HTML:

- Create a ExampleEntry object as below:

        exampleEntry: ExampleEntry = {
            component: ApiViewerExampleComponent,
            forComponent: ApiViewerComponent,
            title: 'Api viewer'
          };

- Pass that exampleEntry to the ExampleViewer component in the HTML:

        <vmw-example-viewer [exampleEntry]="exampleEntry"></vmw-example-viewer>


Please refer to [example app](../example-ng-app/src/app) for this step
