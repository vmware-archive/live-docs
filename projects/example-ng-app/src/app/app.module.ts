import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  CompodocSchema,
  NgLiveDocsModule,
  StackBlitzInfo
} from "@vmw/ng-live-docs";

import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";

import liveDocsDocumentationJson from '../../gen/live-docs-doc.json';
import exampleDocumentationJson from '../../gen/example-ng-app-doc.json';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApiViewerExampleModule } from "../example-components/apiviewer/api-viewer.example.module";

export const docJson1: CompodocSchema = liveDocsDocumentationJson;
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
    ClarityModule,
    NgLiveDocsModule.forRoot([docJson1, docJson2], sbInfo),
    ApiViewerExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
