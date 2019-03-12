import { Component, OnInit } from '@angular/core';
import {AddLibraryItemService} from '../add-library-item.service';
import { ToastrService} from 'ngx-toastr';
import {ReturnItem} from '../return-item';


@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {

  constructor(private _AddLibraryItemService: AddLibraryItemService,  private toastr : ToastrService ) {}


  private  returnItemModel = new ReturnItem();

  showSuccess(){
    this.toastr.success('Returned Item Successfully Updated ','Success')
  }

  showAmount(amount : any){
    this.toastr.warning('THe Item is returned after the due date, Must Pay:- ' + amount + "$", 'Attention')
  }

  showInvalidISBN(){
    this.toastr.error('Please check the ISBN number', 'Invalid ISBN')
  }

  showInvalidDate(){
    this.toastr.error('Please check the return date', 'Invalid Date')
  }

  showInvalidReaderID(){
    this.toastr.error('Please check the reader id', 'Invalid Reader ID')
  }



  validate(response:any){
    console.log(response.data.status)
    if(response.data.status==='success_WithFee'){
      this.showSuccess();
      this.showAmount(response.data.amount)
    }
    else if(response.data.status==='success_NoFee') {
     this.showSuccess()
    }
    else if(response.data.status == 'Invalid Return Date') {
      this.showInvalidDate();
    }else if(response.data.status == 'Invalid ReaderID'){
      this.showInvalidReaderID()
    }else if(response.data.status == 'Invalid ISBN'){
      this.showInvalidISBN()
    }
      }

  onSubmit(){
    this._AddLibraryItemService.returnItem(this.returnItemModel)
      .subscribe(
        data => this.validate(data),
        error => console.error('Error', error)
      )
    console.log(this.returnItemModel)
  }


  ngOnInit() {
  }

}
