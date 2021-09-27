import { Component } from '@angular/core';

@Component ({

    selector: 'app-inline2',
    template: `<p>This is Inline Component2 </p>`,
    styles: [`p{ color:darkred;
            width:80%;
            margin-left:85px;
            background-color: burlywood;
            padding:10px 10px;
        
        }
            `]
})

export class Inline2Component{
    
}