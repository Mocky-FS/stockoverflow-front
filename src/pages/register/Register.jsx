import { Button, Card, Text, Title } from "@tremor/react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

import { TextInput } from "@tremor/react";
import { Link, useNavigate } from "react-router-dom";
import { createUser, login } from "../../api/users";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { getExpirationTime } from "../../utils/token";
import { hash } from "../../utils/functions";


const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext)

  const onSubmit = async (data) => {

    const body = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: await hash(data.password),
    };

    try {

      const response = await createUser(body)


      if (response.status === 200) {
          await autoLogin(body)
      }

    } catch (error) {

      if (error.code === 409 && error.message === `L'adresse e-mail existe déjà`) {
        return setError('email', { type: 'manual', message: 'L\'adresse e-mail existe déjà' });
      } else {
        alert('Une erreur est survenue, merci de réessayer')
      }

    }


  };

  const autoLogin = async (data) => {

    try {
      const response = await login(data)


      if (response.token) {

        setUser({
          isLogged: true,
          firstname: response.firstname,
          lastname: response.lastname,
          email: response.email,
          id: response.id,
          token: response.token,
          tokenExpiration: getExpirationTime(response.token),
          isAdmin: response.role
        })

        localStorage.setItem('user', JSON.stringify({
          ...response,
          tokenExpiration: getExpirationTime(response.token),
          isAdmin: response.isAdmin
        }))

    
        navigate('/dashboard');
        toast.success(`Votre compte a bien été créé ${response.firstname}`)
      }

    } catch (error) {
      console.log(error)
      alert('Une erreur est survenue,')
    }

  }

  return (
    <Card className="w-full h-full !rounded-none flex justify-center items-center ">
      <Card className="w-1/3 self-center flex flex-col gap-6">
        <Title className="text-center mb-5">
          Création de compte
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
        {/* <Link to={'/'} className="text">Retour page connexion</Link> */}
        <Text className='text-center mt-2'><Link to={'/'}>Retour à la connexion</Link></Text>
      </Card>
    </Card>
  );
};

export default Register;
