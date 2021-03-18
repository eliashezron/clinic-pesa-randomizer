import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
    contat:string=''
    public counter:number=0;
    
  constructor() { }

  ngOnInit(): any {
    
  }
    count():any{
        this.counter++
        this.contat ='contact'
      }
      
    }

    // let load = 0

    // let int = setInterval(blurring, 30)
    
    // function blurring() {
    //   load++
    
    //   if (load > 99) {
    //     clearInterval(int)
    //   }
    
      
    //   this.counter.style.opacity = scale(load, 0, 100, 1, 0)
    //   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    // }
 