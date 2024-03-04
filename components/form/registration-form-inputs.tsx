import { View, Image } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import FormFieldError from "../../components/form/form-field-error";
import { Controller } from "react-hook-form";

export type RegistrationFormInputsProps = {
  control: any;
  errors: any;
  styles: any
};

export default function RegistrationFormInputs({
  control,
  errors,
  styles,
}: RegistrationFormInputsProps) {
  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="John Doe"
            />
          )}
          name="name"
        />
        <FormFieldError fieldError={errors.name} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="johndoe@email.com"
            />
          )}
          name="email"
        />
        <FormFieldError fieldError={errors.email} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="514513512"
            />
          )}
          name="phoneNumber"
        />
        <FormFieldError fieldError={errors.phoneNumber} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              secureTextEntry={true}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="*********"
            />
          )}
          name="password"
        />
        <FormFieldError fieldError={errors.password} />
      </View>
    </>
  );
}
