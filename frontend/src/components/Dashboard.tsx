import axios from 'axios';
import { useEffect, useState } from 'react';

function Dashboard() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/dashboard', { withCredentials: true })
            .then(res => setMessage(res.data.message))
            .catch(err => setMessage('Access Denied'));
    }, []);

    return (
        <div className="p-4 ">
            <h1 className="text-xl font-bold text-amber-300">Welcome</h1>
            <p className='text-green-600'>{message}</p>
        </div>
    );
}

export default Dashboard;