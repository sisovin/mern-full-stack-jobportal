import React, { useEffect, useState } from 'react';
import { AdminDashboardStats } from '../../@types/admin';
import { fetchAdminDashboardStats } from '../../api/admin.api';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<AdminDashboardStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const fetchedStats = await fetchAdminDashboardStats();
      setStats(fetchedStats);
    };

    fetchStats();
  }, []);

  if (!stats) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="stats">
        <div className="stat-item">
          <h2>Total Users</h2>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="stat-item">
          <h2>Total Jobs</h2>
          <p>{stats.totalJobs}</p>
        </div>
        <div className="stat-item">
          <h2>Active Users</h2>
          <p>{stats.activeUsers}</p>
        </div>
        <div className="stat-item">
          <h2>Active Jobs</h2>
          <p>{stats.activeJobs}</p>
        </div>
        <div className="stat-item">
          <h2>New Users This Month</h2>
          <p>{stats.newUsersThisMonth}</p>
        </div>
        <div className="stat-item">
          <h2>New Jobs This Month</h2>
          <p>{stats.newJobsThisMonth}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
