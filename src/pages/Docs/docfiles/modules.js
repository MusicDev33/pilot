const modules = () => {
  return (
    <div>
      <h2 className="mb-4">Modules</h2>
      
      <p>
        On your local system, you can install everything globally (through yum/apt, or just with root) and there aren't really any consequences. This is 
        totally fine locally, but on the HPC, we can't just be installing packages willy-nilly (if they're even available as yum packages in the first place).
        Instead, we install them as modules, and every user can load them with <code>module load modulename</code> to put them in their path. This software all
        goes into the <code>/opt/software</code> directory while the module files go into <code>/opt/modulefiles</code>. We'll goover module files later.
      </p>
    </div>
  );
}

export {modules};