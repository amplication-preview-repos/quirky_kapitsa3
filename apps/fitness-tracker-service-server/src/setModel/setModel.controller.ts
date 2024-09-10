import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SetModelService } from "./setModel.service";
import { SetModelControllerBase } from "./base/setModel.controller.base";

@swagger.ApiTags("setModels")
@common.Controller("setModels")
export class SetModelController extends SetModelControllerBase {
  constructor(protected readonly service: SetModelService) {
    super(service);
  }
}
