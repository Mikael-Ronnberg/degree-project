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

export const convertStringToDate = (dateStr: string): Date => {
  const parts = dateStr.split("/");
  return new Date(
    parseInt(parts[0]),
    parseInt(parts[1]) - 1,
    parseInt(parts[2])
  );
};

export const sortEventsByDate = <T extends { date: string }>(
  events: T[]
): T[] => {
  return events.sort((a, b) => {
    const dateA = convertStringToDate(a.date);
    const dateB = convertStringToDate(b.date);
    return dateA.getTime() - dateB.getTime();
  });
};
