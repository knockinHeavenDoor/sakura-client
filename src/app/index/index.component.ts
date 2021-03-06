import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../service/article.service';
import {Article} from '../model/article';
import {Page} from '../model/page';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private service: ArticleService) { }
  articles: Article[];
  ngOnInit() {
    const page: Page = new Page();
    page.page = 1;
    page.pageCount = 4;
    this.service.getPageArticles(page).subscribe(res => {
      this.articles = res.data;
    });
  }

}
