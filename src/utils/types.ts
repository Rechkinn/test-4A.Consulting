export type TTariffProps = {
  needBestsellerText?: boolean;
  price: number;
  fullPrice: number;
  isBest?: boolean;
  text: string;
  needLargeSize?: boolean;
  duration: string;
};

export enum ECheckboxColors {
  baseBorder = "#606566",
  baseBackground = "transparent",
  errorBorder = "red",
  errorBackground = "#ff00001e",
}

export type TStylesCheckbox = {
  borderColor: ECheckboxColors.baseBorder | ECheckboxColors.errorBorder;
  backgroundColor:
    | ECheckboxColors.baseBackground
    | ECheckboxColors.errorBackground;
};

export type TTariff = {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
};
