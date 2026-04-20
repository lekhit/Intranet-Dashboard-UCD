import { useState } from 'react';
import {
  Search,
  Users,
  Calendar,
  FileText,
  Briefcase,
  BookOpen,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Clock,
  Bell,
  User,
  Menu,
  X,
  Building2,
  Laptop,
  GraduationCap,
  DollarSign,
  Edit3,
  Save,
  Layout,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Newspaper,
  UserPlus,
  Compass
} from 'lucide-react';

// Mock data
const newsItems = [
  {
    id: 1,
    title: 'DEVAR Annual Conference 2024: Registration Now Open',
    date: 'December 15, 2024',
    excerpt: 'Join us for the annual DEVAR conference featuring keynote speakers from across UC Davis.',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400&h=250'
  },
  {
    id: 2,
    title: 'New Remote Work Policy Updates Effective January 2025',
    date: 'December 12, 2024',
    excerpt: 'Updated guidelines for hybrid and remote work arrangements have been published.',
    category: 'Policies',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=400&h=250'
  },
  {
    id: 3,
    title: 'IT Security Reminder: End-of-Year Security Checks',
    date: 'December 10, 2024',
    excerpt: 'Important security reminders as we approach the holiday break.',
    category: 'IT Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=250'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Staff Holiday Luncheon',
    date: 'December 20, 2024',
    time: '12:00 PM - 2:00 PM',
    location: 'MU Conference Center',
    type: 'Social'
  },
  {
    id: 2,
    title: 'Year-End Budget Meeting',
    date: 'December 22, 2024',
    time: '9:00 AM - 11:00 AM',
    location: 'Virtual - Zoom',
    type: 'Meeting'
  },
  {
    id: 3,
    title: 'New Staff Orientation',
    date: 'January 6, 2025',
    time: '8:30 AM - 4:30 PM',
    location: 'DEVAR Building, Room 100',
    type: 'Training'
  },
  {
    id: 4,
    title: 'Spring Semester Kickoff',
    date: 'January 15, 2025',
    time: '10:00 AM - 12:00 PM',
    location: 'Quad Area',
    type: 'Event'
  }
];

const quickTasks = [
  { icon: Briefcase, label: 'Submit Timecard', href: '#', color: 'bg-blue-600' },
  { icon: Calendar, label: 'Book a Room', href: '#', color: 'bg-green-600' },
  { icon: FileText, label: 'View Policies', href: '#', color: 'bg-amber-600' },
  { icon: Users, label: 'Staff Directory', href: '#', color: 'bg-purple-600' },
  { icon: Mail, label: 'Webmail Login', href: '#', color: 'bg-red-600' },
  { icon: Laptop, label: 'IT Help Desk', href: '#', color: 'bg-cyan-600' },
  { icon: BookOpen, label: 'Training Portal', href: '#', color: 'bg-pink-600' },
  { icon: DollarSign, label: 'Travel & Expense', href: '#', color: 'bg-emerald-600' }
];

const whoToContact = [
  { name: 'IT Support', phone: '(530) 752-2257', email: 'it-support@ucdavis.edu', icon: Laptop },
  { name: 'HR Services', phone: '(530) 752-2928', email: 'hr@ucdavis.edu', icon: Users },
  { name: 'Facilities', phone: '(530) 752-1655', email: 'facilities@ucdavis.edu', icon: Building2 },
  { name: 'Finance', phone: '(530) 752-2282', email: 'finance@ucdavis.edu', icon: DollarSign }
];

const newStaffSteps = [
  { title: 'Complete Onboarding Paperwork', desc: 'Submit all required HR forms via the employee portal' },
  { title: 'Set Up UC Davis Accounts', desc: 'Configure your email, Kerberos, and Duo authentication' },
  { title: 'Meet Your Team', desc: 'Schedule introductions with your supervisor and colleagues' },
  { title: 'Complete Required Training', desc: 'Finish mandatory compliance and safety training modules' }
];

