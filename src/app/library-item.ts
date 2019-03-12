import {Reader} from './reader';
import {Date} from './date';

export class LibraryItem {

 constructor(){
    this.isbn = '9999',
    this.title = 'GOT',
    this.sector = 'SCI-FI',
    this.publicationDate = new Date(),
    this.author = 'None',
    this.publisher = 'WB',
    this.no_Of_Pages = 1000,
    this.borrowedDateTime = new Date,
    this.returnedDateTime = new Date,
    this.available  = true,
    this.reader = new Reader(),
    this.type = "Book";
  }

  public isbn : string;
  public title : string;
  public sector : string;
  public publicationDate : Date;
  public author : string;
  public publisher : string;
  public no_Of_Pages : number = null;
  public borrowedDateTime : Date ;
  public returnedDateTime : Date;
  public available : Boolean;
  public reader : Reader ;
  public type : String;

}


