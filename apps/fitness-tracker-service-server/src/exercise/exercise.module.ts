import { Module } from "@nestjs/common";
import { ExerciseModuleBase } from "./base/exercise.module.base";
import { ExerciseService } from "./exercise.service";
import { ExerciseController } from "./exercise.controller";
import { ExerciseResolver } from "./exercise.resolver";

@Module({
  imports: [ExerciseModuleBase],
  controllers: [ExerciseController],
  providers: [ExerciseService, ExerciseResolver],
  exports: [ExerciseService],
})
export class ExerciseModule {}
