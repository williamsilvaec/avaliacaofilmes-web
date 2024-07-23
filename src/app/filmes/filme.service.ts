import {Injectable} from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import {environment} from "../../environments/environment";
import {FilmeFiltro} from "./filme-filtro";
import {map, Observable} from "rxjs";
import {FilmePage} from "./filme-page";
import {AnoContagem} from "./ano-contagem";
import {EstudioContagem} from "./estudio-contagem";

@Injectable({providedIn: 'root'})
export class FilmeService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.apiUrl}/v1/filmes`;
  }

  filtrar(filtro: FilmeFiltro): Observable<FilmePage> {
    let params = new HttpParams()
      .set('page', filtro.pagina.toString())
      .set('size', filtro.itensPorPagina.toString());

    if (filtro.ordenacao) {
      params = params.set('sort', filtro.ordenacao);
    } else {
      params = params.set('sort', 'id,asc');
    }

    if (filtro.ano) {
      params = params.set('ano', filtro.ano.toString());
    }

    if (filtro.vencedor !== null && filtro.vencedor !== undefined) {
      params = params.set('vencedor', filtro.vencedor);
    }

    return this.httpClient.get(this.url, {params})
      .pipe(map((res: any) => {
        return {
          filmes: res.content,
          totalElements: res.totalElements
        };
      }));
  }

  listarAnosComMaisDeUmVencedor() {
    return this.httpClient.get<AnoContagem[]>(`${this.url}/anos-com-mais-de-um-vencedor`);
  }

  listarTopTresEstudiosComMaisVencedores() {
    return this.httpClient.get<EstudioContagem[]>(`${this.url}/top-tres-estudios-vencedores`);
  }
}
