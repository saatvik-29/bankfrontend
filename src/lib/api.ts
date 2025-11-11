const API_BASE_URL = '/api';

export const api = {
  async contact(formData: {
    full_name: string;
    email: string;
    phone: string;
    category: string;
    message: string;
  }) {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send contact message');
    }

    return response.json();
  },

  async submitLoanApplication(formData: any) {
    const response = await fetch(`${API_BASE_URL}/loan-application`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit loan application');
    }

    return response.json();
  },

  async healthCheck() {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.json();
  },
};
