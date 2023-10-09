import { useState } from "react";
import { Card } from "@tremor/react";
import { Button, Title } from "@tremor/react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import "./profil.scss";
// import TestSVG from '../../assets/icons/icons.svg?react'

const Profil = () => {
  const {
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    control,
    reset,
  } = useForm({
    defaultValues: {
      firstname: "Alex",
      lastname: "Rousseau",
      email: "alex@test.fr",
    },
  });

  const [update, setUpdate] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
    toast.success("Mot de passe a été changé");
    setUpdate(false);
  };

  return (
    <div
      className="profil"
      style={{
        padding: "1rem",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card decoration="top" decorationColor="indigo" className="w-2/4 h-fit ">
        <Title>Mon profil </Title>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <label className="flex flex-col">
            <span>Nom</span>
            <Controller
              control={control}
              name="lastname"
              rules={{ required: `Merci d'indiquer votre nom` }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Nom de famille"
                  style={{ borderColor: errors.lastname ? "red" : "" }}
                  disabled
                />
              )}
            />
            {errors.lastname && (
              <span className="error">{errors.lastname.message}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span>Prénom</span>
            <Controller
              control={control}
              name="firstname"
              rules={{ required: `Merci d'indiquer votre prénom` }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Prénom"
                  style={{ borderColor: errors.firstname ? "red" : "" }}
                  disabled
                />
              )}
            />
            {errors.firstname && (
              <span className="error">{errors.firstname.message}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span>
              Email <span className="required">*</span>
            </span>
            <Controller
              control={control}
              name="email"
              rules={{ required: `Merci de saisir un email` }}
              render={({ field }) => (
                <input
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
          </label>
          {update && (
            <>
              <label className="flex flex-col">
                <span>
                  Mot de passe actuel<span className="required">*</span>
                </span>
                <Controller
                  control={control}
                  name="oldPassword"
                  rules={{ required: `Merci d'indiquer un nom de projet` }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="password"
                      placeholder="Mot de passe"
                      style={{ borderColor: errors.password ? "red" : "" }}
                      autoFocus
                    />
                  )}
                />
                {/* {errors.name && <span className='error'>{errors.name.message}</span>} */}
              </label>

              <label className="flex flex-col">
                <span>
                  Nouveau mot de passe<span className="required">*</span>
                </span>
                <Controller
                  control={control}
                  name="newPassword"
                  rules={{ required: `Merci d'indiquer un nom de projet` }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="password"
                      placeholder="Mot de passe"
                      style={{
                        borderColor: errors.confirmPassword ? "red" : "",
                      }}
                    />
                  )}
                />
                {errors.confirmPassword && (
                  <span className="error">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </label>
              <label className="flex flex-col">
                <span>
                  Confirmation nouveau mot de passe
                  <span className="required">*</span>
                </span>
                <Controller
                  control={control}
                  name="confirmPassword"
                  rules={{
                    required: `Merci d'indiquer un nom de projet`,
                    validate: (value) =>
                      value === watch("newPassword") ||
                      "Le mots de passe ne correspond pas",
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="password"
                      placeholder="Mot de passe"
                      style={{
                        borderColor: errors.confirmPassword ? "red" : "",
                      }}
                    />
                  )}
                />
                {errors.confirmPassword && (
                  <span className="error">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </label>
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
  );
};

export default Profil;
