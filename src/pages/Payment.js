import { React, useRef, useState } from 'react';
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';

import qr from '../assets/qr/qr.jpeg';

import './Payment.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '60vh',
        width: '60vw',
        maxHeight: '90vh',
        overflowY: 'auto',
        background: 'linear-gradient(to right, #ece9e6, #ffffff)', // Stylized background for the modal
        border: 'none', // Remove default border
        borderRadius: '10px', // Rounded corners for the modal
        padding: '0', // Remove default padding
    },
};

Modal.setAppElement(document.getElementById('root'));

function Payment(props) {
    const form = useRef();
    const [quantity, setQuantity] = useState(1);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_434', 'template_hzifybm', form.current, {
            publicKey: 'H3DIjlFAfqrLosBVX',
        })
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='payment' id="payment">
            <Modal
                isOpen={props.modalIsOpen}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Payment Modal"
            >
                <div className='payment-container'>
                    <div className='payment-content'>
                        <div className='payment-details'>
                            <p>
                                Please scan the QR code to pay. Once payment is done, fill the information in the form below, attach the screenshot of payment and submit. You will receive a confirmation email once the payment is verified.
                            </p>
                            <form ref={form} onSubmit={sendEmail}>
                                <label htmlFor='product'>Product</label>
                                <input type='text' name='product' value={props.product} readOnly className="two-columns"/>

                                <label htmlFor='price'>Price</label>
                                <input type='text' name='price' value={props.price} readOnly className="two-columns"/>

                                <label htmlFor='quantity'>Quantity</label>
                                <input type='number' name='quantity' placeholder='Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} required className="two-columns"/>

                                <label htmlFor='total'>Total</label>
                                <input type='text' name='total' value={props.price * quantity} readOnly className="two-columns"/>

                                <label htmlFor='screenshot'>Attach Screenshot</label>
                                <input type='file' name='screenshot' required className="two-columns"/>

                                <label htmlFor='name'>Name</label>
                                <input type='text' name='name' placeholder='Name' required className="two-columns"/>

                                <label htmlFor='email'>Email</label>
                                <input type='email' name='email' placeholder='Email' required className="two-columns"/>

                                <label htmlFor='address'>Address</label>
                                <input type='text' name='address' placeholder='Address' required className="two-columns"/>

                                <label htmlFor='phone'>Phone</label>
                                <input type='text' name='phone' placeholder='Phone' required className="two-columns"/>

                                <button type='submit' className="two-columns">Submit</button>
                            </form>
                        </div>
                        <div>
                            <div className='payment-qr'>
                                <img src={qr} alt="QR Code" />
                            </div>
                            <div className='payment-close-button'>
                                <button onClick={props.closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Payment;
