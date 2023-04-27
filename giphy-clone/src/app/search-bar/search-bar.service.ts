import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  constructor(public http: HttpClient) {}

  public getImages(query: string) {
    const url = `https://api.giphy.com/v1/stickers/search?q=${query}&limit=3&rating=g&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq`;
    return this.http.get(url);
  }
}
