import * as graphql from "@nestjs/graphql";
import { SetModelResolverBase } from "./base/setModel.resolver.base";
import { SetModel } from "./base/SetModel";
import { SetModelService } from "./setModel.service";

@graphql.Resolver(() => SetModel)
export class SetModelResolver extends SetModelResolverBase {
  constructor(protected readonly service: SetModelService) {
    super(service);
  }
}
