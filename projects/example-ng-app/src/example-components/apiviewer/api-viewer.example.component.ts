/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import {Component} from '@angular/core';
import { ApiViewerComponent } from '@vmw/ng-live-docs';

@Component({
  templateUrl: './api-viewer.example.component.html',
})
export class ApiViewerExampleComponent {
  component = ApiViewerComponent;
}
