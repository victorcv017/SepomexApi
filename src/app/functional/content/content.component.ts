import { Component, OnInit } from '@angular/core';
import { SepomexService } from '../../services/sepomex.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers : [SepomexService]
})

export class ContentComponent implements OnInit {

  fcselect = new FormControl('', [Validators.required]);

  public hideRequired : boolean;
  public states : any;
  public municipalities : any;
  public state : any;
  public municipality : any;
  public data : any;
  public val : string;
  displayedColumns: string[] = ['d_codigo', 'd_tipo_asenta', 'd_estado', 'd_ciudad', 'd_mnpio'];

  constructor(private _sepomexService : SepomexService) {
    
  }
  ngOnInit() {
    this.hideRequired = false;
    this._sepomexService.getStates().subscribe(
      result => {
        this.states = result.states;
        console.log(result.states);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  updateMunicipality(state){
    var aux = state.split(',');
    this._sepomexService.getMunicipality(aux[0]).subscribe(
      result => {
        this.municipalities = result.municipalities;
        console.log(result.municipalities);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getData(state , municipality , zip_code){
    if(this.hideRequired && zip_code ){
      console.log(zip_code);
      this._sepomexService.getZipCode(zip_code).subscribe(
        result => {
          this.data = result.zip_codes;
          console.log(result.zip_codes);
        },
        error => {
          console.log(<any>error);
        }
      )
    }else {
      var auxstate = state.split(','), auxmun = municipality.split(',');
      console.log(auxstate,auxmun,state.trim(),municipality)
      this._sepomexService.getData(auxstate[1],auxmun[1]).subscribe(
        result =>{
          this.data = result.zip_codes;
          console.log(result.zip_codes);
        },
        error =>{
          console.log(<any>error);
        }
      )
    }
    
  }
  getErrorMessage() {
    if(!this.hideRequired)
    return this.fcselect.hasError('required') ? 'Debes Seleccionar Un Campo' : '';
  }

  hide(value : string){
    if(value.length == 0) this.hideRequired = false;
    else this.hideRequired = true;
  }

  clean(){
    this.municipalities = [];
    this.hideRequired = false;
    this.data = undefined;
    this.val = '';
  }
}
