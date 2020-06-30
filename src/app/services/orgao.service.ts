import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Orgao } from "../models/orgao";

@Injectable({
  providedIn: "root",
})
export class OrgaoService {
  private baseURL = "http://localhost:8080/api/v1/orgaos";

  constructor(private http: HttpClient) {}

  postEvento(orgao: Orgao) {
    return this.http.post(this.baseURL, orgao);
  }
}
