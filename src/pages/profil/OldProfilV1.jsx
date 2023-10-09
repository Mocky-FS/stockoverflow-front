// import { useState } from 'react';
// import { Card } from "@tremor/react";
// import { Button } from "@tremor/react";

// import './profil.scss';

// function Profile() {

//   const [user, setUser] = useState({
//     firstName: 'Arnaud',
//     lastName: 'oclock',
//     phone: '0123456789',
//     email: 'arnaud.s@oclock.fr',
//   });

//   const [newPhone, setNewPhone] = useState('');
//   const [phoneError, setPhoneError] = useState('');
//   const [newEmail, setNewEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmNewPassword, setConfirmNewPassword] = useState('');
//   const [editMode, setEditMode] = useState(false);
//   const [buttonText, setButtonText] = useState("Éditer");
//   const handleEditModeChange = () => {
//     setEditMode(!editMode);
//     setButtonText(editMode ? "Sauvegarder" : "Éditer");
//   };

//   function isEmailValid(email) {
//     const r = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return r.test(email);
//   }

//   function isPhoneValid(phone) {
//     const r = /^[0-9]{10}$/;
//     return r.test(String(phone));
//   }

//   function updatePhone() {
//       if (!isPhoneValid(newPhone)) {
//         setPhoneError('Le champ doit contenir 10 chiffres.')
//         setNewPhone('');
//         return;
//       }
//     setUser({...user, phone: newPhone});
//     setPhoneError('');
//     setNewPhone('');
//   }

//   function updateEmail() {
//     if (!isEmailValid(newEmail)){
//       setEmailError('L\'adresse e-mail n\'est pas valide.')
//       setNewEmail('');
//       return;
//     }
//     setUser({...user, email: newEmail}); 
//     setEmailError('');
//     setNewEmail('');
//   }

//   function updatePassword() {
//     if (newPassword === confirmNewPassword && currentPassword==true) {
//       setNewPassword('')
//       return;
//     }
//   }

//   // function ButtonSave() {
//     // Mettre la logique sur la validation de tous les champs (si les 3 champs password ne sont pas rempli et s'ils ne sont pas correct, ne pas prendre en compte leur changement, sinon, si les autres champs sont correcte, sauvegarder les changements)
//   // }

//   return (
//     <div className="profil">
//       <Card className="max-w-xs mx-auto">
//         <div className="card-profil">
//           <h1>Profil de {user.firstName}</h1>
//           <input value={user.phone} disabled={editMode}/>
//           <p>Téléphone: {user.phone}</p>
//           <input value={user.phone} onChange={(e) => setNewPhone(e.target.value)} disabled={editMode} />
//           {/* <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} /> */}
//             { phoneError && <p className="error">{ phoneError }</p> }
//           {/* <Button size="lg" onClick={updatePhone}>Mettre à jour le téléphone</Button> */}
    
//           <p>Email: {user.email}</p>
//           <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
//           { emailError && <p className="error">{ emailError }</p> }
//           <Button size="lg" onClick={updateEmail}>Mettre à jour l&apos;email</Button> 
  
//           <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Mot de passe actuel" />
//           <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Nouveau mot de passe" />
//           <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} placeholder="Confirmer nouveau mot de passe" />
//           <Button size="lg" onClick={updatePassword}>Mettre à jour le mot de passe</Button>
//           <Button onClick={handleEditModeChange} style ={{ 
//             backgroundColor: editMode ? "" : "03C04A"
//            }}>
//             {buttonText}
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// }

// export default Profile;


