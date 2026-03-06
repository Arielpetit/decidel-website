import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

export default function PrivacyByDesign({ elevated = false }: { elevated?: boolean }) {
  return (
    <section className={elevated ? "bg-decidel-dark py-20 lg:py-28" : "bg-decidel-black py-20 lg:py-28"}>
      <Container>
        <SectionHeading
          title="Privacy by design"
          subtitle="No accounts. No tracking. Your data stays with you — and AI stays under your control."
        />
        <AnimateOnScroll direction="up">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-decidel-border bg-decidel-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-decidel-border bg-decidel-black">
                  <svg
                    className="h-5 w-5 text-decidel-orange"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128A9.38 9.38 0 0 1 12 19.5a9.5 9.5 0 1 1 9.5-9.5 9.38 9.38 0 0 1-.372 2.999"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 18l2 2 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">No account required</h3>
                  <p className="mt-1 text-sm leading-relaxed text-decidel-gray-400">
                    Start reading immediately — no sign-up, no profiles, no personal data to manage.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-decidel-border bg-decidel-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-decidel-border bg-decidel-black">
                  <svg
                    className="h-5 w-5 text-decidel-orange"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c3.866 0 7 3.134 7 7 0 3.866-3.134 7-7 7s-7-3.134-7-7c0-3.866 3.134-7 7-7Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7v5l3 2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">History stays on-device</h3>
                  <p className="mt-1 text-sm leading-relaxed text-decidel-gray-400">
                    Reading history, bookmarks, and settings are stored locally on your iPhone.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-decidel-border bg-decidel-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-decidel-border bg-decidel-black">
                  <svg
                    className="h-5 w-5 text-decidel-orange"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 0 0-8 0v4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 11h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">BYOK means Decidel never sees your key</h3>
                  <p className="mt-1 text-sm leading-relaxed text-decidel-gray-400">
                    Use your own API key for Groq/OpenAI/Anthropic — Decidel doesn&apos;t store it on servers.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-decidel-border bg-decidel-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-decidel-border bg-decidel-black">
                  <svg
                    className="h-5 w-5 text-decidel-orange"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6V4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 6V4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 6V4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 10h8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 20h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Optional local AI</h3>
                  <p className="mt-1 text-sm leading-relaxed text-decidel-gray-400">
                    Prefer maximum privacy? Use Ollama (local models) or on-device AI for summaries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
