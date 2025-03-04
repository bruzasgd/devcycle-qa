
import { useState } from "react";
import { CalendarDays, Clock, Calendar, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FormState {
  name: string;
  email: string;
  date: string;
  time: string;
  message: string;
}

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    date: "",
    time: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
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
  );
};

export default ContactForm;
