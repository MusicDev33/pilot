const modules = () => {
  return (
    <div>
      <h2 className="mb-4">Modules</h2>
      <p>
        Hello! These are the docs for all the various systems that I (Shelby McCowan) have built in my time as the SysAdmin for this facility. As the SysAdmin, your job is to 
        constantly improve the HPC, and many 'obvious' ways to do that might come with various drawbacks. Of course we need automated backups, of we need ways to keep
        the websites up and running, of course we need ways to parse through various log files, we need to know when things go wrong, the list goes on. 
      </p>

      <p>
        There are, of course, tools required to do these things. Not any specific tools, but you will use some set of tools to accomplish these tasks,
        whether it's Bash/AWK scripts, cron stuff, some language for embedded systems like C or Rust, or JavaScript/TypeScript. And when you make the decision to
        use those tools, you're making a bet. Will the next person in line know how to use these tools? Will they be able to maintain or manage them?
        What happens when they go down? 
      </p>

      <p>
        This is just a glimpse into the rationale that I have used for deciding on our current tech stack. I figured the chance of the next SysAdmin having JavaScript
        knowledge is higher than pretty much any other language except maybe Python. It's also a fairly easy language to learn, and there are tons of resources out
        there to learn various aspects of the language, and these resources are always very accessible. I really can't say the same for Rust...
      </p>

      <p>
        With that being said, all the services I have created are in JavaScript/TypeScript. I will be mainly going over how to maintain and manage the services
        but if you want to extend them, you'll want to learn JS/TS. 
      </p>
    </div>
  );
}

export {modules};