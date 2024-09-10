import { Exercise as TExercise } from "../api/exercise/Exercise";

export const EXERCISE_TITLE_FIELD = "id";

export const ExerciseTitle = (record: TExercise): string => {
  return record.id?.toString() || String(record.id);
};
