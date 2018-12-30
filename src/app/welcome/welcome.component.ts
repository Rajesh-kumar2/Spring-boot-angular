import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name: string;
  welMsg: string;
  constructor(private route: ActivatedRoute,
    private dataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['id'];
  }

  getWelcomeMessage(){
    this.dataService.executeHelloWorldService().subscribe(response => {
     this.welMsg = response.message;
    }, error =>{
      this.welMsg = error.error.message;
    });
  }
  getWelcomeMessageWithParam(){
    this.dataService.serviceWithPath(this.name).subscribe(response => {
     this.welMsg = response.message;
    }, error =>{
      this.welMsg = error.error.message;
    });
  }

}
