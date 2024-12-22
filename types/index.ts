import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  textStyles: string;
  rightIcon: string;
  btnType?: "button" | "submit";
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}