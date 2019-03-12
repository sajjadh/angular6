import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import {DVD} from '../dvd';
import {AddLibraryItemService} from '../add-library-item.service';


@Component({
  selector: 'app-add-dvd',
  templateUrl: './add-dvd.component.html',
  styleUrls: ['./add-dvd.component.css']
})
export class AddDVDComponent implements OnInit {


  private DVDModel = new DVD();


  constructor(private AddLibraryItemService: AddLibraryItemService,  private toastr : ToastrService ) {
  }


  showStorage(){
    this.toastr.error('Already contain 50 DVD','Storage Full')
  }

  showSuccess(){
    this.toastr.success('Library Item is successfully added ','Success')
  }

  showError(isbn: string){
    this.toastr.error('Duplicate ISBN: ' + isbn, 'Error')
  }

  validate(response:any){
    console.log(response)
    if(response.data.status==='success'){
      this.showSuccess();
    }if(response.data.status==='duplicateEntry'){
      this.showError(response.data.ISBN);
    }if(response.data.status==='No Space') {
      this.showStorage();
    }
  }

  onSubmit(){
    this.AddLibraryItemService.addDVD(this.DVDModel)
      .subscribe(
        data => this.validate(data),
        error => console.error('Error', error)

      )
    console.log(this.DVDModel)
  }


  ngOnInit() {
  }

}
