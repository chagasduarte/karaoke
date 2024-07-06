import { Injectable } from '@angular/core';
import { Config } from '../models/config';
import  aqui from "../../../assets/settings/appConfig.json"

@Injectable({
  providedIn: 'root'
})
export class ConfigService{
  get(): Config {
    return aqui.appConfig as Config;
  }
}
