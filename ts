showHeader=true;
constructor(private router:Router)
{
router.events.subscribe(
(var)=>{
if(val instanceof NavigationEnd){
if(var.url=='/login')}
this.showHeader=false
}
else{
this.showHeader=true
}


//chatgpt edit above code
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular14-node16-p1';
  showHeader = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current URL is '/login'
        this.showHeader = event.url !== '/login';
      }
    });
  }
}
