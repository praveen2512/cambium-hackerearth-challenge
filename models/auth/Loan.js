const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoanSchema = new Schema({
  member_id: {
    type: String
  },
  loan_amnt: {
    type: String
  },
  funded_amnt_inv: {
    type: String
  },
  term: {
    type: String
  },
  int_rate:{
      type:String
  },
  installment:{
      type:String
  },
  grade:{
    type:String
  },
  emp_title:{
      type:String
  },
  emp_length:{
      type:String
  },
  home_ownership:{
      type:String
  },
  annual_inc:{
      type:String
  },
  verification_status:{
      type:String
  },
  issue_d:{
      type:String
  },
  loan_status:{
      type:String
  },
  desc:{
      type:String
  },
  purpose:{
      type:String
  },
  title:{
      type:String
  },
  addr_state:{
      type:String
  },
  last_pymnt_d:{
      type:String
  },
  last_pymnt_amnt:{
      type:String
  }
});

module.exports = Loan = mongoose.model('loan', LoanSchema);
