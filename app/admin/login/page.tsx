"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email:"", password:"" });

  const handleSubmit = () => router.push("/admin/dashboard");

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.avatarCircle}>
          <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Sign in to your account to continue.</p>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Email Address</label>
          <div style={styles.inputWrap}>
            <span style={styles.inputIcon}>✉</span>
            <input type="email" placeholder="Enter your email" value={form.email}
              onChange={e=>setForm({...form,email:e.target.value})} style={styles.input}/>
          </div>
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Password</label>
          <div style={styles.inputWrap}>
            <span style={styles.inputIcon}>🔒</span>
            <input type={show?"text":"password"} placeholder="Enter your password" value={form.password}
              onChange={e=>setForm({...form,password:e.target.value})} style={styles.input}/>
            <button onClick={()=>setShow(!show)} style={styles.eyeBtn}>{show?"🙈":"👁"}</button>
          </div>
        </div>

        <p style={{...styles.loginLink, textAlign:"right", marginTop:4}}>
          <span style={styles.link}>Forgot password?</span>
        </p>

        <button style={styles.primaryBtn} onClick={handleSubmit}>Sign In →</button>
        <p style={styles.loginLink}>Don't have an account?{" "}
          <span style={styles.link} onClick={()=>router.push("/admin/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight:"100vh", background:"linear-gradient(135deg,#f0f0ff 0%,#faf0ff 100%)", display:"flex", alignItems:"center", justifyContent:"center", padding:"24px" },
  card: { background:"white", borderRadius:"20px", padding:"40px 36px", width:"100%", maxWidth:"440px", boxShadow:"0 8px 40px rgba(100,80,200,0.10)" },
  avatarCircle: { width:72, height:72, borderRadius:"50%", background:"linear-gradient(135deg,#7C3AED,#6366F1)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px" },
  title: { textAlign:"center", fontSize:"26px", fontWeight:700, color:"#1a1a2e", marginBottom:4 },
  subtitle: { textAlign:"center", color:"#888", marginBottom:24, fontSize:"14px" },
  fieldGroup: { marginBottom:14 },
  label: { display:"block", fontSize:"13px", fontWeight:600, color:"#333", marginBottom:6 },
  inputWrap: { display:"flex", alignItems:"center", border:"1.5px solid #e5e7eb", borderRadius:10, overflow:"hidden", background:"#fafafa" },
  inputIcon: { padding:"0 12px", fontSize:"16px", color:"#7C3AED", background:"#f3f0ff", alignSelf:"stretch", display:"flex", alignItems:"center" as any },
  input: { flex:1, border:"none", outline:"none", padding:"11px 12px", fontSize:"14px", background:"transparent", color:"#333" },
  eyeBtn: { background:"none", border:"none", padding:"0 12px", cursor:"pointer", fontSize:"16px" },
  link: { color:"#7C3AED", fontWeight:600, cursor:"pointer" },
  primaryBtn: { width:"100%", padding:"14px", background:"linear-gradient(90deg,#7C3AED,#6366F1)", color:"white", border:"none", borderRadius:12, fontSize:"16px", fontWeight:600, cursor:"pointer", marginTop:16 },
  loginLink: { textAlign:"center", marginTop:14, fontSize:"13px", color:"#666" },
};