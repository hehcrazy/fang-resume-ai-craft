
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-resume-dark">
                Build Your Dream Career with AI-Powered Resumes
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Create professional resumes tailored for top tech companies and get expert feedback on your existing resume.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-resume-primary hover:bg-resume-secondary">
                <Link to="/builder">Build Resume</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/checker">Check Your Resume</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center animate-scale-in">
            <img
              alt="Resume Builder Preview"
              className="mx-auto aspect-video rounded-xl object-cover object-center sm:w-full lg:order-last"
              src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop"
              width={500}
              height={310}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
