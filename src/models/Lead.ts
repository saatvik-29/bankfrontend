import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  applicationNumber: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true,
    enum: ['contact', 'loan', 'bd-partner']
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'processing', 'completed'],
    default: 'active'
  },
  // Contact form fields
  full_name: String,
  email: {
    type: String,
    required: true
  },
  phone: String,
  category: String,
  message: String,
  
  // Loan application fields
  loanType: String,
  loanAmount: Number,
  monthlyIncome: Number,
  employmentType: String,
  companyName: String,
  workExperience: Number,
  panNumber: String,
  aadharNumber: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  
  // Additional loan-specific fields
  propertyValue: Number,
  downPayment: Number,
  carMake: String,
  carModel: String,
  carYear: Number,
  businessType: String,
  businessVintage: Number,
  educationInstitution: String,
  courseName: String,
  courseDuration: Number,
  propertyType: String,
  propertyAddress: String,
  
  // BD Partner fields
  experience: String,
  currentOccupation: String,
  whyJoin: String,
  expectedEarnings: String,
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

leadSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.Lead || mongoose.model('Lead', leadSchema);