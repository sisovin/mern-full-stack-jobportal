import React, { useEffect, useState } from 'react';
import { AdminUser } from '../../@types/admin';
import { fetchAdminUsers, updateUserRole, deleteUser } from '../../api/admin.api';

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await fetchAdminUsers();
      setUsers(fetchedUsers);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (userId: string, newRole: 'admin' | 'moderator' | 'user') => {
    await updateUserRole(userId, newRole);
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  const handleDeleteUser = async (userId: string) => {
    await deleteUser(userId);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-users">
      <h1>Manage Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value as 'admin' | 'moderator' | 'user')}
                >
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                  <option value="user">User</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
