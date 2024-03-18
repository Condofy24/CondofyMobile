import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TLoginSchema,
  TSignupSchema,
  loginSchema,
  signupSchema,
} from "../../validation-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { login } from "../../redux/services/auth-service";
import { useAppSelector, AppDispatch } from "../../redux/store";

export default function useRegister() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const { error } = useAppSelector((state) => state.auth.value);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TSignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: TSignupSchema) => {
    setLoading(true);

    dispatch(login(data) as any);

    setLoading(false);

    if (error) {
      //   toast.error(error+": wrong credentials or non-existing user");
    } else {
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
}
