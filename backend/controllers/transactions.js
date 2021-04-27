const Transaction = require('../model/Transaction')


// @desc    GET all transactions
// path     GET /api/v1/transactions
// access   public
// async is added because connection db returns Promise
exports.getTransactions = async (req, res, next) => {

    try {

        const allTransactions = await Transaction.find()    // find() returns all transaction values

        return res.status(200).json({
            success: true,
            count: allTransactions.length,
            data: allTransactions
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Sever Error'
        })
    }

    // res.send('GET transactions')
}

// @desc    POST add a new transaction
// path     POST /api/v1/transactions
// access   public
exports.addTransaction = async (req, res, next) => {

    const { text, amount } = req.body   // for this to work.. makes sure you have added app.use(express.json()) middleware in server.js

    try {

        const newTransaction = await Transaction.create(req.body)

        res.status(201).json({
            success: true,
            data: newTransaction
        })

    } catch (error) {

        console.log('errors', error)
        if (error.name === 'ValidationError') {

            // loop through errors and get validation error messages
            const messages = Object.values(error.errors).map(val => val.message)

            return res.status(400).json({
                success: false,
                errors: messages
            })

        } else {
            return res.status(500).json({
                success: false,
                error: 'Sever Error'
            })
        }


    }

    // res.send('add new transaction')
}

// @desc    POST delete a transaction
// path     POST /api/v1/transaction/:id
// access   public
exports.deleteTransaction = async (req, res, next) => {

    try {
        const transactionToDelete = await Transaction.findById(req.params.id)

        if (!transactionToDelete) {

            return res.status(404).json({
                success: false,
                error: 'No Transaction found'
            })

        } else {

            await transactionToDelete.remove()

            res.status(200).json({
                success: true,
                data: {}
            })

        }

    } catch (error) {

        return res.status(500).json({
            success: false,
            error: 'Sever Error'
        })

    }
    res.send('delete a transaction')
}