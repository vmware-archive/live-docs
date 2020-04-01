/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { NgModule } from '@angular/core';
import { DatagridComponent } from '@vcd/ui-components';
import { Documentation } from '@vmw/ng-live-docs';
import { DatagridLinkExampleComponent } from './datagrid-link.example.component';
import { DatagridLinkExampleModule } from './datagrid-link.example.module';

Documentation.registerDocumentationEntry({
    component: DatagridComponent,
    displayName: 'Datagrid',
    urlSegment: 'datagrid',
    examples: [
        {
            component: DatagridLinkExampleComponent,
            forComponent: null,
            title: 'Links from Datagrid Example',
        },
    ],
});
/**
 * A module that imports all data grid example modules
 */
@NgModule({
    imports: [
        DatagridLinkExampleModule
    ],
})
export class DatagridExamplesModule {}
