import React, { useEffect, useState } from 'react';
import { AdminJob } from '../../@types/admin';
import { fetchAdminJobs, updateJobStatus, deleteJob } from '../../api/admin.api';

const AdminJobs: React.FC = () => {
  const [jobs, setJobs] = useState<AdminJob[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const fetchedJobs = await fetchAdminJobs();
      setJobs(fetchedJobs);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  const handleStatusChange = async (jobId: string, newStatus: 'active' | 'inactive') => {
    await updateJobStatus(jobId, newStatus);
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job
      )
    );
  };

  const handleDeleteJob = async (jobId: string) => {
    await deleteJob(jobId);
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-jobs">
      <h1>Manage Jobs</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.location}</td>
              <td>{job.salary}</td>
              <td>
                <select
                  value={job.status}
                  onChange={(e) => handleStatusChange(job.id, e.target.value as 'active' | 'inactive')}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleDeleteJob(job.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminJobs;
