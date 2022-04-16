import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
        <Link to='/'>
            <button className='bg-secondary m-2 rounded'>Back To Hoom</button>
        </Link>
        <div className='text-center'>
        <img className='w-75'
          src='https://kicksdigitalmarketing.com/wp-content/uploads/2019/09/iStock-1142986365.jpg'
          alt=''
        />
      </div>
      </div>
    );
};

export default NotFound;