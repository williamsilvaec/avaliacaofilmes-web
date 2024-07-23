import {ErrorHandler, Injectable, NgZone} from "@angular/core";
import {ErrorHandlerService} from "./error-handler.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class GlobalErrorHandler extends ErrorHandler {

  constructor(
    private errorHandler: ErrorHandlerService,
    private zone: NgZone
  ) {
    super();
  }

  override handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      this.zone.run(() => this.errorHandler.handle(error));
    } else {
      super.handleError(error);
    }

  }

}
