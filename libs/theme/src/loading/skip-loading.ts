import { HttpContextToken } from "@angular/common/http";

export const SkipLoading = new HttpContextToken<boolean>(() => false);



// this.http.get("/api/courses", {
//     context: new HttpContext().set(SkipLoading, true),
//   });