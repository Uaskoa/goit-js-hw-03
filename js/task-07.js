

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
let id = 100000;

const getId = function () { 

  return id += 1;
} 



const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
      return {
        id: getId(),
        type,
        amount,
        }
        
    },
    
     
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    
    if (typeof amount !== 'number' || amount <= 0) { 
      console.log("Impossible to proceed");
      return;
    }
    
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    this.balance += amount; 
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
      if (typeof (amount) !== "number" || amount <= 0) {
        return console.log("Impossible to proceed");
        ;
      
      }
    
    if (amount > this.balance) { 
      return console.log("Not enough funds");
      ;
      
    }

     this.transactions.push(
       this.createTransaction(amount, Transaction.WITHDRAW)
    );
    
    this.balance -= amount;

  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {

    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {

    for (const transaction of this.transactions) { 
      if (id !== transaction.id) continue;
      return transaction;
    }

    return null;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {

    let sum = 0;
    for (const transaction of this.transactions) {
      if (type !== transaction.type) continue;
      sum += transaction.amount;
    }
    return sum;
  },
};


// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы
// для работы с балансом и историей транзакций.


console.log(account.getBalance());
account.deposit(1000)
account.deposit(500);
console.log(account.getBalance());
account.withdraw(800)
account.withdraw(40);
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.transactions);
console.table(account.transactions);
console.log(account.getTransactionDetails(100002));