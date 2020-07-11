import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Orgao } from "../models/orgao";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class OrgaoService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  postEvento(orgaos: Orgao[]) {
    let url = this.baseURL + "/api/v1/orgaos";
    return this.http.post(this.baseURL, orgaos);
  }
}
