import { useContext, useState } from "react";
import { Card, Text, TextInput } from "@tremor/react";
import { Button, Title } from "@tremor/react";
import { Controller, useForm } from "react-hook-form";
import toast from 'react-hot-toast';


import "./profil.scss";
import { AuthContext } from "../../context/AuthContext";
// import TestSVG from '../../assets/icons/icons.svg?react'

const Profil = () => {

  const { user } = useContext(AuthContext);

// Au refresh regler le pb
  const {
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    control,
    reset,
  } = useForm({
    defaultValues: {
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
    },
  });

  const [update, setUpdate] = useState(false);

  const onSubmit = (data) => {
    
    
    reset();
    toast.success("Mot de passe a été changé");
    setUpdate(false);
  };

  return (
    <Card className="!rounded-none p-4">
      <div className="h-full ">
      <Card decoration="top" decorationColor="indigo" className="w-2/4 h-fit ">
        <Title>Mon profil </Title>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-5">
          <Text>Nom</Text>
          <Controller
            control={control}
            name="lastname"
            rules={{ required: `Merci d'indiquer votre nom` }}
            render={({ field }) => (
              // <input
              <TextInput
                {...field}
                type="text"
                style={{ 
                  cursor:  "not-allowed",
                 }}
                disabled
              />
            )}
          />



          <Text>Prénom</Text>
          <Controller
            control={control}
            name="firstname"
            rules={{ required: `Merci d'indiquer votre prénom` }}
            render={({ field }) => (
              <TextInput
                {...field}
                type="text"
                disabled
                style={{ 
                  cursor: "not-allowed",
                 }}

              />
            )}
          />
          {errors.firstname && (
            <span className="error">{errors.firstname.message}</span>
          )}

          <Text>Email</Text>
          <Controller
            control={control}
            name="email"
            rules={{ required: `Merci de saisir un email` }}
            render={({ field }) => (
              <TextInput
                {...field}
                type="email"
                placeholder="Adresse mail"
                style={{
                  borderColor: errors.name ? "red" : "",
                  cursor: update ? "pointer" : "not-allowed",
                }}
                disabled={!update}
              />
            )}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}

          {update && (
            <>
              <Text>Mot de passe</Text>
              <Controller
                control={control}
                name="oldPassword"
                rules={{ required: `Merci d'indiquer votre ancien mot de passe` }}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    type="password"
                    placeholder="Mot de passe actuel"
                    style={{ borderColor: errors.password ? "red" : "" }}
                    autoFocus
                    error={errors.oldPassword}
                  />
                )}
              />
              {errors.oldPassword && <span className='text-red-500 text-sm '>{errors.oldPassword.message}</span>}

              <Text>Nouveau mot de passe</Text>

              <Controller
                control={control}
                name="newPassword"
                rules={{ required: `Merci d'indiquer un mot de passe` }}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    type="password"
                    placeholder="Votre nouveau mot de passe"
                    error={errors.newPassword}
                  />
                )}
              />
              {errors.newPassword && <span className='text-red-500 text-sm '>{errors.newPassword.message}</span>}


              <Text>Confirmation nouveau mot de passe</Text>
              <Controller
                control={control}
                name="confirmPassword"
                rules={{
                  required: `Merci d'indiquer un mot de passe`,
                  validate: (value) =>
                    value === watch("newPassword") ||
                    "Le mots de passe ne correspond pas",
                }}
                render={({ field }) => (
                  <TextInput
                    {...field}
                    type="password"
                    placeholder="Confirmez nouveau mot de passe"
                    style={{
                      borderColor: errors.confirmPassword ? "red" : "",
                    }}
                    error={errors.confirmPassword}
                  />
                )}
              />
              {errors.confirmPassword && errors.newPassword && <span className='text-red-500 text-sm '>{errors.newPassword.message}</span>}
            </>
          )}
          <div className="flex flex-row justify-center gap-6">
            <Button
              color={update ? "red" : "blue"}
              type="button"
              className="w-fit "
              onClick={() => {
                setUpdate(!update);
                reset();
              }}
            >
              {update ? "Annuler" : "Editer"}
            </Button>
            {update && (
              <Button type="submit" className="w-fit " color={"green"}>
                Modifier
              </Button>
            )}
          </div>
        </form>
      </Card>
      </div>

    
    </Card>
  );
};

export default Profil;
