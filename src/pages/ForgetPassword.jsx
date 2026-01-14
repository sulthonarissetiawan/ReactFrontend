import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ForgetPassword() {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  // State Form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Validasi Password Cocok
    if (password !== confirmPassword) {
      setError("Konfirmasi kata sandi tidak cocok.");
      setLoading(false);
      return;
    }

    try {
      await resetPassword(email, password, confirmPassword);
      setSuccess("Kata sandi berhasil diubah! Mengalihkan ke login...");
      
      // Redirect ke login setelah 2 detik
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal mereset kata sandi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4 font-sans py-10">
      <div className="w-full max-w-md border border-gray-200 rounded-lg p-8 shadow-sm">
        <h2 className="text-center text-2xl font-bold mb-6 text-black">
          Reset Password
        </h2>

        {/* Notifikasi Status */}
        {error && <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded border border-red-200">{error}</div>}
        {success && <div className="mb-4 text-sm text-green-600 bg-green-50 p-3 rounded border border-green-200">{success}</div>}

        <form onSubmit={handleReset} className="space-y-5">
          {/* Input Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Terdaftar"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#991B1F] focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Input Kata Sandi Baru */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Kata Sandi Baru
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimal 8 karakter"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#991B1F] focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Input Konfirmasi Kata Sandi */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Konfirmasi Kata Sandi Baru
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Ulangi Password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#991B1F] focus:border-transparent outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-[#991B1F] text-white font-semibold rounded-lg transition-all shadow-md active:scale-[0.98] mt-6 ${loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"}`}
          >
            {loading ? "Memproses..." : "Konfirmasi Reset Password"}
          </button>
        </form>

        <div className="mt-4">
          <Link to="/login" className="text-sm text-[#991B1F] hover:underline font-medium">
            Kembali ke Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
