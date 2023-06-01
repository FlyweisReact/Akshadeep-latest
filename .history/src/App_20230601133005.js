/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exchange from "./components/exchange";
import OP1 from "./components/order_p1";
import Main2 from "./Pages/ForeignCurrency";
import Main4 from "./components/main4";
import Main6 from "./components/main6";
import StudentLoan from "./components/student_loan";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import Remittance from "./Pages/Remittance";
import Transaction from "./components/Transaction";
import SendMoney from "./Pages/SendMoney";
import CurrencyConvertor from "./Pages/CurrencyConvertor";
import ThankYou from "./Pages/ThankYou";
import Rate from "./Pages/Rate";

// Cs
import "./Style/Header.css";
import "./Style/Layout.css";
import "./Style/Component.css";
import "./Style/Footer.css";
import './Style/Responsive.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/Foreign-Currency" element={<Main2 />} />
          <Route path="/Educational-Loans" element={<Main4 />} />
          <Route path="/Remittance" element={<Remittance />} />
          <Route path="/Transaction-Details" element={<OP1 />} />
          <Route path="/travel" element={<Main6 />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/Transaction-Details-2" element={<Transaction />} />
          <Route path="/Send_Money" element={<SendMoney />} />
          <Route path="/currency-convertor" element={<CurrencyConvertor />} />
          <Route path="/thanks" element={<ThankYou />} />
          <Route path="/student-loan" element={<StudentLoan />} />
          <Route path="/rate" element={<Rate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
