import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LibraryItem} from '../library-item';
import {Reader} from '../reader';
import {AddLibraryItemService} from '../add-library-item.service';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {




  libraryItemModel = new LibraryItem();
  constructor(private _AddLibraryItemService: AddLibraryItemService, private toastr : ToastrService) {}


  showSuccess(){
    this.toastr.success('Library Item is successfully added ','Success')
  }

  showStorage(){
    this.toastr.error('Already contain 150 Book','Storage Full')
  }

  showError(ISBN: any){
    this.toastr.error('Duplicate ISBN: ' + ISBN, 'Error')
  }

  validate(response:any) {
    console.log(response)
    if (response.data.status === 'success') {
      this.showSuccess();
    }
    if (response.data.status === 'No Space') {
      this.showStorage();
    }if(response.data.status==='duplicateEntry') {
      this.showError(response.data.ISBN);
    }
  }

  onSubmit(){
    this._AddLibraryItemService.addBook(this.libraryItemModel)
      .subscribe(
        data => this.validate(data),
        error => console.error('Error', error)
      )
    console.log(this.libraryItemModel)
  }



  ngOnInit() {

  }

}
