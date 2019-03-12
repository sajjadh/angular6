import {Reader} from './reader';
import {Date} from './date';

export class BorrowItem {

  constructor(){
      this.isbn = '99999',
      this.borrowedDateTime = new Date(),
      this.reader = new Reader()


  }

  public isbn : string;
  public borrowedDateTime : Date ;
  public reader : Reader ;

}


