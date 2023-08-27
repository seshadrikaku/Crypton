import React, { useState } from "react";
import seshi from '../img/seshi.jpg';
import nagoor from '../img/nagoor.jpg'
import balu from '../img/balu.jpg'
import guru from '../img/guru.jpg'
import venky from '../img/venky.jpg'
import mahendra from '../img/mahi.jpg'
import vamsi from '../img/vamsi.jpg'
import kanna from '../img/annna.jpg'
import madhu from '../img/madhu.jpg'

const Transaction = () => {
  const [info, setInfo] = useState([
    { id: 1, img_Url: seshi, Name: "Seshadri", date: "22 Aug 2023", time: "06:23PM", Transactiontype: "Received", amount: "+$13.00" },
    { id: 2, img_Url: venky, Name: "Venkatesh", date: "21 Aug 2023", time: "05:20PM", Transactiontype: "Outgoing", amount: "-$09.00" },
    { id: 3, img_Url: balu, Name: "Balu", date: "15 May 2023", time: "01:03PM", Transactiontype: "Received", amount: "+$20.00" },
    { id: 4, img_Url: mahendra, Name: "Mahendra", date: "21 Mar 2023", time: "03:03PM", Transactiontype: "Outgoing", amount: "-$13.00" },
    { id: 5, img_Url: guru, Name: "Guru", date: "04 Mar 2023", time: "03:13PM", Transactiontype: "Received", amount: "+$43.00" },
    { id: 6, img_Url: nagoor, Name: "Nagoor", date: "08 Feb 2023", time: "08:26AM", Transactiontype: "Received", amount: "+$03.00" },
    { id: 7, img_Url: kanna, Name: "Kannaiah", date: "18 Jan 2023", time: "06:32PM", Transactiontype: "Received", amount: "+$13.00" },
    { id: 8, img_Url: madhu, Name: "Madhu", date: "28 Dec 2022", time: "09:43AM", Transactiontype: "Outgoing", amount: "-$10.00" },
    { id: 9, img_Url: vamsi, Name: "Vamsi", date: "25 Apr 2022", time: "11:23AM", Transactiontype: "Received", amount: "+$25.00" }
  ]);

  return (
    <>
      <div className="container-fluid" id="container">
        <div className="row">
          <div className="col-12">
            <h2 className="h2 py-2">Last Transactions</h2>
            {info.map((transaction) => (
              <div key={transaction.id} className="transaction-item my-4">
                <div>
                  <img src={transaction.img_Url} alt="Seshadri.jpg" className="img-fluid" id="img" />
                </div>
                <div>
                  <h2 className="name">{transaction.Name}</h2>
                  <p className="date_time">
                    {transaction.date}.{transaction.time}
                  </p>
                </div>
                <div>
                  <h2 className={`amount ${transaction.Transactiontype === "Outgoing" ? "outgoing" : ""}`}>
                    {transaction.amount}
                  </h2>
                  <p className="type">
                    {transaction.Transactiontype}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
