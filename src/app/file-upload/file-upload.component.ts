import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit{

  shortLink: string = "";
    loading: boolean = false; // Flag variable
    file= File ; // Variable to store file
  
    constructor(private fileUploadService: FileUploadService) { }
  
    ngOnInit(): void {
    }
    onChange(event: any) {
      this.file = event.target.files[0];
  }
   onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        this.fileUploadService['upload'](this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
                    this.shortLink = event.link;
                    this.loading = false; // Flag variable 
                }
            }
        );
    } 

}
