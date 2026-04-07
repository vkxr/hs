import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Facebook,
  House,
  Instagram,
  Linkedin,
  MapPinned,
  Menu,
  ShieldCheck,
  Twitter,
  Users,
  Wrench,
  Youtube
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectData } from "@/types/project";

interface WebsiteRendererProps {
  project: ProjectData;
}

const stockImages = {
  hero: "/site/hero.jpg",
  servicePrimary: "/site/service-primary.jpg",
  serviceLaptop: "/site/service-laptop.jpg",
  serviceSecurity: "/site/service-security.jpg",
  about: "/site/about.jpg",
  advantageFast: "/site/advantage-fast.jpg",
  advantageRates: "/site/advantage-rates.jpg",
  advantageTrusted: "/site/advantage-trusted.jpg",
  advantageCoverage: "/site/advantage-coverage.jpg",
  cta: "/site/cta.jpg"
} as const;

const audienceCards = [
  {
    icon: Wrench,
    title: "Students and young professionals",
    description: "Budget-friendly repairs for your study setup."
  },
  {
    icon: BriefcaseBusiness,
    title: "Small businesses and offices",
    description: "Reliable IT support to keep operations running."
  },
  {
    icon: House,
    title: "Home users and families",
    description: "Trusted service for your personal devices."
  },
  {
    icon: Building2,
    title: "Corporate and enterprise clients",
    description: "Dedicated support and bulk service options."
  }
] as const;

const processSteps = [
  {
    title: "Step one",
    heading: "Call or book online",
    description: "Reach out through phone, WhatsApp, or our website to schedule your repair.",
    action: "Get started"
  },
  {
    title: "Step two",
    heading: "Quick diagnosis",
    description: "Our technicians assess your device and identify the exact issue.",
    action: "Continue"
  },
  {
    title: "Step three",
    heading: "Transparent estimate",
    description: "You receive a clear quote with no hidden costs before we proceed.",
    action: "Approve"
  },
  {
    title: "Step four",
    heading: "Professional repair",
    description: "We fix your device using genuine parts and proven techniques.",
    action: "Complete"
  }
] as const;

const serviceAreas = [
  {
    icon: MapPinned,
    title: "Central Vadodara",
    description: "Fast pickup and delivery in the city center.",
    featured: true
  },
  {
    icon: Building2,
    title: "Alkapuri and Gotri",
    description: "Same-day service available for homes and offices."
  },
  {
    icon: BadgeCheck,
    title: "Manjalpur and Akota",
    description: "Quick turnaround on all major repairs and upgrades."
  }
] as const;

const socialLinks = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" }
] as const;

