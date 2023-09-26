import { useState } from 'react';
import { Card } from "@tremor/react";
import { Button } from "@tremor/react";

import './profil.scss';

function Profil() {

  const [user, setUser] = useState({
    firstName: 'Arnaud',
    lastName: 'oclock',
    phone: '0123456789',
    email: 'arnaud.s@oclock.fr',
  });

  const [newPhone, setNewPhone] = useState('');
  const [error, setError] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const regex = /^[0-9]+$/;

  function updatePhone() {
    const match = regex.exec(newPhone);
    if (!match || match[0].length !==10) {
      setError('Le champ doit contenir 10 chiffres.')
      return;
    }
    setUser({...user, phone: newPhone});
    setError('');
    setNewPhone('');
  }

  function updateEmail() {
    setUser({...user, email: newEmail}); 
  }

  function updateEmailAndPhone() {
    updatePhone(newPhone);
    updateEmail(newEmail);
  }

  function updatePassword() {
    if (newPassword === confirmNewPassword && currentPassword==true) {
      //
    }
  }

  // function ButtonValidation() {

  // }

  return (
    <div className="profil">
      <Card className="max-w-xs mx-auto">
        <div className="card-profil">
          <h1>Profil de {user.firstName}</h1>
          <p>Téléphone: {user.phone}</p>
          <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
            { error && <p className="error">{ error }</p> }
          <Button size="lg" onClick={updatePhone}>Mettre à jour le téléphone</Button>
    
          <p>Email: {user.email}</p>
          <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />  
          <Button size="lg" onClick={updateEmailAndPhone}>Mettre à jour</Button>      

          <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Mot de passe actuel" />
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Nouveau mot de passe" />
          <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} placeholder="Confirmer nouveau mot de passe" />
          <Button size="lg" onClick={updatePassword}>Mettre à jour le mot de passe</Button>
        </div>
      </Card>
    </div>
  );
}

export default Profil;
      


