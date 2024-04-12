import styles from "./page.module.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "./auth";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  return (
    <main className={styles.main}>
      <h1>Welcome {session.user.name} to Uranium Fever</h1>
      <h2>The new top totally rad, MUD-esque-lite game from me!</h2>
      <h2>
        <span>Cass</span>
      </h2>

      <p>Uranium fever is a cool game!</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
        inventore, ea, ratione nisi recusandae labore beatae sunt vel quae
        consectetur distinctio explicabo earum repudiandae, blanditiis molestiae
        quam laudantium sequi quaerat!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        voluptatum architecto minima iste? Nobis quae facilis, ratione eum
        dolores alias molestiae nostrum, reiciendis repellendus nihil hic illum
        modi consequatur recusandae.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dicta
        quos asperiores. Recusandae non consequatur ab tenetur magni quasi
        quibusdam cumque sit quae optio, ratione aliquid! Officiis consectetur
        quod eum.
      </p>

      <button>Login with you google account!</button>
    </main>
  );
}
