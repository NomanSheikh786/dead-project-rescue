import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleHelp,
  Code2,
  ExternalLink,
  Layers3,
  LoaderCircle,
  RefreshCw,
  ShieldCheck,
  X,
} from 'lucide-react';
import type {
  AnalysisReport,
  DependencyFinding,
  MigrationStage,
  ValidationStatus,
} from '@workspace/api-client-react';
import { useAnalyzeRepository, useHealthCheck } from '@workspace/api-client-react';

function errorMessage(error: unknown) {
  if (typeof error === 'object' && error && 'data' in error) {
    const data = (error as { data?: { error?: string } }).data;
    if (data?.error) return data.error;
  }
  if (error instanceof Error) return error.message;
  return 'The repository could not be analyzed. Check the URL and try again.';
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en', { notation: value > 999 ? 'compact' : 'standard', maximumFractionDigits: 1 }).format(value);
}

function scoreTone(score: number) {
  if (score >= 75) return 'healthy';
  if (score >= 50) return 'watch';
  return 'critical';
}

function StatusPill({ status }: { status: string }) {
  return <span className={`status-pill status-${status}`}>{status.replaceAll('_', ' ')}</span>;
}

function RiskBadge({ risk }: { risk: string }) {
  return <span className={`risk risk-${risk.toLowerCase()}`}><span className="risk-dot" />{risk}</span>;
}

function ScoreRing({ score }: { score: number }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.max(0, Math.min(100, score)) / 100) * circumference;
  return (
    <div className="score-ring" data-testid="score-health-ring">
      <svg viewBox="0 0 82 82" aria-hidden="true">
        <circle className="ring-track" cx="41" cy="41" r={radius} />
        <circle className="ring-value" cx="41" cy="41" r={radius} strokeDasharray={circumference} strokeDashoffset={offset} />
      </svg>
      <div className="score-center" data-testid="text-health-score">{Math.round(score)}</div>
    </div>
  );
}

function MetricCard({ report }: { report: AnalysisReport }) {
  const score = report.health.current;
  const tone = scoreTone(score);
  return (
    <article className="metric-card">
      <div className="metric-label">Repository health</div>
      <div className="metric-main">
        <ScoreRing score={score} />
        <div className="score-detail">
          <strong>{tone === 'healthy' ? 'Ready to move' : tone === 'watch' ? 'Needs a measured pass' : 'Recovery first'}</strong>
          <span>Projected health after the recommended migration path: <b>{Math.round(report.health.projected)}</b></span>
        </div>
      </div>
    </article>
  );
}

function Overview({ report }: { report: AnalysisReport }) {
  const { repository, counts } = report;
  return (
    <div className="report-grid">
      <MetricCard report={report} />
      <article className="metric-card">
        <div className="metric-label">Migration confidence</div>
        <div className="metric-big" data-testid="text-migration-confidence">{Math.round(report.migrationConfidence)}<small>/ 100</small></div>
        <div className="confidence-bar"><div className="confidence-fill" style={{ width: `${Math.min(100, Math.max(0, report.migrationConfidence))}%` }} /></div>
        <div className="metric-foot"><span>Signal from manifests + metadata</span><strong>{report.migrationConfidence >= 70 ? 'strong' : 'review'}</strong></div>
      </article>
      <article className="metric-card">
        <div className="metric-label">Repository footprint</div>
        <div className="repo-meta">
          <div className="meta-item"><dt>Owner</dt><dd>{repository.owner}</dd></div>
          <div className="meta-item"><dt>Branch</dt><dd>{repository.defaultBranch}</dd></div>
          <div className="meta-item"><dt>Age</dt><dd>{repository.ageYears.toFixed(1)} years</dd></div>
          <div className="meta-item"><dt>License</dt><dd>{repository.license ?? 'Not detected'}</dd></div>
        </div>
        <div className="stats-row">
          <div><div className="stat-number">{formatNumber(repository.stars)}</div><div className="stat-label">stars</div></div>
          <div><div className="stat-number">{formatNumber(repository.openIssues)}</div><div className="stat-label">open issues</div></div>
          <div><div className="stat-number">{formatNumber(counts.migrationRisks)}</div><div className="stat-label">risk flags</div></div>
        </div>
      </article>
    </div>
  );
}

