import Users from "@/containers/users-page";
import { API_KEY } from "@/secret";
import axios from "axios";

const Page = async () => {
    const { data } = await axios.get(`${API_KEY}/users`)
    const { data: userData } = data || {};
    return (
        <>
            <Users data={userData || []} />
        </>
    )
}

export default Page;