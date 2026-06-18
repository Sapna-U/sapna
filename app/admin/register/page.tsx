"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "", email: "", username: "",
    password: "", confirmPassword: "", dob: "", gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!agreed) return alert("Please agree to Terms & Conditions");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.labelPill}>
          <span style={{...styles.labelText, color:"#065f46"}}>REGISTRATION OUTPUT</span>
        </div>
        <div style={styles.card}>
          <button style={styles.resumeBtn} onClick={() => router.push("/resume")}>← Resume</button>
          <div style={styles.confettiArea}>
            {["#F59E0B","#10B981","#6366F1","#EC4899","#3B82F6","#F97316","#A855F7","#14B8A6"].map((c,i)=>(
              <span key={i} style={{
                ...styles.confetti, background:c,
                top:`${[10,5,15,8,12,6,18,4][i]}%`,
                left:`${[10,30,55,75,20,65,40,85][i]}%`,
                transform:`rotate(${i*45}deg)`,
              }}/>
            ))}
          </div>
          <div style={styles.checkCircle}>
            <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="white" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h2 style={styles.successTitle}>Registration Successful!</h2>
          <p style={styles.successSub}>Welcome to our community 🎉</p>
          <div style={styles.profileAvatarCircle}>
            <svg viewBox="0 0 24 24" width="44" height="44" fill="white">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
          <p style={styles.profileName}>{form.fullName||"John Doe"}</p>
          <p style={styles.profileUsername}>{form.username||"johndoe123"}</p>
          <p style={styles.profileEmail}>✉ {form.email||"john.doe@email.com"}</p>
          <div style={styles.successBox}>
            <span style={styles.successCheckIcon}>✓</span>
            <span>Your account has been created successfully.<br/>You can now log in and explore our features.</span>
          </div>
          <button style={styles.primaryBtn} onClick={()=>router.push("/admin/login")}>Go to Login →</button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.labelPill}>
        <span style={styles.labelText}>REGISTRATION FORM</span>
      </div>

      <div style={styles.card}>
        {/* Resume button top-left */}
        <button style={styles.resumeBtn} onClick={() => router.push("/resume")}>← Resume</button>

        {/* Dots top-left */}
        <div style={styles.dotsTopLeft}>
          {[...Array(9)].map((_,i)=><span key={i} style={styles.dot}/>)}
        </div>

        <div style={styles.avatarCircle}>
          <svg viewBox="0 0 24 24" width="38" height="38" fill="white">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>

        <h2 style={styles.title}>Create Your Account</h2>
        <p style={styles.subtitle}>Join us today! Fill in the details to get started.</p>

        {[
          {label:"Full Name",name:"fullName",type:"text",placeholder:"Enter your full name",icon:"👤"},
          {label:"Email Address",name:"email",type:"email",placeholder:"Enter your email address",icon:"✉"},
          {label:"Username",name:"username",type:"text",placeholder:"Choose a username",icon:"@"},
        ].map(f=>(
          <div key={f.name} style={styles.fieldGroup}>
            <label style={styles.label}>{f.label}</label>
            <div style={styles.inputWrap}>
              <span style={styles.inputIcon}>{f.icon}</span>
              <input name={f.name} type={f.type} placeholder={f.placeholder}
                value={(form as any)[f.name]} onChange={handleChange} style={styles.input}/>
            </div>
          </div>
        ))}

        {[
          {label:"Password",name:"password",show:showPassword,toggle:()=>setShowPassword(!showPassword),placeholder:"Create a strong password"},
          {label:"Confirm Password",name:"confirmPassword",show:showConfirm,toggle:()=>setShowConfirm(!showConfirm),placeholder:"Confirm your password"},
        ].map(f=>(
          <div key={f.name} style={styles.fieldGroup}>
            <label style={styles.label}>{f.label}</label>
            <div style={styles.inputWrap}>
              <span style={styles.inputIcon}>🔒</span>
              <input name={f.name} type={f.show?"text":"password"} placeholder={f.placeholder}
                value={(form as any)[f.name]} onChange={handleChange} style={styles.input}/>
              <button onClick={f.toggle} style={styles.eyeBtn}>{f.show?"🙈":"👁"}</button>
            </div>
          </div>
        ))}

        <div style={styles.rowFields}>
          <div style={{...styles.fieldGroup,flex:1}}>
            <label style={styles.label}>Date of Birth</label>
            <div style={styles.inputWrap}>
              <span style={styles.inputIcon}>📅</span>
              <input name="dob" type="date" value={form.dob} onChange={handleChange} style={styles.input}/>
            </div>
          </div>
          <div style={{...styles.fieldGroup,flex:1}}>
            <label style={styles.label}>Gender</label>
            <div style={styles.inputWrap}>
              <select name="gender" value={form.gender} onChange={handleChange}
                style={{...styles.input,paddingLeft:"12px"}}>
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <label style={styles.checkRow}>
          <input type="checkbox" checked={agreed} onChange={e=>setAgreed(e.target.checked)} style={{marginRight:8}}/>
          I agree to the <span style={styles.link}>&nbsp;Terms & Conditions</span>&nbsp;and&nbsp;<span style={styles.link}>Privacy Policy</span>
        </label>

        <button style={styles.primaryBtn} onClick={handleSubmit}>👤&nbsp; Create Account</button>
        <p style={styles.loginLink}>
          Already have an account?&nbsp;
          <span style={styles.link} onClick={()=>router.push("/admin/login")}>Login</span>
        </p>

        {/* Dots bottom-right */}
        <div style={styles.dotsBottomRight}>
          {[...Array(9)].map((_,i)=><span key={i} style={styles.dot}/>)}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight:"100vh",
    background:"linear-gradient(135deg,#f0f0ff 0%,#faf0ff 100%)",
    display:"flex", flexDirection:"column",
    alignItems:"center", justifyContent:"center",
    padding:"40px 24px",
  },
  labelPill: {
    background:"#ede9fe", borderRadius:"20px",
    padding:"8px 32px", marginBottom:"20px",
  },
  labelText: {
    fontSize:"13px", fontWeight:700,
    letterSpacing:"1.5px", color:"#5b21b6",
  },
  card: {
    background:"white", borderRadius:"24px",
    padding:"44px 48px", width:"100%", maxWidth:"620px",
    boxShadow:"0 8px 40px rgba(100,80,200,0.10)",
    position:"relative", overflow:"hidden",
  },
  resumeBtn: {
    position:"absolute", top:16, left:16,
    background:"linear-gradient(90deg,#059669,#10B981)",
    color:"white", border:"none", borderRadius:8,
    padding:"6px 14px", fontSize:"12px", fontWeight:600,
    cursor:"pointer", zIndex:10,
  },
  dotsTopLeft: {
    position:"absolute", top:52, left:18,
    display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:6,
  },
  dotsBottomRight: {
    position:"absolute", bottom:18, right:18,
    display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:6,
  },
  dot: {width:5,height:5,borderRadius:"50%",background:"#c4b5fd",display:"block"},
  avatarCircle: {
    width:72, height:72, borderRadius:"50%",
    background:"linear-gradient(135deg,#7C3AED,#6366F1)",
    display:"flex", alignItems:"center", justifyContent:"center",
    margin:"0 auto 14px",
  },
  title: {textAlign:"center",fontSize:"26px",fontWeight:700,color:"#1a1a2e",marginBottom:4},
  subtitle: {textAlign:"center",color:"#9ca3af",marginBottom:22,fontSize:"14px"},
  fieldGroup: {marginBottom:14},
  label: {display:"block",fontSize:"13px",fontWeight:600,color:"#374151",marginBottom:6},
  inputWrap: {
    display:"flex", alignItems:"center",
    border:"1.5px solid #e5e7eb", borderRadius:10,
    overflow:"hidden", background:"#fafafa",
  },
  inputIcon: {
    padding:"0 13px", fontSize:"15px", color:"#7C3AED",
    background:"#f5f3ff", alignSelf:"stretch",
    display:"flex", alignItems:"center",
    borderRight:"1.5px solid #e5e7eb",
  },
  input: {
    flex:1, border:"none", outline:"none",
    padding:"11px 14px", fontSize:"14px",
    background:"transparent", color:"#333", width:"100%",
  },
  eyeBtn: {background:"none",border:"none",padding:"0 12px",cursor:"pointer",fontSize:"15px"},
  rowFields: {display:"flex",gap:14},
  checkRow: {
    display:"flex", alignItems:"center",
    fontSize:"13px", color:"#555", margin:"14px 0", cursor:"pointer",
  },
  link: {color:"#7C3AED",fontWeight:600,cursor:"pointer"},
  primaryBtn: {
    width:"100%", padding:"13px",
    background:"linear-gradient(90deg,#7C3AED,#6366F1)",
    color:"white", border:"none", borderRadius:12,
    fontSize:"15px", fontWeight:600, cursor:"pointer", marginTop:4,
  },
  loginLink: {textAlign:"center",marginTop:12,fontSize:"13px",color:"#6b7280"},
  confettiArea: {position:"relative",height:70,marginBottom:8},
  confetti: {position:"absolute",width:8,height:18,borderRadius:3,display:"block"},
  checkCircle: {
    width:84, height:84, borderRadius:"50%", background:"#10B981",
    display:"flex", alignItems:"center", justifyContent:"center",
    margin:"0 auto 18px", boxShadow:"0 0 0 12px #d1fae5",
  },
  successTitle: {textAlign:"center",fontSize:"22px",fontWeight:700,color:"#1a1a2e",marginBottom:4},
  successSub: {textAlign:"center",color:"#9ca3af",marginBottom:20,fontSize:"14px"},
  profileAvatarCircle: {
    width:80, height:80, borderRadius:"50%",
    background:"linear-gradient(135deg,#7C3AED,#6366F1)",
    display:"flex", alignItems:"center", justifyContent:"center",
    margin:"0 auto 12px",
  },
  profileName: {textAlign:"center",fontSize:"20px",fontWeight:700,color:"#1a1a2e",marginBottom:2},
  profileUsername: {textAlign:"center",color:"#9ca3af",fontSize:"14px",marginBottom:4},
  profileEmail: {textAlign:"center",color:"#6b7280",fontSize:"14px",marginBottom:20},
  successBox: {
    background:"#f0fdf4", border:"1.5px solid #bbf7d0",
    borderRadius:12, padding:"14px 16px",
    display:"flex", alignItems:"flex-start", gap:10,
    fontSize:"13px", color:"#166534", marginBottom:4,
  },
  successCheckIcon: {color:"#10B981",fontWeight:700,fontSize:"18px",marginTop:1},
};