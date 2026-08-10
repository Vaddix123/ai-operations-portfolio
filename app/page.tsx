const projects = [
  {
    id: "vincent",
    number: "01",
    name: "Vincent / Vinny",
    label: "Live local alpha",
    kicker: "Local-first personal AI runtime",
    summary:
      "A private AI system built around explicit capabilities, local model routing, human approvals, and honest unavailable states.",
    role:
      "Product owner and technical director: requirements, risk boundaries, acceptance criteria, release gates, and final promotion decisions.",
    built: [
      "Local fast, reasoning/tool, and vision model routes",
      "Capability broker, memory, research, automation, and desktop/mobile surfaces",
      "Secure Claude/Codex escalation with secret redaction",
    ],
    controls: [
      "Task-scoped permissions and deterministic risk floors",
      "Deny-by-default egress and inert network scanning",
      "Signed events, encrypted audit history, approvals, and global halt",
    ],
    evidence: "Local evidence snapshot: 239 passing tests across Python, Android, and desktop host",
    boundary:
      "The installed alpha is live. Version 0.4 passed documented local verification but is not installed; universal device control and vehicle integration remain gated.",
    image: "/vincent-command-core.png",
    imageAlt: "Vincent command-core visual in blue and amber",
  },
  {
    id: "director",
    number: "02",
    name: "Vongola Director",
    label: "Pre-launch system",
    kicker: "Owner-controlled AI operations",
    summary:
      "An operating console that connects business records, workflow queues, scheduled agent activity, approvals, evidence, and release controls.",
    role:
      "Founder and product owner: operating model, workflow design, agent boundaries, acceptance review, and go/no-go decisions.",
    built: [
      "Intake, pipeline, proposals, projects, invoices, support, files, and backups",
      "Scheduled agent workflows, owner decision records, and escalation paths",
      "Machine-readable rules for delivery, evidence, retention, and release",
    ],
    controls: [
      "Human approval for consequential external actions",
      "Scoped tools, credential boundaries, and local-only execution",
      "Financial-action and unsupervised outbound restrictions",
    ],
    evidence: "Local evidence snapshot: 223 passing tests; 22 screens and 715 controls exercised",
    boundary:
      "Development-stage and pre-revenue. One acceptance issue remains open; no clients, adoption, ROI, or production-scale claims.",
    image: "/vongola-director-openclaw.png",
    imageAlt: "Vongola Director OpenClaw controls screen using synthetic data",
  },
  {
    id: "vault",
    number: "03",
    name: "Vaddix Vault",
    label: "Installable development build",
    kicker: "Confidence-gated on-device recognition",
    summary:
      "A native Android collection workflow that uses on-device evidence while refusing to silently accept uncertain identities.",
    role:
      "Product owner and technical director: product boundary, recognition policy, privacy rules, architecture, review behavior, and test expectations.",
    built: [
      "On-device OCR and barcode recognition with catalog matching",
      "Offline voice routing, binder and single-item flows, persistence, and pricing",
      "Review queue, manual teaching path, and compact local fingerprints",
    ],
    controls: [
      "Live and uploaded scan frames are analyzed, then discarded",
      "Automatic registration requires supporting identity evidence",
      "Uncertain results and low-confidence destructive voice commands are rejected",
    ],
    evidence: "Local evidence snapshot: 143 passing unit tests plus inspected debug and release APK artifacts",
    boundary:
      "The newest working copy includes uncommitted changes. No connected-device validation or commercial launch is claimed.",
    image: "/vaddix-vault.png",
    imageAlt: "Vaddix Vault Android application collection screen",
  },
];

