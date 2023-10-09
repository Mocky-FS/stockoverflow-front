// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from 'yup';
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Card, Button } from "@tremor/react";
// import { string } from "yup";


// import './profil.scss';

// const schema = yup.object().shape({
//   phone: string().required().length(10),
//   email: string().required().email(),
//   currentPassword: string(),
//   newPassword: string(),
//   confirmNewPassword: string(),
// });

// function Profile() {
//   const [editMode, setEditMode] = useState(false);

//   const { register, handleSubmit, formState, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   }, {
//     defaultValues: {
//       firstName: 'Arnaud',
//       lastName: 'Oclock',
//     }
// });

//   const onSubmit = (data) => {
//     // call api en attente
//     console.log(data);
//   };

//   return (
//     <div className="profil">
//       <Card className="max-w-xs mx-auto">
//         <div className="card-profil">
//           <h1>Profil de {formState.values.firstName + " " + formState.values.lastName}</h1>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             {editMode && (
//               <>
//                 <div className="form-group">
//                   <p>Téléphone: </p>
//                   <input
//                     {...register("phone")}
//                     placeholder="Téléphone"
//                     disabled={!editMode}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <p>Email: </p>
//                   <input
//                     {...register("email")}
//                     placeholder="Email"
//                     disabled={!editMode}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <p>Mot de passe actuel: </p>
//                   <input
//                     {...register("currentPassword")}
//                     placeholder="Mot de passe actuel"
//                     disabled={!editMode}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <p>Nouveau mot de passe: </p>
//                   <input
//                     {...register("newPassword")}
//                     placeholder="Nouveau mot de passe"
//                     disabled={!editMode}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <p>Confirmer nouveau mot de passe: </p>
//                   <input
//                     {...register("confirmNewPassword")}
//                     placeholder="Confirmer nouveau mot de passe"
//                     disabled={!editMode}
//                   />
//                 </div>
//               </>
//             )}

//             <Button
//               type="submit"
//               className="button"
//               style={{
//                 backgroundColor: editMode ? "" : "#03C04A",
//                 border: "none",
//               }}
//               disabled={editMode || errors.any()}
//               onClick={() => setEditMode(!editMode)}
//             >
//               {editMode ? "Sauvegarder" : "Éditer"}
//             </Button>
//           </form>
//         </div>
//       </Card>
//     </div>
//   );
// }

// export default Profile;
