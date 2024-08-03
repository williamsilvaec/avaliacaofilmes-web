import {Injectable} from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import {environment} from "../../environments/environment";
import {FilmeFiltro} from "./filme-filtro";
import {map, Observable} from "rxjs";
import {FilmePage} from "./filme-page";
import {AnoContagem} from "./ano-contagem";
import {EstudioContagem} from "./estudio-contagem";
import {IntervalosPremios} from "../produtor/intervalos-premios";
import {Filme} from "./filme";

@Injectable({providedIn: 'root'})
export class FilmeService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.apiUrl}/api/movies`;
  }

  filtrar(filtro: FilmeFiltro): Observable<FilmePage> {
    let params = new HttpParams()
      .set('page', filtro.pagina.toString())
      .set('size', filtro.itensPorPagina.toString());

    if (filtro.ano) {
      params = params.set('year', filtro.ano.toString());
    }

    if (filtro.vencedor !== null && filtro.vencedor !== undefined) {
      params = params.set('winner', filtro.vencedor);
    }

    return this.httpClient.get(this.url, {params})
      .pipe(map((res: any) => {
        return {
          filmes: res.content,
          totalElements: res.totalElements
        };
      }));
  }

  listarVencedoresOuPerdedoresPorAno(ano: number, isVencedor: boolean): Observable<Filme[]> {
    let params = new HttpParams()
      .set('year', ano.toString())
      .set('winner', isVencedor.toString());

    return this.httpClient.get<Filme[]>(this.url, {params});
  }

  listarAnosComMaisDeUmVencedor() {
    return this.httpClient.get<AnoContagem[]>(`${this.url}?projection=years-with-multiple-winners`)
      .pipe(map((res: any) => {
        return res && res.years ? res.years : [];
      }));
  }

  listarTopTresEstudiosComMaisVencedores() {
    return this.httpClient.get<EstudioContagem[]>(`${this.url}?projection=studios-with-win-count`)
      .pipe(map((res: any) => {
        return res && res.studios
          ? res.studios
            .sort((a: { winCount: number; }, b: { winCount: number; }) => b.winCount - a.winCount)
            .slice(0, 3)
          : [];
      }));
  }

  listarIntervaloPremios() {
    return this.httpClient.get<IntervalosPremios>(`${this.url}?projection=max-min-win-interval-for-producers`);
  }
}
