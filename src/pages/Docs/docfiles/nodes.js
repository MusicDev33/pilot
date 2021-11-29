const nodes = () => {
  return (
    <div>
      <h2 className="mb-4">Nodes</h2>
      <p>
        So if you've been into the server room, you've probably asked yourself what all the wires are for, and this is where we'll answer that question.
        The first thing you need to know is why there are wires in the first place. What are we trying to achieve when we install a node? Each node 
        needs to connect to the following:
      </p>

      <ul>
        <li>The internet</li>
        <li>Other nodes</li>
        <li>The KVM switch</li>
        <li>Power</li>
      </ul>

      <p>
        They also need the ACT software to be running on them as well. Don't worry about the specifics here, as our nodes come with all the software on them. 
        SLURM also needs to be up and running on the node. Ideally, the node gets connected to Pilot so you can check uptime as well.
      </p>
      
    </div>
  );
}

export {nodes};