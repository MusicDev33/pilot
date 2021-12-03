const vms = () => {
  return (
    <div>
      <h2 className="mb-4">Virtual Machines</h2>
      <p>
        Security is very important to modern HPC clusters. You need to protect the HPC from the outside world, but you also need to make sure 
        that you're protected from within as well. Sure, researchers might not being trying to hack into the servers, but they can accidentally do things 
        that use up massive amounts of resources which then can affect the HPC's performance. There are various ways of mitigating this problem,
        and virtual machines (VMs) are just one way of doing this. 
      </p>

      <h4>Upsides</h4>

      <p>
        I've already somewhat explained the 'why' above, but there are more specific reasons. When a student is given a VM and they max out its resources,
        this doesn't affect the cluster because there's a max amount of resources that gets allocated to the VM. No more resources get allocated even if the 
        VM is using all its RAM and storage. We can also deploy multiple projects to one VM as well, making certain aspects of deployment easier. Another added 
        benefit of the VMs is that it gives students a way of testing out their software directly on the cluster so that deployment is as easy as opening
        up ports and forwarding.
      </p>

      <h4>Downsides</h4>

      <p>
        We're actually currently looking at moving away from VMs, and toward containerization via Docker. A problem with the VMs is even though we can limit the 
        resource usage, they still require lots of resources because you're basically running an entire virtual operating system. This means your software is
        less portable because you need an instance of a specific operating system running instead an OS-agnostic container. It's also faster to spin up containers
        than VMs. We can then reduce the need for a workstation on the HPC and students can test their software in containers on their local workstations. 
        If it works, then it'll work on the cluster. Backups are also much easier and faster with containers, so for our use case, containers make much more sense.
      </p>
    </div>
  );
}

export {vms};