/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CompoDocRetrieverService } from './compodoc/compodoc-retriever.service';
import { CompodocSchema } from './compodoc/compodoc-schema';
import { DocumentationContainerModule } from './documentation-container/documentation-container.module';
import { DocumentationRetrieverService } from './documentation-retriever.service';
import { StackBlitzWriterService } from './stack-blitz-writer.service';
import { COMPODOC_URL, DOCUMENTATION_DATA, STACKBLITZ_INFO } from './injection-tokens';
import { StackBlitzInfo } from './interfaces';

const declarations = [];

/**
 * NOTE: The following two has to be exported otherwise the AoT compiler won't see it.
 */

export function getCompoDocRetrieverService(documentations: CompodocSchema[]): DocumentationRetrieverService {
    return new CompoDocRetrieverService(documentations);
}

export function getStackBlitzWriter(
    sbData: StackBlitzInfo,
    docRetrieverService: DocumentationRetrieverService
): StackBlitzWriterService {
    return new StackBlitzWriterService(sbData, docRetrieverService);
}

@NgModule({
    imports: [DocumentationContainerModule],
    declarations: [...declarations],
    exports: [...declarations, DocumentationContainerModule],
})
export class NgLiveDocsModule {
    /**
     * Called in the host package importing this doc library for providing the documentation JSONs needed for
     * {@link CompoDocRetrieverService}
     */
    public static forRoot(
        documentations: CompodocSchema[],
        stackblitzData: StackBlitzInfo,
        compodocUrl?: string
    ): ModuleWithProviders<NgLiveDocsModule> {
        return {
            ngModule: NgLiveDocsModule,
            providers: [
                // For injecting 'documentations' into factory function, we have to first provide them as injectable.
                {
                    provide: DOCUMENTATION_DATA,
                    useValue: documentations,
                },
                {
                    provide: STACKBLITZ_INFO,
                    useValue: stackblitzData,
                },
                {
                    provide: DocumentationRetrieverService,
                    useFactory: getCompoDocRetrieverService,
                    deps: [DOCUMENTATION_DATA],
                },
                {
                    provide: StackBlitzWriterService,
                    deps: [STACKBLITZ_INFO, DocumentationRetrieverService],
                    useFactory: getStackBlitzWriter,
                },
                {
                    provide: COMPODOC_URL,
                    useValue: compodocUrl,
                },
            ],
        };
    }
}
