import { Component } from '@angular/core';

@Component ({

    selector: 'app-inline4',
    template: `<p>This is Inline Component4 </p>

                <select name = "course" id = "course">
                    <option value = "angular" >Angular</option>
                    <option value = "HTML" >Html</option>
                    <option value = "CSS" >CSS</option>
                    <option value = "JavaScript" >JavaScript</option>
                </select>
    
    
    
    
    `,
    styles: [`p{ color:darkcyan;
            width:80%;
            margin-left:85px;
            background-color: burlywood;
            padding:10px 10px;
        
        }

        #course{
            width:30%;
            margin-left:85px;
            background-color: burlywood;
            padding:10px 10px; 
        }
            `]
})

export class Inline4Component{
    
}