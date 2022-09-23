import { useRouter } from "next/router";

function User({user}) {
    const {query} = useRouter()
    console.log(query);
    return ( 
        <>
            <h1>{user.name}</h1>
        </>
     );
}

export default User;


export async function getServerSideProps({params}) {

    console.log(params);

    const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await responce.json()
    
    return {
      props: {user},
    }
}
