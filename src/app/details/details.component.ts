import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../shared/blog.service';
import { Blog } from '../shared/blog.model';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css'],
	providers :[BlogService]
})
export class DetailsComponent implements OnInit {

	name = '';
	private sub: any;
	key: string;
	blogList : Blog[];
	constructor(private route: ActivatedRoute, private blogService: BlogService) { }

	ngOnInit() {
		var x = this.blogService.getData();
		x.snapshotChanges().subscribe(item => {
			this.blogList = [];
			item.forEach(element => {
				var y = element.payload.toJSON();
				y["$key"] = element.key;
				this.blogList.push(y as Blog);
			});
		});
		this.sub = this.route.params.subscribe(params => {
			this.key = params['key']; 
			console.log(this.blogList);
		});
	}
	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
