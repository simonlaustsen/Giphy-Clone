import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  public searchForm = this.fb.group({
    search: [''],
    text: [''],
    textPosition: [0],
  });

  constructor(
    private fb: FormBuilder,
    private searchBarService: SearchBarService
  ) {}

  onSearch() {
    const query = this.searchForm.value.search as string;
    console.log('📣', query);
    this.searchBarService.getImages(query).subscribe((response) => {
      console.log('📣', response);
    });

    // https://api.giphy.com/v1/stickers/search?q=cat&limit=10&rating=g&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq
  }
}
