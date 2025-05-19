
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface EducationFormProps {
  onNext: () => void;
  onBack: () => void;
  education: Education[];
  setEducation: React.Dispatch<React.SetStateAction<Education[]>>;
}

const EducationForm = ({ onNext, onBack, education, setEducation }: EducationFormProps) => {
  const [newEducation, setNewEducation] = useState<Education>({
    id: "",
    school: "",
    degree: "",
    field: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: ""
  });

  const handleAddEducation = () => {
    const educationWithId = {
      ...newEducation,
      id: Date.now().toString()
    };
    
    setEducation([...education, educationWithId]);
    setNewEducation({
      id: "",
      school: "",
      degree: "",
      field: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: ""
    });
  };

  const handleDeleteEducation = (id: string) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEducation(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEducation(prev => ({ ...prev, current: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="resume-section animate-in">
      <h2 className="resume-heading">Education</h2>
      
      {/* List existing education */}
      {education.length > 0 && (
        <div className="mb-6 space-y-4">
          <h3 className="text-lg font-semibold text-resume-secondary">Added Education</h3>
          
          {education.map((edu) => (
            <div key={edu.id} className="rounded-md border p-4">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-medium">{edu.school}</h4>
                  <p className="text-sm text-muted-foreground">
                    {edu.degree}{edu.field ? ` in ${edu.field}` : ''}{edu.location ? `, ${edu.location}` : ''}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                  </p>
                </div>
                <Button 
                  type="button" 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => handleDeleteEducation(edu.id)}
                >
                  Remove
                </Button>
              </div>
              {edu.description && <p className="mt-2 text-sm">{edu.description}</p>}
            </div>
          ))}
          
          <Separator className="my-6" />
        </div>
      )}
      
      {/* New education form */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-resume-secondary">Add New Education</h3>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="form-group">
            <Label htmlFor="school">School/University</Label>
            <Input
              id="school"
              name="school"
              value={newEducation.school}
              onChange={handleInputChange}
              placeholder="Stanford University"
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={newEducation.location}
              onChange={handleInputChange}
              placeholder="Stanford, CA"
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="degree">Degree</Label>
            <Input
              id="degree"
              name="degree"
              value={newEducation.degree}
              onChange={handleInputChange}
              placeholder="Bachelor of Science"
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="field">Field of Study</Label>
            <Input
              id="field"
              name="field"
              value={newEducation.field}
              onChange={handleInputChange}
              placeholder="Computer Science"
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              type="month"
              value={newEducation.startDate}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              name="endDate"
              type="month"
              value={newEducation.endDate}
              onChange={handleInputChange}
              disabled={newEducation.current}
            />
          </div>
        </div>
        
        <div className="form-group flex items-center space-x-2">
          <input
            id="current"
            name="current"
            type="checkbox"
            checked={newEducation.current}
            onChange={handleCheckboxChange}
            className="h-4 w-4 rounded border-gray-300 text-resume-primary focus:ring-resume-primary"
          />
          <Label htmlFor="current">I'm currently studying here</Label>
        </div>
        
        <div className="form-group">
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea
            id="description"
            name="description"
            value={newEducation.description}
            onChange={handleInputChange}
            placeholder="Notable achievements, relevant coursework, etc..."
            className="h-24"
          />
        </div>
        
        <Button
          type="button"
          onClick={handleAddEducation}
          className="mt-2"
          disabled={!newEducation.school || !newEducation.degree || !newEducation.startDate}
        >
          Add Education
        </Button>
      </div>
      
      <div className="mt-6 flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" className="bg-resume-primary hover:bg-resume-secondary">
          Next: Skills
        </Button>
      </div>
    </form>
  );
};

export default EducationForm;
