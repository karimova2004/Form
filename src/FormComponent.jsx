import React, { useState } from "react";

const FormComponent = () => {
  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    telefon: "",
    email: "",
    serh: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); 
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.ad.trim()) {
      newErrors.ad = "Ad daxil edilməlidir.";
    } else if (form.ad.length < 4) {
      newErrors.ad = "Ad ən azı 4 hərf olmalıdır.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage("Məlumat müvəffəqiyyətlə göndərildi!");
      setForm({
        ad: "",
        soyad: "",
        telefon: "",
        email: "",
        serh: "",
      });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Ad:
          <input
            type="text"
            name="ad"
            value={form.ad}
            onChange={handleChange}
          />
          {errors.ad && <span className="error">{errors.ad}</span>}
        </label>
        <label>
          Soyad:
          <input
            type="text"
            name="soyad"
            value={form.soyad}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Telefon:
          <input
            type="tel"
            name="telefon"
            value={form.telefon}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Şərh:
          <textarea
            name="serh"
            value={form.serh}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Göndər</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default FormComponent;
