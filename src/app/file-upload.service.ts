import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  baseApiUrl = "https://file.io"
    
  constructor(private http:HttpClient) { }
  upload(file: any):Observable<any> {
  
    // Create form data
    const formData = new FormData(); 
          formData.append("file", file, file.name);
      
    
    return this.http.post(this.baseApiUrl, formData)
}
}
