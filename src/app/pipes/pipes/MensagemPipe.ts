import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";
import { TranslateService } from "@ngx-translate/core";
import { Pipe } from "@angular/core/src/metadata/directives";
import { Observable } from "rxjs/Observable";

@Pipe({ name: 'mensagemPipe' })
export class MensagemPipe implements PipeTransform {

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('pr-BR');
    }

    transform(value: any, ...args: any[]): any {

        let observable: Observable<string | any> = this.translate.get(value);
        console.log(observable);

    }

}
