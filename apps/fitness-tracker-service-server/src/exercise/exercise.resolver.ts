import * as graphql from "@nestjs/graphql";
import { ExerciseResolverBase } from "./base/exercise.resolver.base";
import { Exercise } from "./base/Exercise";
import { ExerciseService } from "./exercise.service";

@graphql.Resolver(() => Exercise)
export class ExerciseResolver extends ExerciseResolverBase {
  constructor(protected readonly service: ExerciseService) {
    super(service);
  }
}
