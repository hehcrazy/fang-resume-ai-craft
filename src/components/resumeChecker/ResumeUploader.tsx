
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ClipboardListIcon } from "lucide-react";

interface ResumeUploaderProps {
  onUpload: (text: string) => void;
}

const ResumeUploader = ({ onUpload }: ResumeUploaderProps) => {
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
    }
  };

  const handleFiles = (file: File) => {
    if (file.type === "application/pdf" || file.type === "text/plain" || 
        file.type === "application/msword" || 
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      setFile(file);
      // In a real app, we would parse the file and extract text here
      // For now, we'll just simulate this with a setTimeout
      toast({
        title: "Resume Uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
      
      // Simulate text extraction
      setTimeout(() => {
        const extractedText = "Extracted resume text would appear here in a real application.";
        setText(extractedText);
      }, 1000);
    } else {
      toast({
        title: "Invalid File Format",
        description: "Please upload a PDF, DOC, DOCX, or TXT file.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (text) {
      onUpload(text);
    } else if (file) {
      // In a real app, we would ensure text extraction is complete
      toast({
        title: "Processing Resume",
        description: "Please wait while we process your resume.",
      });
      setTimeout(() => {
        const simulatedText = "This is simulated text extracted from your resume file.";
        onUpload(simulatedText);
      }, 1500);
    } else {
      toast({
        title: "No Resume Provided",
        description: "Please upload a resume file or paste your resume text.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="resume-section animate-in">
      <h2 className="resume-heading">Upload Your Resume</h2>
      
      <div 
        className={`mt-4 rounded-lg border-2 border-dashed p-8 text-center ${
          dragActive ? "border-resume-primary bg-resume-light/30" : "border-gray-300"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <ClipboardListIcon className="mx-auto h-12 w-12 text-muted-foreground" />
        
        <p className="mt-4 text-lg font-medium">
          {file ? file.name : "Drag and drop your resume here"}
        </p>
        
        <p className="mt-2 text-sm text-muted-foreground">
          Upload a PDF, DOC, DOCX, or TXT file
        </p>
        
        <div className="mt-4">
          <label htmlFor="file-upload" className="cursor-pointer">
            <span className="rounded bg-resume-primary px-4 py-2 text-sm text-white hover:bg-resume-secondary">
              Browse Files
            </span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              onChange={handleChange}
              accept=".pdf,.doc,.docx,.txt"
            />
          </label>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Or paste your resume text:</h3>
        <textarea
          className="w-full min-h-[200px] rounded-md border border-input p-3 text-sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste the content of your resume here..."
        ></textarea>
      </div>
      
      <div className="mt-6 flex justify-end">
        <Button 
          type="submit" 
          className="bg-resume-primary hover:bg-resume-secondary"
          disabled={!file && !text}
        >
          Analyze Resume
        </Button>
      </div>
    </form>
  );
};

export default ResumeUploader;
