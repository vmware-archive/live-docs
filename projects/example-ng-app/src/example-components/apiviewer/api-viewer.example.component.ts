/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Component } from '@angular/core';
import { ApiViewerComponent } from '@vmw/ng-live-docs';

@Component({
    templateUrl: './api-viewer.example.component.html',
    selector: 'vmw-api-viewer-example',
})
export class ApiViewerExampleComponent {
    component = ApiViewerComponent;
}
