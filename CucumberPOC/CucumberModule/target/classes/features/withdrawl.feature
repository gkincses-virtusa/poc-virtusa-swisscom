Feature: Withdraw amount
    Scenario Outline: Try to withdraw <Withdrawl> amount
        Given I have <Balance> in my account
        When When I choose to withdraw the amount <Withdrawl>
        Then I received <Received>
        And the balance of my account should be <Remaining>
        And the outcome is <Outcome>
    Examples:
    | Balance | Withdrawl | Received | Remaining | Outcome |
    | $500 | $50 | $50 | $450 | received $50 cash |
    | $200 | $60 | $60 | $140 | received $60 cash |
    | $100 | $200 | $0 | $100 | received an error |
