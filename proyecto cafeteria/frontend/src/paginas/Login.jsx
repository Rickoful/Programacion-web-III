import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { } from '../Servicios/Api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviar = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (!captchaValue) {
      alert("Por favor completa el CAPTCHA");
      return;
    }

    try {
      const res = await API.post("/auth/login", {
        ...form,
        captcha: captchaValue
      });

      localStorage.setItem("token", res.data.token);
      alert("Login correcto");

      navigate("/");
    } catch (error) {
      alert("Credenciales incorrectas / Captcha inválido");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <form onSubmit={enviar}>
        <label>Email:</label><br />
        <input name="email" type="email" onChange={handleChange} /><br />

        <label>Password:</label><br />
        <input name="password" type="password" onChange={handleChange} /><br /><br />

        <ReCAPTCHA
          sitekey="6LecuyYsAAAAAFU8DGCodAnJf2plZ6F0aUE5xaYY"
          onChange={(value) => setCaptchaValue(value)}
        />
        <br />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
