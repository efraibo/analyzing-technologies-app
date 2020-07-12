import { Component, OnInit } from "@angular/core";
import { OrgaoService } from "../services/orgao.service";
import { Orgao } from "../models/orgao";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-tag-input",
  templateUrl: "./tag-input.component.html",
  styleUrls: ["./tag-input.component.css"],
})
export class TagInputComponent implements OnInit {
  items = [];
  urls = [];
  splitPattern = new RegExp("[,;]");
  orgaos: Orgao[] = new Array<Orgao>();
  orgao: Orgao;

  html = `<span class="text-white">Adicione os links independentemente ou cole todos podendo ser separdos com vírgula, espaço ou ponto e vírgula.</span>`;

  constructor(
    private orgaoService: OrgaoService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  onItemAdded(value) {
    let item: string = value.value;
    this.orgaos.push(this.addOrgao(item));

    console.log("Resultado: ", this.orgaos);

    this.urls.push();
  }

  addOrgao(item: string): Orgao {
    let valores: string[] = item.split("-");
    let orgao: Orgao = new Orgao();
    if (valores) {
      orgao.nome = valores[0].trim();
      orgao.linkWebSite = valores[1].trim();
      orgao.status = false;
    }

    return orgao;
  }

  onItemRemove($event) {
    let indexValue = this.urls.indexOf($event);
    this.urls.splice(indexValue, 1);
  }

  salvarAlteracao() {
    console.log("Aqui...");
    this.orgaoService.postEvento(this.orgaos).subscribe(
      (novoEvento) => {
        this.toastr.success(`Valor(es) inserido(s) com sucesso: ${novoEvento}`);
      },
      (error) => {
        this.toastr.error(`Erro ao inserir: ${error}`);
      }
    );
  }
}
