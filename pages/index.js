import Head from "next/head";
import Link from "next/link";


function Index({users}) {

    console.log(users);

    return (
        <>
            <Head>
                <meta keywords={"ulbi tv, nextjs"}></meta>
                <title>Главная страница</title>
            </Head>
            {
                users.map(user => (
                <Link href={'/users/' + user.id}>                
                    <h1>{user.name}</h1>
                </Link>
                ))
            }
        </>
    );

}

export default Index;


export async function getServerSideProps(context) {

    const responce = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await responce.json()

    return {
      props: {users},
    }
}