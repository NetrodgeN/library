export default function timeConversion(millisec: number) {
  const seconds: number = Number((millisec / 1000).toFixed(1));

  const minutes: number = Number((millisec / (1000 * 60)).toFixed(1));

  const hours: number = Number((millisec / (1000 * 60 * 60)).toFixed(1));

  const days: number = Number((millisec / (1000 * 60 * 60 * 24)).toFixed(1));

  if (seconds < 60) {
    return `${seconds} Sec`;
  } else if (minutes < 60) {
    return `${minutes} Min`;
  } else if (hours < 24) {
    return `${hours} Hrs`;
  } else {
    return `${days} Days`;
  }
};