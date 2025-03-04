
import { useState } from "react";
import { CalendarDays, Clock, Check, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Email submission logic
    try {
      // Option 1: Using a free form service like FormSubmit
      // This needs no backend, just change the form action and method
      // You can uncomment this and add your email to activate it
      
      // Create form data
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('date', formState.date);
      formData.append('time', formState.time);
      formData.append('message', formState.message);
      formData.append('_subject', `Meeting Request from ${formState.name}`);
      
      // Send to email using FormSubmit service
      const response = await fetch("https://formsubmit.co/bruzasgd@gmail.com", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          date: "",
          time: "",
          message: ""
        });
        
        toast({
          title: "Meeting scheduled",
          description: "We'll contact you soon to confirm the details.",
        });
        
        // Reset submission state after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 reveal">
          <div className="relative inline-block">
            <div className="chip inline-block mb-4">Let's Connect</div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium mb-4">
            Book a Meeting With Us
          </h2>
          <p className="text-foreground/70 text-lg">
            Schedule a consultation to discuss how we can enhance your software quality.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-xl shadow-sm overflow-hidden reveal">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Form section */}
              <div className="md:col-span-3 p-6 sm:p-8">
                {/* 
                // Alternative implementation using FormSubmit:
                // Replace the <form> tag below with this to use formsubmit.co service directly:
                // <form action="https://formsubmit.co/bruzasgd@gmail.com" method="POST" className="space-y-4">
                // <input type="hidden" name="_subject" value="New Meeting Request" />
                // <input type="hidden" name="_captcha" value="false" />
                */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-foreground/80 mb-1">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formState.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
                        />
                        <CalendarDays size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-500/70" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-foreground/80 mb-1">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <select
                          id="time"
                          name="time"
                          value={formState.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all appearance-none"
                        >
                          <option value="">Select a time...</option>
                          <option value="morning">Morning (9AM - 12PM)</option>
                          <option value="afternoon">Afternoon (1PM - 5PM)</option>
                          <option value="evening">Evening (6PM - 8PM)</option>
                        </select>
                        <Clock size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-500/70" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                      Meeting Agenda
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full flex items-center justify-center px-6 py-2.5 rounded-lg font-medium text-white transition-all ${
                      isSubmitted 
                        ? "bg-green-500 hover:bg-green-600" 
                        : "bg-yellow-500 hover:bg-yellow-600"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center">
                        <Check size={18} className="mr-2" />
                        Meeting Scheduled
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Calendar size={18} className="mr-2" />
                        Schedule Meeting
                      </span>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Info section with availability calendar */}
              <div className="md:col-span-2 bg-yellow-500/10 p-6 sm:p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
                      <CalendarDays size={16} className="text-yellow-600" />
                    </div>
                    Our Availability
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    We offer flexible meeting times to accommodate your schedule.
                  </p>
                  
                  {/* Mini availability calendar */}
                  <div className="grid grid-cols-5 gap-1 mb-4">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                      <div key={day} className="text-center">
                        <div className="text-[10px] font-medium text-foreground/60 mb-1">{day}</div>
                        <div className="w-full aspect-square rounded-md bg-yellow-50 border border-yellow-100 flex items-center justify-center text-yellow-800 text-xs font-medium hover:bg-yellow-100 transition-colors cursor-pointer">
                          <span>✓</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="mr-3 h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <span>✉️</span>
                    </div>
                    <p className="text-sm">contact@devcycleqa.com</p>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <span>📱</span>
                    </div>
                    <p className="text-sm">+370 62728 602</p>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <span>🌐</span>
                    </div>
                    <p className="text-sm">Remote & On-site Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
