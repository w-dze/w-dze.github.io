import Link from "next/link";
import { AnimatedThread } from "@/components/AnimatedThread";
import { site } from "@/lib/site";

export default function Home() {
  const education = site.education[0];
  const experience = site.experience;
  const projects = site.projects;
  const skillGroups = site.skills.slice(0, 4);

  const coursework =
    education?.detail
      ?.split("Coursework:")[1]
      ?.split(",")
      .map((c) => c.trim().replace(/\.$/, ""))
      .filter(Boolean)
      .slice(0, 8) ?? [];

  return (
    <main id="main" className="page-shell">
      <div className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-10 md:pl-[18rem] md:pr-10">
        <AnimatedThread />

        <div className="space-y-22">
          <section className="flex min-h-[100svh] max-w-[760px] flex-col justify-center pt-6">
            <h1 className="font-display text-[4.8rem] leading-[0.95] tracking-tight text-black md:text-[5.7rem]">
              Zhuoer Du
            </h1>
            <p className="mt-4 text-[2rem] font-semibold text-zinc-700 md:text-[2.15rem]">
              Computer Science &amp; Statistics
            </p>
            <p className="mt-7 max-w-[740px] text-[1.28rem] leading-relaxed text-zinc-700">
              {site.oneLiner}
            </p>
            <p className="mt-6 inline-block rounded-xl border border-zinc-200 bg-zinc-100/80 px-6 py-3.5 font-mono text-[0.95rem] text-zinc-600">
              $ currently: seeking internships for summer 2027
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={site.resumeHref}
                className="rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                View Resume
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-xl border border-zinc-300 bg-white px-7 py-3.5 text-base font-semibold text-zinc-800 transition hover:bg-zinc-50"
              >
                Contact Me
              </a>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[4rem] leading-none tracking-tight text-black">
              Experience
            </h2>
            <div className="mt-8 max-w-[780px] space-y-6">
              {experience.map((job) => (
                <article
                  key={`${job.company}-${job.title}`}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/75 px-7 py-6 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-[2rem] leading-tight text-black">
                        {job.title}
                      </h3>
                      <p className="text-lg text-zinc-600">{job.company}</p>
                    </div>
                    <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-mono text-zinc-700">
                      {job.dates}
                    </span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-zinc-700 marker:text-blue-500">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {job.tags && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <li
                          key={`${job.company}-${tag}`}
                          className="rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-700"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-[4rem] leading-none tracking-tight text-black">
              Projects
            </h2>
            <div className="mt-8 max-w-[780px] space-y-6">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="min-h-[17rem] rounded-2xl border border-zinc-200 bg-zinc-50/75 p-7 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
                >
                  <p className="font-mono text-xs text-blue-600">
                    {project.badge ?? project.stack[0]}
                  </p>
                  <h3 className="mt-2 font-display text-[2rem] leading-tight text-black">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-3xl text-lg leading-relaxed text-zinc-700">
                    {project.summary}
                  </p>
                  {project.bullets && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-zinc-700 marker:text-blue-500">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tag) => (
                      <li
                        key={`${project.name}-${tag}`}
                        className="rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-700"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-4">
                      {project.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-sm font-semibold text-blue-600 underline-offset-4 hover:underline"
                        >
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-[4rem] leading-none tracking-tight text-black">
              Leadership
            </h2>
            <div className="mt-8 max-w-[780px] space-y-6">
              {site.leadership.map((role) => (
                <article
                  key={`${role.company}-${role.title}`}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/75 px-7 py-6 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
                >
                  {role.badge && (
                    <p className="font-mono text-xs text-blue-600">{role.badge}</p>
                  )}
                  <div
                    className={`flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between${role.badge ? " mt-2" : ""}`}
                  >
                    <div>
                      <h3 className="font-display text-[2rem] leading-tight text-black">
                        {role.title}
                      </h3>
                      <p className="text-lg text-zinc-600">{role.company}</p>
                    </div>
                    <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-mono text-zinc-700">
                      {role.dates}
                    </span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-zinc-700 marker:text-blue-500">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-[4rem] leading-none tracking-tight text-black">
              Skills &amp; Education
            </h2>
            <div className="mt-8 max-w-[780px] rounded-2xl border border-zinc-200 bg-zinc-50/75 p-7 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
              <h3 className="font-display text-[2.2rem] leading-tight text-black">
                {education?.school}
              </h3>
              <p className="mt-2 text-lg text-zinc-600">
                {education?.degree} • {education?.dates}
              </p>
              <p className="mt-3 text-sm font-semibold text-zinc-700">
                GPA: {education?.gpa ?? "—"}/4.0
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-700">
                Relevant Coursework:
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-700"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid max-w-[780px] gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/75 p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
                >
                  <h3 className="font-display text-[2rem] leading-tight text-black">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={`${group.title}-${item}`}
                        className="rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="pb-10 pt-6 text-center">
            <h2 className="font-display text-4xl text-zinc-700">Get in Touch</h2>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-8 font-mono text-xl text-blue-600">
              <a href={`mailto:${site.email}`} className="hover:underline">
                Email
              </a>
              {site.social.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
