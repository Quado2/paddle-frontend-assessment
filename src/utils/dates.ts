interface DatePart {
  newDays: number;
  newHours: number;
  newMinutes: number;
  newSeconds: number;
}

export function getDateParts(dateValue: number): DatePart{
  const newDays = Math.floor(dateValue / (24 * 60 * 60 * 1000));
  const newHours = Math.floor(
    (dateValue % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const newMinutes = Math.floor(
    (dateValue % (1000 * 60 * 60)) / (1000 * 60)
  );
  const newSeconds = Math.floor((dateValue % (1000 * 60)) / 1000);

  return {
    newDays,
    newHours,
    newMinutes,
    newSeconds
  }
}