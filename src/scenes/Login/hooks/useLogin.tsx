import { ContextProviderProps } from '@config/models';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { createContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
  .object({
    firstName: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const useLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      phone: '',
      email: '',
      password: '',
    },
    mode: 'all',
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const stepsLength = 4;

  const backHandler = () => {
    setCurrentStep(currentStep - 1);
    if (currentStep === 1) setStartAnimation(false);
  };

  const onSubmit = (data: FormData) => console.log(data);

  return {
    currentStep,
    startAnimation,
    stepsLength,
    setCurrentStep,
    setStartAnimation,
    backHandler,
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
};

export const LoginContextData = createContext({} as ReturnType<typeof useLogin>);

export const ContextProvider = ({ children }: ContextProviderProps) => (
  <LoginContextData.Provider value={useLogin()}>{children}</LoginContextData.Provider>
);