const accessibilityChecklist = [
  { item: 'Semantic HTML5 landmarks (header, nav, main, aside, footer)', status: true },
  { item: 'Proper heading hierarchy (h1-h6)', status: true },
  { item: 'Keyboard navigation support', status: true },
  { item: 'ARIA labels for interactive elements', status: true },
  { item: 'Color contrast meets WCAG 2.1 AA', status: true },
  { item: 'Focus visible indicators', status: true },
  { item: 'Alt text for all images', status: true },
  { item: 'Responsive design for all screen sizes', status: true }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [layoutBuilderMode, setLayoutBuilderMode] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showChecklist, setShowChecklist] = useState(false);

  const navItems = ['Home', 'News', 'Policies', 'Tools', 'Directory', 'Resources'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-blue-800 text-white px-4 py-2 rounded"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header role="banner" className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
        {/* Top bar */}
        <div className="border-b border-blue-700 py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                UC Davis
              </span>
              <span className="hidden sm:inline text-blue-200">|</span>
              <span className="hidden sm:inline">DEVAR Department</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 hover:text-amber-300 transition-colors">
                <Bell className="w-4 h-4" />
                <span className="hidden sm:inline">Alerts</span>
              </button>
              <button className="flex items-center gap-1 hover:text-amber-300 transition-colors">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">My Account</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-amber-400 text-blue-900 p-2 rounded-lg">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">DEVAR</h1>
                <p className="text-blue-200 text-sm">Department of Evaluation and Research</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav role="navigation" className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-amber-300 transition-colors font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all group-hover:w-full" />
                </a>
              ))}
              <button
                onClick={() => setLayoutBuilderMode(!layoutBuilderMode)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
                  layoutBuilderMode ? 'bg-amber-400 text-blue-900' : 'bg-blue-700 hover:bg-blue-600'
                }`}
              >
                <Layout className="w-4 h-4" />
                Layout
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-blue-700 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-800 border-t border-blue-700 py-4">
            <nav className="max-w-7xl mx-auto px-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="py-2 px-4 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Search Section */}
      <section className="bg-gradient-to-b from-blue-800 to-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">What do you need today?</h2>
            <p className="text-blue-200">Find resources, connect with colleagues, and stay informed</p>
          </div>

          {/* Prominent Search */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search DEVAR intranet, policies, directory, or documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg shadow-lg focus:ring-4 focus:ring-amber-400 focus:outline-none"
                aria-label="Search intranet"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-3 text-sm">
              <span className="text-blue-200">Popular:</span>
              <a href="#" className="text-amber-300 hover:underline">timecard</a>
              <a href="#" className="text-amber-300 hover:underline">holiday schedule</a>
              <a href="#" className="text-amber-300 hover:underline">travel policy</a>
            </div>
          </div>

          {/* Who to Contact Callout */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <Phone className="w-5 h-5 text-amber-300" />
              <h3 className="font-semibold">Who to Contact</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {whoToContact.map((contact) => (
                <a
                  key={contact.name}
                  href="#"
                  className="text-center p-3 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <contact.icon className="w-6 h-6 mx-auto mb-1 text-amber-300 group-hover:scale-110 transition-transform" />
                  <div className="font-medium text-sm">{contact.name}</div>
                  <div className="text-xs text-blue-200">{contact.phone}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" role="main" className="max-w-7xl mx-auto px-4 py-8">
        {/* Layout Builder Mode Banner */}
        {layoutBuilderMode && (
          <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-800 p-4 mb-6 rounded-r-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Edit3 className="w-5 h-5" />
              <div>
                <p className="font-semibold">Layout Builder Mode Active</p>
                <p className="text-sm">Click on sections to edit, drag to reorder</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <Save className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={() => setShowChecklist(!showChecklist)}
                className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <CheckCircle2 className="w-4 h-4" />
                A11y Check
              </button>
            </div>
          </div>
        )}

        {/* Accessibility Checklist Panel */}
        {showChecklist && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              Accessibility Checklist (WCAG 2.1 AA)
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {accessibilityChecklist.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  {item.status ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  )}
                  <span className="text-sm text-gray-700">{item.item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Tasks Section */}
        <section
          className={`mb-8 ${layoutBuilderMode ? 'border-2 border-dashed border-blue-300 rounded-xl p-4 hover:border-blue-500 cursor-pointer transition-colors' : ''}`}
          onClick={() => layoutBuilderMode && setActiveSection('quicktasks')}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-blue-800" />
              Top Tasks
            </h2>
            {layoutBuilderMode && activeSection === 'quicktasks' && (
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Section Selected</span>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {quickTasks.map((task) => (
              <a
                key={task.label}
                href={task.href}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group border border-gray-100"
              >
                <div className={`${task.color} p-3 rounded-xl text-white mb-2 group-hover:scale-110 transition-transform`}>
                  <task.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{task.label}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Highlights */}
          <section
            className={`lg:col-span-2 ${layoutBuilderMode ? 'border-2 border-dashed border-blue-300 rounded-xl p-4 hover:border-blue-500 cursor-pointer' : ''}`}
            onClick={() => layoutBuilderMode && setActiveSection('news')}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Newspaper className="w-6 h-6 text-blue-800" />
                News & Announcements
              </h2>
              <a href="#" className="text-blue-700 hover:text-blue-800 font-medium text-sm flex items-center gap-1">
                View All News <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-4">
              {newsItems.map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col sm:flex-row"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full sm:w-40 h-32 sm:h-auto object-cover"
                  />
                  <div className="p-4 flex-1">
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {news.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 mt-2 hover:text-blue-700 cursor-pointer">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{news.excerpt}</p>
                    <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <section
              className={`bg-white rounded-xl shadow-sm p-5 ${layoutBuilderMode ? 'border-2 border-dashed border-blue-300 hover:border-blue-500 cursor-pointer' : ''}`}
              onClick={() => layoutBuilderMode && setActiveSection('events')}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-800" />
                  Upcoming Events
                </h2>
                <a href="#" className="text-blue-700 text-sm">
                  Calendar
                </a>
              </div>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="border-l-4 border-blue-600 pl-3 py-2 hover:bg-gray-50 rounded-r cursor-pointer"
                  >
                    <h3 className="font-medium text-gray-900 text-sm">{event.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <span>{event.date}</span>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* New Staff Start Here */}
            <section
              className={`bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl shadow-sm p-5 text-white ${layoutBuilderMode ? 'border-2 border-dashed border-amber-400 hover:border-amber-300 cursor-pointer' : ''}`}
              onClick={() => layoutBuilderMode && setActiveSection('newstaff')}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-amber-400 p-2 rounded-lg">
                  <UserPlus className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">New Staff Start Here</h2>
                  <p className="text-blue-200 text-xs">Your onboarding checklist</p>
                </div>
              </div>
              <div className="space-y-3">
                {newStaffSteps.map((step, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{step.title}</h3>
                      <p className="text-xs text-blue-200">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full py-2 bg-amber-400 text-blue-900 font-semibold rounded-lg hover:bg-amber-300 transition-colors flex items-center justify-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Visit Onboarding Portal
              </button>
            </section>

            {/* Quick Links */}
            <section className="bg-white rounded-xl shadow-sm p-5">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-800" />
                Quick Resources
              </h2>
              <div className="space-y-2">
                {['Employee Handbook', 'Benefits Guide', 'IT Service Catalog', 'Meeting Templates', 'Policies A-Z'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-blue-700 transition-colors"
                  >
                    <span className="text-sm">{link}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* IA Map Section (Portfolio Artifact) */}
        <section className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Layout className="w-5 h-5 text-blue-800" />
            Site Information Architecture
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 p-4 bg-gray-50 rounded-lg">
            <span className="px-4 py-2 bg-blue-800 text-white rounded-lg font-semibold">Home</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">News</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">Policies</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">Tools</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">Directory</span>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Primary navigation path: Home → News → Policies → Tools → Directory
          </p>
        </section>

        {/* Portfolio Artifacts Section */}
        <section className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-5 border-t-4 border-blue-600">
            <h3 className="font-bold text-gray-900 mb-2">Before/After Wireframes</h3>
            <p className="text-sm text-gray-600">Redesigned from content-heavy to task-first layout with clear information hierarchy.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5 border-t-4 border-amber-500">
            <h3 className="font-bold text-gray-900 mb-2">Layout Builder Templates</h3>
            <p className="text-sm text-gray-600">Custom sections saved to Template Library for reuse across department sites.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5 border-t-4 border-green-600">
            <h3 className="font-bold text-gray-900 mb-2">Mobile-First Design</h3>
            <p className="text-sm text-gray-600">Fully responsive layout optimized for all device sizes following UC Davis standards.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer role="contentinfo" className="bg-gray-800 text-white py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-amber-400 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-900" />
                </div>
                <span className="font-bold text-lg">DEVAR</span>
              </div>
              <p className="text-gray-400 text-sm">
                Department of Evaluation and Research, UC Davis. Advancing campus research and assessment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Staff Directory</a></li>
                <li><a href="#" className="hover:text-white">Policies & Procedures</a></li>
                <li><a href="#" className="hover:text-white">IT Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">UC Davis Library</a></li>
                <li><a href="#" className="hover:text-white">Campus Map</a></li>
                <li><a href="#" className="hover:text-white">AggieLife</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact Us</h4>
              <address className="not-italic text-sm text-gray-400 space-y-1">
                <p>123 Mrak Hall, One Shields Ave</p>
                <p>Davis, CA 95616</p>
                <p>Phone: (530) 752-XXXX</p>
                <p>Email: devar@ucdavis.edu</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
            <p>© 2024 University of California, Davis | DEVAR Department Intranet</p>
            <p className="mt-1">Built with SiteFarm Layout Builder | UC Davis Web Standards</p>
          </div>
        </div>
      </footer>
    </div>
  );
}