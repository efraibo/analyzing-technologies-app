import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Orgao } from "../models/orgao";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class OrgaoService {
  baseURL = "https://analyzing-technologies.herokuapp.com";

  // baseURL = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  postEvento(orgaos: Orgao[]) {
    let baseURL = "/api/v1/orgaos";
    return this.http.post(baseURL, orgaos);
  }
}
