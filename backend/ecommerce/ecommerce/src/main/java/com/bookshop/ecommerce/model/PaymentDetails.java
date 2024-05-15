package com.bookshop.ecommerce.model;

public class PaymentDetails {
    private String paymentMethod;
    private String status;
    private String paymentId;
    private String razorpayPaymentLinkId;
    private String razorpayPaymentLinkReferenceId;
    private String razorPayPaymantLinkStatus;
    private String razorpayPaymentId;

    public PaymentDetails() {
    }

    public PaymentDetails(String status, String paymentMethod, String paymentId, String razorpayPaymentLinkId, String razorpayPaymentLinkReferenceId, String razorPayPaymantLinkStatus, String razorpayPaymentId) {
        this.status = status;
        this.paymentMethod = paymentMethod;
        this.paymentId = paymentId;
        this.razorpayPaymentLinkId = razorpayPaymentLinkId;
        this.razorpayPaymentLinkReferenceId = razorpayPaymentLinkReferenceId;
        this.razorPayPaymantLinkStatus = razorPayPaymantLinkStatus;
        this.razorpayPaymentId = razorpayPaymentId;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getRazorpayPaymentLinkId() {
        return razorpayPaymentLinkId;
    }

    public void setRazorpayPaymentLinkId(String razorpayPaymentLinkId) {
        this.razorpayPaymentLinkId = razorpayPaymentLinkId;
    }

    public String getRazorpayPaymentLinkReferenceId() {
        return razorpayPaymentLinkReferenceId;
    }

    public void setRazorpayPaymentLinkReferenceId(String razorpayPaymentLinkReferenceId) {
        this.razorpayPaymentLinkReferenceId = razorpayPaymentLinkReferenceId;
    }

    public String getRazorPayPaymantLinkStatus() {
        return razorPayPaymantLinkStatus;
    }

    public void setRazorPayPaymantLinkStatus(String razorPayPaymantLinkStatus) {
        this.razorPayPaymantLinkStatus = razorPayPaymantLinkStatus;
    }

    public String getRazorpayPaymentId() {
        return razorpayPaymentId;
    }

    public void setRazorpayPaymentId(String razorpayPaymentId) {
        this.razorpayPaymentId = razorpayPaymentId;
    }
}