export default function WebsiteRenderer({ project }: Readonly<WebsiteRendererProps>) {
  const companyName = project.shop_name?.trim() || "HS Techware";
  const brandSubLabel = "Limited";
  const city = getCity(project.address);
  const timingLabel = project.timing?.trim() || "Mon - Sat, 9:00 AM - 8:00 PM";
  const phoneHref = createPhoneHref(project.contact);
  const whatsappHref = createWhatsAppHref(project.contact);
  const services = buildServices(project.services);
  const trustStats = [
    {
      label: "Computers repaired",
      value: "1000+",
      note: "Devices fixed with precision and care"
    },
    {
      label: "Years of experience",
      value: "7+",
      note: "Building trust through consistent, quality service"
    },
    {
      label: "Happy customers",
      value: "500+",
      note: "Families and businesses who depend on us"
    }
  ];

  const advantages = [
    {
      label: "Fast",
      title: "Same-day service for most repairs",
      description: "Quick diagnosis, quick turnaround, and clear updates throughout the job.",
      image: stockImages.advantageFast
    },
    {
      label: "Affordable",
      title: "Competitive rates without compromising quality",
      description: "Fair pricing with reliable parts and no unnecessary upselling.",
      image: stockImages.advantageRates
    },
    {
      label: "Trusted",
      title: `Thousands of satisfied customers across ${city}`,
      description: "Local homes, students, and businesses keep coming back because the work holds up.",
      image: stockImages.advantageTrusted
    },
    {
      label: "Accessible",
      title: `Wide coverage across all major ${city} areas`,
      description: "Pickup, drop, and support across neighborhoods where customers need us most.",
      image: stockImages.advantageCoverage
    }
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#09060f]">
      <main className="text-white">
        <section className="bg-[#dce6ff] text-[#101322]">
          <header className="w-full border-b border-black/10 bg-white">
            <div className="flex items-center justify-between gap-4 px-5 py-2.5 sm:px-6 lg:px-10 xl:px-14">
              <BrandMark companyName={companyName} subLabel={brandSubLabel} tone="light" />

              <nav className="hidden items-center gap-2 text-sm font-medium text-[#3c465f] sm:flex">
                <a href="#about" className="rounded-full px-4 py-2 transition hover:bg-[#edf2ff]">
                  About
                </a>
                <a href="#services" className="rounded-full px-4 py-2 transition hover:bg-[#edf2ff]">
                  Services
                </a>
                <a href="#areas" className="rounded-full px-4 py-2 transition hover:bg-[#edf2ff]">
                  Areas
                </a>
                <a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-[#edf2ff]">
                  Contact
                </a>
              </nav>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#20263a] sm:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </header>

          <div
            id="top"
            className="relative isolate min-h-[70vh] overflow-hidden border-y border-[#7168ff]/60 bg-[#151c28] text-white sm:min-h-[76vh] lg:min-h-[88vh]"
            style={{
              backgroundImage: `linear-gradient(180deg,rgba(12,19,33,0.62),rgba(10,14,23,0.5)),url("${stockImages.hero}")`,
              backgroundPosition: "center 32%",
              backgroundSize: "cover"
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,20,0.44),rgba(8,12,20,0.22)_46%,rgba(8,12,20,0.48))]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,28,0.18),rgba(10,16,28,0.08)_38%,rgba(10,16,28,0.34))]" />

            <div className="relative flex min-h-[70vh] items-center justify-center px-5 py-16 sm:min-h-[76vh] sm:px-8 sm:py-20 lg:min-h-[88vh] lg:px-12 lg:py-24 xl:px-16">
              <div className="mx-auto max-w-5xl text-center">
                <h1 className="display-heading display-heading-tight text-5xl text-white sm:text-6xl lg:text-[5.6rem]">
                  Fast and trusted computer repair in {city}
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-7 text-white/[0.88] sm:text-lg sm:leading-8">
                  Same-day service, transparent pricing, and certified technicians. We fix your devices right the first
                  time.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#141927] shadow-[0_20px_40px_-26px_rgba(15,23,42,0.8)] transition hover:-translate-y-0.5"
                  >
                    Call now
                  </a>
                  <a
                    href={whatsappHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.12] px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/[0.16]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-5 pb-16 pt-20 sm:px-6 lg:px-10 xl:px-14 sm:pb-20">
            <div>
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#52607d]">Proven track record</p>
                  <h2 className="mt-4 max-w-[9ch] font-[family-name:var(--font-manrope)] text-5xl font-extrabold tracking-[-0.05em] text-[#101322] sm:text-6xl">
                    Why {city} trusts us
                  </h2>
                </div>

                <div className="max-w-xl justify-self-end">
                  <p className="text-lg leading-8 text-[#34415d]">
                    Seven years of reliable service, thousands of satisfied customers, and a commitment to quality that
                    never wavers.
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm font-semibold text-[#3a4661]">
                    <a
                      href="#about"
                      className="inline-flex items-center rounded-full border border-[#c4d2f4] bg-[#edf3ff] px-4 py-2 transition hover:-translate-y-0.5"
                    >
                      Learn more
                    </a>
                    <a href="#services" className="inline-flex items-center gap-1 transition hover:text-[#111726]">
                      Arrow
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {trustStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[28px] border border-[#c7d5f7] bg-[#dfe9ff] px-6 py-7 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.4)]"
                  >
                    <p className="text-xl font-semibold text-[#232a3a]">{stat.label}</p>
                    <div className="mt-10 flex items-end justify-between gap-4 border-t border-[#cfdcf9] pt-6">
                      <span className="font-[family-name:var(--font-manrope)] text-5xl font-extrabold tracking-[-0.05em] text-[#0f1422]">
                        {stat.value}
                      </span>
                      <span className="max-w-[14ch] text-right text-sm leading-6 text-[#53617d]">{stat.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="relative isolate overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(88,78,74,0.76),rgba(59,51,48,0.84)),repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0_12px,rgba(0,0,0,0.06)_12px_26px)"
          }}
        >
          <div className="w-full px-5 py-20 sm:px-6 lg:px-10 xl:px-14 sm:py-24">
            <h2 className="display-heading max-w-[7ch] text-5xl text-white sm:text-6xl">
              About {companyName}
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium text-white/80 sm:text-lg">
              {city}&apos;s leading computer repair and IT support specialists since 2018.
            </p>
          </div>
        </section>
        <section className="bg-[#09060f]">
          <div className="grid w-full gap-10 px-5 py-20 sm:px-6 lg:px-10 xl:px-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/[0.48]">Who we are</p>
              <h3 className="display-heading mt-4 max-w-[10ch] text-5xl text-white sm:text-6xl">
                Built on integrity and expertise
              </h3>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.72] sm:text-lg">
                We believe in doing things right. No hidden charges, no shortcuts, just honest work and genuine parts
                that keep your devices running longer.
              </p>

              <div className="mt-8 space-y-4">
                <FeatureLine icon={ShieldCheck} label="Transparent pricing with no surprises" />
                <FeatureLine icon={BadgeCheck} label="Genuine parts and quality components" />
                <FeatureLine icon={Clock3} label="Same-day repair service available" />
              </div>

              <div className="mt-8 flex items-center gap-4 text-sm font-semibold">
                <a
                  href="#services"
                  className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Explore more
                </a>
                <a href="#services" className="inline-flex items-center gap-1 text-white/[0.82] transition hover:text-white">
                  Arrow
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div
              className="min-h-[340px] rounded-[30px] border border-white/10 bg-[#11101a] shadow-[0_30px_110px_-70px_rgba(2,6,23,1)]"
              style={{
                backgroundImage: `linear-gradient(180deg,rgba(255,255,255,0.02),rgba(5,5,10,0.1)),url("${stockImages.about}")`,
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            />
          </div>
        </section>

        <section id="services" className="bg-[#66666e]">
          <div className="w-full px-5 py-20 sm:px-6 lg:px-10 xl:px-14">
            <SectionIntro
              eyebrow="What we do"
              title="Complete repair solutions"
              description="From laptops to networks, we handle it all."
              tone="muted"
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <ImageCard
                className="min-h-[320px] md:col-span-2"
                eyebrow="Service"
                title={services[0]}
                description={getServiceDescription(services[0], 0)}
                image={stockImages.servicePrimary}
                overlay="linear-gradient(135deg,rgba(100,85,26,0.58),rgba(13,18,27,0.2)_42%,rgba(7,9,14,0.82))"
              />
              <ImageCard
                className="min-h-[240px]"
                title={services[1]}
                description={getServiceDescription(services[1], 1)}
                image={stockImages.serviceLaptop}
                overlay="linear-gradient(135deg,rgba(88,90,92,0.6),rgba(13,16,22,0.74))"
              />
              <ImageCard
                className="min-h-[240px]"
                title={services[2]}
                description={getServiceDescription(services[2], 2)}
                image={stockImages.serviceSecurity}
                overlay="linear-gradient(135deg,rgba(116,72,34,0.66),rgba(14,15,22,0.78))"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#09060f]">
          <div className="w-full px-5 py-20 sm:px-6 lg:px-10 xl:px-14">
            <SectionIntro
              eyebrow="Advantages"
              title={`Why choose ${companyName}`}
              description="Speed, reliability, and fair pricing in every repair."
              tone="dark"
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {advantages.map((card) => (
                <div
                  key={card.title}
                  className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0e0b15] transition duration-300 hover:-translate-y-1"
                >
                  <div
                    className="h-48 bg-[#1a1624] transition duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(180deg,rgba(15,12,22,0.05),rgba(15,12,22,0.2)),url("${card.image}")`,
                      backgroundPosition: "center",
                      backgroundSize: "cover"
                    }}
                  />
                  <div className="space-y-4 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/[0.48]">{card.label}</p>
                    <h3 className="display-heading display-heading-relaxed text-4xl text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-7 text-white/[0.68]">{card.description}</p>
                    <InlineArrow tone="dark" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#09060f]">
          <div className="w-full px-5 pb-20 pt-4 sm:px-6 lg:px-10 xl:px-14 sm:pb-24">
            <SectionIntro
              eyebrow="Our process"
              title="From call to completion"
              description="Five simple steps to get your device back in working order."
              tone="dark"
            />

            <div className="mt-6 flex justify-center">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Learn more
              </a>
            </div>

            <div className="relative mt-12 space-y-10">
              <div className="absolute bottom-3 left-1/2 top-3 w-px -translate-x-1/2 bg-white/10" />
              {processSteps.map((step, index) => {
                const alignRight = index % 2 === 0;

                return (
                  <div key={step.title} className="grid grid-cols-[1fr_26px_1fr] items-center gap-4 sm:gap-6">
                    <div className={cn(alignRight ? "invisible" : "block")}>
                      {!alignRight ? <TimelineCard step={step} /> : null}
                    </div>
                    <div className="relative flex justify-center">
                      <span className="h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.08)]" />
                    </div>
                    <div className={cn(alignRight ? "block" : "invisible")}>
                      {alignRight ? <TimelineCard step={step} /> : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="areas" className="bg-[#dce6ff] text-[#101322]">
          <div className="w-full px-5 py-20 sm:px-6 lg:px-10 xl:px-14">
            <SectionIntro
              eyebrow="Coverage"
              title={`Service areas across ${city}`}
              description="We serve all major neighborhoods and localities."
              tone="light"
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {serviceAreas.map((area) => (
                <div
                  key={area.title}
                  className={cn(
                    "rounded-[28px] border border-[#c7d5f7] bg-[#dfe9ff] p-6 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.4)]",
                    "featured" in area && area.featured ? "md:col-span-2" : ""
                  )}
                >
                  <area.icon className="h-7 w-7 text-[#20293c]" />
                  <h3 className="mt-6 font-[family-name:var(--font-manrope)] text-4xl font-extrabold tracking-[-0.04em] text-[#121728]">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#52607d]">{area.description}</p>
                  <div className="mt-6 flex items-center gap-4 text-sm font-semibold text-[#3a4661]">
                    <a
                      href="#contact"
                      className="inline-flex items-center rounded-full border border-[#c4d2f4] bg-[#edf3ff] px-4 py-2 transition hover:-translate-y-0.5"
                    >
                      Explore
                    </a>
                    <a href="#contact" className="inline-flex items-center gap-1 transition hover:text-[#111726]">
                      Arrow
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#09060f]">
          <div className="w-full px-5 py-20 sm:px-6 lg:px-10 xl:px-14">
            <SectionIntro
              eyebrow="Audience"
              title="Who we serve"
              description="From students to enterprises, we support everyone."
              tone="dark"
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {audienceCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[28px] border border-white/10 bg-[#0d0914] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#120d1b]"
                >
                  <card.icon className="h-7 w-7 text-white" />
                  <h3 className="display-heading display-heading-relaxed mt-6 text-4xl text-white">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/[0.68]">{card.description}</p>
                  <div className="mt-6">
                    <InlineArrow tone="dark" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#09060f]">
          <div className="w-full px-0 pb-0 pt-3">
            <div
              className="relative isolate overflow-hidden px-5 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
              style={{
                backgroundImage: `linear-gradient(180deg,rgba(15,12,20,0.4),rgba(15,12,20,0.72)),url("${stockImages.cta}")`,
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            >
              <div className="mx-auto max-w-5xl text-center">
                <h2 className="display-heading text-5xl text-white sm:text-6xl">
                  Need urgent computer repair?
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/[0.84] sm:text-lg">
                  Get in touch today and let us handle your device. Fast, reliable, and fair.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#141927] shadow-[0_20px_40px_-26px_rgba(15,23,42,0.8)] transition hover:-translate-y-0.5"
                  >
                    Call now
                  </a>
                  <a
                    href={whatsappHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.12] px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/[0.16]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#09060f]">
          <div className="w-full px-5 pb-14 pt-8 sm:px-6 lg:px-10 xl:px-14">
            <div className="rounded-[34px] border border-white/[0.08] bg-[#0b0812] px-7 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <BrandMark companyName={companyName} subLabel={brandSubLabel} tone="dark" />

              <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-14">
                <FooterColumn title="Our services" items={["Computer repair", "Laptop repair", "Virus removal", "Windows installation", "Gaming PC setup"]} />
                <FooterColumn title="Service areas" items={["Vadodara city", "Alkapuri", "Gotri", "Manjalpur", "Akota"]} />
                <FooterColumn title="Contact us" items={["Call now", "WhatsApp us", "Email support", "Visit us", "Working hours"]} />
              </div>

              <div className="mt-10 border-t border-white/[0.08] pt-8 lg:pt-10">
                <h3 className="text-base font-semibold text-white">Newsletter</h3>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/[0.68]">
                  Get updates on repair tips, service announcements, and exclusive offers.
                </p>
                <form className="mt-5 max-w-4xl">
                  <div className="flex flex-col overflow-hidden rounded-[20px] border border-white/[0.1] bg-white/[0.03] sm:flex-row">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="h-14 flex-1 bg-transparent px-5 text-sm text-white placeholder:text-white/[0.32]"
                    />
                    <button
                      type="submit"
                      className="inline-flex h-14 min-w-[170px] items-center justify-center border-t border-white/[0.1] bg-white/[0.9] px-6 text-sm font-semibold text-[#121827] transition hover:bg-white sm:border-l sm:border-t-0"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="mt-4 max-w-4xl text-xs leading-6 text-white/[0.38]">
                  By subscribing you agree with our Privacy Policy and provide consent to receive updates from HS
                  Techware Limited.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-5">
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href="#top"
                      aria-label={item.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-transparent text-white/[0.8] transition hover:-translate-y-0.5 hover:border-white/[0.18] hover:text-white"
                    >
                      <item.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-white/[0.56]">&copy; 2025 HS Techware Limited. All rights reserved.</p>
              </div>

              <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-white/[0.56] [&_span]:hidden lg:justify-end">
                <span>© 2025 HS Techware Limited. All rights reserved.</span>
                <a href="#top" className="transition hover:text-white">
                  Privacy policy
                </a>
                <a href="#top" className="transition hover:text-white">
                  Terms of service
                </a>
                <a href="#top" className="transition hover:text-white">
                  Cookies settings
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  tone: "light" | "dark" | "muted";
}

interface BrandMarkProps {
  companyName: string;
  subLabel: string;
  tone: "light" | "dark";
}

function BrandMark({ companyName, subLabel, tone }: Readonly<BrandMarkProps>) {
  const textColor = tone === "light" ? "text-[#141927]" : "text-white";
  const subTextColor = tone === "light" ? "text-[#8d97ad]" : "text-white/[0.58]";
  const badgeShell =
    tone === "light"
      ? "border border-[#d7dde9] bg-white shadow-[0_8px_24px_-18px_rgba(15,23,42,0.45)]"
      : "border border-white/[0.1] bg-white";

  return (
    <a href="#top" className="inline-flex items-center gap-3">
      <span className={cn("inline-flex h-[54px] w-[54px] items-center justify-center overflow-hidden rounded-full", badgeShell)}>
        <Image
          src="/brand/computer-services-badge.webp"
          alt={`${companyName} badge`}
          width={44}
          height={44}
          className="h-11 w-11 object-contain"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-[family-name:var(--font-manrope)] text-[1.35rem] font-extrabold tracking-[-0.04em] sm:text-[1.45rem]", textColor)}>
          {companyName}
        </span>
        <span className={cn("mt-1 text-[0.9rem] font-medium sm:text-[0.95rem]", subTextColor)}>{subLabel}</span>
      </span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, description, tone }: Readonly<SectionIntroProps>) {
  const isLight = tone === "light";
  const textColor = isLight ? "text-[#101322]" : "text-white";
  const descriptionColor = isLight ? "text-[#52607d]" : "text-white/[0.68]";
  const eyebrowColor = isLight ? "text-[#52607d]" : "text-white/[0.48]";

  return (
    <div className="mx-auto max-w-5xl text-center">
      <p className={cn("text-[11px] font-semibold uppercase tracking-[0.18em]", eyebrowColor)}>{eyebrow}</p>
      <h2 className={cn("display-heading mt-4 text-5xl sm:text-6xl", textColor)}>
        {title}
      </h2>
      <p className={cn("mx-auto mt-5 max-w-3xl text-base leading-8 sm:text-lg", descriptionColor)}>{description}</p>
    </div>
  );
}

interface ImageCardProps {
  className?: string;
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  overlay: string;
}

function ImageCard({ className, eyebrow, title, description, image, overlay }: Readonly<ImageCardProps>) {
  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden rounded-[28px] border border-white/[0.12] bg-[#11101a] p-6 shadow-[0_35px_90px_-62px_rgba(2,6,23,1)]",
        className
      )}
      style={{
        backgroundImage: `${overlay},url("${image}")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(5,5,10,0.2))] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(5,5,10,0.18))]" />
      <div className="relative flex h-full flex-col justify-between">
        <div>
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/[0.68]">{eyebrow}</p> : null}
          <h3 className="display-heading display-heading-relaxed mt-3 max-w-[12ch] text-4xl text-white">
            {title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/[0.78]">{description}</p>
        </div>
        <div className="mt-8">
          <InlineArrow tone="dark" />
        </div>
      </div>
    </div>
  );
}

interface TimelineCardProps {
  step: (typeof processSteps)[number];
}

function TimelineCard({ step }: Readonly<TimelineCardProps>) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-[#0d0914] p-5 shadow-[0_30px_90px_-60px_rgba(2,6,23,1)]">
      <p className="display-heading display-heading-relaxed text-4xl text-white">{step.title}</p>
      <h3 className="display-heading display-heading-relaxed mt-4 max-w-[9ch] text-3xl text-white">
        {step.heading}
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/[0.68]">{step.description}</p>
      <div className="mt-6 flex items-center gap-4 text-sm font-semibold text-white/[0.82]">
        <span className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2">{step.action}</span>
        <span className="inline-flex items-center gap-1">
          Arrow
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}

interface FeatureLineProps {
  icon: LucideIcon;
  label: string;
}

function FeatureLine({ icon: Icon, label }: Readonly<FeatureLineProps>) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium text-white/[0.76]">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
        <Icon className="h-4 w-4" />
      </div>
      <span>{label}</span>
    </div>
  );
}

interface FooterColumnProps {
  title: string;
  items: string[];
}

function FooterColumn({ title, items }: Readonly<FooterColumnProps>) {
  return (
    <div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-white/[0.74]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function InlineArrow({ tone }: Readonly<{ tone: "dark" | "light" }>) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 text-sm font-semibold",
        tone === "light" ? "text-[#3a4661]" : "text-white/[0.82]"
      )}
    >
      <span
        className={cn(
          "inline-flex items-center rounded-full px-4 py-2",
          tone === "light" ? "border border-[#c4d2f4] bg-[#edf3ff]" : "border border-white/[0.12] bg-white/[0.06]"
        )}
      >
        Explore
      </span>
      <span className="inline-flex items-center gap-1">
        Arrow
        <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  );
}

function buildServices(services: string[] | null | undefined) {
  const normalized = services?.map((service) => service.trim()).filter(Boolean) ?? [];
  const fallbacks = [
    "Computer maintenance and support",
    "Laptop repair and upgrades",
    "Virus removal and security"
  ];

  return Array.from({ length: 3 }, (_, index) => normalized[index] || fallbacks[index]);
}

function getServiceDescription(title: string, index: number) {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("virus") || lowerTitle.includes("security")) {
    return "Malware elimination and system protection.";
  }

  if (lowerTitle.includes("laptop") || lowerTitle.includes("upgrade")) {
    return "Screen replacement, battery service, and speed improvements.";
  }

  if (lowerTitle.includes("network")) {
    return "Router setup, office connectivity fixes, and stable network troubleshooting.";
  }

  if (index === 0) {
    return "Desktop diagnostics, hardware fixes, and performance optimization.";
  }

  return "Reliable repair support tailored to the way you use your devices every day.";
}

function getCity(address: string | null | undefined) {
  const segments = address
    ?.split(",")
    .map((segment) => segment.trim())
    .filter(Boolean);

  return segments?.at(-1) || "Vadodara";
}

function createPhoneHref(contact: string | null | undefined) {
  const digits = (contact || "").replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : "#contact";
}

function createWhatsAppHref(contact: string | null | undefined) {
  const digits = (contact || "").replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "#contact";
}
