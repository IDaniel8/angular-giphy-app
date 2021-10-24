import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GiphyAPIResponse } from './giphy.service.types';

interface GiphyImageData {
  id: string;
  title: string;
  image_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private _apiKey = 'GP3F5J43Gf004vvwMmoK1uVKxZHOAIYb';
  private _baseURL = 'https://api.giphy.com/v1/gifs';
  private _historic: string[] = [];
  private _imageList: GiphyImageData[] = [];

  constructor(private $http: HttpClient) {
    this._historic = JSON.parse(localStorage.getItem('historic') ?? '[]');
    this._imageList = JSON.parse(localStorage.getItem('lastSearch') ?? '[]');
  }

  get historic() {
    return [...this._historic];
  }

  get imageList() {
    return [...this._imageList];
  }

  giphyImageListRequest(query: string) {
    const q = query.toLowerCase();

    if (!this._historic.includes(q)) {
      this._historic.unshift(q);
      this._historic = this._historic.slice(0, 10);

      localStorage.setItem('historic', JSON.stringify(this._historic));
    }

    this.$http
      .get<GiphyAPIResponse>(
        `${this._baseURL}/search?api_key=${this._apiKey}&q=${query}&limit=20&offset=0&rating=g&lang=en`
      )
      .subscribe(({ data }) => {
        this._imageList = data.map((img) => ({
          id: img.id,
          title: img.title.trim() ? img.title : img.username,
          image_url: img.images.fixed_height.url,
        }));
        localStorage.setItem('lastSearch', JSON.stringify(this._imageList));
      });
  }
}
