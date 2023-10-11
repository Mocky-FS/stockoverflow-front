import { Button, Card, Title } from "@tremor/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { TextInput } from "@tremor/react";
import { useNavigate } from "react-router-dom";

import "./register.scss";

const Register = ({ user = false }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async  (data) => {


    if (user) {

      toast.success("Utilisateur crée");

    } else {

      try {

        // const response = await registerUser(data)

        // console.log(response)


        toast.success("Votre compte a bien été crée");

        navigate("/");

      } catch (error){
        console.log(error)
      }
     
    }
  };

  return (
    <Card className="w-full h-full !rounded-none flex justify-center items-center ">
      <Card className="w-1/3 self-center flex flex-col gap-6">
        <Title className="text-center mb-5">
          {user ? "Créer un utilisateur" : "Création de compte"}
        </Title>
        <form
          className="flex flex-col gap-4 h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextInput
            type="text"
            placeholder="Nom"
            error={errors.lastname}
            {...register("lastname", {
              required: "Merci d'indiquer votre nom",
            })}
          />
          {errors.lastname && (
            <span className="text-red-500 text-sm ">
              {errors.lastname.message}
            </span>
          )}

          <TextInput
            type="text"
            placeholder="Prénom"
            error={errors.firstname}
            {...register("firstname", {
              required: "Merci d'indiquer votre prénom",
            })}
          />
          {errors.firstname && (
            <span className="text-red-500 text-sm ">
              {errors.firstname.message}
            </span>
          )}

          <TextInput
            type="text"
            placeholder="Email"
            error={errors.email}
            {...register("email", {
              required: "Merci d'indiquer votre email",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Merci de saisir une adresse mail valide",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm ">
              {errors.email.message}
            </span>
          )}

          <TextInput
            type="password"
            placeholder="Mot de passe"
            error={errors.password}
            {...register("password", {
              required: "Merci de saisir un mot de passe",
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm ">
              {errors.password.message}
            </span>
          )}

          <TextInput
            type="password"
            placeholder="Confirmer le mot de passe"
            error={errors.confirmPassword}
            {...register("confirmPassword", {
              required: "Merci de saisir un mot de passe",
              validate: (value) =>
                value === watch("password") ||
                "Le mot de passe ne correspond pas",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm ">
              {errors.confirmPassword.message}
            </span>
          )}
          <Button className="w-fit self-center mt-5" type="submit">
            Créer
          </Button>
        </form>
      </Card>
    </Card>
  );
};

export default Register;
