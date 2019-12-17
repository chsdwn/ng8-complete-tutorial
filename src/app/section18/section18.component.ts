import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';

import { PostService } from './services/post.service';

import { Post } from './post.model';

@Component({
  selector: 'app-section18',
  templateUrl: './section18.component.html',
  styleUrls: ['./section18.component.css']
})
export class Section18Component implements OnInit, OnDestroy {
  firebaseDbUrl = 'https://angular-tutorial-54478.firebaseio.com/';
  errorSubscription = new Subscription();
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
    this.errorSubscription = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
    }, error => {
      this.error = error.message;
    });
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
    }, error => {
      this.error = error.message;
      this.isFetching = false;
    });
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }
}
