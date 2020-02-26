import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: "app-sandbox",
  templateUrl: "./sandbox.component.html",
  styleUrls: ["./sandbox.component.scss"]
})
export class SandboxComponent implements OnInit, OnDestroy {
  public users: IUser[];

  private subscribe = new Subject();

  constructor(private activeRoute: ActivatedRoute, private route: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.events.pipe(takeUntil(this.subscribe)).subscribe(res => {
      console.log(res instanceof ActivatedRoute);
      console.log(res);
    });
  }

  ngOnDestroy(): void {
    this.subscribe.next();
    this.subscribe.complete();
  }

  public onGetUsers(): void {
    this.http.get("https://reqres.in/api/users?page=2").pipe(takeUntil(this.subscribe)).subscribe((res: IGetUsersRes) => this.users = res.data)
  }

  public onGetFaultReq(): void {
    this.http.get("https://reqres.in/api/users/23").subscribe(res => console.log(res));
    
  }
}

interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface IGetUsersRes {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
}