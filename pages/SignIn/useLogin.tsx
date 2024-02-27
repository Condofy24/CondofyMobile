import { useState } from "react";
import { useForm } from "react-hook-form";
import { TLoginSchema, loginSchema } from "../../validation-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { login } from "../../redux/services/auth-service";
import { useAppSelector, AppDispatch } from "../../redux/store";

const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const { error, success } = useAppSelector((state) => state.authReducer.value);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: TLoginSchema) => {
    setLoading(true);

    dispatch(login(data) as any);

    setLoading(false);

    if (error) {
      //   toast.error(error+": wrong credentials or non-existing user");
    } else if (success) {
      //   toast.success("Login successful");
      // Todo: re-navigate user
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
