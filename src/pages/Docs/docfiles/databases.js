const databases = () => {
  return (
    <div>
      <h2 className="mb-4">Databases</h2>
      <p>
        Students need various databases (DBs) to be able to do their work. These databases are often massive (terabytes in size) and having students download
        these over and over again uses bandwidth and eats up storage space. This is why we offer databases from a central location. This location 
        is in the <code>/home/shared_dbs</code> folder. Any bioinformatics databases we want to offer centrally are available here. 
      </p>
    </div>
  );
}

export {databases};