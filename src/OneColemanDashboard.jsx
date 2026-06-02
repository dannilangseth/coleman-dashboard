import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Globe,
  BarChart3,
  Package,
  Megaphone,
  Tent,
  ShieldCheck,
  DollarSign,
  TrendingUp,
  Repeat,
  CheckCircle2,
  Circle,
  ArrowRight,
  Layers,
  Truck,
  Sparkles,
} from "lucide-react";

const COLORS = {
  red: "#D32734",
  evergreen: "#1A3621",
  canvas: "#F9F8F6",
  charcoal: "#2D2D2D",
  khaki: "#C9B79C",
  sage: "#5C7A5C",
};

const APPLICANT_NAME = "Dannielle Langseth";

const marketShareData = [
  { region: "NA (North America)", Coleman: 38, "Premium (YETI)": 22, "Value (Igloo)": 19 },
  { region: "EMEA (Europe, Middle East & Africa)", Coleman: 24, "Premium (YETI)": 29, "Value (Igloo)": 14 },
  { region: "APAC (Asia-Pacific)", Coleman: 17, "Premium (YETI)": 31, "Value (Igloo)": 11 },
];

const retentionData = [
  { year: "2022", "Traditional Camping": 100, "Urban / Weekend Glamping": 42 },
  { year: "2023", "Traditional Camping": 88, "Urban / Weekend Glamping": 61 },
  { year: "2024", "Traditional Camping": 79, "Urban / Weekend Glamping": 84 },
  { year: "2025", "Traditional Camping": 71, "Urban / Weekend Glamping": 113 },
];

const shipperCurrent = [
  { name: "Custom Regional Shippers", value: 45 },
  { name: "Legacy Displays", value: 30 },
  { name: "Global Standard", value: 25 },
];

const shipperSimplified = [
  { name: "Custom Regional Shippers", value: 12 },
  { name: "Legacy Displays", value: 8 },
  { name: "Global Standard", value: 80 },
];

const PIE_COLORS = [COLORS.khaki, COLORS.charcoal, COLORS.red];

function KpiCard({ icon: Icon, label, value, sub, accent }) {
  return (
    <div className="flex-1 min-w-[220px] bg-white rounded-2xl p-5 shadow-sm border border-black/5">
      <div className="flex items-center gap-3">
        <div
          className="h-11 w-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: accent + "1A", color: accent }}
        >
          <Icon size={22} />
        </div>
        <div>
          <div className="text-2xl font-bold" style={{ color: COLORS.charcoal }}>
            {value}
          </div>
          <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
            {label}
          </div>
        </div>
      </div>
      <div className="mt-3 text-sm text-gray-600">{sub}</div>
    </div>
  );
}

function SectionNarrative({ children }) {
  return (
    <p className="text-[15px] leading-relaxed text-gray-700 max-w-3xl mb-6">
      {children}
    </p>
  );
}

