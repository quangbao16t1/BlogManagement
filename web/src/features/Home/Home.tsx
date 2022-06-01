import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { useEffect, useState } from "react";
import StorageKeys from 'constants/storage-keys'


const Home = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        const bbbbb = localStorage.getItem(StorageKeys.user);
        if(bbbbb) {
            const userJson = (JSON.parse(bbbbb));
            setUser(userJson);
        }
    },[user]);

    return (
        <>
            <div style={{
                height: '100vh',
                background: 'linear-gradient(135deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);'
            }}>
                Home page
            </div>
        </>
    );

}

export default Home;