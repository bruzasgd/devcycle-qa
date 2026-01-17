import { useState } from "react";
import FormInput from "./FormInput";
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
      <FormInput
        id="name"
        name="name"
        type="text"
        value={formState.name}
        onChange={handleChange}
        label="Your Name"
        required
      />
      
      <FormInput
        id="email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
        label="Work Email"
        required
      />
      
      <MessageTextarea
        value={formState.message}
        onChange={handleChange}
      />
      
      <SubmitButton
        isSubmitting={isSubmitting}
        isSubmitted={isSubmitted}
      />
      
      <p className="text-xs text-foreground/50 text-center">
        We'll respond within 24 hours
      </p>
    </form>
  );
};

export default ContactForm;
