export default async function About() {
  return (
    <main className="flex flex-col justify-center p-24 text-textPrimary">
      <h1 className="mt-24 text-center text-4xl font-bold">
        Welcome to Uranium Fever
      </h1>
      <h2 className="mt-8 text-center text-2xl font-bold">
        What is Uranium Fever?
      </h2>
      <p className="mt-8 w-full text-base">
        Uranium Fever is a web text-based RPG, with the UI and gameplay
        reminiscient of a MUD like HellMoo. This started as a learning project
        for me to get better at handling Next.JS while also learnign quite a bit
        about backend and DevOps in order to run this!
      </p>
      <h2 className="mt-4 text-center text-2xl font-bold">
        What about the setting?
      </h2>
      <p className="mt-8 w-full text-base">
        Uranium Fever takes place in a setting of my own invention, heavily
        influenced by Battletech and Mass Effect and events of the mid 2000s.
      </p>
      <p>
        Azure Station is an asteroid mining facility within the Azure system
        somewhere in the milkway specialized in the mining and processing of
        uraniun ore, vital fuel for most ships reactors. The station is vital to
        the galactic economy due to the Azure's system location and close
        proximity to major routes. But that's only recently.
      </p>
      <p>
        Before all of this Azure was once a pirate-haven, with the incredibly
        rich asteroid belts of the system supplying the pirate fleets infesting
        the universe with plenty of fuel and acting as a safe hub for them.
        After one too many attacks the Coalition Provisional Government was
        established to take over and administer the Azure system. The facade of
        civilization was stretched over the system, but it didn't penetrate that
        far. Azure station remains a lawless place.
      </p>
    </main>
  );
}
