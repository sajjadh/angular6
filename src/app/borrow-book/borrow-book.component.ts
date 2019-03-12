import {Component, OnInit} from '@angular/core';
import {AddLibraryItemService} from '../add-library-item.service';
import {ToastrService} from 'ngx-toastr';
import {BorrowItem} from '../borrow-item';


@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {


  constructor(private _AddLibraryItemService: AddLibraryItemService, private toastr: ToastrService) {
  }

  private borrowItemModel = new BorrowItem();

  showSuccess() {
    this.toastr.success('Borrowed Item Successfully Updated ', 'Success');
  }

  showInvalid(isbn: any) {
    this.toastr.error('No Item With ISBN: ' + isbn, 'Invalid ISBN');
  }


  validate(response: any) {
    console.log(response);
    if (response.data.status === 'Success') {
      this.showSuccess();
    }
    else if (response.data.status === 'Already Borrowed') {
      this.toastr.error('Will be available on: ' + response.data.YEAR + '. ' + response.data.MONTH + '. 0' + response.data.DAY, 'Already Borrowed');
    }
    else {
      this.showInvalid(response.data.ISBN);
    }
  }

  onSubmit() {
    this._AddLibraryItemService.borrowItem(this.borrowItemModel)
      .subscribe(
        data => this.validate(data),
        error => console.error('Error', error)
      );
    console.log(this.borrowItemModel);
  }


  ngOnInit(): void {
  }

}
