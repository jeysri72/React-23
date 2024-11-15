import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileList = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/profiles/')
            .then(response => {
                setProfiles(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <div>
            <h1>Profile List</h1>
            <ul>
                {profiles.map(profile => (
                    <li key={profile.id}>
                        <h2>{profile.first_name}</h2>
                        <p>{profile.last_name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileList;
