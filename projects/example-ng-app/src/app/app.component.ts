/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Component } from "@angular/core";
import { ApiViewerComponent, ExampleEntry } from "@vmw/ng-live-docs";
import { ApiViewerExampleComponent } from "../example-components/apiviewer/api-viewer.example.component";

@Component({
  selector: 'vmw-examples-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  componentDescriptor: ExampleEntry = {
    component: ApiViewerExampleComponent,
    forComponent: ApiViewerComponent,
    title: 'Api viewer'
  };
}
