export interface Country {
  name: string;
  emoji: string;
  capital: string;
  currency: string;
  languages: { name: string }[];
  continent: { name: string };
}
