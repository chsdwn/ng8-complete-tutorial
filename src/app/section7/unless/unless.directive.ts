import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    @Input() set appUnless(condition: boolean) { // the method's name is need to be exact same as the selector
        if (!condition) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    }
}
