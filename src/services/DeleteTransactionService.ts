import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionReposiory = getCustomRepository(TransactionRepository);
    const transaction = await transactionReposiory.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction not found.');
    }

    await transactionReposiory.remove(transaction);
  }
}

export default DeleteTransactionService;
