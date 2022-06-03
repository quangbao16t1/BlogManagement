import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { useEffect, useState } from "react";
import StorageKeys from 'constants/storage-keys'
import { CurrentUser } from "types/auth.type";


const Home = (props: CurrentUser) => {

    const [user, setUser] = useState();
    const userCu = props;
    console.log(userCu);
    useEffect(() => {
        const bbbbb = localStorage.getItem(StorageKeys.user);
        if(bbbbb) {
            const userJson = (JSON.parse(bbbbb));
            setUser(userJson);
        }
    },[]);

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