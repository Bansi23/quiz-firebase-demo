import { Injectable, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  //#region create product Api call

  //#endregion


  constructor(private fb: FormBuilder,
    private _cS: CommonService) { }
}
