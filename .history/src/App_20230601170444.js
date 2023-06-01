/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exchange from "./Pages/Exchange";
import StudentLoan from "./Pages/Studentloan";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import Remittance from "./Pages/Remittance";
import Transaction from "./Pages/Transaction";
import SendMoney from "./Pages/SendMoney";
import CurrencyConvertor from "./Pages/CurrencyConvertor";
import ThankYou from "./Pages/ThankYou";
import Rate from "./Pages/Rate";
import ForeignCurrency from "./Pages/ForeignCurrency";
import EducationalLoans from "./Pages/EducationalLoans";
import TransactionDetails from "./Pages/TransactionDetails";
import Travel from "./Pages/Travel";

// Cs
import "./Style/Header.css";
import "./Style/Layout.css";
import "./Style/Component.css";
import "./Style/Footer.css";
import "./Style/Responsive.css";
import './Style/Mobile.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/Foreign-Currency" element={<ForeignCurrency />} />
          <Route path="/Educational-Loans" element={<EducationalLoans />} />
          <Route path="/Remittance" element={<Remittance />} />
          <Route path="/Transaction-Details" element={<TransactionDetails />} />
          <Route path="/travel" element={<Travel />} />
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
