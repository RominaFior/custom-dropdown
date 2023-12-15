// dropdown.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  private optionsUrl = 'assets/options.json';

  constructor(private http: HttpClient) {}

  getOptions(): Observable<any> {
    return this.http.get(this.optionsUrl);
  }
}
