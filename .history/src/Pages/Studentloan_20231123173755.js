/** @format */

import React, { useEffect, useState } from "react";
import img from "../Images/a-52.png";
import img2 from "../Images/a-53.png";
import img5 from "../Images/a-56.png";
import Header from "../components/Layout/Header";
import { useParams } from "react-router-dom";
import { get_loan_byId } from "../Respository/Repo";

const StudentLoan = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    get_loan_byId(id, setData);
  }, [id]);

  return (
    <>
      <Header />
      <div className="sl-cont-1">
        <img src={img} alt="" />
        <div className="sl-cont-1-sub">
          <h3>Student Loan Scheme</h3>
          <hr />
          <p> {data?.para1} </p>
          <p> {data?.para2} </p>
        </div>
      </div>
      <hr />

      <div className="sl-cont-2">
        {data?.moreInformation?.length > 0 && (
          <div className="sl-cont-2-r">
            <div className="sl-right-pad">
              {data?.moreInformation?.map((i, index) => (
                <div className="sl-right-cont" key={`loan${index}`}>
                  <img src={img2} alt="" />
                  <p>{i}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StudentLoan;
