
import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { CheckIcon, EditIcon, ClipboardCheckIcon } from "lucide-react";

interface ResumeAnalysisProps {
  onBack: () => void;
  resumeText: string;
}

interface FeedbackItem {
  id: number;
  category: string;
  recommendation: string;
  impact: "high" | "medium" | "low";
}

const ResumeAnalysis = ({ onBack, resumeText }: ResumeAnalysisProps) => {
  const { toast } = useToast();
  
  // Simulated analysis results - in a real app this would come from the AI analysis
  const analysisScore = 72;
  const strengthScore = 80;
  const improvementScore = 65;
  const matchScore = 70;
  
  // Simulated feedback items
  const feedbackItems: FeedbackItem[] = [
    {
      id: 1,
      category: "Action Verbs",
      recommendation: "Replace passive phrases with strong action verbs like 'implemented', 'developed', and 'optimized'.",
      impact: "high"
    },
    {
      id: 2,
      category: "Quantify Achievements",
      recommendation: "Add specific metrics and percentages to your achievements to demonstrate impact.",
      impact: "high"
    },
    {
      id: 3,
      category: "Technical Skills",
      recommendation: "List technical skills separately to improve ATS recognition.",
      impact: "medium"
    },
    {
      id: 4,
      category: "Resume Length",
      recommendation: "Consider condensing your resume to a maximum of two pages for more impact.",
      impact: "low"
    },
    {
      id: 5,
      category: "Keyword Optimization",
      recommendation: "Add more industry-specific keywords such as 'cloud computing', 'agile development', and 'CI/CD'.",
      impact: "medium"
    }
  ];
  
  // Simulated ATS Keywords that were detected
  const detectedKeywords = [
    "JavaScript", "React", "Project Management", "Team Leadership", "Communication"
  ];
  
  // Simulated ATS Keywords that are missing
  const missingKeywords = [
    "Python", "AWS", "TypeScript", "Agile", "Docker", "Jenkins"
  ];
  
  const handleCopyFeedback = () => {
    const feedbackText = feedbackItems
      .map(item => `${item.category}: ${item.recommendation}`)
      .join('\n\n');
    
    navigator.clipboard.writeText(feedbackText).then(() => {
      toast({
        title: "Feedback Copied",
        description: "All feedback items have been copied to clipboard.",
      });
    });
  };
  
  const handleDownloadReport = () => {
    toast({
      title: "Report Download Started",
      description: "Your detailed analysis report is being prepared for download.",
    });
    
    // In a real app, we would generate a PDF report here
    setTimeout(() => {
      toast({
        title: "Report Downloaded",
        description: "Your resume analysis report has been successfully downloaded.",
      });
    }, 2000);
  };
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-resume-danger";
  };
  
  const getScoreProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-resume-danger";
  };
  
  const getImpactBadge = (impact: "high" | "medium" | "low") => {
    switch (impact) {
      case "high":
        return <span className="rounded-full bg-resume-danger/20 px-2 py-1 text-xs font-medium text-resume-danger">High Impact</span>;
      case "medium":
        return <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">Medium Impact</span>;
      case "low":
        return <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Lower Impact</span>;
    }
  };

  return (
    <div className="space-y-6 animate-in">
      <div className="resume-section">
        <div className="flex items-center justify-between mb-6">
          <h2 className="resume-heading">Resume Analysis Results</h2>
          <div className="flex space-x-2">
            <Button 
              onClick={handleDownloadReport}
              className="bg-resume-primary hover:bg-resume-secondary"
            >
              <ClipboardCheckIcon className="mr-2 h-4 w-4" /> Download Report
            </Button>
          </div>
        </div>
        
        {/* Overall Score */}
        <div className="mb-8 text-center">
          <div className="inline-flex h-36 w-36 items-center justify-center rounded-full border-8 border-resume-light">
            <div>
              <p className={`text-4xl font-bold ${getScoreColor(analysisScore)}`}>
                {analysisScore}%
              </p>
              <p className="text-sm text-muted-foreground">Overall Score</p>
            </div>
          </div>
          
          <p className="mt-4 text-center text-muted-foreground">
            Your resume is on the right track, but has room for improvement to compete for top positions.
          </p>
        </div>
        
        {/* Score Breakdown */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <div className="flex justify-between">
              <h3 className="font-medium">Strengths</h3>
              <span className={`font-medium ${getScoreColor(strengthScore)}`}>{strengthScore}%</span>
            </div>
            <Progress value={strengthScore} className={`h-2 ${getScoreProgressColor(strengthScore)}`} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <h3 className="font-medium">Areas to Improve</h3>
              <span className={`font-medium ${getScoreColor(improvementScore)}`}>{improvementScore}%</span>
            </div>
            <Progress value={improvementScore} className={`h-2 ${getScoreProgressColor(improvementScore)}`} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <h3 className="font-medium">ATS Match</h3>
              <span className={`font-medium ${getScoreColor(matchScore)}`}>{matchScore}%</span>
            </div>
            <Progress value={matchScore} className={`h-2 ${getScoreProgressColor(matchScore)}`} />
          </div>
        </div>
      </div>
      
      {/* Improvement Recommendations */}
      <div className="resume-section">
        <div className="flex items-center justify-between mb-6">
          <h2 className="resume-heading">Recommendations to Improve</h2>
          <Button variant="outline" size="sm" onClick={handleCopyFeedback}>
            <EditIcon className="mr-2 h-4 w-4" /> Copy All Feedback
          </Button>
        </div>
        
        <div className="space-y-4">
          {feedbackItems.map((item) => (
            <div key={item.id} className="rounded-md border p-4 transition-colors hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center">
                    <h3 className="font-semibold text-resume-tertiary">{item.category}</h3>
                    <div className="ml-3">{getImpactBadge(item.impact)}</div>
                  </div>
                  <p className="mt-2 text-sm">{item.recommendation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Keywords Analysis */}
      <div className="resume-section">
        <h2 className="resume-heading">ATS Keyword Analysis</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-green-600 flex items-center">
              <CheckIcon className="mr-2 h-4 w-4" /> Detected Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {detectedKeywords.map((keyword, index) => (
                <div 
                  key={index} 
                  className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
                >
                  {keyword}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-3 font-semibold text-resume-danger flex items-center">
              <EditIcon className="mr-2 h-4 w-4" /> Missing Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {missingKeywords.map((keyword, index) => (
                <div 
                  key={index} 
                  className="rounded-full bg-resume-danger/10 px-3 py-1 text-sm text-resume-danger"
                >
                  {keyword}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Upload Different Resume
        </Button>
        <Button className="bg-resume-primary hover:bg-resume-secondary">
          Get Detailed Guidance
        </Button>
      </div>
    </div>
  );
};

export default ResumeAnalysis;
