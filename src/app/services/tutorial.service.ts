import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:4200';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return localStorage.clear();
  }

  deleteButton(key: string) {
    return localStorage.removeItem(key);
  }

  // public removeItem(key: string) {
  //   localStorage.removeItem(key);
  // }

  findByTitle(title: any): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }

  setData(key: string, data: any) {
    return localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
}
