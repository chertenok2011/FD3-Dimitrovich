import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'sprite.component.html',
    styleUrls: ['sprite.component.css']
})
export class SpriteComponent {
    private title:string = 'Sprite';
    private src:string = 'http://fe.it-academy.by/Examples/cards2.png';
    private position:string = '0px 0px';

    getTitle():string {
        return this.title;
    };

    getSrc():string {
        return this.src;
    }

    getPosition():string {
        return this.position;
    }

    changePosition():void {
        this.position = '-143px 0px';
    }
}
