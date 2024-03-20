import { useForm } from "react-hook-form";
import { TLoginSchema, loginSchema } from "../../validation-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { login } from "../../redux/services/auth-service";
import { useAppSelector, AppDispatch } from "../../redux/store";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useAppSelector((state) => state.auth.value);
  const navigation = useNavigation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: TLoginSchema) => {
    const res = await dispatch(login(data) as any);
    if (res.type == "auth/login/rejected") {
      Toast.show({
        type: "error",
        text1: "error logging in!",
      });
    } else {
      Toast.show({
        type: "success",
        text1: `Welcome back ${res.payload.user.name}!`,
      });

      navigation.navigate("Profile" as never);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    control,
    loading,
    onSubmit,
  };
};

export default useLogin;
