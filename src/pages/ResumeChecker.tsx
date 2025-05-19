
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResumeUploader from "@/components/resumeChecker/ResumeUploader";
import ResumeAnalysis from "@/components/resumeChecker/ResumeAnalysis";

const ResumeChecker = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const [showAnalysis, setShowAnalysis] = useState(false);
  
  const handleResumeUpload = (text: string) => {
    setResumeText(text);
    setIsAnalyzing(true);
    
    // Simulate AI analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowAnalysis(true);
    }, 3000);
  };
  
  const handleBackToUpload = () => {
    setShowAnalysis(false);
    setResumeText("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-resume-dark">Resume Checker</h1>
            <p className="mt-2 text-muted-foreground">
              Get expert AI analysis and feedback to optimize your resume for top companies.
            </p>
          </div>
          
          {isAnalyzing ? (
            <div className="resume-section flex flex-col items-center justify-center py-16">
              <div className="mb-6">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-resume-light border-t-resume-primary"></div>
              </div>
              <h2 className="text-2xl font-bold text-resume-dark mb-2">Analyzing Your Resume</h2>
              <p className="text-muted-foreground">Please wait while our AI reviews your resume...</p>
            </div>
          ) : showAnalysis ? (
            <ResumeAnalysis onBack={handleBackToUpload} resumeText={resumeText} />
          ) : (
            <ResumeUploader onUpload={handleResumeUpload} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeChecker;
