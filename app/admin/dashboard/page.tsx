"use client";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <span style={styles.logo}>⚡ Admin Panel</span>
        <button style={styles.logoutBtn} onClick={()=>router.push("/admin/login")}>Logout</button>
      </nav>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to Dashboard 👋</h1>
        <p style={styles.sub}>You're logged in and ready to explore.</p>
        <div style={styles.cards}>
          {[
            { icon:"👥", label:"Total Users", value:"1,284" },
            { icon:"📋", label:"Registrations", value:"342" },
            { icon:"✅", label:"Active Today", value:"89" },
          ].map(c=>(
            <div key={c.label} style={styles.statCard}>
              <span style={styles.statIcon}>{c.icon}</span>
              <p style={styles.statValue}>{c.value}</p>
              <p style={styles.statLabel}>{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight:"100vh", background:"linear-gradient(135deg,#f0f0ff 0%,#faf0ff 100%)" },
  nav: { background:"white", padding:"16px 32px", display:"flex", alignItems:"center", justifyContent:"space-between", boxShadow:"0 2px 12px rgba(0,0,0,0.06)" },
  logo: { fontSize:"20px", fontWeight:700, color:"#7C3AED" },
  logoutBtn: { padding:"8px 20px", background:"linear-gradient(90deg,#7C3AED,#6366F1)", color:"white", border:"none", borderRadius:8, cursor:"pointer", fontWeight:600 },
  content: { maxWidth:900, margin:"60px auto", padding:"0 24px" },
  heading: { fontSize:"32px", fontWeight:700, color:"#1a1a2e", marginBottom:8 },
  sub: { color:"#888", marginBottom:36 },
  cards: { display:"flex", gap:24, flexWrap:"wrap" as any },
  statCard: { background:"white", borderRadius:16, padding:"32px 24px", flex:"1 1 200px", textAlign:"center" as any, boxShadow:"0 4px 20px rgba(100,80,200,0.08)" },
  statIcon: { fontSize:"36px" },
  statValue: { fontSize:"32px", fontWeight:700, color:"#7C3AED", margin:"12px 0 4px" },
  statLabel: { color:"#888", fontSize:"14px" },
};