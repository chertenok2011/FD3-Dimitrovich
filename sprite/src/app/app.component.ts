import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    private title:string = 'Sprite';
    private url:string = 'http://fe.it-academy.by/Examples/cards2.png';
    private offsetX:string = '0px';
    private offsetY:string = '0px';
    private width:string = '143px';
    private height:string = '193px';

    private position:string = this.offsetX + ' ' + this.offsetY;

    getTitle():string {
        return this.title;
    };

    getUrl():string {
        return this.url;
    }

    getPosition():string {
        return this.position;
    };

    getWidth():string {
        return this.width;
    };

    getHeight():string {
        return this.height;
    };

    clickedImg(newPposition):void {
        this.position = newPposition;
    }
}
