import { Component } from '@angular/core';

@Component ({

    selector: 'app-inline',
    template: `<h1>This is Inline Component </h1>`,
    styles: [`h1{ color:darkcyan;
            width:80%;
            margin-left:85px; }`]
})

export class InlineComponent{

}