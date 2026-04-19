/**
 * Admin Seed Script
 */
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import path from 'path';
import bcrypt from 'bcryptjs';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_USERNAME = (process.env.ADMIN_USERNAME || 'admin').toLowerCase().trim();
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || '').toLowerCase().trim();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!MONGODB_URI || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error('❌  Missing required env vars (MONGODB_URI, ADMIN_EMAIL, ADMIN_PASSWORD)');
  process.exit(1);
}

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, lowercase: true, trim: true },
  email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role:     { type: String, enum: ['superadmin', 'admin'], default: 'superadmin' },
  isActive: { type: Boolean, default: true },
});

// IMPORTANT: Model hook to handle hashing
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

async function seed() {
  console.log('🌱  Connecting to MongoDB…');
  await mongoose.connect(MONGODB_URI as string);
  
  const existing = await Admin.findOne({
    $or: [{ username: ADMIN_USERNAME }, { email: ADMIN_EMAIL }],
  });

  if (existing) {
    console.log(`ℹ️   Updating password for existing admin: ${existing.username}`);
    existing.password = ADMIN_PASSWORD; // Pass PLAIN password, hook will hash it
    existing.isActive = true;
    await existing.save();
  } else {
    console.log(`✨  Creating new admin: ${ADMIN_USERNAME}`);
    await Admin.create({
      username: ADMIN_USERNAME,
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD, // Pass PLAIN password
      role: 'superadmin',
    });
  }

  console.log('✅  Admin sync complete.');
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error('❌  Seed failed:', err);
  process.exit(1);
});
