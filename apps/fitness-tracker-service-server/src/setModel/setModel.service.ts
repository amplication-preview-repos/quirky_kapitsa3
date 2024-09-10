import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SetModelServiceBase } from "./base/setModel.service.base";

@Injectable()
export class SetModelService extends SetModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
