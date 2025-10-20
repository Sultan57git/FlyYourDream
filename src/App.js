import React, { useState } from 'react';
import { Search, Globe, GraduationCap, Briefcase, Users, Award, TrendingUp, ChevronRight, Menu, X, Star, MapPin, DollarSign, Calendar, CheckCircle, BookOpen, Plane, Heart, Target, Zap, MessageCircle, BarChart3, Shield, Clock, ArrowRight, Play, Filter, Bell, Settings, User, LogOut, Home, Compass, FileText, Video, Book, Lightbulb, Route, TrendingDown, ChevronDown, Plus, Download, Eye } from 'lucide-react';

export default function FlyYourDream() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userType, setUserType] = useState('');
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [dreamJourneyStep, setDreamJourneyStep] = useState(0);
  const [showMentorModal, setShowMentorModal] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showOpportunityDetail, setShowOpportunityDetail] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Comprehensive data
  const opportunities = [
    {
      id: 1,
      type: 'scholarship',
      title: 'Fulbright Foreign Student Program',
      country: 'USA',
      university: 'Various Universities',
      amount: 'Full Tuition + $2,500/month',
      deadline: '2025-12-15',
      matchScore: 95,
      successRate: 12,
      description: 'Full funding for graduate study in the United States including tuition, living stipend, health insurance, and travel costs',
      requirements: ['Bachelor\'s degree', 'TOEFL 100+', 'Leadership experience', 'Research proposal'],
      benefits: ['Full tuition coverage', 'Monthly stipend', 'Health insurance', 'Round-trip airfare'],
      eligibility: 'Open to all nationalities',
      field: 'All Fields',
      level: 'Masters/PhD'
    },
    {
      id: 2,
      type: 'scholarship',
      title: 'DAAD Scholarships Germany',
      country: 'Germany',
      university: 'German Universities',
      amount: '€934/month + Tuition Free',
      deadline: '2025-11-30',
      matchScore: 92,
      successRate: 18,
      description: 'Study in Germany with full financial support including monthly stipend and tuition-free education',
      requirements: ['Good academic record', 'German B1 or English C1', 'Motivation letter'],
      benefits: ['Tuition-free education', 'Monthly living allowance', 'Health insurance', 'Travel grant'],
      eligibility: 'International students',
      field: 'Engineering, Sciences, Arts',
      level: 'Masters/PhD'
    },
    {
      id: 3,
      type: 'scholarship',
      title: 'Chevening Scholarships UK',
      country: 'UK',
      university: 'UK Universities',
      amount: 'Full Funding',
      deadline: '2025-11-02',
      matchScore: 88,
      successRate: 3,
      description: 'UK government\'s global scholarship programme for future leaders',
      requirements: ['Bachelor\'s degree', '2 years work experience', 'IELTS 6.5+', 'Leadership potential'],
      benefits: ['Full tuition', 'Living allowance', 'Return flights', 'Visa costs'],
      eligibility: 'Commonwealth citizens preferred',
      field: 'All Fields',
      level: 'Masters'
    },
    {
      id: 4,
      type: 'job',
      title: 'Software Engineer - H1B Sponsorship',
      country: 'USA',
      company: 'Google',
      amount: '$145,000 - $210,000/year',
      deadline: 'Rolling',
      matchScore: 85,
      successRate: 45,
      description: 'Senior software engineering role with full visa sponsorship and relocation support',
      requirements: ['5+ years experience', 'Computer Science degree', 'System design expertise'],
      benefits: ['H1B sponsorship', 'Relocation package', 'Stock options', 'Health insurance'],
      eligibility: 'Global applicants',
      field: 'Computer Science',
      level: 'Senior'
    },
    {
      id: 5,
      type: 'job',
      title: 'Data Scientist - Express Entry Support',
      country: 'Canada',
      company: 'Shopify',
      amount: 'CAD $115,000 - $155,000',
      deadline: 'Rolling',
      matchScore: 82,
      successRate: 52,
      description: 'Join our AI team with full immigration support through Express Entry',
      requirements: ['Masters in Statistics/CS', 'Python/R expertise', 'ML experience'],
      benefits: ['Express Entry support', 'Signing bonus', 'Remote work', 'Stock options'],
      eligibility: 'Global applicants',
      field: 'Data Science',
      level: 'Mid-Senior'
    },
    {
      id: 6,
      type: 'immigration',
      title: 'Canada Express Entry',
      country: 'Canada',
      amount: 'Permanent Residence',
      deadline: 'Ongoing',
      matchScore: 78,
      successRate: 65,
      description: 'Points-based immigration system for skilled workers with pathway to citizenship',
      requirements: ['Language test (IELTS/TEF)', 'ECA degree assessment', 'Work experience', 'CRS 470+ points'],
      benefits: ['PR status', 'Healthcare', 'Free education for children', 'Path to citizenship'],
      eligibility: 'Skilled workers',
      field: 'All Professions',
      level: 'Skilled Worker'
    },
    {
      id: 7,
      type: 'immigration',
      title: 'Germany Opportunity Card (Chancenkarte)',
      country: 'Germany',
      amount: 'Job Seeker Visa',
      deadline: 'Ongoing',
      matchScore: 75,
      successRate: 58,
      description: 'New points-based system to search for jobs in Germany',
      requirements: ['Recognized degree', 'German A1 or English B2', 'Points: 6+', 'Financial proof €1,027/month'],
      benefits: ['1 year job search', 'Work permit after job', 'Family reunification', 'EU Blue Card eligible'],
      eligibility: 'Skilled professionals',
      field: 'All Fields',
      level: 'Professional'
    },
    {
      id: 8,
      type: 'course',
      title: 'Google IT Support Professional Certificate',
      platform: 'Coursera',
      country: 'Online',
      amount: 'Free (Audit) / $49/month',
      duration: '6 months',
      matchScore: 90,
      description: 'Launch your IT career with this beginner-friendly certificate',
      benefits: ['Job-ready skills', 'Career support', 'Shareable certificate', 'Flexible schedule'],
      requirements: ['No prerequisites'],
      field: 'Information Technology'
    }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Ahmed',
      role: 'Education Consultant',
      country: 'USA',
      expertise: 'Fulbright, US Admissions',
      students: 150,
      rating: 4.9,
      bio: 'Former Fulbright scholar now helping students navigate US education',
      availability: 'Available'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Immigration Lawyer',
      country: 'Canada',
      expertise: 'Express Entry, PR Applications',
      students: 280,
      rating: 4.8,
      bio: 'Specialized in Canadian immigration with 95% success rate',
      availability: 'Available'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Career Coach',
      country: 'Germany',
      expertise: 'Tech Jobs, CV Review',
      students: 320,
      rating: 4.9,
      bio: 'Helping tech professionals land jobs in Europe',
      availability: 'Busy'
    }
  ];

  const dreamJourneySteps = [
    { step: 1, title: 'Create Your Profile', desc: 'Tell us about your background and dreams', icon: User, status: 'completed' },
    { step: 2, title: 'Discover Opportunities', desc: 'AI matches you with relevant options', icon: Compass, status: 'active' },
    { step: 3, title: 'Prepare Applications', desc: 'Get documents and essays ready', icon: FileText, status: 'upcoming' },
    { step: 4, title: 'Apply & Track', desc: 'Submit and monitor applications', icon: TrendingUp, status: 'upcoming' },
    { step: 5, title: 'Achieve Your Dream', desc: 'Success! Start your new journey', icon: Award, status: 'upcoming' }
  ];

  const userCategories = [
    { 
      id: 'student', 
      label: 'Students', 
      icon: GraduationCap, 
      desc: 'High school to PhD',
      color: 'from-blue-500 to-cyan-500',
      stats: '50K+ scholarships'
    },
    { 
      id: 'professional', 
      label: 'Professionals', 
      icon: Briefcase, 
      desc: 'Career advancement',
      color: 'from-purple-500 to-pink-500',
      stats: '1M+ jobs'
    },
    { 
      id: 'immigrant', 
      label: 'Immigration', 
      icon: Globe, 
      desc: 'Visa & settlement',
      color: 'from-green-500 to-emerald-500',
      stats: '50+ countries'
    },
    { 
      id: 'parent', 
      label: 'Parents', 
      icon: Users, 
      desc: 'Family planning',
      color: 'from-orange-500 to-red-500',
      stats: 'Family support'
    },
    { 
      id: 'teacher', 
      label: 'Teachers', 
      icon: BookOpen, 
      desc: 'Teaching abroad',
      color: 'from-indigo-500 to-purple-500',
      stats: 'Global positions'
    },
    { 
      id: 'entrepreneur', 
      label: 'Entrepreneurs', 
      icon: Lightbulb, 
      desc: 'Business opportunities',
      color: 'from-yellow-500 to-orange-500',
      stats: 'Investor visas'
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'AI Smart Matching',
      desc: 'Get 95%+ relevant opportunities matched to your unique profile using advanced machine learning',
      color: 'bg-blue-500'
    },
    {
      icon: Route,
      title: 'Dream Journey Visualizer',
      desc: 'Interactive roadmap showing your path from current position to dream destination with milestones',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      desc: 'Connect 1-on-1 with professionals who achieved what you aspire to - from scholarships to immigration',
      color: 'bg-green-500'
    },
    {
      icon: BarChart3,
      title: 'Success Probability Score',
      desc: 'AI calculates your realistic chances for each opportunity based on historical data and your profile',
      color: 'bg-orange-500'
    },
    {
      icon: Zap,
      title: 'One-Click Applications',
      desc: 'Save your profile once, apply to multiple opportunities with auto-filled forms and document reuse',
      color: 'bg-pink-500'
    },
    {
      icon: Globe,
      title: 'Cultural Integration',
      desc: 'Beyond immigration - complete guides for settling, local customs, community connections, and more',
      color: 'bg-cyan-500'
    },
    {
      icon: Shield,
      title: 'Verified Information',
      desc: 'All opportunities manually verified and updated in real-time - no fake or outdated listings',
      color: 'bg-red-500'
    },
    {
      icon: MessageCircle,
      title: 'Community Support',
      desc: 'Join country-specific and profession-specific communities for peer support and networking',
      color: 'bg-indigo-500'
    }
  ];

  const stats = [
    { label: 'Scholarships', value: '50,000+', icon: Award, change: '+2,500 this month' },
    { label: 'Universities', value: '15,000+', icon: GraduationCap, change: 'In 150+ countries' },
    { label: 'Job Listings', value: '1M+', icon: Briefcase, change: 'With visa sponsorship' },
    { label: 'Countries', value: '50+', icon: Globe, change: 'Complete guides' },
    { label: 'Success Stories', value: '10,000+', icon: Heart, change: 'Lives transformed' },
    { label: 'Active Mentors', value: '5,000+', icon: Users, change: 'Expert guidance' }
  ];

  const successStories = [
    {
      name: 'Rahul Das',
      from: 'Bangladesh',
      to: 'Germany',
      achievement: 'DAAD Scholarship',
      image: '🎓',
      story: 'From a small village to studying Computer Science in Berlin with full funding',
      year: '2024'
    },
    {
      name: 'Amina Khan',
      from: 'Pakistan',
      to: 'Canada',
      achievement: 'Permanent Residence',
      image: '🍁',
      story: 'Successfully migrated with family through Express Entry in just 8 months',
      year: '2024'
    },
    {
      name: 'Priya Sharma',
      from: 'India',
      to: 'USA',
      achievement: 'H1B + Tech Job',
      image: '💼',
      story: 'Landed dream job at Google with $180K salary and visa sponsorship',
      year: '2025'
    }
  ];

  const tools = [
    { name: 'Budget Calculator', desc: 'Calculate study/living costs', icon: DollarSign },
    { name: 'Visa Checker', desc: 'Check eligibility instantly', icon: CheckCircle },
    { name: 'Document Generator', desc: 'Create CV, SOP templates', icon: FileText },
    { name: 'Country Comparator', desc: 'Compare countries side-by-side', icon: BarChart3 },
    { name: 'Deadline Calendar', desc: 'Never miss an opportunity', icon: Calendar },
    { name: 'Application Tracker', desc: 'Track all applications', icon: TrendingUp }
  ];

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              🎉 50,000+ Scholarships | 1M+ Jobs | 50+ Countries
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Dreams,<br />Our <span className="text-yellow-300">Mission</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              The world's most comprehensive platform connecting you with scholarships, careers, and immigration opportunities worldwide
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <button 
                onClick={() => setCurrentPage('discover')}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-2xl text-lg flex items-center gap-2"
              >
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition backdrop-blur-sm text-lg flex items-center gap-2">
                <Play className="w-5 h-5" /> Watch How It Works
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex justify-center gap-8 flex-wrap text-sm opacity-80">
              <span className="flex items-center gap-2">✓ 100% Free to Start</span>
              <span className="flex items-center gap-2">✓ AI-Powered Matching</span>
              <span className="flex items-center gap-2">✓ Expert Verified</span>
              <span className="flex items-center gap-2">✓ 10,000+ Success Stories</span>
            </div>
          </div>

          {/* Quick Search - Enhanced */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Search: scholarships, jobs, universities, countries..."
                  className="flex-1 px-6 py-4 text-gray-800 outline-none rounded-lg bg-gray-50 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select className="px-6 py-4 text-gray-800 outline-none rounded-lg bg-gray-50 text-lg">
                  <option>All Categories</option>
                  <option>Scholarships</option>
                  <option>Jobs</option>
                  <option>Immigration</option>
                  <option>Courses</option>
                </select>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition font-bold text-lg flex items-center justify-center gap-2">
                  <Search className="w-6 h-6" /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Enhanced */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800 text-center mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium text-center mb-2">{stat.label}</div>
                <div className="text-xs text-green-600 text-center font-medium">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Categories - Enhanced */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Who Are You?</h2>
            <p className="text-xl text-gray-600">Choose your path and discover tailored opportunities</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {userCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setUserType(category.id);
                  setCurrentPage('discover');
                }}
                className="group relative bg-white p-6 rounded-2xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-transparent overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-gray-800 mb-2">{category.label}</div>
                <div className="text-sm text-gray-600 mb-3">{category.desc}</div>
                <div className="text-xs font-medium text-purple-600">{category.stats}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid - Enhanced */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose FlyYourDream?</h2>
            <p className="text-xl text-gray-600">Everything you need to transform your dreams into reality</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dream Journey Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Your Dream Journey</h2>
            <p className="text-xl text-gray-600">Five simple steps from aspiration to achievement</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200 transform -translate-y-1/2"></div>
            <div className="grid md:grid-cols-5 gap-8 relative">
              {dreamJourneySteps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    step.status === 'completed' ? 'bg-green-500' :
                    step.status === 'active' ? 'bg-purple-500 ring-4 ring-purple-200' :
                    'bg-gray-300'
                  } text-white transform hover:scale-110 transition-transform`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                  <div className="font-bold text-lg mb-2">{step.title}</div>
                  <div className="text-sm text-gray-600">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real Success Stories</h2>
            <p className="text-xl opacity-90">Join thousands who transformed their lives through FlyYourDream</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition">
                <div className="text-6xl mb-4 text-center">{story.image}</div>
                <h3 className="font-bold text-xl mb-2">{story.name}</h3>
                <div className="text-sm opacity-80 mb-4">{story.from} → {story.to}</div>
                <div className="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold mb-4">
                  {story.achievement}
                </div>
                <p className="text-sm opacity-90 leading-relaxed">{story.story}</p>
                <div className="text-xs opacity-70 mt-4">{story.year}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="text-white underline hover:no-underline text-lg">
              Read 10,000+ More Success Stories →
            </button>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Powerful Tools at Your Fingertips</h2>
            <p className="text-xl text-gray-600">Everything you need to plan and execute your dream journey</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center cursor-pointer group">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <tool.icon className="w-7 h-7 text-white" />
                </div>
                <div className="font-bold mb-2 text-gray-800">{tool.name}</div>
                <div className="text-sm text-gray-600">{tool.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Chase Your Dreams?</h2>
          <p className="text-xl lg:text-2xl mb-8 opacity-90">
            Join 1 million+ dreamers who've already started their journey
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <button 
              onClick={() => setCurrentPage('discover')}
              className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold hover:bg-gray-100 transition shadow-2xl text-lg flex items-center gap-2"
            >
              Get Started Free <ArrowRight className="w-6 h-6" />
            </button>
            <button className="border-2 border-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition backdrop-blur-sm text-lg">
              Talk to an Expert
            </button>
          </div>
          <div className="text-sm opacity-80">✓ No credit card required • ✓ Free forever plan available • ✓ Cancel anytime</div>
        </div>
      </div>
    </div>
  );

  const DiscoverPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Discover Opportunities</h1>
              <p className="text-gray-600 text-lg">AI-matched opportunities tailored for you</p>
            </div>
            <button 
              onClick={() => setShowProfileModal(true)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-bold flex items-center gap-2"
            >
              <User className="w-5 h-5" /> My Profile
            </button>
          </div>

          {/* Quick Filters Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['all', 'scholarships', 'jobs', 'immigration', 'courses'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Advanced Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Advanced Filters</h3>
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">Opportunity Type</label>
                  <div className="space-y-2">
                    {['All Types', 'Scholarships', 'Jobs', 'Immigration', 'Courses', 'Fellowships'].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-purple-600" defaultChecked={type === 'All Types'} />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">Country</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:border-purple-500 outline-none">
                    <option>All Countries</option>
                    <option>🇺🇸 USA</option>
                    <option>🇨🇦 Canada</option>
                    <option>🇬🇧 UK</option>
                    <option>🇩🇪 Germany</option>
                    <option>🇦🇺 Australia</option>
                    <option>🇳🇿 New Zealand</option>
                    <option>🇸🇬 Singapore</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">Field of Study</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:border-purple-500 outline-none">
                    <option>All Fields</option>
                    <option>Computer Science</option>
                    <option>Engineering</option>
                    <option>Business</option>
                    <option>Medicine</option>
                    <option>Arts</option>
                    <option>Sciences</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">Education Level</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:border-purple-500 outline-none">
                    <option>All Levels</option>
                    <option>Undergraduate</option>
                    <option>Masters</option>
                    <option>PhD</option>
                    <option>Postdoc</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">Match Score: {90}%+</label>
                  <input type="range" min="0" max="100" defaultValue="70" className="w-full accent-purple-600" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Any</span>
                    <span>Perfect Match</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">Funding Amount</label>
                  <div className="space-y-2">
                    {['Any Amount', 'Full Funding', 'Partial Funding', '$10,000+', '$25,000+', '$50,000+'].map((amt) => (
                      <label key={amt} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="funding" className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">{amt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-gray-700">Deadline</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:border-purple-500 outline-none">
                    <option>Any Time</option>
                    <option>Within 1 Month</option>
                    <option>Within 3 Months</option>
                    <option>Within 6 Months</option>
                    <option>This Year</option>
                    <option>Rolling</option>
                  </select>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition font-bold shadow-lg">
                  Apply Filters
                </button>
                <button className="w-full text-gray-600 py-2 text-sm hover:text-purple-600 transition">
                  Reset All Filters
                </button>
              </div>
            </div>
          </div>

          {/* Opportunities List */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="bg-white rounded-lg shadow p-4 mb-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing <span className="font-bold text-gray-800">8</span> opportunities matched for you
              </div>
              <div className="flex items-center gap-4">
                <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-purple-500">
                  <option>Best Match</option>
                  <option>Highest Funding</option>
                  <option>Nearest Deadline</option>
                  <option>Success Rate</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {opportunities.map((opp) => (
                <div 
                  key={opp.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-8 border-2 border-transparent hover:border-purple-200"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${
                          opp.type === 'scholarship' ? 'bg-green-100 text-green-700' :
                          opp.type === 'job' ? 'bg-blue-100 text-blue-700' :
                          opp.type === 'immigration' ? 'bg-purple-100 text-purple-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {opp.type}
                        </span>
                        <span className="flex items-center text-sm text-gray-600 font-medium">
                          <MapPin className="w-4 h-4 mr-1" />
                          {opp.country}
                        </span>
                        {opp.university && (
                          <span className="flex items-center text-sm text-gray-600">
                            <GraduationCap className="w-4 h-4 mr-1" />
                            {opp.university}
                          </span>
                        )}
                        {opp.company && (
                          <span className="flex items-center text-sm text-gray-600">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {opp.company}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{opp.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{opp.description}</p>
                      
                      {/* Key Info Grid */}
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Funding/Salary</div>
                            <div className="font-bold text-gray-800">{opp.amount}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Deadline</div>
                            <div className="font-bold text-gray-800">{opp.deadline}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Success Rate</div>
                            <div className="font-bold text-gray-800">{opp.successRate}%</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <Star className="w-5 h-5 text-yellow-600" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Your Match</div>
                            <div className="font-bold text-gray-800">{opp.matchScore}%</div>
                          </div>
                        </div>
                      </div>

                      {/* Requirements */}
                      <div className="mb-4">
                        <div className="text-sm font-bold text-gray-700 mb-2">Key Requirements:</div>
                        <div className="flex flex-wrap gap-2">
                          {opp.requirements.map((req, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      {opp.benefits && (
                        <div className="mb-4">
                          <div className="text-sm font-bold text-gray-700 mb-2">Benefits Include:</div>
                          <div className="flex flex-wrap gap-2">
                            {opp.benefits.map((benefit, idx) => (
                              <span key={idx} className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                                <CheckCircle className="w-3 h-3" />
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Match Score Circle */}
                    <div className="ml-6 text-center">
                      <div className="relative w-28 h-28">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="56" cy="56" r="50" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                          <circle 
                            cx="56" 
                            cy="56" 
                            r="50" 
                            stroke="#9333ea" 
                            strokeWidth="8" 
                            fill="none"
                            strokeDasharray={`${opp.matchScore * 3.14} 314`}
                            className="transition-all duration-1000"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="text-3xl font-bold text-purple-600">{opp.matchScore}%</div>
                          <div className="text-xs text-gray-500">Match</div>
                        </div>
                      </div>
                      <Star className="w-6 h-6 text-yellow-400 mx-auto mt-3 fill-current" />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button 
                      onClick={() => {setSelectedOpportunity(opp); setShowOpportunityDetail(true);}}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition font-bold shadow-lg flex items-center justify-center gap-2"
                    >
                      <Eye className="w-5 h-5" /> View Full Details
                    </button>
                    <button className="px-6 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition font-bold flex items-center gap-2">
                      <Heart className="w-5 h-5" /> Save
                    </button>
                    <button className="px-6 border-2 border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition shadow-lg border-2 border-purple-600">
                Load More Opportunities →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3">
        <button 
          onClick={() => setShowMentorModal(true)}
          className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 transition flex items-center justify-center"
          title="Talk to Mentor"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        <button 
          className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-full shadow-2xl hover:scale-110 transition flex items-center justify-center"
          title="AI Assistant"
        >
          <Zap className="w-6 h-6" />
        </button>
      </div>
    </div>
  );

  const MentorModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Connect with Expert Mentors</h2>
            <button 
              onClick={() => setShowMentorModal(false)}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border-2 border-purple-100">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-lg text-center mb-1">{mentor.name}</h3>
                <div className="text-sm text-gray-600 text-center mb-2">{mentor.role}</div>
                <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  {mentor.country}
                </div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-bold">{mentor.rating}</span>
                  <span className="text-sm text-gray-600">({mentor.students} students)</span>
                </div>
                <div className="text-xs text-gray-600 mb-3 text-center">{mentor.expertise}</div>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">{mentor.bio}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                  mentor.availability === 'Available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {mentor.availability}
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-bold">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardPage = () => {
    const userProfile = {
      name: "Ahmed Rahman",
      country: "Bangladesh",
      goal: "Study Computer Science in USA",
      matchScore: 85,
      applications: 12,
      saved: 45,
      interviews: 3
    };

    const recentActivity = [
      { action: "Applied to", title: "Fulbright Scholarship", date: "2 days ago", status: "pending" },
      { action: "Saved", title: "Google Software Engineer", date: "3 days ago", status: "saved" },
      { action: "Interview Scheduled", title: "MIT Graduate Program", date: "1 week ago", status: "interview" }
    ];

    const upcomingDeadlines = [
      { title: "DAAD Scholarship Application", date: "2025-11-30", daysLeft: 41 },
      { title: "Chevening Application", date: "2025-11-02", daysLeft: 13 },
      { title: "Canada Express Entry Draw", date: "2025-10-30", daysLeft: 10 }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome back, {userProfile.name}! 👋</h1>
            <p className="text-gray-600 text-lg">Here's your dream journey progress</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <Target className="w-8 h-8" />
                <span className="text-3xl font-bold">{userProfile.matchScore}%</span>
              </div>
              <div className="text-sm opacity-90">Profile Match Score</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <FileText className="w-8 h-8" />
                <span className="text-3xl font-bold">{userProfile.applications}</span>
              </div>
              <div className="text-sm opacity-90">Active Applications</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <Heart className="w-8 h-8" />
                <span className="text-3xl font-bold">{userProfile.saved}</span>
              </div>
              <div className="text-sm opacity-90">Saved Opportunities</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <MessageCircle className="w-8 h-8" />
                <span className="text-3xl font-bold">{userProfile.interviews}</span>
              </div>
              <div className="text-sm opacity-90">Upcoming Interviews</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Dream Journey Progress */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Dream Journey</h2>
                <div className="space-y-4">
                  {dreamJourneySteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-green-500' :
                        step.status === 'active' ? 'bg-purple-500' :
                        'bg-gray-300'
                      } text-white flex-shrink-0`}>
                        {step.status === 'completed' ? <CheckCircle className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-gray-800">{step.title}</h3>
                          {step.status === 'completed' && <span className="text-xs text-green-600 font-bold">COMPLETED</span>}
                          {step.status === 'active' && <span className="text-xs text-purple-600 font-bold">IN PROGRESS</span>}
                        </div>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                        {step.status === 'active' && (
                          <div className="mt-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-purple-600 h-2 rounded-full" style={{width: '60%'}}></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">60% Complete</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.status === 'pending' ? 'bg-yellow-100' :
                        activity.status === 'saved' ? 'bg-blue-100' :
                        'bg-green-100'
                      }`}>
                        {activity.status === 'pending' && <Clock className="w-5 h-5 text-yellow-600" />}
                        {activity.status === 'saved' && <Heart className="w-5 h-5 text-blue-600" />}
                        {activity.status === 'interview' && <Video className="w-5 h-5 text-green-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800">{activity.action} <span className="text-purple-600">{activity.title}</span></div>
                        <div className="text-sm text-gray-500">{activity.date}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended for You */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Recommended for You</h2>
                  <button className="text-purple-600 font-medium hover:underline">View All</button>
                </div>
                <div className="space-y-4">
                  {opportunities.slice(0, 3).map((opp) => (
                    <div key={opp.id} className="p-4 border-2 border-gray-100 rounded-lg hover:border-purple-300 transition cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-1">{opp.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <MapPin className="w-4 h-4" />
                            {opp.country}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-600">{opp.matchScore}%</div>
                          <div className="text-xs text-gray-500">Match</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition text-sm font-bold">
                          Apply Now
                        </button>
                        <button className="px-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition">
                          <Heart className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Completion */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-lg mb-4">Profile Strength</h3>
                <div className="mb-4">
                  <div className="w-full bg-white/30 rounded-full h-3 mb-2">
                    <div className="bg-white h-3 rounded-full" style={{width: `${userProfile.matchScore}%`}}></div>
                  </div>
                  <div className="text-sm opacity-90">{userProfile.matchScore}% Complete</div>
                </div>
                <p className="text-sm opacity-90 mb-4">Complete your profile to get better matches!</p>
                <button className="w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-gray-100 transition font-bold">
                  Complete Profile
                </button>
              </div>

              {/* Upcoming Deadlines */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-gray-800">Urgent Deadlines</h3>
                </div>
                <div className="space-y-3">
                  {upcomingDeadlines.map((deadline, idx) => (
                    <div key={idx} className="p-3 bg-red-50 border-2 border-red-200 rounded-lg">
                      <div className="font-medium text-gray-800 text-sm mb-1">{deadline.title}</div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">{deadline.date}</span>
                        <span className="font-bold text-red-600">{deadline.daysLeft} days left</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition flex items-center gap-3">
                    <Search className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-gray-800">Find Scholarships</span>
                  </button>
                  <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-800">Message Mentor</span>
                  </button>
                  <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition flex items-center gap-3">
                    <FileText className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-800">Review Documents</span>
                  </button>
                  <button 
                    onClick={() => setShowTools(true)}
                    className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition flex items-center gap-3"
                  >
                    <BarChart3 className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-800">Use Tools</span>
                  </button>
                </div>
              </div>

              {/* Community Highlight */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl shadow-lg p-6">
                <Users className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-lg mb-2">Join Community</h3>
                <p className="text-sm opacity-90 mb-4">Connect with 50,000+ dreamers from Bangladesh</p>
                <button className="w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-gray-100 transition font-bold">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ToolsModal = () => {
    const allTools = [
      { 
        name: 'Budget Calculator', 
        desc: 'Calculate study and living costs for any country',
        icon: DollarSign,
        color: 'from-green-500 to-emerald-500',
        features: ['Tuition estimates', 'Living expenses', 'Currency converter', 'Scholarship deduction']
      },
      { 
        name: 'Visa Eligibility Checker', 
        desc: 'Check your visa eligibility for multiple countries instantly',
        icon: CheckCircle,
        color: 'from-blue-500 to-cyan-500',
        features: ['Points calculator', 'Document checklist', 'Processing time', 'Success probability']
      },
      { 
        name: 'CV/Resume Builder', 
        desc: 'Create professional CVs for different countries',
        icon: FileText,
        color: 'from-purple-500 to-pink-500',
        features: ['ATS-friendly templates', 'Country-specific formats', 'AI suggestions', 'Download PDF']
      },
      { 
        name: 'SOP/Essay Generator', 
        desc: 'AI-powered statement of purpose and essay assistant',
        icon: Book,
        color: 'from-orange-500 to-red-500',
        features: ['AI writing assistant', 'Grammar check', 'Plagiarism check', 'Expert review']
      },
      { 
        name: 'Country Comparator', 
        desc: 'Compare countries side-by-side across multiple factors',
        icon: BarChart3,
        color: 'from-indigo-500 to-purple-500',
        features: ['Cost comparison', 'Job market', 'Quality of life', 'Immigration ease']
      },
      { 
        name: 'Application Tracker', 
        desc: 'Track all your applications in one place',
        icon: TrendingUp,
        color: 'from-pink-500 to-rose-500',
        features: ['Status updates', 'Deadline reminders', 'Document manager', 'Progress tracking']
      }
    ];

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-6xl w-full my-8 shadow-2xl">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Powerful Tools</h2>
                <p className="text-gray-600">Everything you need to succeed in your journey</p>
              </div>
              <button 
                onClick={() => setShowTools(false)}
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTools.map((tool, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-100 hover:border-purple-300 rounded-xl p-6 transition group cursor-pointer">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">{tool.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tool.desc}</p>
                  <div className="space-y-2 mb-4">
                    {tool.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition font-bold">
                    Launch Tool
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Premium users</span> get unlimited access to all tools
                  <button className="ml-2 text-purple-600 font-bold hover:underline">Upgrade Now →</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const OpportunityDetailModal = () => {
    if (!selectedOpportunity) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-5xl w-full my-8 shadow-2xl">
          <div className="relative">
            {/* Header with gradient */}
            <div className={`bg-gradient-to-r ${
              selectedOpportunity.type === 'scholarship' ? 'from-green-500 to-emerald-500' :
              selectedOpportunity.type === 'job' ? 'from-blue-500 to-cyan-500' :
              'from-purple-500 to-pink-500'
            } text-white p-8 rounded-t-2xl`}>
              <button 
                onClick={() => {setSelectedOpportunity(null); setShowOpportunityDetail(false);}}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 uppercase">
                    {selectedOpportunity.type}
                  </span>
                  <h2 className="text-3xl font-bold mb-3">{selectedOpportunity.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm opacity-90">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {selectedOpportunity.country}
                    </span>
                    {selectedOpportunity.university && (
                      <span className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4" /> {selectedOpportunity.university}
                      </span>
                    )}
                    {selectedOpportunity.company && (
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {selectedOpportunity.company}
                      </span>
                    )}
                  </div>
                </div>
                <div className="ml-6 text-center bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl font-bold">{selectedOpportunity.matchScore}%</div>
                  <div className="text-sm opacity-90">Your Match</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Key Information Grid */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-600">Funding/Salary</span>
                  </div>
                  <div className="text-xl font-bold text-gray-800">{selectedOpportunity.amount}</div>
                </div>
                <div className="bg-red-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-red-600" />
                    <span className="text-sm font-medium text-gray-600">Deadline</span>
                  </div>
                  <div className="text-xl font-bold text-gray-800">{selectedOpportunity.deadline}</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-600">Success Rate</span>
                  </div>
                  <div className="text-xl font-bold text-gray-800">{selectedOpportunity.successRate}%</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">About This Opportunity</h3>
                <p className="text-gray-600 leading-relaxed">{selectedOpportunity.description}</p>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Requirements</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedOpportunity.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              {selectedOpportunity.benefits && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Benefits & Perks</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedOpportunity.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                        <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5 fill-current" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Eligibility */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Eligibility</h3>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">{selectedOpportunity.eligibility}</span>
                  </div>
                  {selectedOpportunity.field && (
                    <div className="flex items-center gap-2 mt-2">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">Field: {selectedOpportunity.field}</span>
                    </div>
                  )}
                  {selectedOpportunity.level && (
                    <div className="flex items-center gap-2 mt-2">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">Level: {selectedOpportunity.level}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition font-bold shadow-lg text-lg">
                  Apply Now
                </button>
                <button className="px-8 border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-50 transition font-bold flex items-center gap-2">
                  <Heart className="w-5 h-5" /> Save
                </button>
                <button className="px-8 border-2 border-gray-300 text-gray-600 rounded-xl hover:bg-gray-50 transition flex items-center gap-2">
                  <Download className="w-5 h-5" /> Download PDF
                </button>
              </div>

              {/* Additional Help */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Need Help with Application?</div>
                    <div className="text-sm text-gray-600">Connect with an expert mentor</div>
                  </div>
                </div>
                <button 
                  onClick={() => {setShowOpportunityDetail(false); setShowMentorModal(true);}}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-bold"
                >
                  Talk to Mentor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                FlyYourDream
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-purple-600 transition font-medium">
                Home
              </button>
              <button onClick={() => setCurrentPage('discover')} className="text-gray-700 hover:text-purple-600 transition font-medium">
                Opportunities
              </button>
              <button onClick={() => setCurrentPage('dashboard')} className="text-gray-700 hover:text-purple-600 transition font-medium">
                Dashboard
              </button>
              <button onClick={() => setShowMentorModal(true)} className="text-gray-700 hover:text-purple-600 transition font-medium">
                Mentors
              </button>
              <button onClick={() => setShowTools(true)} className="text-gray-700 hover:text-purple-600 transition font-medium">
                Tools
              </button>
              <button className="text-gray-700 hover:text-purple-600 transition font-medium">
                Resources
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full hover:from-purple-700 hover:to-pink-700 transition font-bold shadow-lg">
                Sign Up Free
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => {setCurrentPage('home'); setMobileMenuOpen(false);}} className="block w-full text-left text-gray-700 font-medium py-2">Home</button>
              <button onClick={() => {setCurrentPage('discover'); setMobileMenuOpen(false);}} className="block w-full text-left text-gray-700 font-medium py-2">Opportunities</button>
              <button onClick={() => {setCurrentPage('dashboard'); setMobileMenuOpen(false);}} className="block w-full text-left text-gray-700 font-medium py-2">Dashboard</button>
              <button onClick={() => {setShowMentorModal(true); setMobileMenuOpen(false);}} className="block w-full text-left text-gray-700 font-medium py-2">Mentors</button>
              <button onClick={() => {setShowTools(true); setMobileMenuOpen(false);}} className="block w-full text-left text-gray-700 font-medium py-2">Tools</button>
              <button className="block w-full text-left text-gray-700 font-medium py-2">Resources</button>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold">Sign Up Free</button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'discover' && <DiscoverPage />}
      {currentPage === 'dashboard' && <DashboardPage />}

      {/* Modals */}
      {showMentorModal && <MentorModal />}
      {showTools && <ToolsModal />}
      {showOpportunityDetail && <OpportunityDetailModal />}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">FlyYourDream</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering every individual to discover, pursue, and achieve their dreams through comprehensive guidance and global opportunities.
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">📘</button>
                <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">🐦</button>
                <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">📷</button>
                <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition">💼</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition cursor-pointer">Scholarships</li>
                <li className="hover:text-white transition cursor-pointer">Jobs</li>
                <li className="hover:text-white transition cursor-pointer">Immigration</li>
                <li className="hover:text-white transition cursor-pointer">Courses</li>
                <li className="hover:text-white transition cursor-pointer">Mentors</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition cursor-pointer">About Us</li>
                <li className="hover:text-white transition cursor-pointer">Careers</li>
                <li className="hover:text-white transition cursor-pointer">Contact</li>
                <li className="hover:text-white transition cursor-pointer">Blog</li>
                <li className="hover:text-white transition cursor-pointer">Press Kit</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition cursor-pointer">Help Center</li>
                <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white transition cursor-pointer">Terms of Service</li>
                <li className="hover:text-white transition cursor-pointer">Cookie Policy</li>
                <li className="hover:text-white transition cursor-pointer">Sitemap</li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="border-t border-gray-700 pt-8 pb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-3">Stay Updated on New Opportunities</h3>
              <p className="text-gray-400 mb-6">Get weekly updates on scholarships, jobs, and immigration pathways</p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">✓ No spam, unsubscribe anytime</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © 2025 FlyYourDream. All rights reserved. | Version 1.0
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Made with ❤️ for dreamers worldwide</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}