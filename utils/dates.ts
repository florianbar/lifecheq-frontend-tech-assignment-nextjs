export function formatDateDifference(targetDateStr: string): string {
  const targetDate = new Date(targetDateStr.replace(/\//g, "-"));
  const currentDate = new Date();

  let years = targetDate.getFullYear() - currentDate.getFullYear();
  let months = targetDate.getMonth() - currentDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years < 0 || (years === 0 && months < 0)) {
    return "The date is in the past";
  }

  let result = "In ";
  if (years > 0) {
    result += `${years} year${years > 1 ? "s" : ""}`;
  }
  if (months > 0) {
    if (years > 0) {
      result += " and ";
    }
    result += `${months} month${months > 1 ? "s" : ""}`;
  }

  return result;
}
