/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  CompodocSchema,
  NgLiveDocsModule,
  StackBlitzInfo
} from '@vmw/ng-live-docs';

import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import exampleDocumentationJson from '../../gen/example-ng-app-doc.json';
import liveDocsDocumentationJson from '../../gen/live-docs-doc.json';
import { ApiViewerExampleModule } from '../example-components/apiviewer/api-viewer.example.module';

export const docJson1: CompodocSchema = liveDocsDocumentationJson as unknown as CompodocSchema;
export const docJson2: CompodocSchema = exampleDocumentationJson as unknown as CompodocSchema;
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
    ApiViewerExampleModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
