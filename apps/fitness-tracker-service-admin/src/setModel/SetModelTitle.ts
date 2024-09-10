import { SetModel as TSetModel } from "../api/setModel/SetModel";

export const SETMODEL_TITLE_FIELD = "id";

export const SetModelTitle = (record: TSetModel): string => {
  return record.id?.toString() || String(record.id);
};
