import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Home as HomeIcon,
  Briefcase,
  Car,
  GraduationCap,
  Building2,
  Shield,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Star,
  Calculator,
  FileText,
  Clock,
  DollarSign,
  IndianRupee,
} from "lucide-react";
import { Button } from "../components/Button";
import { FAQ } from "../components/FAQ";

// ✅ Use your three images instead of calculator/Lottie
import hero1 from "../assets/hero-illustration-1.png?url";
import hero2 from "../assets/hero-illustration-2.png?url";
import hero3 from "../assets/hero-illustration-3.png?url";

interface Testimonial {
  id: string;
  customer_name: string;
  customer_city: string;
  loan_type: string;
  rating: number;
  testimonial_text: string;
}

export const Home = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentHeroCard, setCurrentHeroCard] = useState(0);

  // keep old content (three cards with content)
  const heroCards = [
    {
      title: "Personal Loans",
      subtitle: "Quick & Easy Approval",
      description:
        "Get personal loans up to ₹25 lakhs with competitive interest rates starting from 8.5% p.a. and minimal documentation.",
      icon: IndianRupee,
      gradient: "from-primary-600 to-primary-700",
      buttonText: "Apply Now",
      buttonLink: "/loans/personal",
      stats: { label: "Interest Rate", value: "8.5% p.a." },
    },
    {
      title: "Home Loans",
      subtitle: "Your Dream Home Awaits",
      description:
        "Secure your dream home with our comprehensive home loan solutions. Competitive rates and flexible repayment options.",
      icon: HomeIcon,
      gradient: "from-secondary-600 to-secondary-700",
      buttonText: "Explore Home Loans",
      buttonLink: "/loans/home",
      stats: { label: "Loan Amount", value: "Up to ₹5 Cr" },
    },
    {
      title: "Business Loans",
      subtitle: "Fuel Your Growth",
      description:
        "Power your business expansion with our flexible business loan solutions. Quick approval and competitive rates.",
      icon: TrendingUp,
      gradient: "from-accent-600 to-accent-700",
      buttonText: "Get Business Loan",
      buttonLink: "/loans/business",
      stats: { label: "Approval Time", value: "24-48 Hours" },
    },
  ];

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Auto-swipe (looping)
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentHeroCard((prev) => (prev + 1) % heroCards.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(
        ".parallax-bg-1, .parallax-bg-2, .parallax-bg-3"
      );

      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const yPos = -(scrolled * speed);
        if (element instanceof HTMLElement) {
          element.style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchTestimonials = async () => {
    const staticTestimonials: Testimonial[] = [
      {
        id: "1",
        customer_name: "Piyush Bhujbal",
        customer_city: "Pune",
        loan_type: "Home Loan",
        rating: 5,
        testimonial_text:
          "I had an amazing experience with this company. The customer service is best. They solve your queries immediately. I highly recommend them to anyone looking for Home Loan and excellent service.",
      },
      {
        id: "2",
        customer_name: "Kishor Pokharkar",
        customer_city: "Mumbai",
        loan_type: "Personal Loan",
        rating: 5,
        testimonial_text:
          "The overall experience with bankers den services was good. The process was completed as expected, and the staff provided proper guidance. I look forward to even faster communication in future interactions.",
      },
      {
        id: "3",
        customer_name: "Nikhil Pardeshi",
        customer_city: "Pune",
        loan_type: "Business Loan",
        rating: 5,
        testimonial_text:
          "Banker's den team is indeed good. Support staff for operations is well disciplined and do have proper knowledge about loan processes. Ms Mayuri and Ms Sonal from their team coordinates very well both with clients and Bank authorities for smooth and perfect execution.",
      },
    ];
    setTestimonials(staticTestimonials);
  };

  const loanProducts = [
    {
      icon: HomeIcon,
      title: "Home Loan",
      description:
        "Get your dream home with attractive interest rates starting from 8.5% p.a.",
      link: "/loans/home",
      color: "bg-primary-100 text-primary-600",
    },
    {
      icon: Briefcase,
      title: "Personal Loan",
      description:
        "Quick personal loans up to ₹25 lakhs with minimal documentation.",
      link: "/loans/personal",
      color: "bg-secondary-100 text-secondary-600",
    },
    {
      icon: Building2,
      title: "Business Loan",
      description: "Fuel your business growth with flexible business loans.",
      link: "/loans/business",
      color: "bg-accent-100 text-accent-600",
    },
    {
      icon: Car,
      title: "Car Loan",
      description:
        "Drive your dream car with easy EMI options and quick approval.",
      link: "/loans/car",
      color: "bg-primary-100 text-primary-600",
    },
    {
      icon: GraduationCap,
      title: "Education Loan",
      description:
        "Invest in your future with education loans for India and abroad.",
      link: "/loans/education",
      color: "bg-secondary-100 text-secondary-600",
    },
    {
      icon: Building2,
      title: "Loan Against Property",
      description:
        "Unlock the value of your property with competitive interest rates.",
      link: "/loans/property",
      color: "bg-accent-100 text-accent-600",
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Best Interest Rates",
      description:
        "Compare and choose from the most competitive interest rates in the market.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Personalized advice from experienced financial consultants.",
    },
    {
      icon: Award,
      title: "Quick Approval",
      description:
        "Get loan approvals within 24-48 hours with minimal documentation.",
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your data is protected with bank-grade security standards.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Choose Your Product",
      description: "Select from our wide range of loan and financial products.",
      icon: Calculator,
    },
    {
      number: "2",
      title: "Consult with Us",
      description:
        "Our experts will guide you through the entire process and help you get it done.",
      icon: FileText,
    },
    {
      number: "3",
      title: "Get Instant Approval",
      description: "Receive approval notification within 24-48 hours.",
      icon: Clock,
    },
    {
      number: "4",
      title: "Receive Funds",
      description: "Get your loan amount disbursed directly to your account.",
      icon: DollarSign,
    },
  ];

  const heroImages = [hero1, hero2, hero3];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with Better Visual Hierarchy */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16 md:pt-20 pb-12 md:pb-16 relative overflow-hidden">
        {/* Background Pattern */}
        

          {/* Hero Cards Slider - Full Width */}
          <div className="relative w-full">
            <div className="relative overflow-hidden">
              {/* Card Container */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentHeroCard * 100}%)` }}
              >
                {heroCards.map((card, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-6">
                      <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                        {/* Content */}
                        <div className="animate-fade-in">
                          <div className="flex items-center mb-3 md:mb-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                              <card.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div>
                              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                                {card.title}
                              </h2>
                              <p className="text-sm md:text-base text-gray-600">
                                {card.subtitle}
                              </p>
                            </div>
                          </div>
                          <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-700 leading-relaxed">
                            {card.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3 mb-4 md:mb-6">
                            <Link to={card.buttonLink}>
                              <Button
                                size="lg"
                                className="bg-gray-800 text-white hover:bg-gray-900 font-semibold shadow-lg w-full sm:w-auto"
                              >
                                {card.buttonText}
                              </Button>
                            </Link>
                          </div>
                        </div>

                        {/* Right visual - Blended with background */}
                        <div className="hidden lg:block animate-slide-in">
                          <div className="relative">
                            <img
                              src={heroImages[index]}
                              alt={`${card.title} illustration`}
                              className="w-full max-w-lg mx-auto opacity-90"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Indicators */}
              <div className="flex justify-center mt-4 md:mt-6 space-x-3">
                {heroCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHeroCard(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentHeroCard
                        ? "bg-gray-800 w-8"
                        : "bg-gray-300 w-6"
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>


          <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div
            className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-10">
          {/* Enhanced Header with Trust Indicators */}
          <br />
          <br />
          <div className="text-center mb-6 md:mb-8 px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight text-gray-900">
              Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Trusted
              </span>{" "}
              Financial Partner
            </h1>
            <p className="text-lg md:text-xl mb-4 md:mb-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get the <strong>lowest interest rates</strong> and{" "}
              <strong>fastest approvals</strong> across India's leading banks
            </p>
          </div>       
          {/* Enhanced Stats with Icons and Animation */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1 text-gray-800">
                ₹585 Cr+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Loans Disbursed
              </div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1 text-gray-800">700+</div>
              <div className="text-gray-600 text-sm font-medium">
                Happy Customers
              </div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1 text-gray-800">
                24 Hours
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Quick Approval
              </div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1 text-gray-800">
                Pan India
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Service Network
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Loan Products Section */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Popular{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Loan Products
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect financial solution tailored to your needs
            </p>
          </div>

          {/* Featured Loan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {loanProducts.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {product.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                    Apply Now{" "}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Parallax Effect Section */}
          <div className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            {/* Parallax Background Layers */}
            <div className="absolute inset-0 parallax-bg-1">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse"></div>
              <div
                className="absolute top-20 right-20 w-48 h-48 bg-purple-400/20 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-10 left-1/3 w-24 h-24 bg-pink-400/20 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>

            {/* Moving Elements */}
            <div className="absolute inset-0 parallax-bg-2">
              <div
                className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg rotate-45 animate-spin"
                style={{ animationDuration: "8s" }}
              ></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 parallax-bg-3">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
                  Experience the Future of Digital Banking
                  
                </h3>
                <br />
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/loans/personal">
                    <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                      Explore Loans 
                    </button>
                  </Link>
                  <Link to="/calculators">
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      Try Calculator 
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                700+
              </span>{" "}
              Customers Trust Us
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with India's most trusted loan platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section with Animated Progress Line */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-300 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Works
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Get your loan approved in 4 simple steps with our streamlined
              process
            </p>
          </div>

          {/* Steps with Animated Progress Line */}
          <div className="relative">
            {/* Animated Progress Line - Desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-2000 ease-out"
                style={{
                  width: "100%",
                  animation: "progressLine 4s ease-in-out infinite",
                }}
              ></div>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="text-center relative group"
                  style={{
                    animation: `stepFadeIn 0.6s ease-out ${index * 0.2}s both`,
                  }}
                >
                  {/* Step Circle with Animation */}
                  <div className="relative z-20 mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden">
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Icon */}
                      <step.icon className="w-12 h-12 relative z-10 group-hover:scale-110 transition-transform duration-300" />

                      {/* Pulse Effect */}
                      <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 group-hover:opacity-0 transition-all duration-500"></div>
                    </div>

                    {/* Connecting Dots for Mobile */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-6 mb-6">
                        <div className="flex flex-col space-y-2">
                          <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                          <div
                            className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"
                            style={{ animationDelay: "1s" }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link to="/loans/personal">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                Start Your Application Now
                <ArrowRight className="w-6 h-6 ml-3 inline" />
              </button>
            </Link>
          </div>
        </div>

        {/* Custom CSS for Animations */}
        <style>{`
          @keyframes progressLine {
            0% {
              width: 0%;
            }
            25% {
              width: 33.33%;
            }
            50% {
              width: 66.66%;
            }
            75% {
              width: 100%;
            }
            100% {
              width: 100%;
            }
          }

          @keyframes stepFadeIn {
            0% {
              opacity: 0;
              transform: translateY(30px) scale(0.9);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes pulseGlow {
            0%,
            100% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(147, 51, 234, 0.5);
            }
          }

          /* Parallax Effect Animations */
          @keyframes parallaxFloat {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }

          @keyframes parallaxDrift {
            0% {
              transform: translateX(-10px);
            }
            50% {
              transform: translateX(10px);
            }
            100% {
              transform: translateX(-10px);
            }
          }

          @keyframes parallaxGlow {
            0%,
            100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.2);
            }
          }

          .parallax-bg-1 {
            animation: parallaxDrift 6s ease-in-out infinite;
          }

          .parallax-bg-2 {
            animation: parallaxFloat 8s ease-in-out infinite;
          }

          .parallax-bg-3 {
            animation: parallaxGlow 4s ease-in-out infinite;
          }

          /* Scroll-based parallax effect */
          @media (prefers-reduced-motion: no-preference) {
            .parallax-bg-1 {
              transform: translateZ(0);
              will-change: transform;
            }

            .parallax-bg-2 {
              transform: translateZ(0);
              will-change: transform;
            }

            .parallax-bg-3 {
              transform: translateZ(0);
              will-change: transform;
            }
          }
        `}</style>
      </section>

      {testimonials.length > 0 && (
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                What Our Customers Say
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Real stories from people who trusted us with their financial
                journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex mb-4 md:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                    "{testimonial.testimonial_text}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-bold text-gray-900 text-base md:text-lg">
                      {testimonial.customer_name}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      {testimonial.customer_city}
                    </div>
                    <div className="text-gray-800 text-sm font-semibold mt-1">
                      {testimonial.loan_type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQ />

      {/* Enhanced CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Ready to Transform Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Financial Future?
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Join <strong>700+ satisfied customers</strong> who chose BankersDen
            for their financial needs. Get instant approval and the lowest rates
            in the market.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to="/loans/personal">
              <button className="group bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 hover:text-blue-800 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 w-full sm:w-auto">
                <span className="flex items-center justify-center">
                  Get Instant Loan
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 w-full sm:w-auto">
                Talk to Expert
              </button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                8.5%
              </div>
              <div className="text-blue-100">Starting Interest Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                24 Hours
              </div>
              <div className="text-blue-100">Quick Approval</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                ₹25 Lakhs
              </div>
              <div className="text-blue-100">Maximum Amount</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};