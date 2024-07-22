import {Injectable} from "@angular/core";
import {MessageService} from "primeng/api";

@Injectable({providedIn: 'root'})
export class MsgToastService {

  constructor(private messageService: MessageService) {
  }

  info(message: string, timeInSeconds: number = 3) {
    this.messageService.clear();
    this.messageService.add({severity: 'info', detail: message, life: timeInSeconds * 1000});
  }

  success(message: string, timeInSeconds: number = 3) {
    this.messageService.clear();
    this.messageService.add({severity: 'success', detail: message, life: timeInSeconds * 1000});
  }

  warning(message: string, timeInSeconds: number = 3) {
    this.messageService.clear();
    this.messageService.add({severity: 'warn', detail: message, life: timeInSeconds * 1000});
  }

  error(message: string, timeInSeconds: number = 4) {
    this.messageService.clear();
    this.messageService.add({severity: 'error', detail: message, life: timeInSeconds * 1000});
  }
}
