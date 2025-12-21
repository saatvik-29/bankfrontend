'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { 
  LogOut, 
  Users, 
  FileText, 
  Phone, 
  Mail, 
  Calendar,
  Search,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

interface Lead {
  _id: string;
  applicationNumber: string;
  type: 'contact' | 'loan' | 'bd-partner';
  status: 'active' | 'processing' | 'completed';
  full_name: string;
  email: string;
  phone?: string;
  category?: string;
  message?: string;
  loanType?: string;
  loanAmount?: number;
  monthlyIncome?: number;
  employmentType?: string;
  companyName?: string;
  workExperience?: number;
  panNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [filters, setFilters] = useState({
    status: '',
    type: '',
    search: ''
  });
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    processing: 0,
    completed: 0
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchLeads();
  }, [router, filters]);

  const fetchLeads = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const params = new URLSearchParams();
      if (filters.status) params.append('status', filters.status);
      if (filters.type) params.append('type', filters.type);
      
      const response = await fetch(`/api/admin/leads?${params}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        let filteredLeads = data.leads;
        
        // Client-side search filter
        if (filters.search) {
          filteredLeads = filteredLeads.filter((lead: Lead) =>
            lead.full_name.toLowerCase().includes(filters.search.toLowerCase()) ||
            lead.email.toLowerCase().includes(filters.search.toLowerCase()) ||
            lead.applicationNumber.toLowerCase().includes(filters.search.toLowerCase())
          );
        }
        
        setLeads(filteredLeads);
        
        // Calculate stats
        const stats = {
          total: data.leads.length,
          active: data.leads.filter((l: Lead) => l.status === 'active').length,
          processing: data.leads.filter((l: Lead) => l.status === 'processing').length,
          completed: data.leads.filter((l: Lead) => l.status === 'completed').length
        };
        setStats(stats);
      } else if (response.status === 401) {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/leads/${leadId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        fetchLeads();
        if (selectedLead && selectedLead._id === leadId) {
          setSelectedLead({ ...selectedLead, status: newStatus as any });
        }
      }
    } catch (error) {
      console.error('Error updating lead status:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <AlertCircle className="w-4 h-4 text-orange-500" />;
      case 'processing': return <Clock className="w-4 h-4 text-blue-500" />;
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-orange-100 text-orange-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Banker's Den - Lead Management</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                <div className="text-blue-900 text-sm">
                  <p><strong>📱 WhatsApp Lead System:</strong> +91 9145023840</p>
                  <p className="text-xs text-blue-700 mt-1">New leads → Your WhatsApp → Follow up directly</p>
                </div>
              </div>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <AlertCircle className="w-8 h-8 text-orange-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Processing</p>
                <p className="text-2xl font-bold text-gray-900">{stats.processing}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by name, email, or application number..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
            </select>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            >
              <option value="">All Types</option>
              <option value="loan">Loan Applications</option>
              <option value="contact">Contact Forms</option>
              <option value="bd-partner">BD Partner</option>
            </select>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Application
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type & Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr key={lead._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {lead.applicationNumber}
                      </div>
                      <div className="text-sm text-gray-500">
                        {lead.type.toUpperCase()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{lead.full_name}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {lead.email}
                      </div>
                      {lead.phone && (
                        <div className="text-sm text-gray-500 flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {lead.phone}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {lead.type === 'loan' ? (
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {lead.loanType?.toUpperCase()} LOAN
                          </div>
                          {lead.loanAmount && (
                            <div className="text-sm text-gray-500">
                              {formatCurrency(lead.loanAmount)}
                            </div>
                          )}
                          {lead.monthlyIncome && (
                            <div className="text-xs text-gray-400">
                              Income: {formatCurrency(lead.monthlyIncome)}/mo
                            </div>
                          )}
                        </div>
                      ) : (
                        <div>
                          <div className="text-sm text-gray-900">{lead.category}</div>
                          <div className="text-xs text-gray-500">Contact Form</div>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                        {getStatusIcon(lead.status)}
                        <span className="ml-1">{lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(lead.createdAt).toLocaleDateString('en-IN')}
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(lead.createdAt).toLocaleTimeString('en-IN')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <select
                          value={lead.status}
                          onChange={(e) => updateLeadStatus(lead._id, e.target.value)}
                          className="text-xs border border-gray-300 rounded px-2 py-1 bg-white text-gray-900"
                        >
                          <option value="active">Active</option>
                          <option value="processing">Processing</option>
                          <option value="completed">Completed</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {leads.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No leads found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">
                  Lead Details - {selectedLead.applicationNumber}
                </h2>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Name:</strong> {selectedLead.full_name}</p>
                    <p><strong>Email:</strong> {selectedLead.email}</p>
                    {selectedLead.phone && <p><strong>Phone:</strong> {selectedLead.phone}</p>}
                    {selectedLead.address && (
                      <p><strong>Address:</strong> {selectedLead.address}, {selectedLead.city}, {selectedLead.state} - {selectedLead.pincode}</p>
                    )}
                  </div>
                </div>
                
                {selectedLead.type === 'loan' && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Loan Details</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Loan Type:</strong> {selectedLead.loanType?.toUpperCase()}</p>
                      {selectedLead.loanAmount && <p><strong>Amount:</strong> {formatCurrency(selectedLead.loanAmount)}</p>}
                      {selectedLead.monthlyIncome && <p><strong>Monthly Income:</strong> {formatCurrency(selectedLead.monthlyIncome)}</p>}
                      {selectedLead.employmentType && <p><strong>Employment:</strong> {selectedLead.employmentType}</p>}
                      {selectedLead.companyName && <p><strong>Company:</strong> {selectedLead.companyName}</p>}
                      {selectedLead.workExperience && <p><strong>Experience:</strong> {selectedLead.workExperience} years</p>}
                      {selectedLead.panNumber && <p><strong>PAN:</strong> {selectedLead.panNumber}</p>}
                    </div>
                  </div>
                )}

                {selectedLead.type === 'contact' && selectedLead.message && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Message</h3>
                    <p className="text-sm bg-gray-50 p-3 rounded">{selectedLead.message}</p>
                  </div>
                )}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <p>Created: {new Date(selectedLead.createdAt).toLocaleString('en-IN')}</p>
                    <p>Updated: {new Date(selectedLead.updatedAt).toLocaleString('en-IN')}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => updateLeadStatus(selectedLead._id, 'processing')}
                      disabled={selectedLead.status === 'processing'}
                    >
                      Mark Processing
                    </Button>
                    <Button
                      onClick={() => updateLeadStatus(selectedLead._id, 'completed')}
                      disabled={selectedLead.status === 'completed'}
                    >
                      Mark Completed
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}