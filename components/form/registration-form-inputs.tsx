import { View, StyleSheet, Pressable } from "react-native";
import { Input, Text } from "@rneui/themed";
import FormFieldError from "../../components/form/form-field-error";
import { Controller } from "react-hook-form";
import tw from "twrnc";
import Icon from "react-native-vector-icons/AntDesign";

export type RegistrationFormInputsProps = {
  control: any;
  errors: any;
  styles: any;
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
      <View style={tw`w-95% m-2`}>
        <Pressable style={btnStyles.button} onPress={() => {}}>
          <View style={tw`flex flex-row justify-between`}>
            <Text style={btnStyles.text}>Upload Picture </Text>
            <Icon name="upload" size={20} style={tw`text-right`} />
          </View>
        </Pressable>
      </View>
    </>
  );
}

const btnStyles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "rgb(228, 228, 231)",
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
});
