import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	// userEmail: string;
	// userPassword: string;
	constructor(public afAuth: AngularFireAuth) {
	}
	
	ngOnInit() {
	}

}
