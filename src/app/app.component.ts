import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public uploadFileName: string;
  public uploadFileContent:string;

  public async onFileSelected(event:any) {

    const file:File = event.target.files[0];
    this.uploadFileName = file.name;
    this.uploadFileContent = await file.text(); 
    
    //get object from json file
    //let obj = JSON.parse(this.uploadFileContent);
  }


  
  public saveFileName = "test";
  public saveFileContent = '{ "name": "test"}';
  public saveFileExtension = 'json';


  public onSaveFile(): void {
    let fileName = this.saveFileName + '.' + this.saveFileExtension;
    let fileContent = this.saveFileContent;
    // let fileContent = JSON.stringify( {name: "test name"} );
  
    const file = new Blob([fileContent], { type: "text/plain" });
  
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    link.click();
    link.remove(); 
  }

}
