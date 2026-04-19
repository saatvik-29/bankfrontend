import React from 'react';
import Link from 'next/link';
import { MapPin, Shield, Users, TrendingUp, Award, Mail, Star, Heart, Phone, CheckCircle } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FF8C42]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF8C42] font-medium mb-4">Who We Are</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">
                BankersDen
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your trusted partner in making smart, confident financial decisions — from home loans to business funding.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#FF8C42] font-medium">Our Mission</p>
              <h2 className="text-4xl font-extrabold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
                Simplifying{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">
                  Financial Decisions
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At <strong className="text-gray-900">Bankers Den</strong>, we help our customers choose the best loan scheme
                from various <strong className="text-gray-900">Nationalised Banks, Private Sector Banks, and NBFCs</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re <strong>purchasing a new home</strong>, <strong>constructing your dream house</strong>,
                <strong> renovating</strong>, growing a business, or <strong>buying a plot</strong> — we assist you every step of the way
                with expert guidance and zero hidden surprises.
              </p>
              {/* mobile lottie */}
              <div className="lg:hidden flex justify-center">
                <iframe
                  src="https://lottie.host/embed/48c4345b-aed7-4b55-8d5e-c85c431eaab3/g6WAuLXGST.lottie"
                  className="w-full max-w-xs h-64"
                  style={{ border: 'none' }}
                  title="BankersDen Mission Animation"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contact" className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#FF8C42] hover:to-[#FF6B35] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center text-sm">
                  Get Started Today
                </Link>
                <Link href="/loans/home" className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-center text-sm">
                  Explore Loans
                </Link>
              </div>
            </div>

            {/* Right: Lottie + stats */}
            <div className="flex flex-col gap-6">
              <div className="hidden lg:flex justify-center">
                <iframe
                  src="https://lottie.host/embed/48c4345b-aed7-4b55-8d5e-c85c431eaab3/g6WAuLXGST.lottie"
                  className="w-full max-w-sm h-72"
                  style={{ border: 'none' }}
                  title="BankersDen Mission Animation"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '₹585Cr+', label: 'Disbursed', icon: TrendingUp },
                  { value: '700+', label: 'Happy Customers', icon: Users },
                  { value: '50+', label: 'Partner Banks', icon: Award },
                  { value: '10+', label: 'Years Experience', icon: Star },
                ].map((s) => (
                  <div key={s.label} className="group bg-orange-50 hover:bg-gradient-to-br hover:from-[#FF6B35] hover:to-[#FF8C42] rounded-2xl p-6 text-center border border-orange-100 hover:border-transparent hover:shadow-xl transition-all duration-300">
                    <s.icon className="w-7 h-7 text-[#FF6B35] group-hover:text-white mx-auto mb-3 transition-colors" />
                    <p className="text-3xl font-extrabold text-[#FF6B35] group-hover:text-white transition-colors">{s.value}</p>
                    <p className="text-sm text-gray-500 group-hover:text-orange-100 mt-1 transition-colors">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF8C42] font-medium mb-2">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
              Our Core{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Honesty', desc: 'Transparent dealings with complete disclosure at every step.' },
              { icon: Award, title: 'Integrity', desc: 'Ethical practices in all our operations — always.' },
              { icon: Users, title: 'Transparency', desc: 'Clear communication so you\'re never in the dark.' },
              { icon: Heart, title: 'Service', desc: 'Customer-first approach, always and without exception.' },
            ].map((item) => (
              <div key={item.title} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-1">
                <div className="w-14 h-14 bg-orange-50 group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#FF8C42] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-[#FF6B35] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL BENEFITS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF8C42] font-medium mb-2">Exclusive Perks</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
              Special Benefits for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">
                Direct Customers
              </span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Exclusive Rate Concessions', desc: 'Special discounts on interest rates not available elsewhere.' },
              { icon: CheckCircle, title: 'Waived Processing Charges', desc: 'Bank processing fees waived for all qualified direct applicants.' },
              { icon: Award, title: 'Priority Processing', desc: 'Your application jumps the queue for faster approval.' },
              { icon: Users, title: 'Dedicated Relationship Manager', desc: 'A single point of contact from start to disbursal.' },
              { icon: MapPin, title: 'Doorstep Documentation', desc: 'Our team collects your documents from your home or office.' },
              { icon: Heart, title: 'Lifetime Support', desc: 'We\'re here for every query, even after your loan is disbursed.' },
            ].map((item) => (
              <div key={item.title} className="group bg-gray-50 hover:bg-orange-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY NUMBERS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF8C42] font-medium mb-2">AT A GLANCE</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
              Why Customers{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">Trust Us</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: '30 yrs', label: 'Max Repayment Tenure', icon: TrendingUp },
              { val: '90%', label: 'Max Loan-to-Value', icon: Award },
              { val: '7.35%', label: 'Starting Interest Rate', icon: Shield },
              { val: 'Lower ROI', label: 'Balance Transfer Available', icon: Users },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#FF8C42] transition-all duration-300">
                  <s.icon className="w-6 h-6 text-[#FF6B35] group-hover:text-white transition-colors" />
                </div>
                <p className="text-2xl font-extrabold text-[#FF6B35] mb-1">{s.val}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF8C42] font-medium mb-2">REACH US</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">Touch</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Visit Us', lines: ['BD PHYGITAL PVT. LTD - Bankers Den', '1st Floor, City Avenue, 107,', 'Wakad, Pune, Maharashtra 411057'] },
              { icon: Phone, title: 'Call Us', lines: ['+91 9145023840', '+91 7758955586'] },
              { icon: Mail, title: 'Email Us', lines: ['support@bankersden.com', 'info@bankersden.com'] },
            ].map((card) => (
              <div key={card.title} className="text-center group">
                <div className="w-16 h-16 bg-orange-50 group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#FF8C42] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-md">
                  <card.icon className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                {card.lines.map((l) => (
                  <p key={l} className="text-gray-500 text-sm">{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Our Promise to You</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            We believe in simplifying your financial decisions and ensuring a smooth, stress-free loan experience.
            Your trusted financial partner — for life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#FF6B35] hover:bg-orange-50 font-bold rounded-full px-10 py-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block">
              Get Started
            </Link>
            <Link href="/loans/home" className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] font-bold rounded-full px-10 py-4 transition-all duration-300 inline-block">
              Explore Loans
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}