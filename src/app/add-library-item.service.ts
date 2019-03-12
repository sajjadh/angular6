import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LibraryItem} from './library-item';
import {catchError} from 'rxjs/internal/operators';
import {DVD} from './dvd';
import {BorrowItem} from './borrow-item';
import {ReturnItem} from './return-item';


@Injectable({
  providedIn: 'root'
})
export class AddLibraryItemService {

  _url_book = 'http://localhost:9000/LibraryItems/addBook';

  _url_dvd = 'http://localhost:9000/LibraryItems/addDVD';

  _url_borrow = 'http://localhost:9000/LibraryItems/borrowItem';

  _url_return = 'http://localhost:9000/LibraryItems/returnItem';

  _url_display = 'http://localhost:9000/LibraryItems/displayItems';

  _url_delete = 'http://localhost:9000/LibraryItems/deleteItem';

  _url_search = 'http://localhost:9000/LibraryItems/displayItem/searchResults';


  constructor(private _http: HttpClient) { }
  //For BOOk Models
        addBook(libraryItem_BOOK: LibraryItem ){
           return this._http.post<any>(this._url_book, libraryItem_BOOK)
        }

   // For DVD Models
  addDVD(libraryItem_DVD: DVD){
    return this._http.post<any>(this._url_dvd, libraryItem_DVD)
  }

  borrowItem (libraryItem_ITEM : BorrowItem){
    return this._http.post<any>(this._url_borrow, libraryItem_ITEM)
  }


  returnItem (libraryItem_ITEM : ReturnItem){
    return this._http.post<any>(this._url_return, libraryItem_ITEM)
  }

  displayItem (){
    return this._http.get<any>(this._url_display)
  }

  deleteItem(isbn : string){
    return this._http.post<any>(this._url_delete, isbn )
    console.log(isbn + " sending")
  }

  searchItem(title : string){
    return this._http.post<any>(this._url_search, title)
    console.log(title + " sending")
  }

}