function StackAndBreakdown({ report }: { report: AnalysisReport }) {
  const { stack, health } = report;
  const breakdown: Array<[string, number]> = [
    ['Dependencies', health.breakdown.dependencies],
    ['Security', health.breakdown.security],
    ['Build health', health.breakdown.buildHealth],
    ['Framework freshness', health.breakdown.frameworkFreshness],
    ['Node compatibility', health.breakdown.nodeCompatibility],
  ];
  return (
    <div className="content-grid">
      <section className="section-card" data-testid="section-stack">
        <div className="section-heading"><h3>Runtime map</h3><span>detected stack</span></div>
        <div className="stack-grid">
          <div className="stack-item"><label>Language</label><strong>{stack.language}</strong></div>
          <div className="stack-item"><label>Runtime</label><strong>{stack.runtime}</strong></div>
          <div className="stack-item"><label>Package manager</label><strong>{stack.packageManager}</strong></div>
          <div className="stack-item"><label>Current Node</label><strong>{stack.currentNode}</strong></div>
          <div className="stack-item"><label>Recommended</label><strong>{stack.recommendedNode}</strong></div>
        </div>
        <div className="stack-tags">{stack.frameworks.length ? stack.frameworks.map((framework) => <span className="tag" key={framework}>{framework}</span>) : <span className="tag">No framework detected</span>}</div>
      </section>
      <section className="section-card" data-testid="section-breakdown">
        <div className="section-heading"><h3>Health signals</h3><span>weighted score</span></div>
        <div className="breakdown-list">
          {breakdown.map(([name, score]) => (
            <div className="breakdown-row" key={name}>
              <span className="breakdown-name">{name}</span>
              <div className="breakdown-bar"><div className="breakdown-fill" style={{ width: `${Math.max(0, Math.min(100, score))}%` }} /></div>
              <span className="breakdown-score">{Math.round(score)}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function DependencyTable({ dependencies }: { dependencies: DependencyFinding[] }) {
  return (
    <section className="section-card full" id="dependencies" data-testid="section-dependencies">
      <div className="section-heading"><h3>Dependency findings</h3><span>{dependencies.length} findings · triage by risk</span></div>
      {dependencies.length ? (
        <div className="table-scroll">
          <table className="dependency-table">
            <thead><tr><th>Package</th><th>Current</th><th>Target</th><th>Risk</th><th>Recommended action</th><th>Reason</th></tr></thead>
            <tbody>
              {dependencies.map((dependency) => (
                <tr key={`${dependency.name}-${dependency.current}`}>
                  <td><div className="dependency-name">{dependency.name}</div><div className="panel-kicker">{dependency.kind}</div></td>
                  <td><span className="version">{dependency.current}</span></td>
                  <td><span className="version recommended">{dependency.recommended}</span></td>
                  <td><RiskBadge risk={dependency.risk} /></td>
                  <td><div className="dep-action">{dependency.action}</div>{dependency.deprecated && <span className="deprecated-flag">deprecated</span>}</td>
                  <td><div className="dependency-reason">{dependency.reason}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : <div className="empty-table">No dependency findings returned for this repository.</div>}
    </section>
  );
}

function MigrationStages({ stages }: { stages: MigrationStage[] }) {
  return (
    <section className="section-card" data-testid="section-stages">
      <div className="section-heading"><h3>Migration sequence</h3><span>{stages.length} stages</span></div>
      <div className="stage-list">
        {stages.map((stage, index) => (
          <div className={`stage ${stage.status}`} key={`${stage.name}-${index}`}>
            <div className="stage-marker">{stage.status === 'ready' ? <Check size={10} /> : stage.status === 'blocked' ? <X size={10} /> : index + 1}</div>
            <div><div className="stage-name">{stage.name}</div><div className="stage-detail">{stage.detail}</div></div>
            <StatusPill status={stage.status} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Validations({ validations }: { validations: ValidationStatus[] }) {
  return (
    <section className="section-card" data-testid="section-validations">
      <div className="section-heading"><h3>Validation gates</h3><span>before execution</span></div>
      <div className="validation-list">
        {validations.map((validation, index) => (
          <div className="validation" key={`${validation.name}-${index}`}>
            <div className={`validation-icon ${validation.status}`}>{validation.status === 'safe_to_run' ? <Check size={11} /> : validation.status === 'blocked' ? <X size={11} /> : <CircleHelp size={11} />}</div>
            <div><div className="validation-name">{validation.name}</div><div className="validation-detail">{validation.detail}</div></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Report({ report }: { report: AnalysisReport }) {
  return (
    <div className="report" data-testid="analysis-report">
      <div className="report-heading">
        <div><div className="eyebrow"><span className="eyebrow-line" />analysis complete</div><h2>{report.repository.owner} / {report.repository.name}</h2></div>
        <div className="report-heading-meta"><span className="report-url">{report.repository.url}</span><a className="icon-button" href={report.repository.url} target="_blank" rel="noreferrer" aria-label="Open repository" data-testid="link-open-repository"><ExternalLink size={14} /></a></div>
      </div>
      <Overview report={report} />
      <StackAndBreakdown report={report} />
      <div className="content-grid">
        <DependencyTable dependencies={report.dependencies} />
      </div>
      <div className="content-grid">
        <MigrationStages stages={report.migrationStages} />
        <Validations validations={report.validations} />
      </div>
      {report.notes.length > 0 && (
        <section className="section-card full" style={{ marginTop: 12 }} data-testid="section-notes">
          <div className="section-heading"><h3>Operator notes</h3><span>context from the scan</span></div>
          <ul className="notes-list">{report.notes.map((note, index) => <li key={`${note}-${index}`}>{note}</li>)}</ul>
        </section>
      )}
      <div className="report-footer"><span>Last updated {formatDate(report.repository.lastUpdated)}</span><span>Analysis is read-only · no repository code was executed</span></div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="empty-state" data-testid="empty-analysis">
      <div className="empty-copy">
        <div className="eyebrow"><span className="eyebrow-line" />awaiting a repository</div>
        <h2>Start with the link. Leave with a way forward.</h2>
        <p>DeadProject Rescue reads public metadata and package manifests, then turns years of drift into a staged, reviewable recovery plan.</p>
      </div>
      <div className="empty-code" aria-label="Analysis preview">
        <div><span className="code-accent">scan</span> --metadata</div>
        <div><span className="code-accent">map</span> --runtime --deps</div>
        <div><span className="code-warn">flag</span> --migration-risk</div>
        <div><span className="code-accent">report</span> --next-steps</div>
      </div>
    </div>
  );
}

function Home() {
  const [repositoryUrl, setRepositoryUrl] = useState('');
  const [submitError, setSubmitError] = useState('');
  const health = useHealthCheck();
  const analyze = useAnalyzeRepository();
  const report = analyze.data;
  const isServerHealthy = health.data?.status === 'ok' || health.data?.status === 'healthy';

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    const value = repositoryUrl.trim();
    if (!value) {
      setSubmitError('Paste a public GitHub repository URL to begin.');
      return;
    }
    analyze.mutate({ data: { repositoryUrl: value } }, {
      onError: (error) => setSubmitError(errorMessage(error)),
    });
  };

  return (
    <div className="rescue-app">
      <aside className="rail">
        <div className="brand"><div className="brand-mark">{'{ }'}</div><div><div className="brand-name">DeadProject Rescue</div><div className="brand-sub">migration cockpit</div></div></div>
        <div className="rail-rule" />
        <div className="rail-label">Workspace</div>
        <nav className="nav-list" aria-label="Primary navigation">
          <button className="nav-item active" type="button" data-testid="button-nav-analyze"><Code2 className="nav-icon" />Analyze repository</button>
          <button className="nav-item" type="button" onClick={() => document.getElementById('dependencies')?.scrollIntoView({ behavior: 'smooth' })} data-testid="button-nav-findings"><Layers3 className="nav-icon" />Findings <ChevronRight size={13} style={{ marginLeft: 'auto' }} /></button>
        </nav>
        <div className="rail-spacer" />
        <div className="rail-status">
          <div className="status-heading"><span>API connection</span><span className={`status-pulse ${health.isError ? 'offline' : ''}`} /></div>
          <div className="status-value">{health.isLoading ? 'Checking…' : health.isError ? 'Unavailable' : isServerHealthy ? 'Ready for scans' : health.data?.status ?? 'Connecting'}</div>
          <div className="status-detail">{health.isError ? 'The analyzer is not responding.' : 'Read-only repository inspection.'}</div>
        </div>
        <div className="rail-foot">v0.1 · public repositories</div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div className="breadcrumb"><span>Rescue desk</span><ChevronRight size={12} /><span className="breadcrumb-current">Repository analysis</span></div>
          <div className="topbar-right">
            <div className="api-state"><span className={`api-dot ${health.isError ? 'offline' : ''}`} />{health.isLoading ? 'checking API' : health.isError ? 'API offline' : 'API online'}</div>
            <button className="icon-button" type="button" onClick={() => void health.refetch()} aria-label="Refresh API status" data-testid="button-refresh-health"><RefreshCw size={14} /></button>
          </div>
        </header>

        <div className="content">
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" />recovery starts with visibility</div>
              <h1>Bring the repo<br />back into <em>the light.</em></h1>
              <p className="hero-description">A calm, evidence-led read on what has drifted, what can move now, and what needs a careful hand.</p>
            </div>
            <div className="hero-aside"><strong>read-only by design</strong>We inspect manifests and repository metadata. No code is executed. No pull request is opened.</div>
          </section>

          <section className="analyze-panel" aria-label="Analyze a repository">
            <div className="panel-heading"><div className="panel-title">Inspect a public GitHub repository</div><div className="panel-kicker">takes about 15 seconds</div></div>
            <form className="analyze-form" onSubmit={submit}>
              <div className="url-wrap"><span className="url-prefix">git</span><input className="url-input" type="url" value={repositoryUrl} onChange={(event) => setRepositoryUrl(event.target.value)} placeholder="github.com/owner/repository" aria-label="GitHub repository URL" data-testid="input-repository-url" /></div>
              <button className="primary-button" type="submit" disabled={analyze.isPending} data-testid="button-analyze-repository">{analyze.isPending ? <><LoaderCircle size={15} className="spin" />Reading repository</> : <>Analyze repository <ArrowUpRight size={15} /></>}</button>
            </form>
            <div className="panel-note"><ShieldCheck size={13} /> Public repositories only · package manifests and metadata, never source execution</div>
          </section>

          {submitError && <div className="error-callout" role="alert" data-testid="status-analysis-error"><AlertCircle size={16} /><div><strong>Analysis stopped</strong>{submitError}</div><button className="retry-button" type="button" onClick={() => setSubmitError('')} data-testid="button-dismiss-error">dismiss</button></div>}
          {analyze.isPending && <div className="skeleton-report" data-testid="status-analysis-loading"><div className="skeleton-line" /><div className="skeleton-block" /><div className="skeleton-block" /></div>}
          {!analyze.isPending && report ? <Report report={report} /> : !analyze.isPending && <EmptyState />}
        </div>
      </main>
    </div>
  );
}

export default Home;