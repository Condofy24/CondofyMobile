import React from "react";
import { FieldError } from "react-hook-form";
import { View } from "react-native";

type FormFieldErrorProps = {
  fieldError: FieldError | undefined;
};
export default function FormFieldError({ fieldError }: FormFieldErrorProps) {
  return <View>{fieldError && fieldError.message}</View>;
}