function TakeawayBox({ title, children }) {
  return (
    <div
      className="mt-6 rounded-2xl p-5 border-l-4"
      style={{ backgroundColor: "#1A36210D", borderColor: COLORS.red }}
    >
      <div
        className="flex items-center gap-2 font-bold mb-1"
        style={{ color: COLORS.evergreen }}
      >
        <Sparkles size={18} style={{ color: COLORS.red }} />
        {title}
      </div>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-black/5">
      <h3
        className="text-sm font-bold uppercase tracking-wide mb-4"
        style={{ color: COLORS.evergreen }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function GlobalTab() {
  return (
    <div>
      <SectionNarrative>
        Bridging the gap between Global intent and Regional execution. Coleman
        leads in NA (North America), but faces intense challenger threats in EMEA (Europe, Middle East & Africa) and APAC (Asia-Pacific) from
        premium, urban-outdoor brands.
      </SectionNarrative>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Market Share by Region (%)">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marketShareData} barGap={6}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="region" tick={{ fill: COLORS.charcoal, fontSize: 10 }} angle={-12} textAnchor="end" height={50} />
              <YAxis tick={{ fill: COLORS.charcoal, fontSize: 12 }} unit="%" />
              <Tooltip cursor={{ fill: "#0000000A" }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="Coleman" fill={COLORS.red} radius={[4, 4, 0, 0]} animationDuration={900} />
              <Bar dataKey="Premium (YETI)" fill={COLORS.evergreen} radius={[4, 4, 0, 0]} animationDuration={900} />
              <Bar dataKey="Value (Igloo)" fill={COLORS.khaki} radius={[4, 4, 0, 0]} animationDuration={900} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Post-Covid Camping Retention (Indexed)">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={retentionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="year" tick={{ fill: COLORS.charcoal, fontSize: 12 }} />
              <YAxis tick={{ fill: COLORS.charcoal, fontSize: 12 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line
                type="monotone"
                dataKey="Traditional Camping"
                stroke={COLORS.charcoal}
                strokeWidth={3}
                dot={{ r: 4 }}
                animationDuration={1100}
              />
              <Line
                type="monotone"
                dataKey="Urban / Weekend Glamping"
                stroke={COLORS.red}
                strokeWidth={3}
                dot={{ r: 4 }}
                animationDuration={1100}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <TakeawayBox title="Opportunity">
        Pivot global marketing assets to index higher on{" "}
        <strong>"Accessible Weekend Outdoors"</strong> to capture millennial /
        Gen-Z growth in APAC (Asia-Pacific) and EMEA (Europe, Middle East & Africa).
      </TakeawayBox>
    </div>
  );
}

function ImpactStat({ icon: Icon, value, label }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-black/5 text-center">
      <div className="flex justify-center mb-2" style={{ color: COLORS.red }}>
        <Icon size={24} />
      </div>
      <div className="text-2xl font-bold" style={{ color: COLORS.evergreen }}>
        {value}
      </div>
      <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold mt-1">
        {label}
      </div>
    </div>
  );
}

function ShipperTab() {
  const [simplified, setSimplified] = useState(false);
  const data = simplified ? shipperSimplified : shipperCurrent;

  return (
    <div>
      <SectionNarrative>
        Streamlining retail execution to drive margin expansion and enforce
        VBL (Visual Brand Language) globally.
      </SectionNarrative>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title={
            simplified
              ? "Simulated Shipper Mix — Standardized"
              : "Current Shipper SKU (Stock Keeping Unit) Complexity"
          }
        >
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={3}
                animationDuration={800}
                label={({ value }) => `${value}%`}
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
            <div className="flex items-center justify-between">
              <div>
                <div
                  className="font-bold text-lg"
                  style={{ color: COLORS.evergreen }}
                >
                  Simulate Display Simplification
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Consolidate to a global standard physical footprint.
                </div>
              </div>
              <button
                onClick={() => setSimplified((s) => !s)}
                className="relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: simplified ? COLORS.red : "#D1D5DB",
                }}
                aria-pressed={simplified}
              >
                <span
                  className="inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-300"
                  style={{
                    transform: simplified ? "translateX(36px)" : "translateX(4px)",
                  }}
                />
              </button>
            </div>
            <div
              className="mt-4 text-xs font-semibold uppercase tracking-wide"
              style={{ color: simplified ? COLORS.red : "#9CA3AF" }}
            >
              {simplified ? "Standardization: ON" : "Standardization: OFF"}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <ImpactStat icon={Layers} value="-35%" label="SKU (Stock Keeping Unit) Reduction" />
            <ImpactStat icon={Package} value="+18%" label="Material Savings" />
            <ImpactStat icon={Truck} value="+2 wks" label="Execution Speed" />
          </div>
        </div>
      </div>

      <TakeawayBox title="Margin Thesis">
        By standardizing the physical footprint of global shippers while allowing
        regional teams to swap out the VBL (Visual Brand Language)-approved graphic headers, we protect
        brand equity while saving millions in procurement.
      </TakeawayBox>
    </div>
  );
}

const roadmap = [
  {
    phase: "Phase 1 — Global",
    icon: Globe,
    title: "Core Asset Development & VBL (Visual Brand Language) Toolkit",
    desc: "Master photography, key visuals, and the VBL (Visual Brand Language) toolkit built once at the center.",
  },
  {
    phase: "Phase 2 — Regional",
    icon: Megaphone,
    title: "Local Market Adaptation & Influencer Sourcing",
    desc: "Regional teams localize copy, source urban-outdoor influencers, and adapt within VBL (Visual Brand Language) guardrails.",
  },
  {
    phase: "Phase 3 — Retail",
    icon: Truck,
    title: "Standardized Shipper Deployment",
    desc: "Single global shipper footprint with swappable VBL (Visual Brand Language) headers ships OTIF (On-Time, In-Full).",
  },
];

const feedbackLoop = [
  { done: true, text: "APAC (Asia-Pacific) sell-through data tagged against VBL (Visual Brand Language) asset variants" },
  { done: true, text: "EMEA (Europe, Middle East & Africa) influencer engagement benchmarked vs. global creative" },
  { done: false, text: "Regional insights consolidated into Global Q3 (Third Quarter) iteration brief" },
  { done: false, text: "Next-gen 'Urban Escape' asset refresh scoped for FY27 (Fiscal Year 2027)" },
];

function InnovationTab() {
  return (
    <div>
      <SectionNarrative>
        Ensuring innovation feedback loops are bidirectional and marketing assets
        are delivered OTIF (On-Time, In-Full).
      </SectionNarrative>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Tent size={20} style={{ color: COLORS.red }} />
          <h3 className="font-bold text-lg" style={{ color: COLORS.evergreen }}>
            Launch Roadmap — Coleman Urban Escape Cooler
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roadmap.map((step, i) => (
            <React.Fragment key={i}>
              <div className="relative rounded-xl border border-black/5 p-5 bg-[#F9F8F6]">
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: COLORS.evergreen, color: "white" }}
                >
                  <step.icon size={20} />
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-wide mb-1"
                  style={{ color: COLORS.red }}
                >
                  {step.phase}
                </div>
                <div
                  className="font-semibold mb-1"
                  style={{ color: COLORS.charcoal }}
                >
                  {step.title}
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </div>
                {i < roadmap.length - 1 && (
                  <ArrowRight
                    className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10"
                    size={22}
                    style={{ color: COLORS.khaki }}
                  />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
        <div className="flex items-center gap-2 mb-4">
          <Repeat size={20} style={{ color: COLORS.red }} />
          <h3 className="font-bold text-lg" style={{ color: COLORS.evergreen }}>
            Bidirectional Feedback Loop
          </h3>
        </div>
        <div className="space-y-3">
          {feedbackLoop.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              {item.done ? (
                <CheckCircle2 size={20} style={{ color: COLORS.sage }} />
              ) : (
                <Circle size={20} className="text-gray-300" />
              )}
              <span
                className={`text-sm ${
                  item.done ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TABS = [
  { id: "global", label: "Global Market Landscape", icon: Globe },
  { id: "shipper", label: "Retail & Shipper Simplification", icon: Package },
  { id: "innovation", label: "Innovation & Asset Pipeline", icon: Megaphone },
];

export default function OneColemanDashboard() {
  const [tab, setTab] = useState("global");

  return (
    <div
      style={{ backgroundColor: COLORS.canvas, fontFamily: "Inter, Roboto, system-ui, sans-serif" }}
      className="min-h-screen text-[15px]"
    >
      {/* Sticky Nav */}
      <nav
        className="sticky top-0 z-50 shadow-md"
        style={{ backgroundColor: COLORS.evergreen }}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tent size={24} color={COLORS.red} />
            <span className="text-white font-bold tracking-wide text-lg">
              COLEMAN
            </span>
            <span className="text-white/50 text-sm hidden sm:inline">
              | Global Brand Management
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <ShieldCheck size={16} color={COLORS.red} />
            <span className="hidden sm:inline">Project OneColeman</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header
        className="px-6 pt-10 pb-8"
        style={{
          background: `linear-gradient(135deg, ${COLORS.evergreen} 0%, #142b1a 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: COLORS.red, color: "white" }}
          >
            2026–2027 Global Brand Strategy
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Project OneColeman:{" "}
            <span style={{ color: COLORS.khaki }}>
              Global Consistency, Regional Relevance
            </span>
          </h1>
          <p className="text-white/70 mt-3">
            Prepared by {APPLICANT_NAME} | Assistant Brand Manager Candidate
          </p>

          {/* KPI Row */}
          <div className="flex flex-wrap gap-4 mt-8">
            <KpiCard
              icon={ShieldCheck}
              label="Global VBL (Visual Brand Language) Compliance"
              value="88%"
              sub="Target: 95% — closing the execution gap"
              accent={COLORS.red}
            />
            <KpiCard
              icon={DollarSign}
              label="Annual Shipper Cost Savings"
              value="$1.2M"
              sub="Projected via display simplification"
              accent={COLORS.evergreen}
            />
            <KpiCard
              icon={TrendingUp}
              label="Cross-Regional Asset Adoption"
              value="+24%"
              sub="Year-over-year reuse of global assets"
              accent={COLORS.sage}
            />
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap gap-2 -mt-px py-4 sticky top-[60px] z-40" style={{ backgroundColor: COLORS.canvas }}>
          {TABS.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  backgroundColor: active ? COLORS.red : "white",
                  color: active ? "white" : COLORS.charcoal,
                  border: `1px solid ${active ? COLORS.red : "#0000000F"}`,
                }}
              >
                <t.icon size={16} />
                {t.label}
              </button>
            );
          })}
        </div>

        <main className="pb-16 pt-2">
          {tab === "global" && <GlobalTab />}
          {tab === "shipper" && <ShipperTab />}
          {tab === "innovation" && <InnovationTab />}
        </main>
      </div>

      <footer
        className="text-center text-xs text-white/60 py-6"
        style={{ backgroundColor: COLORS.evergreen }}
      >
        <div className="flex items-center justify-center gap-2">
          <BarChart3 size={14} color={COLORS.khaki} />
          Project OneColeman — Strategic Brand Dashboard | {APPLICANT_NAME}
        </div>
      </footer>
    </div>
  );
}
