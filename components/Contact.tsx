
import React from 'react';
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#000d1a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest">Connect</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Let's Build Something Smarter.</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Whether you have an engineering project, a tech-driven venture, or just want to connect, I'm always open to discussing new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:negusesolomon948@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <Mail className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-mono">EMAIL</div>
                  <div className="text-lg font-medium text-white">negusesolomon948@gmail.com</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/negusesolomon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-mono">LINKEDIN</div>
                  <div className="text-lg font-medium text-white">/in/negusesolomon</div>
                </div>
              </a>

              <a href="tel:+251939474014" className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <Phone className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-mono">PHONE</div>
                  <div className="text-lg font-medium text-white">+251 939-474-014</div>
                </div>
              </a>
            </div>
          </div>

          <div className="glass p-10 rounded-[2.5rem] border-white/5 relative">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Your message here..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all text-white resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                onClick={(e) => e.preventDefault()}
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group shadow-xl shadow-blue-600/20"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
