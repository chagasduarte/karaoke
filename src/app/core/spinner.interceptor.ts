import { Injectable } from '@angular/core';
import { HttpRequest,
         HttpHandler,
         HttpEvent,
         HttpInterceptor} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from '../shared/services/spinner.service';


@Injectable()
export class spinnerInterceptor implements HttpInterceptor {

  constructor(private readonly spinnerService: SpinnerService){}
    
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.enable();

    return next.handle(req)
      .pipe(
        finalize(() => {
          this.spinnerService.disable();
        })
      );
  }
};
