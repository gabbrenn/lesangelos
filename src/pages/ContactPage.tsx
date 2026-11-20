import { useState, type FormEvent } from 'react';
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  MessageSquare,
  Calendar,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: 'home' | 'about' | 'gallery' | 'contact') => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childGrade: 'Nursery / Pre-Primary',
    subject: 'Admissions Inquiry',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Page Hero Banner */}
      <section className="relative h-[250px] sm:h-[300px] w-full overflow-hidden bg-[#061c47]">
        <img
          src="/images/school.jpeg"
          alt="Contact Les Angelos Primary School"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(2, 38, 94, 0.90) 0%, rgba(5, 41, 104, 0.75) 55%, rgba(5, 41, 104, 0.50) 100%)',
          }}
        />
        <div className="relative z-10 max-w-[1160px] mx-auto px-4 sm:px-6 h-full flex flex-col justify-center text-white">
          <div className="flex items-center space-x-2 text-[13px] font-medium text-white/80 mb-2">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#f5c418] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#f5c418] font-semibold">Contact Us</span>
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-extrabold tracking-tight leading-tight">
            Get In Touch With Us
          </h1>
          <p className="text-[15px] sm:text-[17px] text-white/90 max-w-[600px] mt-2">
            Have questions about admissions, tuition, or our academic programs? Our team in Kigali
            is ready to welcome your family.
          </p>
        </div>
      </section>

      {/* Contact Info Cards + Message Form */}
      <section className="py-12 sm:py-16 bg-[#ebf0fc]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          {/* Top 4 Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            <div className="bg-white rounded-[12px] p-5 shadow-2xs border border-slate-100 flex items-start space-x-4">
              <div className="w-11 h-11 rounded-xl bg-[#dbe9fd] text-[#0b2559] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[15px] font-extrabold text-[#0b2559]">Campus Location</h3>
                <p className="text-[13px] text-[#2c436f] mt-1 leading-snug">
                  14 KK 361 St, Kigali, Rwanda
                  <br />
                  P.O. Box 2376, Kigali, Rwanda
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[12px] p-5 shadow-2xs border border-slate-100 flex items-start space-x-4">
              <div className="w-11 h-11 rounded-xl bg-[#dbe9fd] text-[#0b2559] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[15px] font-extrabold text-[#0b2559]">Phone Numbers</h3>
                <p className="text-[13.5px] text-[#2c436f] mt-1 leading-snug">
                  <a href="tel:+250785866480" className="hover:text-[#0e4391] font-semibold block">
                    +250 785 866 480
                  </a>
                  <a href="tel:+250781198780" className="hover:text-[#0e4391] font-semibold block">
                    +250 781 198 780
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[12px] p-5 shadow-2xs border border-slate-100 flex items-start space-x-4">
              <div className="w-11 h-11 rounded-xl bg-[#dbe9fd] text-[#0b2559] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[15px] font-extrabold text-[#0b2559]">Email Address</h3>
                <p className="text-[13.5px] text-[#2c436f] mt-1 leading-snug break-all">
                  <a
                    href="mailto:lesangelos2021@gmail.com"
                    className="hover:text-[#0e4391] font-semibold"
                  >
                    lesangelos2021@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[12px] p-5 shadow-2xs border border-slate-100 flex items-start space-x-4">
              <div className="w-11 h-11 rounded-xl bg-[#dbe9fd] text-[#0b2559] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[15px] font-extrabold text-[#0b2559]">School Hours</h3>
                <p className="text-[13.5px] text-[#2c436f] mt-1 leading-snug">
                  Mon – Fri: 7:30 AM – 4:30 PM
                  <br />
                  Sat (Visits): 9:00 AM – 1:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Main Contact Form & Admissions Visit Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-[14px] p-6 sm:p-8 shadow-xs border border-slate-100">
              <div className="w-12 h-[3.5px] bg-[#f5c418] rounded-full mb-3" />
              <div className="flex items-center space-x-2 text-[#0e4391] text-[12.5px] font-bold uppercase tracking-wider mb-1">
                <MessageSquare className="w-4 h-4" />
                <span>Send Us a Message</span>
              </div>
              <h2 className="text-[23px] sm:text-[26px] font-extrabold text-[#0b2559]">
                Inquire About Admissions or Schedule a Visit
              </h2>
              <p className="text-[14px] text-[#2c436f] mt-1 mb-6">
                Fill out the form below and our school administration will respond promptly.
              </p>

              {submitted ? (
                <div className="bg-[#ebf0fc] border border-[#0e4391]/20 rounded-[12px] p-6 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#082a68] mx-auto" />
                  <h3 className="text-[19px] font-extrabold text-[#0b2559]">
                    Thank You, {formData.parentName || 'Parent'}!
                  </h3>
                  <p className="text-[14px] text-[#1c335f] max-w-md mx-auto">
                    Your inquiry regarding <strong>{formData.subject}</strong> has been received.
                    Our admissions office will contact you shortly at{' '}
                    <strong>{formData.phone || formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: '',
                        email: '',
                        phone: '',
                        childGrade: 'Nursery / Pre-Primary',
                        subject: 'Admissions Inquiry',
                        message: '',
                      });
                    }}
                    className="mt-2 inline-flex bg-[#082a68] text-white font-semibold text-[13px] px-5 py-2.5 rounded-full hover:bg-[#0b3582] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#0b2559] mb-1.5">
                        Parent / Guardian Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentName: e.target.value })
                        }
                        placeholder="e.g. Mrs. Umutesi Jeanne"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-[14px] text-slate-800 focus:outline-none focus:border-[#082a68]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#0b2559] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +250 785 866 480"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-[14px] text-slate-800 focus:outline-none focus:border-[#082a68]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-bold text-[#0b2559] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@example.com"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-[14px] text-slate-800 focus:outline-none focus:border-[#082a68]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#0b2559] mb-1.5">
                        Child&apos;s Class Level
                      </label>
                      <select
                        value={formData.childGrade}
                        onChange={(e) =>
                          setFormData({ ...formData, childGrade: e.target.value })
                        }
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-[14px] text-slate-800 bg-white focus:outline-none focus:border-[#082a68]"
                      >
                        <option>Nursery / Pre-Primary</option>
                        <option>Primary 1 (P1)</option>
                        <option>Primary 2 (P2)</option>
                        <option>Primary 3 (P3)</option>
                        <option>Primary 4 (P4)</option>
                        <option>Primary 5 (P5)</option>
                        <option>Primary 6 (P6)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#0b2559] mb-1.5">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-[14px] text-slate-800 bg-white focus:outline-none focus:border-[#082a68]"
                    >
                      <option>Admissions Inquiry</option>
                      <option>Book a Campus Tour</option>
                      <option>Tuition &amp; Fee Structure</option>
                      <option>Academic Curriculum Question</option>
                      <option>General Feedback / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#0b2559] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you and your child?"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-[14px] text-slate-800 focus:outline-none focus:border-[#082a68]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 bg-[#f5c418] hover:bg-[#eab808] text-[#0b224e] font-bold text-[14px] px-7 py-3.5 rounded-full shadow-xs transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Sidebar: Visit Our Campus & Map Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#052968] text-white rounded-[14px] p-6 sm:p-7 shadow-md">
                <div className="inline-flex items-center space-x-2 text-[#f5c418] text-[12px] font-bold uppercase tracking-wider mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Admissions &amp; Campus Visits</span>
                </div>
                <h3 className="text-[20px] font-extrabold leading-snug">
                  Visit Les Angelos Primary School in Person
                </h3>
                <p className="text-[13.5px] text-white/85 leading-[1.6] mt-2.5">
                  We warmly invite parents and guardians to tour our classrooms, meet our headteacher
                  and faculty, and see our joyful learning environment firsthand.
                </p>

                <div className="mt-5 pt-5 border-t border-white/15 space-y-3 text-[13.5px]">
                  <div className="flex justify-between">
                    <span className="text-white/75">Registration Office:</span>
                    <span className="font-semibold">Mon – Fri, 8:00 AM – 4:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/75">Guided Campus Tours:</span>
                    <span className="font-semibold">Tue &amp; Thu, 9:00 AM – 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/75">Direct Admissions Lines:</span>
                    <span className="font-bold text-[#f5c418] text-right">
                      +250 785 866 480
                      <br />
                      +250 781 198 780
                    </span>
                  </div>
                </div>
              </div>

              {/* Embedded Kigali Map */}
              <div className="bg-white rounded-[14px] overflow-hidden shadow-xs border border-slate-200">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-[15px] font-extrabold text-[#0b2559]">
                      14 KK 361 St, Kigali, Rwanda
                    </h4>
                    <p className="text-[12.5px] text-[#2c436f]">
                      P.O. Box 2376, Kigali, Rwanda
                    </p>
                  </div>
                  <MapPin className="w-5 h-5 text-[#0e4391]" />
                </div>
                <div className="w-full h-[230px] bg-slate-100">
                  <iframe
                    title="Les Angelos Primary School Kigali Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=29.98%2C-2.00%2C30.15%2C-1.90&layer=mapnik"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
