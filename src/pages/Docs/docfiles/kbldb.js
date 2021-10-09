const kbldb = () => {
  return (
    <div>
      <h2 className="mb-4">KBLDB</h2>

      <p>
        KBLDB is a very important service. Automated emails, appointments, pretty much everything Pilot needs, and more is all bundled within KBLDB. 
        This service has pretty much become eyes and ears for the HPC. pm2 is the tool used to manage the services on the HPC. There are two users (as of Oct 8, 2021)
        that manage services. They are me (<code>smccowan</code>) and <code>dock_user</code>. To manage KBLDB, you need to be logged in as a user that owns it.
        Currently, this is <code>smccowan</code>.
      </p>

      <p>
        Some quick commands:
      </p>

      <ul>
        <li><code>pm2 start npm --name=kbldb --run prod</code></li>
        <ul>
          <li>Starts KBLDB. Must be in the <code>/opt/internal/kbldb</code> directory.</li>
        </ul>

        <li><code>pm2 restart kbldb</code></li>
        <ul>
          <li>Restarts KBLDB. KBLDB must already be running for this to work. Can be run from anywhere.</li>
        </ul>

        <li><code>npm run update</code></li>
        <ul>
          <li>This will update KBLDB. You only need to run this if you've pushed new changes to GitHub. You must be in <code>/opt/internal/kbldb</code> for this to work.</li>
        </ul>

        <li><code>npm outdated</code></li>
        <ul>
          <li>This will show you outdated packages. Must be run in the <code>/opt/internal/kbldb</code> directory.</li>
        </ul>
      </ul>

      <p>
        To update KBLDB (add your own functionality) you'll need to have a copy on your machine and push changes to the GitHub repo from there. Once you've 
        pushed your changes, you'll need to run <code>npm run update</code>, described above. If you can, try to keep packages updated, but don't get too aggressive.
        An example is the <code>passport</code> package. Currently, the version number is 0.4.1, but when I bump it to 0.5.0, KBLDB breaks. This shouldn't be a
        breaking change according to <a href="https://semver.org" target="_blank" rel="noopener noreferrer">SemVer</a>, but not everybody abides by it. 
      </p>

      <p>
        I strongly recommend <b>not</b> to upgrade major versions (X.0.0) for packages unless you know KBLDB well and TypeScript well. If not, leave the packages
        as they are. If you upgrade a minor version (0.X.0) and things break, just undo the change and don't push. Patch updates (0.0.X) should never break anything.
        Long story short, keep KBLDB running. This is a very important service. 
      </p>
    </div>
  )
}

export {kbldb};
