import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  private router: Router
  private route: ActivatedRoute

  constructor(
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id'] === '0') {
        this.router.navigate(['/404'])
      }
    })
  }

  goBack() {
    this.router.navigate(['/posts'])
  }

}
