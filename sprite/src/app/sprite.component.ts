import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sprite',
    templateUrl: 'sprite.component.html',
    styleUrls: ['sprite.component.css']
})
export class SpriteComponent {

    @Input('url')
    private url: string;

    @Input('position')
    private position: string;

    @Input('width')
    private width: string;

    @Input('height')
    private height: string;

    @Output('clicked')
    public clicked: EventEmitter<string> = new EventEmitter<string>();

    getWidth() {
        return this.width;
    };

    getHeight() {
        return this.height;
    };
    
    getUrl() {
        return this.url;
    };

    getPosition(): string {
        return this.position;
    };

}
