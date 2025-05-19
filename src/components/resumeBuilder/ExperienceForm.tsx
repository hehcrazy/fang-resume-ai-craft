
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface ExperienceFormProps {
  onNext: () => void;
  onBack: () => void;
  experiences: Experience[];
  setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
}

const ExperienceForm = ({ onNext, onBack, experiences, setExperiences }: ExperienceFormProps) => {
  const [newExperience, setNewExperience] = useState<Experience>({
    id: "",
    position: "",
    company: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: ""
  });

  const handleAddExperience = () => {
    const experienceWithId = {
      ...newExperience,
      id: Date.now().toString()
    };
    
    setExperiences([...experiences, experienceWithId]);
    setNewExperience({
      id: "",
      position: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: ""
    });
  };

  const handleDeleteExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewExperience(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewExperience(prev => ({ ...prev, current: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="resume-section animate-in">
      <h2 className="resume-heading">Work Experience</h2>
      
      {/* List existing experiences */}
      {experiences.length > 0 && (
        <div className="mb-6 space-y-4">
          <h3 className="text-lg font-semibold text-resume-secondary">Added Experiences</h3>
          
          {experiences.map((exp) => (
            <div key={exp.id} className="rounded-md border p-4">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-medium">{exp.position}</h4>
                  <p className="text-sm text-muted-foreground">
                    {exp.company}{exp.location ? `, ${exp.location}` : ''} | {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </p>
                </div>
                <Button 
                  type="button" 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => handleDeleteExperience(exp.id)}
                >
                  Remove
                </Button>
              </div>
              <p className="mt-2 text-sm">{exp.description}</p>
            </div>
          ))}
          
          <Separator className="my-6" />
        </div>
      )}
      
      {/* New experience form */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-resume-secondary">Add New Experience</h3>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="form-group">
            <Label htmlFor="position">Position Title</Label>
            <Input
              id="position"
              name="position"
              value={newExperience.position}
              onChange={handleInputChange}
              placeholder="Software Engineer"
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={newExperience.company}
              onChange={handleInputChange}
              placeholder="Google"
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={newExperience.location}
              onChange={handleInputChange}
              placeholder="Mountain View, CA"
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              type="month"
              value={newExperience.startDate}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              name="endDate"
              type="month"
              value={newExperience.endDate}
              onChange={handleInputChange}
              disabled={newExperience.current}
            />
          </div>
          
          <div className="form-group flex items-end">
            <div className="flex items-center space-x-2">
              <input
                id="current"
                name="current"
                type="checkbox"
                checked={newExperience.current}
                onChange={handleCheckboxChange}
                className="h-4 w-4 rounded border-gray-300 text-resume-primary focus:ring-resume-primary"
              />
              <Label htmlFor="current">I currently work here</Label>
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={newExperience.description}
            onChange={handleInputChange}
            placeholder="Describe your responsibilities, achievements, and skills used in this role..."
            className="h-32"
          />
        </div>
        
        <Button
          type="button"
          onClick={handleAddExperience}
          className="mt-2"
          disabled={!newExperience.position || !newExperience.company || !newExperience.startDate}
        >
          Add Experience
        </Button>
      </div>
      
      <div className="mt-6 flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" className="bg-resume-primary hover:bg-resume-secondary">
          Next: Education
        </Button>
      </div>
    </form>
  );
};

export default ExperienceForm;
