// import { useState, useEffect } from 'react';
// import { Card } from "@tremor/react";
// import { Button } from "@tremor/react";

// import './profil.scss';

// function Profile() {

//   const [user, setUser] = useState({
//     firstName: 'Arnaud',
//     lastName: 'Oclock',
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
//   const [passwordError, setPasswordError] = useState('');
//   const [editMode, setEditMode] = useState(false);
//   const [buttonText, setButtonText] = useState("Éditer");
//   const handleEditModeChange = () => {

//     localStorage.setItem('isEditing', !editMode);

//     setEditMode(!editMode);
    
//     if (!editMode) {
//       handleSave();
//     }

//     setButtonText(editMode ? "Sauvegarder" : "Éditer");
//   };

//   useEffect(() => {
//     const isEditing = localStorage.getItem('isEditing');
  
//     if(isEditing) {
//       setEditMode(true);
//     }
//   }, []);

//   function isEmailValid(email) {
//     const r = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return r.test(email);
//   }

//   function isPhoneValid(phone) {
//     const r = /^[0-9]{10}$/;
//     return r.test(String(phone));
//   }

//   function handleSave() {
//     if (!isPhoneValid(newPhone)) {
//       setPhoneError('Le champ doit contenir 10 chiffres.')
//     return;
//     }
//     setUser({...user, phone: newPhone});
//     setPhoneError('');

//     if (!isEmailValid(newEmail)){
//       setEmailError('L\'adresse e-mail n\'est pas valide.')
//     return;
//     }
//     setUser({...user, email: newEmail}); 
//     setEmailError('');  
    
//     if (newPassword !== confirmNewPassword) {
//       setPasswordError('Les mots de passe ne correspondent pas.')
//     return;
//     }
//     setPasswordError('');
//   }

//   return (
//     <div className="profil">
//       <Card className="max-w-xs mx-auto">
//         <div className="card-profil">
//           <h1>Profil de {user.firstName + ' ' + user.lastName}</h1>

//         <div className="form-group">
//           <p>Téléphone: </p>
//           <input 
//           value={newPhone} 
//           onChange={(e) => setNewPhone(e.target.value)} 
//           disabled={editMode} 
//           />
//           { phoneError && <p className="error">{ phoneError }</p> }
//         </div>

//         <div className="form-group">  
//           <p>Email: </p>
//           <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} disabled={editMode} />
//           { emailError && <p className="error">{ emailError }</p> }
//         </div>

//           { buttonText === "Sauvegarder" &&
//             <>
//             <div className="form-group">  
//               <p>Mot de Passe: </p>
//               <input 
//               type="password" 
//               value={currentPassword} 
//               onChange={(e) => setCurrentPassword(e.target.value)} 
//               placeholder="Mot de passe actuel" 
//               />

//               <input 
//               type="password" 
//               value={newPassword} onChange={(e) => setNewPassword(e.target.value)} 
//               placeholder="Nouveau mot de passe" 
//               />

//               <input 
//               type="password" 
//               value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} 
//               placeholder="Confirmer nouveau mot de passe" 
//               />
//               { passwordError && <p className="error">{ passwordError }</p> }
//             </div>
//             </> 
//           }

//           <Button 
//             className="button" 
//             onClick={handleEditModeChange} 
//             style ={{ 
//               backgroundColor: editMode ? "" : "#03C04A",
//               border: "none"
//             }}>
//             {buttonText}
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// }

// export default Profile;


