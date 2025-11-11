import React from 'react';
import { Calendar, User, ArrowRight, TrendingUp, Shield, Calculator, BookOpen, Target, Lightbulb } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  icon: React.ComponentType<any>;
}

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);
  
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '10 Smart Ways to Improve Your CIBIL Score in 2024',
      excerpt: 'Your CIBIL score is crucial for loan approvals. Learn proven strategies to boost your credit score and get better interest rates.',
      content: `A good CIBIL score is your gateway to better financial opportunities. Here are 10 proven strategies to improve your credit score:

1. **Pay Bills on Time**: Payment history accounts for 35% of your CIBIL score. Set up automatic payments to never miss a due date.

2. **Keep Credit Utilization Low**: Use less than 30% of your available credit limit. Lower utilization shows responsible credit management.

3. **Don't Close Old Credit Cards**: Length of credit history matters. Keep old cards active with small purchases.

4. **Monitor Your Credit Report**: Check for errors and dispute inaccuracies immediately. Free annual reports are available.

5. **Diversify Your Credit Mix**: Having different types of credit (cards, loans) can positively impact your score.

6. **Avoid Multiple Loan Applications**: Each application creates a hard inquiry. Space out applications by at least 6 months.

7. **Pay More Than Minimum**: On credit cards, paying only the minimum keeps you in debt longer and hurts your score.

8. **Consider Becoming an Authorized User**: Being added to someone else's account with good payment history can help.

9. **Pay Off Collections**: Outstanding collections significantly hurt your score. Negotiate and pay them off.

10. **Be Patient**: Credit repair takes time. Consistent good habits will show results in 3-6 months.

Remember, a CIBIL score above 750 gets you the best loan terms and interest rates.`,
      author: 'Bharat Adatiya',
      date: '2024-01-15',
      category: 'Credit Score',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      icon: TrendingUp
    },
    {
      id: '2',
      title: 'Home Loan vs Rent: Making the Right Financial Decision',
      excerpt: 'Should you buy or rent? We break down the financial implications to help you make an informed decision.',
      content: `The age-old question: Should you buy a home or continue renting? Here's a comprehensive analysis:

**Financial Considerations:**

**Buying Advantages:**
- Build equity over time
- Tax benefits under Section 80C and 24
- Hedge against inflation
- Stability and security
- Freedom to modify

**Renting Advantages:**
- Lower upfront costs
- Flexibility to relocate
- No maintenance responsibilities
- Investment opportunities with saved capital
- No EMI burden

**Key Factors to Consider:**

1. **Your Age and Career Stage**: Young professionals might benefit from renting for flexibility.

2. **Financial Stability**: Ensure you have 6 months of EMI as emergency fund.

3. **Location Preferences**: If unsure about long-term location, renting is better.

4. **Market Conditions**: In overvalued markets, renting might be more economical.

5. **Opportunity Cost**: Calculate returns if you invest the down payment elsewhere.

**The 5% Rule**: If annual rent is less than 5% of property value, renting is often better.

**Our Recommendation**: Buy if you plan to stay 7+ years and have stable income. Rent if you value flexibility or are in an expensive market.`,
      author: 'Financial Expert',
      date: '2024-01-10',
      category: 'Home Loans',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      icon: Shield
    },
    {
      id: '3',
      title: 'EMI Calculator: How to Choose the Right Loan Tenure',
      excerpt: 'Learn how to use EMI calculators effectively and choose the optimal loan tenure for your financial situation.',
      content: `Choosing the right loan tenure is crucial for your financial health. Here's how to make the best decision:

**Understanding EMI Components:**
- Principal: The loan amount
- Interest: Cost of borrowing
- Tenure: Repayment period

**Shorter Tenure Benefits:**
- Lower total interest paid
- Faster debt freedom
- Better for disciplined borrowers

**Longer Tenure Benefits:**
- Lower monthly EMI
- Better cash flow management
- Suitable for conservative borrowers

**How to Choose:**

1. **Calculate Affordability**: EMI shouldn't exceed 40% of monthly income.

2. **Consider Future Income**: Will your income grow? Shorter tenure might work.

3. **Emergency Fund**: Ensure you can maintain 6-month expenses after EMI.

4. **Other Goals**: Balance loan repayment with other financial goals.

5. **Interest Rate Environment**: In rising rate scenarios, shorter tenure is better.

**Pro Tips:**
- Use step-up EMI for growing income
- Consider part-payments to reduce tenure
- Review and optimize annually
- Factor in tax benefits for home loans

**Example Calculation:**
₹50 lakh home loan at 8.5% p.a.:
- 15 years: EMI ₹49,277, Total Interest ₹38.7 lakh
- 20 years: EMI ₹43,391, Total Interest ₹54.1 lakh
- 30 years: EMI ₹38,449, Total Interest ₹88.4 lakh

Choose based on your comfort and financial goals.`,
      author: 'Loan Specialist',
      date: '2024-01-05',
      category: 'EMI Planning',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
      icon: Calculator
    },
    {
      id: '4',
      title: 'Business Loan Guide: Funding Your Entrepreneurial Dreams',
      excerpt: 'Everything you need to know about business loans - from eligibility to documentation and approval process.',
      content: `Starting or expanding a business requires capital. Here's your complete guide to business loans:

**Types of Business Loans:**

1. **Term Loans**: Fixed amount, fixed tenure, regular EMIs
2. **Working Capital**: For day-to-day operations
3. **Equipment Financing**: For machinery and equipment
4. **Invoice Financing**: Against pending invoices
5. **Line of Credit**: Flexible borrowing facility

**Eligibility Criteria:**
- Business vintage: 2+ years
- Annual turnover: ₹10 lakh+
- CIBIL score: 650+
- Profitable operations
- Valid business registration

**Required Documents:**
- Business registration certificate
- GST returns (12 months)
- Bank statements (12 months)
- ITR (2-3 years)
- Financial statements
- Business plan
- Identity and address proof

**Tips for Approval:**
1. Maintain clean financial records
2. Show consistent profitability
3. Have a clear business plan
4. Demonstrate repayment capacity
5. Consider collateral for better rates

**Interest Rates:**
- Secured loans: 9.5% - 15% p.a.
- Unsecured loans: 12% - 20% p.a.

**Repayment Options:**
- Regular EMI
- Bullet payment
- Step-up/Step-down EMI
- Seasonal repayment

**Government Schemes:**
- MUDRA loans for micro enterprises
- CGTMSE for collateral-free loans
- Stand-up India for SC/ST/Women entrepreneurs

Plan your business financing carefully and choose the right loan product for your needs.`,
      author: 'Business Advisor',
      date: '2023-12-28',
      category: 'Business Loans',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
      icon: Target
    },
    {
      id: '5',
      title: 'Personal Finance 101: Building Wealth in Your 20s and 30s',
      excerpt: 'Essential financial habits and strategies for young professionals to build long-term wealth.',
      content: `Your 20s and 30s are crucial for building wealth. Here's your roadmap to financial success:

**Phase 1: Foundation (20s)**

**Emergency Fund First:**
- Save 6 months of expenses
- Keep in liquid funds or savings account
- This prevents debt during emergencies

**Start Investing Early:**
- Begin SIP in equity mutual funds
- Even ₹1,000/month compounds significantly
- Time is your biggest advantage

**Build Credit History:**
- Get your first credit card
- Pay bills on time
- Keep utilization low

**Phase 2: Acceleration (30s)**

**Increase Savings Rate:**
- Target 20-30% of income
- Automate investments
- Increase SIP with salary hikes

**Diversify Investments:**
- Equity: 70-80% for growth
- Debt: 20-30% for stability
- Real estate: Consider after other goals

**Plan for Major Goals:**
- Home purchase
- Children's education
- Retirement planning

**Key Strategies:**

1. **Pay Yourself First**: Invest before spending
2. **Avoid Lifestyle Inflation**: Don't increase expenses with income
3. **Tax Planning**: Use 80C, ELSS, NPS efficiently
4. **Insurance**: Term life and health insurance
5. **Skill Development**: Invest in yourself

**Common Mistakes to Avoid:**
- Taking unnecessary loans
- Not having health insurance
- Putting all money in FDs
- Not starting early
- Emotional investing

**Sample Portfolio (30-year-old):**
- Emergency Fund: ₹3 lakh
- Equity Mutual Funds: 70%
- Debt Funds: 20%
- Gold/REITs: 10%

Start today, stay consistent, and let compounding work its magic!`,
      author: 'Wealth Advisor',
      date: '2023-12-20',
      category: 'Personal Finance',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
      icon: Lightbulb
    },
    {
      id: '6',
      title: 'Insurance Planning: Protecting Your Financial Future',
      excerpt: 'Complete guide to insurance planning - life, health, and general insurance for comprehensive protection.',
      content: `Insurance is your financial safety net. Here's how to plan comprehensive coverage:

**Types of Insurance:**

**1. Life Insurance:**
- **Term Insurance**: Pure protection, lowest cost
- **Endowment**: Insurance + Investment (not recommended)
- **ULIPs**: Market-linked insurance plans

**2. Health Insurance:**
- **Individual Plans**: Personal coverage
- **Family Floater**: Covers entire family
- **Top-up Plans**: Additional coverage at low cost
- **Critical Illness**: Covers specific diseases

**3. General Insurance:**
- **Motor Insurance**: Mandatory for vehicles
- **Home Insurance**: Protects property and contents
- **Travel Insurance**: For domestic and international trips

**How Much Coverage Do You Need?**

**Life Insurance:**
- 10-15 times annual income
- Consider outstanding loans
- Factor in future goals (children's education, etc.)

**Health Insurance:**
- Minimum ₹5 lakh per person in metros
- ₹10+ lakh for comprehensive coverage
- Consider inflation in medical costs

**Key Features to Look For:**

**Term Insurance:**
- High claim settlement ratio
- Online purchase for lower premiums
- Riders for additional protection

**Health Insurance:**
- Cashless network hospitals
- No room rent capping
- Coverage for pre and post hospitalization
- Maternity benefits (if needed)

**Pro Tips:**
1. Buy insurance early for lower premiums
2. Don't mix insurance with investment
3. Review coverage annually
4. Maintain continuous coverage
5. Read policy documents carefully

**Tax Benefits:**
- Life insurance: 80C (up to ₹1.5 lakh)
- Health insurance: 80D (up to ₹75,000)

**Common Mistakes:**
- Buying insurance as investment
- Insufficient coverage
- Not disclosing medical history
- Delaying purchase

Insurance is not an expense - it's protection for your financial goals.`,
      author: 'Insurance Expert',
      date: '2023-12-15',
      category: 'Insurance',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      icon: Shield
    }
  ];

  const categories = ['All', 'Credit Score', 'Home Loans', 'EMI Planning', 'Business Loans', 'Personal Finance', 'Insurance'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section - Lighter Design */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blog-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-grid)" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Bankers Den Insights
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 font-semibold">
              Smart Financial Choices Made Simple
            </p>
            <p className="text-lg mt-4 text-gray-600">
              Financial tips, guides, and insights to help you make better decisions
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Blog Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 relative overflow-hidden group">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to gradient with icon if image fails to load
                    e.currentTarget.style.display = 'none';
                    const iconDiv = e.currentTarget.nextElementSibling;
                    if (iconDiv) iconDiv.classList.remove('hidden');
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600">
                  <post.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium">{post.readTime}</span>
                </div>
                
                {/* Read More Button */}
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="group flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-6 text-blue-100">
            Get the latest financial insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Full Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <selectedPost.icon className="w-10 h-10" />
                <div>
                  <div className="text-sm text-blue-100">{selectedPost.category}</div>
                  <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-6 pb-6 border-b">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {selectedPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(selectedPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <span className="text-blue-600 font-medium">{selectedPost.readTime}</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('**') && paragraph.includes(':**')) {
                    const [title, ...rest] = paragraph.split(':**');
                    return (
                      <div key={index} className="mb-4">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {title.replace(/\*\*/g, '')}:
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {rest.join(':**')}
                        </p>
                      </div>
                    );
                  } else if (paragraph.match(/^\d+\./)) {
                    return (
                      <div key={index} className="mb-4">
                        <p className="text-gray-700 leading-relaxed font-medium">
                          {paragraph.split('**').map((part, i) => 
                            i % 2 === 1 ? <strong key={i} className="text-gray-900">{part}</strong> : part
                          )}
                        </p>
                      </div>
                    );
                  } else if (paragraph.startsWith('-')) {
                    return (
                      <ul key={index} className="list-disc list-inside mb-4 space-y-2">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i} className="text-gray-700 leading-relaxed">
                            {item.replace(/^-\s*/, '').split('**').map((part, j) => 
                              j % 2 === 1 ? <strong key={j} className="text-gray-900">{part}</strong> : part
                            )}
                          </li>
                        ))}
                      </ul>
                    );
                  } else {
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph.split('**').map((part, i) => 
                          i % 2 === 1 ? <strong key={i} className="text-gray-900">{part}</strong> : part
                        )}
                      </p>
                    );
                  }
                })}
              </div>

              {/* Close Button */}
              <div className="mt-8 pt-6 border-t text-center">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};