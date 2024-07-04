import { Injectable } from '@angular/core';
import { AppConfigService } from './declare/app-config.service';
import { Config } from '../models/config';
import { appConfig } from "../../../assets/config/appConfig.json"

@Injectable({
  providedIn: 'root'
})
export class ConfigService implements AppConfigService {
  get(): Config {
    return appConfig;
  }
}
