import { useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

export default function AdminRoute() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem('ra_admin_auth') === 'true'
  );

  const handleLogout = () => {
    sessionStorage.removeItem('ra_admin_auth');
    setAuthed(false);
  };

  if (!authed) {
    return <AdminLogin onLogin={() => setAuthed(true)} />;
  }

  return <AdminPanel onLogout={handleLogout} />;
}
