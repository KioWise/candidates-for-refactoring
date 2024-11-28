type TMutableList<T> = T[];

enum WarningType {
  LEGACY_CODE_DEPENDENCY,
}

type TWarning = {
  type: WarningType;
};


// Бессмысленно расписывать тело функции, если нету логики в ней, а просто возвращаем type
const warning = (type: WarningType): TWarning => ({ type })


const addError = (errors: TMutableList<TWarning>) => {
  // Для компактности и чистого код,
  // лучше отдельно в переменную записать выполнение функции
  const warningType = warning(WarningType.LEGACY_CODE_DEPENDENCY)
  errors.push(warningType);
  // errors.push(Warning(WarningType.LEGACY_CODE_DEPENDENCY));
};
