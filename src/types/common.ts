/** @format */

export interface CurrentPathModel {
  id: number;
  text: string;
  icon: string;
  selected: string;
  route: string;
  status: string;
}

export interface ThemeMode {
  themeMode: "light" | "dark";
}

export interface IFont {
  font: any;
  error: boolean;
  isFontLoading: boolean;
}

export interface DropdownListKeyModel {
  [key: string]: string | number;
}

export interface PageState {
  skip: number;
  take: number;
}
