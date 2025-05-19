
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface PersonalInfoFormProps {
  onNext: () => void;
  formData: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
    summary: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      fullName: string;
      email: string;
      phone: string;
      location: string;
      linkedin: string;
      website: string;
      summary: string;
    }>
  >;
}

const PersonalInfoForm = ({ onNext, formData, setFormData }: PersonalInfoFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="resume-section animate-in">
      <h2 className="resume-heading">Personal Information</h2>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="form-group">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@example.com"
            required
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="San Francisco, CA"
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <Input
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="linkedin.com/in/johndoe"
          />
        </div>
        
        <div className="form-group">
          <Label htmlFor="website">Personal Website</Label>
          <Input
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="johndoe.com"
          />
        </div>
      </div>
      
      <div className="form-group mt-4">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          placeholder="A brief summary of your professional background and goals..."
          className="h-32"
        />
      </div>
      
      <div className="mt-6 flex justify-end">
        <Button type="submit" className="bg-resume-primary hover:bg-resume-secondary">
          Next: Experience
        </Button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
