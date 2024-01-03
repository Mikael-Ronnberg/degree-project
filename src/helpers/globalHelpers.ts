export const getSubstring = (text: string, substringEnd: number): string => {
  return text.length > substringEnd
    ? `${text.substring(0, substringEnd)}...`
    : text;
};

export function convertDateFormat(dateStr: string): string {
  const date = new Date(dateStr);

  if (isNaN(date.getTime())) {
    throw new Error("Något blev fel med datumet");
  }

  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;

  return formattedDate;
}
