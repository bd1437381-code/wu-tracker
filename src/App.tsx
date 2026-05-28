import { useState } from "react";

const WULogo = () => (
  <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 4L9 24L14.5 10L20 24L25.5 10L31 24L38 4"
      stroke="#FFCD00"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

function MTCNInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 10);
    onChange(raw);
  };

  const formatted = () => {
    const d = value.padEnd(10, " ");
    return `${d.slice(0,3)}-${d.slice(3,6)}-${d.slice(6,10)}`;
  };

  return (
    <div style={{ direction: "ltr" }}>
      <input
        type="text"
        inputMode="numeric"
        value={value ? formatted() : ""}
        onChange={handleChange}
        placeholder="_ _ _ - _ _ _ - _ _ _ _"
        className="w-full border-0 border-b-2 border-gray-300 focus:border-gray-700 focus:outline-none text-gray-800 text-base py-2 bg-transparent placeholder:text-gray-400 placeholder:tracking-widest"
        style={{ fontFamily: "monospace", letterSpacing: "0.15em", fontSize: "1.1rem" }}
      />
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<"sender" | "receiver">("sender");
  const [mtcn, setMtcn] = useState("");
  const [firstName, setFirstName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ direction: "rtl", fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#1a1f2e" }} className="w-full px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.5)", borderRadius: "4px", padding: "4px 12px", fontSize: "0.85rem", background: "transparent", cursor: "pointer" }}
        >
          القائمة
        </button>
        <div className="flex items-center justify-center">
          <WULogo />
        </div>
        <div style={{ width: "60px" }} />
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pt-6 pb-4 max-w-lg mx-auto w-full">
        {/* Region selector */}
        <div className="flex justify-end mb-4">
          <span style={{ color: "#1a6fa3", fontSize: "0.82rem", cursor: "pointer" }}>
            عربي/المملكة العربية السعودية
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1a1f2e", marginBottom: "1.25rem" }}>
          تتبع تحويل
        </h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("sender")}
            className="flex items-center gap-2 py-3 px-4 text-sm font-medium transition-all"
            style={{
              borderBottom: activeTab === "sender" ? "2px solid #1a1f2e" : "2px solid transparent",
              color: activeTab === "sender" ? "#1a1f2e" : "#666",
              marginBottom: "-1px",
              background: "none",
              border: "none",
              borderBottom: activeTab === "sender" ? "2px solid #1a1f2e" : "2px solid transparent",
              cursor: "pointer",
            }}
          >
            <UploadIcon />
            <span>أنا الفرسل</span>
          </button>
          <button
            onClick={() => setActiveTab("receiver")}
            className="flex items-center gap-2 py-3 px-4 text-sm font-medium transition-all"
            style={{
              borderBottom: activeTab === "receiver" ? "2px solid #1a1f2e" : "2px solid transparent",
              color: activeTab === "receiver" ? "#1a1f2e" : "#666",
              marginBottom: "-1px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <DownloadIcon />
            <span>أنا المستلم</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* MTCN Field */}
          <div>
            {activeTab === "sender" && (
              <p style={{ color: "#cc0000", fontSize: "0.8rem", marginBottom: "8px" }}>
                track-transfer.mtcn_text_input_error_new
              </p>
            )}
            <MTCNInput value={mtcn} onChange={setMtcn} />
          </div>

          {/* First Name Field */}
          {activeTab === "sender" && (
            <div>
              <input
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="الاسم الأول للفرسل"
                className="w-full border-0 border-b border-gray-300 focus:border-gray-700 focus:outline-none text-gray-800 text-sm py-2 bg-transparent placeholder:text-gray-500"
              />
            </div>
          )}

          {activeTab === "receiver" && (
            <div>
              <input
                type="text"
                placeholder="الاسم الأول للمستلم"
                className="w-full border-0 border-b border-gray-300 focus:border-gray-700 focus:outline-none text-gray-800 text-sm py-2 bg-transparent placeholder:text-gray-500"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              backgroundColor: "#4a6fa5",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "14px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              width: "100%",
            }}
          >
            المتابعة
          </button>
        </form>

        {/* MTCN Help Link */}
        <div className="text-center mt-5">
          <a href="#" style={{ color: "#1a6fa3", fontSize: "0.85rem", textDecoration: "none" }}>
            لا تعرف رقم التتبع (MTCN)؟
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#f7f7f7", borderTop: "1px solid #e5e5e5", padding: "24px 16px 16px" }}>
        <div className="max-w-lg mx-auto">
          {/* Footer Links */}
          <div style={{ fontSize: "0.75rem", color: "#444", lineHeight: "2.2", textAlign: "center", direction: "rtl" }}>
            {[
              ["الصفحة الرئيسية", "نبذة عنا", "معلومات حول الشركة", "المدونة", "الإبلاغ عن خطأ في الأمان"],
              ["العلاقات بين المستثمرين", "الوظائف", "مؤسسة WU", "الملكية الفكرية"],
              ["بيان الخصوصية عبر شبكة الإنترنت", "الأحكام والشروط", "التوعية"],
              ["للحماية من الاحتيال", "معلومات حول ملف تعريف الارتباط", "التواصل معنا"],
            ].map((row, i) => (
              <div key={i} className="flex flex-wrap justify-center gap-1">
                {row.map((link, j) => (
                  <span key={j} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <a href="#" style={{ color: "#444", textDecoration: "none" }}>{link}</a>
                    {j < row.length - 1 && <span style={{ color: "#999" }}>|</span>}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div style={{ textAlign: "center", marginTop: "16px", fontSize: "0.75rem", color: "#666", direction: "rtl" }}>
            حقوق النسخ والنشر 2026 Western Union Holdings, Inc. جميع الحقوق محفوظة.
          </div>

          {/* Follow Us */}
          <div style={{ textAlign: "center", marginTop: "12px" }}>
            <div style={{ fontSize: "0.78rem", color: "#444", marginBottom: "8px" }}>تابعنا على</div>
            <div className="flex justify-center gap-4" style={{ color: "#444" }}>
              <a href="#" style={{ color: "#444" }}><FacebookIcon /></a>
              <a href="#" style={{ color: "#444" }}><YoutubeIcon /></a>
              <a href="#" style={{ color: "#444" }}><InstagramIcon /></a>
              <a href="#" style={{ color: "#444" }}><XIcon /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
