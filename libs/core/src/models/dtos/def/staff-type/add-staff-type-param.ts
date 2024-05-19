export class AddStaffTypeParam {
  public constructor(init?: Partial<AddStaffTypeParam>) {
    Object.assign(this, init);
  }

  //chCode: string;
  chName: string | null;
  chEnName?: string | null;
  chCMRCode?: string | null;
  chComment?: string | null;
}
