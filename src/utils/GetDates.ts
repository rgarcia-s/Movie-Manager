interface Dates {
  yesterday: Date;
  tomorrow: Date;
}

export default function GetDates(): Dates {
  const tomorrow = new Date();
  const yesterday = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);
  yesterday.setDate(yesterday.getDate() - 1);

  return { yesterday, tomorrow };
}
