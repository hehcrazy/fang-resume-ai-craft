
import { CheckIcon } from "lucide-react";

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-resume-light/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-resume-primary px-3 py-1 text-sm text-white">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-resume-dark">
              Supercharge Your Job Search
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered tools help you build FAANG-ready resumes and improve your existing ones.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-resume-primary/10">
              <CheckIcon className="h-5 w-5 text-resume-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-resume-dark">AI Resume Builder</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Generate professionally formatted resumes optimized for FAANG companies.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-resume-primary/10">
              <CheckIcon className="h-5 w-5 text-resume-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-resume-dark">Resume Score</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get your resume scored against industry standards and ATS requirements.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-resume-primary/10">
              <CheckIcon className="h-5 w-5 text-resume-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-resume-dark">Expert Feedback</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Receive personalized tips to improve your resume's impact and effectiveness.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-resume-primary/10">
              <CheckIcon className="h-5 w-5 text-resume-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-resume-dark">ATS Optimization</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Ensure your resume passes through Applicant Tracking Systems with flying colors.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-resume-primary/10">
              <CheckIcon className="h-5 w-5 text-resume-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-resume-dark">Multiple Formats</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Download your resume in PDF, Word, or plain text formats for any application.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-resume-primary/10">
              <CheckIcon className="h-5 w-5 text-resume-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-resume-dark">Keyword Analysis</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Identify missing keywords relevant to your target positions and industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
