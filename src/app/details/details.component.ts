import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../shared/blog.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

name = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.name = this.route.snapshot.params.name;
  }

}
