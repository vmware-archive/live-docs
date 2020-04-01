import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  CompodocSchema,
  NgLiveDocsModule,
  StackBlitzInfo
} from "@vmw/ng-live-docs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";

import componentDocumentationJson from '../../gen/component-ng-app-doc.json';
import exampleDocumentationJson from '../../gen/example-ng-app-doc.json';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DatagridExamplesModule } from "../example-components/datagrid/datagrid.examples.module";

export const docJson1: CompodocSchema = componentDocumentationJson;
export const docJson2: CompodocSchema = exampleDocumentationJson;
export const sbInfo: StackBlitzInfo = {
  templateId: 'vcd-ui-cc-starter-clarity-v8-yhe4yg',
  projectName: 'Live docs',
  moduleFinder(componentName: string): string {
    return componentName.replace('ExampleComponent', 'ExampleModule');
  },
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule,
    NgLiveDocsModule.forRoot([docJson1, docJson2], sbInfo),
    DatagridExamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
