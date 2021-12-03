const databases = () => {
  return (
    <div>
      <h2 className="mb-4">Databases</h2>
      <p>
        Students need various databases (DBs) to be able to do their work. These databases are often massive (terabytes in size) and having students download
        these over and over again uses bandwidth and eats up storage space. This is why we offer databases from a central location. This location 
        is in the <code>/home/shared_dbs</code> folder. Any bioinformatics databases we want to offer centrally are available here. 
      </p>

      <h4>MongoDB</h4>

      <p>
        The way we use MongoDB on the cluster is very different than the way the other databases are handled. The other databases all have the necessary
        data inside already. MongoDB is what we use to collect data from various software across the HPC, from letting people create appointments
        and contact us to tracking uptime and various system metrics. <b>This needs to stay running at all costs!</b>
      </p>
    </div>
  );
}

export {databases};