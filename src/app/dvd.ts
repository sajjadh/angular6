import {Reader} from './reader';
import {Date} from './date';

export class DVD {

  constructor(){

                this.isbn = '8888';
               this.title = 'HP-Movie';
               this.sector = 'Action';
               this.publicationDate = new Date();
               this.available = true;
               this.actor = '';
               this.producer = 'WB';
               this.availableSubtitles ='english';
               this.availableLanguages =' Chinese';
               this.borrowedDateTime = new Date();
               this.returnedDateTime = new Date();
               this.reader = new Reader();
               this.type = "DVD";
  }

  public isbn : string;
  public title : string;
  public sector : string;
  public publicationDate : Date;
  public available : Boolean;
  public actor: string;
  public producer : string;
  public availableSubtitles : string;
  public availableLanguages : string;
  public borrowedDateTime : Date;
  public returnedDateTime : Date;
  public reader : Reader;
  public type : string;

}
