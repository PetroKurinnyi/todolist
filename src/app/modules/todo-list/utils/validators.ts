import {
  FormArray,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { TaskModel } from '../models/task.interface';

export const uniqTaskTitleValidator = (): ValidatorFn => (
  titleControl: FormControl | any
): ValidationErrors | null => {
  const tasks = JSON.parse(`${localStorage.getItem('tasks')}`);
  const invalid = (tasks || []).some(
    (task: TaskModel) => task.title === titleControl.value
  );
  return invalid ? { uniqTitle: { value: 'Title should be uniq' } } : null;
};
