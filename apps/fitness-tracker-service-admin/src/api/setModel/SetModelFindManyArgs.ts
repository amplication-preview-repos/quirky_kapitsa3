import { SetModelWhereInput } from "./SetModelWhereInput";
import { SetModelOrderByInput } from "./SetModelOrderByInput";

export type SetModelFindManyArgs = {
  where?: SetModelWhereInput;
  orderBy?: Array<SetModelOrderByInput>;
  skip?: number;
  take?: number;
};
