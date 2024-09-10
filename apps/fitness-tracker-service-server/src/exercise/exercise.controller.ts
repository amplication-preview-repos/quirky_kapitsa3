import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExerciseService } from "./exercise.service";
import { ExerciseControllerBase } from "./base/exercise.controller.base";

@swagger.ApiTags("exercises")
@common.Controller("exercises")
export class ExerciseController extends ExerciseControllerBase {
  constructor(protected readonly service: ExerciseService) {
    super(service);
  }
}
