import { FormControl, FormGroup, Validators } from '@angular/forms';

export class GetCargoPortageListDto {
  intRow: number;
  guidRecNo: string;
  chCode: string;
  guidReferenceRecNo: string;
  chReferenceCode: string;
  chReferenceName: string;

  //   guidStuffOwnerCompanyRecNo: string;
  //   chStuffOwnerCompanyCode: string;
  //   chStuffOwnerCompanyName: string;

  //   chContainerCode: string;

  //   intContainerSize: number;
  //   guidContainerTypeRecNo: string;
  //   chContainerTypeCode:string;
  //   chContainerTypeName:string;

  //   flStuffCount:number;
  //   flDeclaredWeight:number;
  //   guidPortageStatusRecNo:string;
  chPortageStatusCode: string;
  //   chPortageStatusName:string;
  //   guidPortageVehicleRecNo:string;
  //   chPortageVehicleCode:string;
  //   chPortageVehicleName:string;

  //   dEstimatedDeliveryDate:Date;
  //   chEstimatedDeliveryDate:Date;
  //   moCostEstimatedPrice:number;

  //   guidPortageLocationRecNo:string;
  //   chPortageLocationName:string;

  //   dPortageDate:Date;
  //   chPortageDate:string;
  //........

  static asFormGroup(model: GetCargoPortageListDto): FormGroup {
    const fg = new FormGroup({
      chCode: new FormControl(model.chCode, Validators.required),
      guidRecNo: new FormControl(model.guidRecNo, Validators.required),
      chPortageStatusCode: new FormControl(
        model.chPortageStatusCode,
        Validators.required,
      ),
    });
    return fg;
  }
}
