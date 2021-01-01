import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {

  return (
    <div className='header'>
      <p className='header__title'>Bhupendra Kiyawat</p>
      <div className = "sub__header">
        <Link to='/Investment' className = " header__button--title linklink">
          INVESTMENT
        </Link>
        <Link to='/Insurance' className = " header__button--title linklink">
          INSURANCE
        </Link>
        <Link to='/Loan' className = "header__button--title linklink">
          LOAN
        </Link>
        <Link to='/Disclaimer' className = "header__button--title linklink">
          DISCLAIMERS
        </Link>
      </div>
    </div>
  );
}
