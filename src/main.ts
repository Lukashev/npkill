import {
  ConsoleService,
  HttpsService,
  LinuxFilesService,
  ResultsService,
  SpinnerService,
  StreamService,
  UpdateService,
  WindowsFilesService,
} from '@core/services';

import { Controller } from './controller';
import { IFileService } from '@core/interfaces/file-service.interface';
import { MacFilesService } from './services/mac-files.service';

const getOS = () => process.platform;

const OSService = {
  linux: LinuxFilesService,
  win32: WindowsFilesService,
  darwin: MacFilesService,
};

const streamService: StreamService = new StreamService();

const fileService: IFileService = new OSService[getOS()](streamService);

export const controller = new Controller(
  fileService,
  new SpinnerService(),
  new ConsoleService(),
  new UpdateService(new HttpsService()),
  new ResultsService(),
);
