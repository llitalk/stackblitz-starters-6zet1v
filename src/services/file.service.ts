import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

Injectable({
  providedIn: 'root',
});
export class FileService {
  #http = inject(HttpClient);
  apiUrl = 'https://localhost:8000/api/v1/files/color.csv';
  // csvFiles = new BehaviorSubject<any[]>([]);

  downloadCsv(idsParam: string): Observable<any> {
    const url = `${this.apiUrl}?colorId=${idsParam}`;
    return this.#http.get<any>(url);
  }
}
