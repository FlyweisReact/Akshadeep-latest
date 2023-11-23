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
import TransactionDetail3 from "./Pages/Transaction-details3";
import TransactionDetail4 from "./Pages/TransactionDetails4";
import TransactionDetail5 from "./Pages/TransactionDetail5";
import TransactionDetail6 from "./Pages/TransactionDetail6";
import DemandDraft from "./Pages/DemandDraft";
import Travel from "./Pages/Travel";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";
import "./Style/Header.css";
import "./Style/Layout.css";
import "./Style/Component.css";
import "./Style/Footer.css";
import "./Style/Responsive.css";
import "./Style/Mobile.css";
import BankDetails from "./Pages/BankDetails";
function App() {
  return (
    <>
      <ReactNotifications />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Remittance />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/Foreign-Currency" element={<ForeignCurrency />} />
          <Route path="/Educational-Loans" element={<EducationalLoans />} />
          <Route path="/Remittance" element={<HomePage />} />
          <Route path="/Transaction-Details/:id" element={<TransactionDetails />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/Transaction-Details-2" element={<Transaction />} />
          <Route path="/Send_Money" element={<SendMoney />} />
          <Route path="/currency-convertor" element={<CurrencyConvertor />} />
          <Route path="/thanks" element={<ThankYou />} />
          <Route path="/student-loan" element={<StudentLoan />} />
          <Route path="/rate" element={<Rate />} />
          <Route path="/Transaction-Details-3" element={<TransactionDetail3 />} />
          <Route path="/Transaction-Details-4" element={<TransactionDetail4 />} />
          <Route path="/Transaction-Details-5/:id" element={<TransactionDetail5 />} />
          <Route path="/Transaction-Details-6" element={<TransactionDetail6 />} />
          <Route path="/Demand-Draft" element={<DemandDraft />} />
          <Route path="/bank_details" element={<BankDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
