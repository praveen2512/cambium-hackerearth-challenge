const express = require('express')
const router = express.Router()
const Loan = require('../../../models/auth/Loan')

router.get('/',(req,res)=>{
    Loan.find({}).then(loans=>{
        res.json({loans})
    })
})
router.get('/:id',(req,res)=>{
    Loan.find({member_id:req.params.id}).then(loan=>{
        if(loan.length < 0){
            console.log(loan)
            res.status(404).json({msg:'Member not found'})
        }else{
            res.status(200).json(loan)
        }
    })
})
module.exports = router