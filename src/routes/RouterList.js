import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { OTP } from "../pages/auth/OTP";
import { ResetPass } from "../pages/auth/ResetPass";
import { AkunPassword } from "../pages/AkunPassword";
import { AkunPembayaran } from "../pages/AkunPembayaran";
import { Akun } from "../pages/Akun";
import Dashboard from "../pages/Admin/Dashboard";
import { Beranda } from "../pages/Beranda";
import { BerandaKelasSaya } from "../pages/BerandaKelasSaya";
import { DetailKelas } from "../pages/DetailKelas";
import { KelasPremium } from "../assets/components/KelasPremium";
import { Pembayaran } from "../pages/Pembayaran";
import { AkunProfile } from "../pages/AkunProfile";
import { Notifikasi } from "../pages/Notifikasi";
import { Success } from "../pages/Success";
import { Kursus } from "../pages/Kursus";
import AdminLogin from "../pages/Admin/Login";
import { TableKelas } from "../assets/components/Admin/TableKelas";
import { TableUser } from "../assets/components/Admin/TableUser";
import TabelTransaksi from "../assets/components/Admin/TabelTransaksi";
import { Chapters } from "../assets/components/Admin/Chapters";

import ImageUploadForm from "../services/users/user-photo-profile";
import TokenProtected from "../assets/components/TokenProtected";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route Authenthication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/reset" element={<ResetPass />} />
        {/* Route Main */}
        {/* <Route path="/" element={<Beranda/>}></Route> */}
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/kelassaya" element={<BerandaKelasSaya />}></Route>
        <Route path="/kursus" element={<Kursus />}></Route>
        <Route path="/detail-kelas" element={<DetailKelas />}></Route>
        <Route path="/premium" element={<KelasPremium />}></Route>
        <Route path="/pembayaran" element={<Pembayaran />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/akun" element={<TokenProtected><Akun /></TokenProtected>}></Route>
        <Route path="/akun/profile" element={<TokenProtected><AkunProfile /></TokenProtected>}></Route>
        <Route path="/akun/change-password" element={<TokenProtected><AkunPassword /></TokenProtected>}></Route>
        <Route path="/akun/transaction" element={<TokenProtected><AkunPembayaran /></TokenProtected>}></Route>
        <Route path="/notifikasi" element={<TokenProtected><Notifikasi /></TokenProtected>}></Route>
        <Route path="/contoh" element={<ImageUploadForm />}></Route>
        {/* Route Admin */}
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/dashboard/course" element={<TableKelas />}></Route>
        <Route
          path="/admin/dashboard/transaksi"
          element={<TabelTransaksi />}
        ></Route>
        <Route path="/admin/dashboard/users" element={<TableUser />}></Route>
        <Route
          path="/admin/dashboard/course/:id/chapters"
          element={<Chapters />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
