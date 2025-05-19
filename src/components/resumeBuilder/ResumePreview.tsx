
import React from "react";
import { Button } from "@/components/ui/button";
import { FileTextIcon, ClipboardCheckIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
    summary: string;
  };
  experiences: Experience[];
  education: Education[];
  skills: string[];
}

interface ResumePreviewProps {
  resumeData: ResumeData;
  onBack: () => void;
  onReset: () => void;
}

const ResumePreview = ({ resumeData, onBack, onReset }: ResumePreviewProps) => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    toast({
      title: "Resume Download Started",
      description: "Your professional resume is being prepared for download.",
    });
    
    // In a real app, we would generate a PDF here
    setTimeout(() => {
      toast({
        title: "Resume Downloaded",
        description: "Your resume has been successfully downloaded.",
      });
    }, 2000);
  };

  const handleCopy = () => {
    toast({
      title: "Resume Copied",
      description: "Your resume has been copied to clipboard.",
    });
  };

  return (
    <div className="resume-section animate-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="resume-heading">Your Professional Resume</h2>
        <div className="flex space-x-2">
          <Button 
            onClick={handleDownload}
            className="bg-resume-primary hover:bg-resume-secondary"
          >
            <FileTextIcon className="mr-2 h-4 w-4" /> Download PDF
          </Button>
          <Button 
            onClick={handleCopy}
            variant="outline"
          >
            <ClipboardCheckIcon className="mr-2 h-4 w-4" /> Copy Text
          </Button>
        </div>
      </div>
      
      <div className="rounded-lg border bg-white p-8 shadow-lg">
        {/* Resume Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-resume-primary">{resumeData.personalInfo.fullName}</h1>
          
          <div className="mt-2 flex flex-wrap justify-center gap-x-4 text-sm">
            {resumeData.personalInfo.email && (
              <span>{resumeData.personalInfo.email}</span>
            )}
            {resumeData.personalInfo.phone && (
              <span>{resumeData.personalInfo.phone}</span>
            )}
            {resumeData.personalInfo.location && (
              <span>{resumeData.personalInfo.location}</span>
            )}
          </div>
          
          <div className="mt-1 flex flex-wrap justify-center gap-x-4 text-sm">
            {resumeData.personalInfo.linkedin && (
              <span className="text-resume-tertiary">{resumeData.personalInfo.linkedin}</span>
            )}
            {resumeData.personalInfo.website && (
              <span className="text-resume-tertiary">{resumeData.personalInfo.website}</span>
            )}
          </div>
        </div>
        
        {/* Summary Section */}
        {resumeData.personalInfo.summary && (
          <div className="mb-6">
            <h2 className="mb-2 text-lg font-semibold border-b border-resume-light pb-1">SUMMARY</h2>
            <p className="text-sm">{resumeData.personalInfo.summary}</p>
          </div>
        )}
        
        {/* Experience Section */}
        {resumeData.experiences.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-3 text-lg font-semibold border-b border-resume-light pb-1">EXPERIENCE</h2>
            
            <div className="space-y-4">
              {resumeData.experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                    <h3 className="font-bold">{exp.position}</h3>
                    <span className="text-xs text-muted-foreground">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">{exp.company}</span>
                    {exp.location && <span>, {exp.location}</span>}
                  </div>
                  <p className="mt-1 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Education Section */}
        {resumeData.education.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-3 text-lg font-semibold border-b border-resume-light pb-1">EDUCATION</h2>
            
            <div className="space-y-4">
              {resumeData.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                    <h3 className="font-bold">{edu.school}</h3>
                    <span className="text-xs text-muted-foreground">
                      {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</span>
                    {edu.location && <span>, {edu.location}</span>}
                  </div>
                  {edu.description && <p className="mt-1 text-sm">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Skills Section */}
        {resumeData.skills.length > 0 && (
          <div>
            <h2 className="mb-2 text-lg font-semibold border-b border-resume-light pb-1">SKILLS</h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {resumeData.skills.map((skill, index) => (
                <span key={index} className="text-sm">
                  {skill}{index < resumeData.skills.length - 1 ? " •" : ""}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-6 flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Edit Resume
        </Button>
        <Button variant="secondary" onClick={onReset}>
          Create New Resume
        </Button>
      </div>
    </div>
  );
};

export default ResumePreview;
