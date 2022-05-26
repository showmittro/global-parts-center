import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className='py-10 px-12'>
        <h2 style={{color:'green'}} className='text-1xl font-bold'>Make an Admin</h2>
        <form onSubmit={handleAdminSubmit} className='mt-3'>
            <input
              className='w-80 p-2 rounded'
              style={{border:'1px solid green'}}
                label="Email"
                type="email"
                name='email'
                onBlur={handleOnBlur}
                />
            <button style={{background:'green',color:'#ffff',marginLeft:'10px'}}  className="font-bold rounded p-2 -2"
            
            type="submit">Make Admin</button>
        </form>
        {success && <div class="alert alert-success shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span> Made Admin successfully!</span>
  </div>
</div>}
    </div>
    );
};

export default MakeAdmin;