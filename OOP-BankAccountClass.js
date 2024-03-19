class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount = 0) {
    this.balance += amount;

    return `Dear ${this.ownerName}, your account balance is #${this.balance}`;
  }

  withdraw(amount = 0) {
    if (amount > this.balance) {
      return `Dear ${this.ownerName}, insufficient funds. Your account balance is #${this.balance}`;
    } else this.balance -= amount;
    return `Dear ${this.ownerName}, your account balance is #${this.balance}`;
  }

  checkBalance() {
    return `#${this.balance}`;
  }

  monthlyInterest() {
    const monthlyInt = (this.balance * 1) / 100;
    return `#${monthlyInt}`;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, ownerName, balance, interestRate) {
    super(accountNumber, ownerName, balance);
    this.interestRate = interestRate;
  }

  monthlyInterest() {
    const interestEarned = (this.balance * this.interestRate) / 100;
    this.balance += interestEarned;
    return `Dear ${this.ownerName}, your interest earned for the month is #${interestEarned} and your balance is #${this.balance}`;
  }
}

const newBankAccount = new SavingsAccount(
  "0113022056",
  "Adeniyi Samuel",
  2000,
  3
);

console.log(newBankAccount.monthlyInterest());
console.log(newBankAccount.deposit(1000));
console.log(newBankAccount.deposit(1000));
console.log(newBankAccount.withdraw(100));
console.log(newBankAccount.checkBalance());
