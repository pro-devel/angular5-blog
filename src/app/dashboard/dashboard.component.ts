import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BlogService } from './../shared/blog.service'
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms'

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	providers :[BlogService]
})
export class DashboardComponent implements OnInit {
	// userEmail: string;
	// userPassword: string;
	constructor(public afAuth: AngularFireAuth, private blogService: BlogService, private tostr: ToastrService) {
	}
	
	ngOnInit() {
		this.resetForm();
	}
	onSubmit(blogForm: NgForm) {
    if (blogForm.value.$key == null)
      this.blogService.insertBlog(blogForm.value);
    else
      this.blogService.updateBlog(blogForm.value);
    this.resetForm(blogForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(blogForm?: NgForm) {
    if (blogForm != null)
      blogForm.reset();
    this.blogService.selectedBlog = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0,
    }
  }
}
