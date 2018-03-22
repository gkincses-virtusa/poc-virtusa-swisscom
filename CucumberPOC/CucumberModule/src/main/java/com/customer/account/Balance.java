package com.customer.account;

public class Balance {
    private String currency = "$";
    private int balance = 0;
    private int withdrawl = 0;
    private int received = 0;
    private String outcome = "";
    private int remaining = 0;

    public int getBalance() {
        return balance;
    }
    public void setBalance(int balance) {
        this.balance = balance;
    }

    public String getWithdrawl() {
        return "$" + withdrawl;
    }

    public void setWithdrawl(int withdrawl) {
        this.withdrawl = withdrawl;
    }

    public int getReceived() {
        return received;
    }

    public int getRemaining() {
        return remaining;
    }

    public void processWithdraw() {
        remaining = balance;
        outcome = "received an error";
        if (withdrawl <= balance) {
            remaining = balance - withdrawl;
            received = withdrawl;
            outcome = "received " + currency + received + " cash";
        }
    }

    public String getOutcome() {
        return outcome;
    }
}
