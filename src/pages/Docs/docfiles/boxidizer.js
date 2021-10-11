const boxidizer = () => {
  return (
    <div>
      <h2 className="mb-4">Boxidizer</h2>

      <p>
        Our websites use Docker, which is a containerization platform. If you need a primer on 
        that, <a href="https://www.ibm.com/cloud/learn/docker" target="_blank" rel="noreferrer noopener">this</a> is a good place to start. In short, there are 
        many reasons our websites reside in containers. The websites don't need to access the filesystem outside of their own repo, which means that sticking them
        in containers is more secure, we can run them anywhere, so if our hardware changes, getting websites back up is as easy as installing Docker on the 
        new system, there's no need for heavier virtual machines, and Docker provides an easy way to automate the creation of an entirely new copy of our websites 
        while keeping the current copy online. I'll explain this in more detail later.
      </p>

      <p>
        Boxidizer is almost completely automated through Pilot, so you really don't <i>need</i> to know Boxidizer (from here out, I'll refer to it as bxz) commands.
        Thing is, automation can mess up, and you need to know how to fix things when they go wrong. To use bxz, you need to be logged in as <code>dock_user</code>.
        When things go wrong, it would also be a good idea to run <code>sudo chown -R dock_user:webmanagers</code> on the directory of the site you're trying to fix.
        bxz manages 3 websites:
      </p>

      <ul>
        <li>The Bioinformatics Site - <a href="http://bioinfo.usu.edu">http://bioinfo.usu.edu</a> in <code>/opt/web/bioinformatics</code></li>
        <li>The BioinfoCore Site - <a href="http://bioinfocore.usu.edu">http://bioinfocore.usu.edu</a> in <code>/opt/web/bioinfocore</code></li>
        <li>The Biocluster Site - <a href="http://biocluster.usu.edu">http://biocluster.usu.edu</a> in <code>/opt/web/biocluster</code></li>
      </ul>

      <p>
        The website codenames are just bioinformatics, bioinfocore, and biocluster. The port map is below:
      </p>

      <ul>
        <li>bioinfocore - 3000</li>
        <li>bioinformatics - 3010</li>
        <li>biocluster - 3020</li>
      </ul>

      <p>
        Currently, the Biocluster site doesn't work because of the Apache config (more on this later), but the most important sites are the Bioformatics and BioinfoCore sites. 
      </p>

      <p>
        bxz's role is to give us an easy way to start, restart, and update our websites. I'm going to go over the process for updating our websites, but these steps
        will be the emergency button. Boxidizer is very stable, but don't completely bet on it. Thigns will fail. With that being said, here's how to update a
        website and Dockerize it. If you just need to get a site running without updating it, ignore the update part.
      </p>

      <ul>
        <li>To update the site, run <code>git pull origin master && npm i</code> as <code>dock_user</code> in the right directory</li>
        <li>Go ahead and build the image with <code>docker build . -t dock_user/codename</code> </li>
        <li>Run the image in a container with <code>docker run -p 3000:port</code>, where the port is the port from the portmap (3020 for biocluster, etc.)</li>
      </ul>

      <p>
        Don't worry about cleaning up after Docker, there's a cron script that automatically does every day at 4 AM.
      </p>

      <h4>Commands</h4>

      <p>
        Now that you're aware of the under-the-hood aspects of bxz, you'll want to know the commands that allow you to start and update our websites 
        in a much safer way.
      </p>

      <ul>
        <li><code>bxz start codename</code> - Starts the website if it's not already running</li>
        <li><code>bxz update codename</code> - Updates the website if it's already running</li>
      </ul>

      <p>
        I've explained what the <code>start</code> command does above, but <code>update</code> command is a little more complex. The update command basically
        runs a <code>git pull</code>, an <code>npm i</code>, then it builds a container. If it successfully builds the container, it will stop the previous
        one, start the new one, and if that's successful, it will remove the old one. Again, Boxidizer handles all of this, you just need to type in one command.
      </p>
    </div>
  )
}

export {boxidizer};
