// import { useForm, getValues } from 'react-hook-form';

// function Profile() {

//   const { register, handleSubmit, formState: {errors} } = useForm();

//   const onSubmit = data => {
//     console.log(data);
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>

//       <label>
//         Numéro de téléphone:
//         <input
//           placeholder="Numéro de téléphone" 
//           {...register("phoneNumber", { 
//             pattern: {
//               value: /^[0-9]{10}$/,
//               message: "Le numéro de téléphone ne doit contenir que des chiffres"
//             }
//           })}
//         />
//         {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
//       </label>

//       <label>
//         Email:
//         <input 
//           placeholder="Email"
//           {...register("email", {
//             pattern: {
//               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//               message: "Email invalide"
//             }
//           })} 
//         />
//         {errors.email && <p>{errors.email.message}</p>}
//       </label>

//       <label>
//         Pays:
//         <input placeholder="Pays" {...register("country")} />
//       </label>

//       <label>
//         Code postal: 
//         <input
//           placeholder="Code postal"
//           {...register("zipCode", {
//             maxLength: {
//               value: 5,
//               message: "Le code postal doit contenir 5 chiffres maximum"
//             },
//             minLength: {
//               value: 5,
//               message: "Le code postal doit contenir 5 chiffres minimum" 
//             }
//           })}
//         />
//         {errors.zipCode && <p>{errors.zipCode.message}</p>}
//       </label>

//       <label>
//         Ville:
//         <input placeholder="Ville" {...register("city")} />
//       </label>

//       <label>
//         Rue:
//         <input placeholder="Rue" {...register("street")} />
//       </label>

//       <label>
//         Mot de passe actuel:
//         <input 
//           placeholder="Mot de passe actuel"
//           {...register("currentPassword")} 
//           type="password" 
//         />
//       </label>

//       <label>
//         Nouveau mot de passe: 
//         <input
//           placeholder="Nouveau mot de passe"  
//           {...register("newPassword")}
//           type="password" 
//         />
//       </label>

//       <label>
//         Confirmer nouveau mot de passe:
//         <input
//           placeholder="Confirmer nouveau mot de passe"
//           {...register("confirmNewPassword", {
//             validate: value => 
//               value === getValues("newPassword") || "Les mots de passe doivent correspondre"
//           })}
//           type="password"
//         />
//         {errors.confirmNewPassword && <p>{errors.confirmNewPassword.message}</p>}
//       </label>

//       <label>
//         Photo de profil:
//         <input
//           placeholder="Photo de profil"
//           {...register("profilePicture")}
//           type="file"
//         />
//       </label>

//       <button>Sauvegarder</button>

//     </form>
//   )

// }

// export default Profile;