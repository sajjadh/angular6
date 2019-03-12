import {Date} from './date';
import {Reader} from './reader';

export class ReturnItem {
  constructor(){
    this.isbn = '99999',
      this.returnDateTime = new Date(),
      this.reader = new Reader()


  }

  public isbn : string;
  public returnDateTime : Date ;
  public reader : Reader ;

}
