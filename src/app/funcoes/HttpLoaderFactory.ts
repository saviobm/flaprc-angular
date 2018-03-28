import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http/src/client";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}