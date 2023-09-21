import { useState } from 'react';
import { Card } from "@tremor/react";

import './profil.scss';

function Profil() {

  const [user, setUser] = useState({
    firstName: 'arnaud',
    lastName: 'oclock',
    phone: '0123456789',
    email: 'arnaud.s@oclock.fr',
  });

  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  function updatePhone() {
    setUser({...user, phone: newPhone});
  }

  function updateEmail() {
    setUser({...user, email: newEmail}); 
  }

  function updatePassword() {
    if (newPassword === confirmNewPassword) {
      // demander à gael pour le back
    }
  }

  return (
    <div className="profil">
    <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
      <h1>Profil de {user.firstName}</h1>
      <p>Téléphone: {user.phone}</p>
      <input value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
      <button onClick={updatePhone}>Mettre à jour le téléphone</button>

      <p>Email: {user.email}</p>
      <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
      <button onClick={updateEmail}>Mettre à jour l&apos;email</button>

      <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Mot de passe actuel" />
      <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Nouveau mot de passe" />
      <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} placeholder="Confirmer nouveau mot de passe" />
      <button onClick={updatePassword}>Mettre à jour le mot de passe</button>
    </Card>
    </div>
  );
}

export default Profil;

