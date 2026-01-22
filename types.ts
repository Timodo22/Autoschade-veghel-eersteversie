import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface DamageFormData {
  name: string;
  email: string;
  phone: string;
  licensePlate: string;
  description: string;
  files: FileList | null;
}

export interface OpeningHour {
  day: string;
  time: string;
}

export const COMPANY_DETAILS = {
  name: "Autoschade Veghel",
  address: "Binnenveld 10 b",
  zipCity: "5462GK Veghel",
  phone: "06-25366218",
  phoneClean: "0625366218", // For href links
  email: "info@autoschadeveghel.nl", // Placeholder
  color: "#ff0d00"
};

export const OPENING_HOURS: OpeningHour[] = [
  { day: "Maandag", time: "08:30 - 17:30" },
  { day: "Dinsdag", time: "08:30 - 17:30" },
  { day: "Woensdag", time: "08:30 - 17:30" },
  { day: "Donderdag", time: "08:30 - 17:30" },
  { day: "Vrijdag", time: "08:30 - 17:30" },
  { day: "Zaterdag", time: "09:00 - 12:00" },
  { day: "Zondag", time: "Gesloten" },
];