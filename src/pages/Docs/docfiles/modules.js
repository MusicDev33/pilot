const modules = () => {
  return (
    <div>
      <h2 className="mb-4">Modules</h2>
      
      <p>
        On your local system, you can install everything globally (through yum/apt, or just with root) and there aren't really any consequences. This is 
        totally fine locally, but on the HPC, we can't just be installing packages willy-nilly (if they're even available as yum packages in the first place).
        Instead, we install them as modules, and every user can load them with <code>module load modulename</code> to put them in their path. This software all
        goes into the <code>/opt/software</code> directory while the module files go into <code>/opt/modulefiles</code>. We'll go over module files later.
      </p>

      <p>
        Something to keep in mind is that all these modules must be installed from source. The content of the modules must be contained within that
        <code> software</code> folder. Keep in mind this applies to tooling that developers use too. This includes things like Python, PHP, Anaconda, etc. 
      </p>

      <h4>Modulefiles</h4>

      <p>
        Module files are written in Tcl. It's not really important that you know Tcl itself, but rather how modules are composed. In 
        the <code>/opt/modulefiles</code> folder, there's a file called <code>template</code>. To make a new module, copy that file and 
        replace the fields with the information for the new module. Make sure the new module has its own folder, which contains 
        subfolders for the different versions. You can check other folders to see how this is set up.
      </p>
    </div>
  );
}

export {modules};