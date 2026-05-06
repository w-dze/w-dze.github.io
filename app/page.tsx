import { ContactFooter } from "@/components/ContactFooter";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsSection } from "@/components/SkillsSection";
import { ThreadPath } from "@/components/ThreadPath";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page-shell">
        <div className="relative mx-auto max-w-3xl">
          <ThreadPath />
          <div className="relative z-10 px-6 md:pl-[5.25rem]">
            <Hero site={site} />
            <Highlights site={site} />
            <EducationSection site={site} />
            <ExperienceSection site={site} />
            <LeadershipSection site={site} />
            <ProjectsSection site={site} />
            <SkillsSection site={site} />
            <ContactFooter site={site} />
          </div>
        </div>
      </main>
    </>
  );
}
