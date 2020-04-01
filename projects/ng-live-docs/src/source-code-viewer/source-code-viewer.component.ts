/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Component, ElementRef, Input, OnDestroy, Type } from '@angular/core';
import { TabbedCodeViewer } from '@vmw/plain-js-live-docs';
import Prism from 'prismjs';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
import { DocumentationRetrieverService } from '../documentation-retriever.service';

/**
 * To display the 3 code parts(TypeScript, HTML and CSS) of a component
 */
@Component({
    selector: 'vmw-source-code-viewer',
    template: '',
})
export class SourceCodeViewerComponent implements OnDestroy {
    constructor(private documentationRetriever: DocumentationRetrieverService, private el: ElementRef) {}

    private tabbedCodeViewer: TabbedCodeViewer;

    /**
     * The component whose typescript, html, css will be displayed
     */
    @Input()
    set component(component: Type<unknown>) {
        if (!component) {
            return;
        }

        this.tabbedCodeViewer = new TabbedCodeViewer(
            [
                {
                    language: 'HTML',
                    sourceCode: this.documentationRetriever.getHtmlSourceCode(component),
                    languageId: Prism.languages.html,
                },
                {
                    language: 'TypeScript',
                    sourceCode: this.documentationRetriever.getTypescriptSourceCode(component),
                    languageId: Prism.languages.typescript,
                },
                {
                    language: 'SCSS',
                    sourceCode: this.documentationRetriever.getCssSourceCode(component),
                    languageId: Prism.languages.scss,
                },
            ].filter(code => code.sourceCode)
        );
        this.tabbedCodeViewer.render(this.el.nativeElement);
    }

    ngOnDestroy(): void {
        this.tabbedCodeViewer.destroy();
    }
}
