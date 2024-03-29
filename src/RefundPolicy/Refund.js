import React from 'react';
import "./Refund.css";

const Refund = () => {
    return (
        <div className="privacy-container">

            <h3>Refunds</h3>
            <p>We offer a 3-days money-back guarantee on all our products. If you're not satisfied with your purchase for any reason, you may return it for a full refund within 3 days of the purchase date.</p>

            <h3>Refund Process</h3>
            <ul>
                <li>Contact us at <a href="mailto:tsiddu805@gmail.com">tsiddu805@gmail.com</a> / <a href="tel:+919347877159">9347877159</a> to initiate the refund process</li>
                <li>Our customer support team will provide you with further instructions on returning the item</li>
                <li>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</li>
                <li>If your refund is approved, it will be processed, and a credit will automatically be applied to your credit card or original method of payment within 3 days</li>
            </ul>

            <h3>Exchanges</h3>
            <p>If you need to exchange an item for a different one, please contact us at <a href="mailto:tsiddu805@gmail.com">tsiddu805@gmail.com</a> / <a href="tel:+919347877159">9347877159</a>. You will be responsible for any price difference and shipping costs associated with the exchange.</p>

            <h3>Non-Refundable Items</h3>
            <p>Certain items are non-refundable, including:</p>
            <ul>
                <li>Digital downloads</li>
                <li>Gift cards</li>
            </ul>

            <h3>Cancellation Policy</h3>
            <p>We understand that circumstances may change, and you may need to cancel your order. You can cancel your order within 24 hours of placing it by contacting us immediately via email or phone. Please note that after this period, cancellations may not be possible as the order may have already been processed and shipped. We strive to accommodate your needs to the best of our ability and appreciate your understanding.</p>
        </div>
    )
}

export default Refund;
