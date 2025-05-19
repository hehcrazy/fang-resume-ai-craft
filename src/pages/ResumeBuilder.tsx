
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PersonalInfoForm from "@/components/resumeBuilder/PersonalInfoForm";
import ExperienceForm from "@/components/resumeBuilder/ExperienceForm";
import EducationForm from "@/components/resumeBuilder/EducationForm";
import SkillsForm from "@/components/resumeBuilder/SkillsForm";
import ResumePreview from "@/components/resumeBuilder/ResumePreview";

// Define interfaces for our data
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

const ResumeBuilder = () => {
  // State to track which form to display
  const [currentStep, setCurrentStep] = useState(1);
  
  // State for form data
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    website: "",
    summary: ""
  });
  
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  
  // Functions to navigate between forms
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };
  
  const resetForm = () => {
    setCurrentStep(1);
    setPersonalInfo({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      website: "",
      summary: ""
    });
    setExperiences([]);
    setEducation([]);
    setSkills([]);
    window.scrollTo(0, 0);
  };
  
  // Render the current form based on step
  const renderForm = () => {
    switch(currentStep) {
      case 1:
        return (
          <PersonalInfoForm 
            onNext={nextStep} 
            formData={personalInfo} 
            setFormData={setPersonalInfo} 
          />
        );
      case 2:
        return (
          <ExperienceForm 
            onNext={nextStep} 
            onBack={prevStep} 
            experiences={experiences} 
            setExperiences={setExperiences} 
          />
        );
      case 3:
        return (
          <EducationForm 
            onNext={nextStep} 
            onBack={prevStep} 
            education={education} 
            setEducation={setEducation} 
          />
        );
      case 4:
        return (
          <SkillsForm 
            onNext={nextStep} 
            onBack={prevStep} 
            skills={skills} 
            setSkills={setSkills} 
          />
        );
      case 5:
        return (
          <ResumePreview 
            resumeData={{ personalInfo, experiences, education, skills }} 
            onBack={prevStep} 
            onReset={resetForm} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-resume-dark">Resume Builder</h1>
            <p className="mt-2 text-muted-foreground">
              Build a professional resume optimized for FAANG and top tech companies.
            </p>
          </div>
          
          {/* Progress indicator */}
          {currentStep < 5 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Step {currentStep} of 4</span>
                <span className="text-sm text-muted-foreground">
                  {currentStep === 1 && "Personal Information"}
                  {currentStep === 2 && "Work Experience"}
                  {currentStep === 3 && "Education"}
                  {currentStep === 4 && "Skills"}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-resume-primary rounded-full transition-all"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
          
          {renderForm()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeBuilder;
