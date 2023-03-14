import React from "react";

function Refundpolicy() {
  return (
    <div className="refundpolicy">
      <div
        className="refundpolicy"
        style={{
          backgroundSize: "cover",
          height: "400px",
          textAlign: "center",
          alignItems: "center",
          backgroundImage: `url(
       "https://www.travelandleisure.com/thmb/iSGDtdvKHv2zyJ3UBZ1mp7KV66E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/flight-landing-INBNDCHECK1117-bbcbdbdd91f7480693283cd88393b3ff.jpg"
 
      )`,
          backgroundPosition: "center center",
        }}
      >
        Our Policy
      </div>
      <div className="policy_list">
        <h2>Refund Policy</h2>
        <ul>
          <li>
            It is compulsory to get in touch with Wing In Travel Advisory for
            all refunds, as the airline will not be able to refund customer
            tickets booked at trianfly.com
          </li>
          <li>
            All cancellations made directly with the Airline need to impart the
            details to Wing In Travel by Email or Phone in order to initiate the
            refunds process.
          </li>
          <li>Processing time for cancellation and refund requests vary.</li>
          <li>
            Convenience fees paid at the time of booking is a non-refundable fee
            and same shall be applicable on all cancellations including any
            partial cancellation requests.
          </li>
          <li>
            The refund will be credited back to the same account from where the
            payment was made. For example, if the User used a credit card,
            Company will make an appropriate charge reversal. If the User used a
            debit card, Company will credit the money back to the debit card.
          </li>
          <li>
            In case, where the user has cancelled his/her booking directly with
            the airlines, he/she will need to inform Company with valid
            documentation to initiate the refund process. It is advisable to
            contact Company within 48 hours of the cancellation request.
          </li>
          <li>
            The meal amount is non-refundable. (Refundable only if the flight is
            cancelled by the airlines).
          </li>
          <li>
            Company will be able to initiate customer's refund only after
            receipt and/or confirmation of refund from the airline.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Refundpolicy;
