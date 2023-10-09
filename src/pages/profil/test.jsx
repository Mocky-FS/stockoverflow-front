// import { useState } from 'react';

// function Profile() {
//   const [editMode, setEditMode] = useState(false);

//   const [user, setUser] = useState({
//     firstName: 'John',
//     lastName: 'Doe', 
//     phone: '',
//     email: 'john@email.com',
//     password: '' 
//   });

//   function toggleEdit() {
//     setEditMode(!editMode);
//   }

//   function handleChange(e) {
//     const {name, value} = e.target;
//     setUser(prev => ({...prev, [name]: value}));
//   }

//   function handleSave() {
//     // make API call to save changes

//     toggleEdit(); 
//   }

//   return (
//     <div className="profile">
//       <div className="column">
//         <div className="photo"></div>

//         <div className="account">
//           <h3>Account</h3>

//           {editMode ? (
//             <>
//               <input 
//                 name="phone"
//                 value={user.phone}
//                 onChange={handleChange}
//               />

//               <input 
//                 name="email"
//                 value={user.email}
//                 onChange={handleChange}
//               />
              
//               <input 
//                 name="password"
//                 type="password"
//                 value={user.password}
//                 onChange={handleChange}
//               />
//             </>
//           ) : (
//             <>
//               <div>Phone: {user.phone}</div>
//               <div>Email: {user.email}</div>
//             </>
//           )}
//         </div>
//       </div>

//       <div className="column">
//         <div className="info">
//           <h3>{user.firstName} {user.lastName}</h3>

//           <button onClick={toggleEdit}>
//             {editMode ? 'Save' : 'Edit'}  
//           </button>
//         </div>
      
//         {/* // same account info column */}
//       </div>
//     </div>
//   );
// }

// export default Profile;