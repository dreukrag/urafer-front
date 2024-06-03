import { DefaultButton } from "../_components/buttons";

export default async function Contact() {
  return (
    <main className="flex flex-col justify-center p-24 text-textPrimary">
      <h1 className="mt-24 text-center text-4xl font-bold">
        We'd be glad to get your message!
      </h1>
      <h2 className="mt-8 text-center text-2xl font-bold">
        You can contact the Uranium Fever developers by filling up the following
        form:
      </h2>

      <div className="bg-backgroundSecondary rounded-lg mt-6 w-1/2 mx-auto">
        <form className="flex flex-col p-4 gap-4">
          <label>Your name</label>
          <input className="border-b-4 rounded-sm bg-backgroundSecondary border-background focus:border-backgroundDarkSecondary focus:outline focus:outline-offset-2 focus:outline-backgroundDarkSecondary focus:outline-2 w-1/2"></input>
          <label>Subject</label>
          <input className="border-b-4 rounded-sm bg-backgroundSecondary border-background focus:border-backgroundDarkSecondary focus:outline focus:outline-offset-2 focus:outline-backgroundDarkSecondary focus:outline-2 w-1/2"></input>
          <label>Your e-mail</label>
          <input className="border-b-4 rounded-sm bg-backgroundSecondary border-background focus:border-backgroundDarkSecondary focus:outline focus:outline-offset-2 focus:outline-backgroundDarkSecondary focus:outline-2 w-1/2"></input>
          <label>Your message</label>
          <textarea className="border-b-4 rounded-sm outline outline-1 outline-offset-2 min-h-16 outline-backgroundSecondary bg-backgroundSecondary border-background focus:border-backgroundDarkSecondary focus:outline  focus:outline-backgroundDarkSecondary focus:outline-2 "></textarea>
          <DefaultButton extendClassName className="mx-auto">Send message</DefaultButton>
        </form>
      </div>
      <p className="mt-4 w-full text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dicta
        quos asperiores. Recusandae non consequatur ab tenetur magni quasi
        quibusdam cumque sit quae optio, ratione aliquid! Officiis consectetur
        quod eum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
        inventore, ea, ratione nisi recusandae labore beatae sunt vel quae
        consectetur distinctio explicabo earum repudiandae, blanditiis molestiae
        quam laudantium sequi quaerat!
      </p>
    </main>
  );
}
