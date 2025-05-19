
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SkillsFormProps {
  onNext: () => void;
  onBack: () => void;
  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>;
}

const SkillsForm = ({ onNext, onBack, skills, setSkills }: SkillsFormProps) => {
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim()) {
      handleAddSkill();
    }
    onNext();
  };

  // Skill categories for suggestions
  const skillCategories = [
    {
      name: "Technical Skills",
      examples: ["JavaScript", "Python", "React", "Node.js", "AWS", "Docker", "TypeScript", "GraphQL", "SQL"]
    },
    {
      name: "Soft Skills",
      examples: ["Leadership", "Communication", "Problem Solving", "Teamwork", "Time Management", "Adaptability"]
    },
    {
      name: "Tools & Software",
      examples: ["Git", "JIRA", "Figma", "Slack", "VS Code", "Adobe Suite", "Microsoft Office"]
    }
  ];

  const handleAddSuggestedSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="resume-section animate-in">
      <h2 className="resume-heading">Skills</h2>
      
      <div className="form-group">
        <Label htmlFor="skill">Add Skills</Label>
        <div className="flex gap-2">
          <Input
            id="skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="e.g., JavaScript, Project Management, Photoshop"
          />
          <Button 
            type="button" 
            onClick={handleAddSkill}
            disabled={!newSkill.trim() || skills.includes(newSkill.trim())}
          >
            Add
          </Button>
        </div>
      </div>
      
      {/* Display added skills */}
      {skills.length > 0 && (
        <div className="mt-4">
          <Label className="mb-2 block">Your Skills</Label>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <div 
                key={skill} 
                className="flex items-center rounded-full bg-resume-light px-3 py-1"
              >
                <span className="text-sm">{skill}</span>
                <button
                  type="button"
                  className="ml-2 text-resume-secondary hover:text-resume-primary"
                  onClick={() => handleRemoveSkill(skill)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Skill suggestions */}
      <div className="mt-8 space-y-6">
        <h3 className="text-lg font-semibold text-resume-secondary">Popular Skills by Category</h3>
        
        {skillCategories.map((category) => (
          <div key={category.name} className="space-y-2">
            <h4 className="font-medium">{category.name}</h4>
            <div className="flex flex-wrap gap-2">
              {category.examples.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  className={`rounded-full px-3 py-1 text-sm ${
                    skills.includes(skill)
                      ? "bg-resume-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleAddSuggestedSkill(skill)}
                  disabled={skills.includes(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" className="bg-resume-primary hover:bg-resume-secondary">
          Generate Resume
        </Button>
      </div>
    </form>
  );
};

export default SkillsForm;