const operatingMethod = [
  ["01", "Judge the risk", "Start with the failure mode, the decision owner, and what must never happen silently."],
  ["02", "Translate the work", "Turn operating needs into explicit requirements, states, permissions, and acceptance criteria."],
  ["03", "Build the boundary", "Add human approvals, least-capability access, audit evidence, and clear unavailable states."],
  ["04", "Test the decision", "Use automated suites, adversarial review, and release gates to decide what is ready."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Branden Opauski home">
          <span className="wordmark-mark">BO</span>
          <span>Branden Opauski</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#method">Method</a>
          <a href="#experience">Experience</a>
          <a className="nav-contact" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Merchant risk × AI-enabled operations</p>
          <h1>
            Financial judgment.
            <span>AI systems with boundaries.</span>
          </h1>
          <p className="hero-lede">
            Senior merchant underwriter and operations professional who independently directs AI-enabled products, workflows, controls, and automation systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Review the evidence</a>
            <a className="button button-secondary" href="mailto:Vaddix123@gmail.com">Start a conversation</a>
          </div>
        </div>
        <aside className="hero-proof" aria-label="Professional proof points">
          <p className="proof-label">Current positioning</p>
          <p className="proof-title">Senior Underwriter</p>
          <p className="proof-detail">Promoted to Senior within 17 months</p>
          <div className="proof-rule" />
          <dl>
            <div><dt>Focus</dt><dd>Risk, operations, AI workflows</dd></div>
            <div><dt>Build model</dt><dd>Owner-directed, AI-assisted</dd></div>
            <div><dt>Control model</dt><dd>Human approval by design</dd></div>
            <div><dt>Target</dt><dd>Remote senior roles</dd></div>
          </dl>
        </aside>
      </section>

      <section className="evidence-strip" aria-label="Verified project evidence">
        <div><strong>239</strong><span>Vincent tests</span></div>
        <div><strong>223</strong><span>Director tests</span></div>
        <div><strong>143</strong><span>Vault tests</span></div>
        <div><strong>3</strong><span>Defensible case studies</span></div>
      </section>

      <section className="section-intro" id="work">
        <p className="eyebrow">Selected work</p>
        <h2>Systems that make consequential decisions reviewable.</h2>
        <p>
          These are personal and development-stage products. The evidence is implementation, testing, working artifacts, and documented decisions - not revenue, customer adoption, or enterprise deployment.
        </p>
      </section>

      <section className="projects" aria-label="Selected project case studies">
        {projects.map((project, index) => (
          <article className={`project ${index % 2 ? "project-reverse" : ""}`} id={project.id} key={project.id}>
            <div className="project-visual">
              {/* Plain img keeps the GitHub Pages export portable and path-rewritable. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.imageAlt} loading={index === 0 ? "eager" : "lazy"} />
              <span className="visual-caption">Sanitized project evidence</span>
            </div>
            <div className="project-copy">
              <div className="project-meta"><span>{project.number}</span><span>{project.label}</span></div>
              <p className="project-kicker">{project.kicker}</p>
              <h3>{project.name}</h3>
              <p className="project-summary">{project.summary}</p>
              <div className="case-block">
                <h4>My role</h4>
                <p>{project.role}</p>
              </div>
              <div className="case-columns">
                <div>
                  <h4>Directed and verified</h4>
                  <ul>{project.built.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>
                  <h4>Controlled</h4>
                  <ul>{project.controls.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
              <div className="evidence-card">
                <span>Evidence</span>
                <strong>{project.evidence}</strong>
              </div>
              <p className="boundary"><strong>Current boundary:</strong> {project.boundary}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="method" id="method">
        <div className="method-heading">
          <p className="eyebrow">Operating method</p>
          <h2>Domain judgment first. Technology in service of the decision.</h2>
        </div>
        <ol>
          {operatingMethod.map(([number, title, detail]) => (
            <li key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{detail}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="experience" id="experience">
        <div>
          <p className="eyebrow">Professional foundation</p>
          <h2>Underwriting judgment backed by years of operating responsibility.</h2>
        </div>
        <div className="experience-list">
          <article>
            <div><span>2024 - Present</span><span>Current</span></div>
            <h3>Senior Underwriter, Cobalt Funding Solutions</h3>
            <p>Merchant cash advance underwriting across bank statements, financial statements, cash flow, credit, industry risk, business performance, funding eligibility, and deal structure.</p>
          </article>
          <article>
            <div><span>2026 - Present</span><span>Independent / part-time</span></div>
            <h3>Founder — AI Product Development, Vongola Ventures LLC</h3>
            <p>Development-stage AI product direction, workflow design, operating controls, testing, security review, and release governance.</p>
          </article>
          <article>
            <div><span>2018 - 2024</span><span>Operations</span></div>
            <h3>Advanced Vapor · J2Games · T-Mobile · Pawn Plus</h3>
            <p>Staff coaching, scheduling, inventory analysis, compliance, loss prevention, technical troubleshooting, sales operations, and escalated customer decisions.</p>
          </article>
        </div>
      </section>

      <section className="disclosure">
        <p className="eyebrow">Ownership and evidence</p>
        <h2>What these projects do - and do not - prove.</h2>
        <div>
          <p><strong>They prove:</strong> requirements translation, product direction, control design, technical review, structured testing, release decisions, and practical AI-tool fluency.</p>
          <p><strong>They do not claim:</strong> enterprise deployment, commercial adoption, client ROI, a managed engineering team, or sole authorship of AI-generated implementation.</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Remote opportunities</p>
        <h2>Merchant risk, underwriting operations, product operations, and AI-enabled workflow roles.</h2>
        <div className="contact-links">
          <a href="mailto:Vaddix123@gmail.com">Vaddix123@gmail.com</a>
          <a href="https://www.linkedin.com/in/branden-opauski">LinkedIn</a>
          <a href="https://github.com/Vaddix123/ai-operations-portfolio">Public repository</a>
        </div>
      </section>

      <footer>
        <span>Branden Opauski</span>
        <span>New Jersey · Remote</span>
        <span>Evidence snapshot reviewed August 10, 2026</span>
      </footer>
    </main>
  );
}
