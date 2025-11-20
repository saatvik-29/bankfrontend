# Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

### 1. **Connect Repository**
- Push your code to GitHub
- Go to [Vercel Dashboard](https://vercel.com/dashboard)
- Click "New Project"
- Import your GitHub repository

### 2. **Environment Variables**
Set these environment variables in Vercel Dashboard:

```bash
# MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bankersden?retryWrites=true&w=majority

# JWT Secret (generate a strong secret)
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Gemini AI (optional - for chatbot)
GEMINI_API_KEY=your-gemini-api-key-here

# WhatsApp Admin Number
ADMIN_WHATSAPP=8887941939

# Next.js Auth
NEXTAUTH_SECRET=your-nextauth-secret-key
NEXTAUTH_URL=https://bankersdens.com
```

### 3. **MongoDB Atlas Setup**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Add your connection string to `MONGODB_URI`
4. Whitelist Vercel IPs: `0.0.0.0/0` (for serverless)

### 4. **Custom Domain (Optional)**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update `NEXTAUTH_URL` to your custom domain

### 5. **Deploy**
- Click "Deploy"
- Vercel will automatically build and deploy your app
- Your app will be live at `https://bankersdens.com`

## 🔧 **Post-Deployment Checklist**

### ✅ **Test These Features:**
- [ ] Home page loads correctly
- [ ] Loan application forms work
- [ ] Contact form submissions
- [ ] Admin panel login (`/admin`)
- [ ] EMI calculators function
- [ ] WhatsApp notifications (check console logs)

### ✅ **SEO Verification:**
- [ ] Check `robots.txt` at `/robots.txt`
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Test meta tags with [Open Graph Debugger](https://developers.facebook.com/tools/debug/)

### ✅ **Performance:**
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check [GTmetrix](https://gtmetrix.com/)

## 🛠 **Troubleshooting**

### **Build Errors:**
```bash
# Clear cache and rebuild
vercel --prod --force
```

### **Environment Variables:**
- Ensure all required env vars are set in Vercel Dashboard
- Check for typos in variable names
- Restart deployment after adding new variables

### **Database Connection:**
- Verify MongoDB Atlas connection string
- Check IP whitelist includes `0.0.0.0/0`
- Test connection from MongoDB Compass

### **Domain Issues:**
- DNS propagation can take 24-48 hours
- Verify CNAME/A records point to Vercel

## 📊 **Monitoring**

### **Vercel Analytics:**
- Enable in Project Settings → Analytics
- Monitor performance and usage

### **Error Tracking:**
- Check Vercel Functions logs
- Monitor API endpoint performance

## 🔒 **Security**

### **Environment Variables:**
- Never commit `.env` files
- Use Vercel's encrypted environment variables
- Rotate secrets regularly

### **Headers:**
- Security headers are configured in `vercel.json`
- HTTPS is enforced by default

## 🚀 **Production Optimizations**

### **Performance:**
- Images are optimized by Next.js automatically
- Static pages are cached by Vercel CDN
- API routes run on serverless functions

### **SEO:**
- Sitemap auto-generated at `/sitemap.xml`
- Meta tags optimized for each page
- Structured data included for better search results

---

## 📞 **Support**

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test locally with `npm run build`
4. Contact support if needed

Your Banker's Den platform is now live! 🎉