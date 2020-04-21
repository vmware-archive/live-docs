/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiViewerModule } from '@vmw/ng-live-docs';
import { ApiViewerExampleComponent } from './api-viewer.example.component';

@NgModule({
  declarations: [ApiViewerExampleComponent],
  imports: [CommonModule, ApiViewerModule],
  exports: [ApiViewerExampleComponent],
  entryComponents: [ApiViewerExampleComponent],
})
export class ApiViewerExampleModule {}
