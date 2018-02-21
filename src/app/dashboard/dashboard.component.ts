import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BlogService } from './../shared/blog.service'
import { NgForm } from '@angular/forms'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Blog } from '../shared/blog.model';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	providers :[BlogService]
})
export class DashboardComponent implements OnInit {

  blogList: Blog[];
	constructor(public afAuth: AngularFireAuth, private blogService: BlogService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.resetForm();
    var x = this.blogService.getData();
    x.snapshotChanges().subscribe(item => {
      this.blogList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.blogList.push(y as Blog);
      });
    });
  }
  onSubmit(blogForm: NgForm) {
    if (blogForm.value.$key == null)
      this.blogService.insertBlog(blogForm.value);
    else
      this.blogService.updateBlog(blogForm.value);
    this.resetForm(blogForm);
    this.showSuccess();
  }

  resetForm(blogForm?: NgForm) {
    if (blogForm != null)
      blogForm.reset();
    this.blogService.selectedBlog = {
      $key: null,
      name: '',
      image: '',
      label: '',
      content: '',
    }
  }
  onEdit(emp: Blog) {
    this.blogService.selectedBlog = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.blogService.deleteBlog(key);
      this.showError();
    }
  }

  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  showError() {
    this.toastr.error('This is not good!', 'Deleted!');
  }
}
