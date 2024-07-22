import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IntervalosPremios} from "./intervalos-premios";

@Injectable({providedIn: 'root'})
export class ProdutorService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.apiUrl}/v1/produtores`;
  }

  listarIntervaloPremios() {
    return this.httpClient.get<IntervalosPremios>(`${this.url}/intervalo-premios`);
  }
}
