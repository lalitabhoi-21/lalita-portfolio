import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  // State to track form submission status messages
  const [status, setStatus] = useState('');

  // Handle form submission using Web3Forms API
  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');
    const formData = new FormData(event.target);

    // Web3Forms Access Key integration
    formData.append("access_key", "6f571a0d-3410-4ba2-a647-7c32b1b7fed7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setStatus('Message Sent Successfully!');
      event.target.reset();
      setTimeout(() => setStatus(''), 5000);
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Get In <span className="text-indigo-400">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info & Description Details */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-2">Let's Connect!</h3>
          <p className="text-slate-300 leading-relaxed">
            I am actively looking for internship opportunities and full-stack development roles. Feel free to reach out if you want to collaborate or connect!
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Mail size={20} />
              </div>
              <div>
                <span className="block text-xs text-slate-400">Email</span>
                <span className="text-sm font-medium text-white">bhoilalita824@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <MapPin size={20} />
              </div>
              <div>
                <span className="block text-xs text-slate-400">Location</span>
                <span className="text-sm font-medium text-white">Dhule, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Fields and Submission Handler */}
        <form onSubmit={onSubmit} className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="Enter your name" 
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors" 
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Email</label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="Enter your email" 
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors" 
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Message</label>
            <textarea 
              rows={4} 
              name="message"
              required
              placeholder="Write your message here..." 
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center space-x-2"
          >
            <span>Send Message</span>
            <Send size={16} />
          </button>

          {status && (
            <p className="text-center text-xs font-medium text-indigo-400 mt-2">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}