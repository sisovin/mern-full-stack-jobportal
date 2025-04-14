export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'moderator' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminJob {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminDashboardStats {
  totalUsers: number;
  totalJobs: number;
  activeUsers: number;
  activeJobs: number;
  newUsersThisMonth: number;
  newJobsThisMonth: number;
}

export interface AdminNotification {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'error';
  createdAt: Date;
  read: boolean;
}
