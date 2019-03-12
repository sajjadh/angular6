import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AddLibraryItemService} from '../add-library-item.service';
import {DVD} from '../dvd';
import {LibraryItem} from '../library-item';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})


export class DisplayItemsComponent implements OnInit {

  hour : number;
  day : number;
  month : number;
  year : number;

  public searchText : string;


  constructor(private _AddLibraryItemService: AddLibraryItemService, private toastr: ToastrService, router : Router) {
    this.isbn = "";
  }

  public isbn : string;
  libraryItems = []

  ngOnInit() {
    this._AddLibraryItemService.displayItem()
      .subscribe(
        data => this.displayItems(data),
          error => console.error('Error', error)
      );
  }

  displayItems(response : any){
    if(response.data.status =="success")
    this.libraryItems = JSON.parse(response.data.Library_Items);
    else if(response.data.status == 'no items'){
      this.toastr.warning('No Items In the Library Database', 'Message')
    }else {
      this.toastr.error('Something went wrong', 'Error')
    }
  }


  searchItem(title: string){
    console.log(title)

    this.searchText = title;
    console.log(title)
    this._AddLibraryItemService.searchItem(title)
      .subscribe(
        data => this.searchItemResults(data),
        error => console.error('Error', error)
      );

  }

  searchItemResults(response : any){
    if(response.data.status == 'Success') {
      this.libraryItems = JSON.parse(response.data.searchItems)
    }else if (response.data.status == 'No Match'){
      this.toastr.warning('No Match found', 'Message')
    }else{
      this.toastr.warning('No Items In the Library Database', 'Message')
    }
  }


  deleteItem(isbn : string){
  JSON.parse(isbn);
  this.isbn = isbn;
  console.log(isbn);
    // this.isbn = isbn
    // console.log(isbn)
    this._AddLibraryItemService.deleteItem(isbn)
       .subscribe(
        data => this.validateDelete(data),
        error => console.error('Error', error)
       )
    // console.log(isbn)
    this.ngOnInit();
  }


  validateDelete(response:any) {
    console.log(response)
    if (response.data.status == 'success') {
      this.libraryItems = JSON.parse(response.data.Library_Items)
      this.toastr.success('Library Item is successfully Deleted ','Success')
    }
    else if(response.data.status== 'Failed') {
      this.toastr.error('Can not delete Item', 'Error')
    }
    else {
      this.toastr.error('Something went wrong', 'Error')
    }
  }



print(){
    console.log(this.libraryItems)
  }

}
