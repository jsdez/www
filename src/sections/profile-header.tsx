import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, Home, Book, Linkedin } from "lucide-react";

export default function ProfileHeader() {
  return (
    <header className="relative flex w-full flex-col items-center justify-center bg-background dark:bg-secondaryBlack">
      <Card className="mx-auto w-full max-w-2xl p-8 text-center flex flex-col items-center gap-6 shadow-lg">
        <div className="flex flex-col items-center gap-4">
          <div className="w-64 h-64 rounded-full border-4 border-main overflow-hidden flex items-center justify-center bg-muted">
            <Image
              src="/jake-profile1-1.webp"
              alt="Profile picture"
              width={256}
              height={256}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl font-heading text-main mb-1">Jake Dennison</h1>
            <h2 className="text-xl font-semibold text-muted-foreground mb-2">Senior Solutions Engineer & Tech Enthusiast</h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {/* <Button variant="neobrutal" className="gap-2 px-6 py-3 text-lg font-bold" asChild>
            <a href="/">
              <Home className="w-5 h-5" /> Home
            </a>
          </Button> */}
          {/* <Button variant="neobrutal" className="gap-2 px-6 py-3 text-lg font-bold" asChild>
            <a href="/blog">
              <Book className="w-5 h-5" /> Blog
            </a>
          </Button> */}
          <Button className="gap-2 px-6 py-3 text-lg font-bold" asChild>
            <a href="https://github.com/jsdez" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" /> Github
            </a>
          </Button>
          <Button className="gap-2 px-6 py-3 text-lg font-bold" asChild>
            <a href="https://www.linkedin.com/in/jake-dennison-fcl/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" /> Linkedin
            </a>
          </Button>
        </div>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          I&apos;m a Senior Solutions Engineer at Atlassian, focused on Work Management. I enjoy building automation, web, AI, and business solutions with the aim to share what I learn. I also volunteer as a Technology & Solutions Consultant with Participate Projects, helping drive community impact through tech.
        </p>
      </Card>
    </header>
  );
}
