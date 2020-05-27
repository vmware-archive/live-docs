/*!
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { Type } from '@angular/core';
import { ApiParameters, DocumentationRetrieverService } from '../documentation-retriever.service';
import { CompodocComponent, CompodocModule, CompodocSchema } from './compodoc-schema';

/**
 * This service retrieves specific properties from compodoc generated documentation
 */
export class CompoDocRetrieverService implements DocumentationRetrieverService {
    constructor(private documentationJson: CompodocSchema[]) {}

    public getOverview(component: Type<unknown>): string {
        return this.getComponent(component).description;
    }

    public getTypescriptSourceCode(component: Type<unknown>): string {
        return this.getComponent(component).sourceCode;
    }

    public getHtmlSourceCode(component: Type<unknown>): string {
        return this.getComponent(component).templateData;
    }

    public getCssSourceCode(component: Type<unknown>): string {
        const styleUrlsData = this.getComponent(component).styleUrlsData;
        if (!styleUrlsData) {
            return;
        }
        return styleUrlsData.map(styleUrl => styleUrl.data).join('\n\n\n');
    }

    public getComponent(component: Type<any>): CompodocComponent {
        for (const documentationJson of this.documentationJson) {
            const compodocComponent = documentationJson.components.find(c => c.name === component.name);
            if (compodocComponent) {
                return compodocComponent;
            }
        }
        return { styleUrlsData: [] } as CompodocComponent;
    }

    public getModule(moduleName: string): CompodocModule | null {
        for (const documentationJson of this.documentationJson) {
            const compodocComponent = documentationJson.modules.find(module => module.name === moduleName);
            if (compodocComponent) {
                return compodocComponent;
            }
        }
        return null;
    }

    public getInputParameters(component: Type<unknown>): ApiParameters[] {
        const comp = this.getComponent(component);
        return comp.inputsClass ? comp.inputsClass.map((input) => {
            return {...input, typeLink: this.getTypeLink(input.type)};
        }) : [];
    }

    public getOutputParameters(component: Type<unknown>): ApiParameters[] {
        const comp = this.getComponent(component);
        return comp.outputsClass ? comp.outputsClass.map((output) => {
            return {...output, typeLink: this.getTypeLink(output.type)};
        }) : [];
    }

    private getTypeLink(type: string): string {
        // Extract the outermost Typescript type of the given type string.
        const rawType = type.split('[')[0].split('<')[0];
        // Check every documentation JSON registered with the library.
        for (const documentationJson of this.documentationJson) {
            // Check every documentation type in the given documentation
            for (const typeLink of Object.keys(documentationJson)) {
                // If it is a list, attempt to find the given raw type
                if (documentationJson[typeLink].find) {
                    const typeDoc = documentationJson[typeLink].find(c => c.name === rawType);
                    if (typeDoc) {
                        return typeLink + '/' + rawType + '.html';
                    }
                } else {
                    // Else check one level deeper because it is the 'miscellaneous' section.
                    for (const innerTypeLink of Object.keys(documentationJson[typeLink])) {
                        // If it is an array, find the given raw type.
                        if (documentationJson[typeLink][innerTypeLink].find) {
                            const typeDoc = documentationJson[typeLink][innerTypeLink].find(c => c.name === rawType);
                            if (typeDoc) {
                                return typeLink + '/' + innerTypeLink + '.html#' + rawType;
                            }
                        }
                    }
                }
            }
        }
        return undefined;
    }
}
