import {Injectable} from "@angular/core";
import { MessageService } from "primeng/api";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) {
  }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof HttpErrorResponse && errorResponse.status >= 400 && errorResponse.status <= 500) {
      msg = 'Ocorreu um erro ao processar a sua solicitação';

    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
    }

    console.error('Ocorreu um erro', msg);
    this.messageService.clear();
    this.messageService.add({severity: 'error', summary: 'Erro', detail: msg, life: 5000});
  }

}
