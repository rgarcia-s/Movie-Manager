import { format } from 'date-fns';

interface IDate {
  formattedDate: string;
}

export default function GetDates(): IDate {
  const formattedDate = format(new Date(), "yyyy'-'MM'-'dd");

  return { formattedDate };
}
