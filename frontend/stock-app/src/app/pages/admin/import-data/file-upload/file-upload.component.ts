import { Component, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { UploaderComponent, SelectedEventArgs, FileInfo, RemovingEventArgs } from '@syncfusion/ej2-angular-inputs';


@Component({
  selector: 'fsd-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent  {

  @ViewChild('fileupload')
    public uploadObj: UploaderComponent;

    public path: Object = {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    };

    public dropElement: HTMLElement = document.getElementsByClassName('control-fluid')[0] as HTMLElement;

    public allowExtensions: string = '.doc, .docx, .xls, .xlsx';

    public onSelected(args : SelectedEventArgs) : void {
        args.filesData.splice(5);
        let filesData : FileInfo[] = this.uploadObj.getFilesData();
        let allFiles : FileInfo[] = filesData.concat(args.filesData);
        if (allFiles.length > 5) {
            for (let i : number = 0; i < allFiles.length; i++) {
                if (allFiles.length > 5) {
                    allFiles.shift();
                }
            }
            args.filesData = allFiles;
            args.modifiedFilesData = args.filesData;
        }
        args.isModified = true;
    }

    public onFileRemove(args: RemovingEventArgs): void {
        args.postRawFile = false;
    }

    constructor() {
        
    }

}
