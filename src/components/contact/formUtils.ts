
import { toast } from "@/hooks/use-toast";

export interface FormState {
  name: string;
  email: string;
  date: string;
  time: string;
  message: string;
}

export const initialFormState: FormState = {
  name: "",
  email: "",
  date: "",
  time: "",
  message: ""
};

export const handleFormSubmit = async (
  formState: FormState,
  setIsSubmitting: (value: boolean) => void,
  setIsSubmitted: (value: boolean) => void,
  setFormState: (state: FormState) => void
) => {
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
      setFormState(initialFormState);
      
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
