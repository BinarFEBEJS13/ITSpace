import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { OTP } from "../pages/auth/OTP";
import { ResetPass } from "../pages/auth/ResetPass";
import { AkunPassword } from "../pages/AkunPassword";
import { AkunPembayaran } from "../pages/AkunPembayaran";
import { Akun } from "../pages/Akun";
import { Beranda } from "../pages/Beranda";
import { BerandaKelasSaya } from "../pages/BerandaKelasSaya";
import { DetailKelas } from "../pages/DetailKelas";
import { AkunProfile } from "../pages/AkunProfile";
import { Notifikasi } from "../pages/Notifikasi";
import { Success } from "../pages/Success";
import { Kursus } from "../pages/Kursus";
import AdminLogin from "../pages/Admin/Login";
import { TableKelas } from "../pages/Admin/TableKelas";
import { TableUser } from "../pages/Admin/TableUser";
import TabelTransaksi from "../pages/Admin/TabelTransaksi";

import { Checkout } from "../pages/Checkout";
import { Payment } from "../pages/Payment";
import { Frontend } from "../pages/category/Frontend";
import { UIUX } from "../pages/category/UIUX";
import { Backend } from "../pages/category/Backend";
import { Database } from "../pages/category/Database";
import { MachineLearning } from "../pages/category/MachineLearning";
import { DataScience } from "../pages/category/DataScience";
import { EmailResetPass } from "../pages/auth/EmailResetPass";
import TokenProtected from "../assets/components/TokenProtected";
import { Chapters } from "../assets/components/Admin/chapter/Chapters";
import { Category } from "../assets/components/Admin/kategori/Category";
import { ProfileAdmin } from "../assets/components/Admin/ProfileAdmin";
import TokenProtectedAdmin from "../assets/components/Admin/TokenProtectedAdmin";
import { NotFound } from "../pages/NotFound";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route Authenthication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/reset" element={<ResetPass />} />
        <Route path="/resetValidasi" element={<EmailResetPass />} />
        {/* Route Main */}
        {/* <Route path="/" element={<Beranda/>}></Route> */}
        <Route path="/" element={<Beranda />}></Route>

        {/* Route Admin */}
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route
          path="/admin/dashboard/course"
          element={
            <TokenProtectedAdmin>
              <TableKelas />
            </TokenProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/dashboard/transaksi"
          element={
            <TokenProtectedAdmin>
              <TabelTransaksi />
            </TokenProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/dashboard/users"
          element={
            <TokenProtectedAdmin>
              <TableUser />
            </TokenProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/dashboard/category"
          element={
            <TokenProtectedAdmin>
              <Category />
            </TokenProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/profile"
          element={
            <TokenProtectedAdmin>
              <ProfileAdmin />
            </TokenProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/dashboard/course/:id/chapters"
          element={
            <TokenProtectedAdmin>
              <Chapters />
            </TokenProtectedAdmin>
          }
        ></Route>

        <Route path="/kelassaya/:queryEnrollments" element={<BerandaKelasSaya />}></Route>
        <Route path="/kursus/:querySearch" element={<Kursus />}></Route>
        <Route path="/detail-kelas/:courseId" element={<DetailKelas />}></Route>
        <Route path="/checkout/:courseId" element={<Checkout />}></Route>
        <Route path="/payment/:courseId/:idTransactions" element={<Payment />}></Route>
        <Route path="/success/payment/:courseId/:idTransactions" element={<Success />}></Route>
        <Route
          path="/akun"
          element={
            <TokenProtected>
              <Akun />
            </TokenProtected>
          }
        ></Route>
        <Route
          path="/akun/profile"
          element={
            <TokenProtected>
              <AkunProfile />
            </TokenProtected>
          }
        ></Route>
        <Route
          path="/akun/change-password"
          element={
            <TokenProtected>
              <AkunPassword />
            </TokenProtected>
          }
        ></Route>
        <Route
          path="/akun/transaction"
          element={
            <TokenProtected>
              <AkunPembayaran />
            </TokenProtected>
          }
        ></Route>
        <Route
          path="/notifikasi"
          element={
            <TokenProtected>
              <Notifikasi />
            </TokenProtected>
          }
        ></Route>

        {/* category page */}
        <Route path="/category/uiux" element={<UIUX />}></Route>
        <Route path="/category/frontend" element={<Frontend />}></Route>
        <Route path="/category/backend" element={<Backend />}></Route>
        <Route path="/category/database" element={<Database />}></Route>
        <Route path="/category/machinelearning" element={<MachineLearning />}></Route>
        <Route path="/category/datascience" element={<DataScience />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
