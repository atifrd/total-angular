import { AddStaffTypeParam } from './add-staff-type-param';

export class EditStaffTypeParam extends AddStaffTypeParam {

  public constructor(init?: Partial<EditStaffTypeParam>) {
    super();
    Object.assign(this, init);
  }
  guidRecNo: number;
  
}
