import React from "react";
import { FieldError } from "react-hook-form";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

type FormFieldErrorProps = {
  fieldError: FieldError | undefined;
};

export const styles = StyleSheet.create({
  errorText: {
    color: "red",
  },
});

export default function FormFieldError({ fieldError }: FormFieldErrorProps) {
  return (
    <Text style={styles.errorText}>{fieldError && fieldError.message}</Text>
  );
}
