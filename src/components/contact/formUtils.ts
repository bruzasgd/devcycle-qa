import { toast } from "@/hooks/use-toast";

export interface FormState {
  name: string;
  email: string;
  message: string;
}

export const initialFormState: FormState = {
  name: "",
  email: "",
  message: "Hi, I'd like to schedule a QA strategy session.\n\nPreferred Date: \nPreferred Time: \n"
};

export const handleFormSubmit = async (
  formState: FormState,
  setIsSubmitting: (value: boolean) => void,
  setIsSubmitted: (value: boolean) => void,
  setFormState: (state: FormState) => void
) => {
  setIsSubmitting(true);
  
  try {
    const response = await fetch("https://formsubmit.co/ajax/bruzasgd@gmail.com", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        message: formState.message,
        _subject: `Meeting Request from ${formState.name}`
      })
    });
    
    if (response.ok) {
      setIsSubmitted(true);
      setFormState(initialFormState);
      
      toast({
        title: "Meeting scheduled",
        description: "We'll contact you soon to confirm the details.",
      });
      
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
