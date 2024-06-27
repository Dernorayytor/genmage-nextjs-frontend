// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import { getAuth, User } from 'firebase/auth';

// const UserProfile: React.FC = () => {
//   const router = useRouter();
//   const { uid } = router.query;
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (!uid) return;

//       // ใช้ Firebase Authentication เพื่อดึงข้อมูลผู้ใช้
//       const auth = getAuth();
//       const currentUser = auth.currentUser;

//       if (currentUser && currentUser.uid === uid) {
//         setUser(currentUser);
//       } else {
//         // ดำเนินการในกรณีที่ไม่พบผู้ใช้
//         console.log('User not found or not authenticated');
//       }
//     };

//     fetchUser();
//   }, [uid]);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>User Profile</h1>
//       <p>UID: {user.uid}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// export default UserProfile;
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAuth, User } from 'firebase/auth';
import { User } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import NavBarLogout from '../../components/NavBar-logout';
import ProtectedRoute from '../../auth/ProtectedRoute.jsx';
const UserProfile: React.FC = () => {
  const router = useRouter();
  const { uid } = router.query;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!uid) return;

      // ใช้ Firebase Authentication เพื่อดึงข้อมูลผู้ใช้
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (currentUser && currentUser.uid === uid) {
        setUser(currentUser);
      } else {
        // ดำเนินการในกรณีที่ไม่พบผู้ใช้
        console.log('User not found or not authenticated');
      }
    };

    fetchUser();
  }, [uid]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBarLogout />
      <div>
        <h1>Welcome</h1>
        <p>UID: {user.uid}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
