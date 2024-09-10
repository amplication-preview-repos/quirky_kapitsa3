import { Module } from "@nestjs/common";
import { SetModelModuleBase } from "./base/setModel.module.base";
import { SetModelService } from "./setModel.service";
import { SetModelController } from "./setModel.controller";
import { SetModelResolver } from "./setModel.resolver";

@Module({
  imports: [SetModelModuleBase],
  controllers: [SetModelController],
  providers: [SetModelService, SetModelResolver],
  exports: [SetModelService],
})
export class SetModelModule {}
