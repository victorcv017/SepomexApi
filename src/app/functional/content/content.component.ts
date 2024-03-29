import { Component, OnInit, ViewChild } from '@angular/core';
import { SepomexService } from '../../services/sepomex.service';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';

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
  public data : boolean = true;
  public val : string;
  displayedColumns: string[] = ['d_codigo', 'd_tipo_asenta', 'd_estado', 'd_ciudad', 'd_mnpio'];

  dataSource: MatTableDataSource<object[]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private _sepomexService : SepomexService) {
    
    this.dataSource = new MatTableDataSource();
    console.log(this.dataSource);
    
  }
  ngOnInit() {
    this.hideRequired = false;
    this._sepomexService.getStates().subscribe(
      result => {
        this.states = result.states;
        console.log(result);
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
          this.dataSource.data = result.zip_codes;
          console.log(result);
          console.log("test : ", this.dataSource);
          this.data = false;
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
          this.dataSource.data = result.zip_codes;
          console.log(result);
          console.log("test : ", this.dataSource.data);
          this.data = false;
        },
        error =>{
          console.log(<any>error);
        }
      )
    }
    console.log("daaata ", this.dataSource);
    this.dataSource.paginator = this.paginator;
    
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
    this.data = true;
  }
}
