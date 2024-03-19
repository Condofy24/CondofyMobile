import {
    TResidentSignupSchema,
    TSignupSchema,
    residentSignupSchema,
  } from "../../validation-schemas";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { useState } from "react";
  import { useForm } from "react-hook-form";
  import { updateUserProfile } from "../../redux/services/user-service";
  import { useDispatch } from "react-redux";
  import { AppDispatch, useAppSelector } from "../../redux/store";
  import Toast from "react-native-toast-message";
  
  export default function UseProfile() {
    const [loading, setLoading] = useState(false);
    const [profilePic, setProfilePic] = useState<File | null>(null);
    const [profilePicError, setProfilePicError] = useState<string | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const [imageUrl, setImagePreviewUrl] = useState<string | undefined>(
      undefined,
    );
    const { user } = useAppSelector((state) => state.auth.value);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      control,
      formState,
    } = useForm<TResidentSignupSchema>({
      defaultValues: user, // Set the default values as the current user data
      resolver: zodResolver(residentSignupSchema),
    });
  
    const onSubmit = async (data: TSignupSchema) => {
      setLoading(true);
      try {
        if (!formState.isDirty) {
          Toast.show({
            type: 'error',
            text1: 'Please fill in the form',
          });
        } else if (formState.isDirty || profilePic) {
          await dispatch(updateUserProfile({
            id: user.id,
            name: data.name,
            email: data.email,
            newPassword: data.password,
            phoneNumber: data.phoneNumber,
            profilePic,
          }));
      
          Toast.show({
            type: 'success',
            text1: 'Profile updated successfully!',
          });
        }
      } catch (error: any) {
        Toast.show({
          type: 'error',
          text1: error.message || 'An error occurred.',
        });
      } finally {
        setLoading(false);
      }
    };
  
    // If the user cancels the update
    const handleCancel = () => {
      reset();
    };
  
    const handleProfilePicChange = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      const file = event.target.files ? event.target.files[0] : null;
      if (file) {
        setProfilePic(file);
  
        // Create a URL for the file
        const fileUrl = URL.createObjectURL(file);
        setImagePreviewUrl(fileUrl); // Set the image preview URL
  
        // Clean up the URL after the component is unmounted
        return () => URL.revokeObjectURL(fileUrl);
      }
    };
  
    return {
      onSubmit,
      handleSubmit,
      register,
      errors,
      control,
      setProfilePic,
      profilePicError,
      setProfilePicError,
      imageUrl,
      loading,
    };
  }
  