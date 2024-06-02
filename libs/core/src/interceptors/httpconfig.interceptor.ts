import { HttpInterceptorFn } from '@angular/common/http';

export const httpconfigInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
