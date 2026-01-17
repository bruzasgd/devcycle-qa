import { useState } from "react";
import { CalendarDays } from "lucide-react";
import FormInput from "./FormInput";
import TimeSelect from "./TimeSelect";
import MessageTextarea from "./MessageTextarea";
import SubmitButton from "./SubmitButton";
import { FormState, initialFormState, handleFormSubmit } from "./formUtils";

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
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
    await handleFormSubmit(formState, setIsSubmitting, setIsSubmitted, setFormState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <FormInput
          id="name"
          name="name"
          type="text"
          value={formState.name}
          onChange={handleChange}
          label="Name"
          required
        />
        
        <FormInput
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          label="Email"
          required
        />
      </div>
      
      <div className="grid sm:grid-cols-2 gap-4">
        <FormInput
          id="date"
          name="date"
          type="date"
          value={formState.date}
          onChange={handleChange}
          label="Preferred Date"
          required={false}
          icon={<CalendarDays size={16} />}
          min={new Date().toISOString().split('T')[0]}
        />
        
        <TimeSelect 
          value={formState.time}
          onChange={handleChange}
        />
      </div>
      
      <MessageTextarea
        value={formState.message}
        onChange={handleChange}
      />
      
      <SubmitButton
        isSubmitting={isSubmitting}
        isSubmitted={isSubmitted}
      />
    </form>
  );
};

export default ContactForm;
