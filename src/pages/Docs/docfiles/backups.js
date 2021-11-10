const backups = () => {
  return (
    <div>
      <h2 className="mb-4">Backups</h2>
      <p>
        Backups are the backbone of our entire operation. Well, there are a few backbones. We're a little better than your average vertebrate. But the backbone we'll
        be talking about here is backups. Basically if they're not happening, then that's bad. Backups should always be happening. And automated, but we'll get to that in a bit.
        Just know that this is a very important task, and it should be a high priority at all times. HPcs have many moving parts, and things break. Whatever, no biggie.
        Unless you don't have backups. That's a real problem. Here's how we deal with that.
      </p>

      <h2 className="mb-4">Rsync</h2>
      <p>
        There are two places where we store backups: NAS1 and NAS2. NAS1 holds long term backups, and NAS2 holds weekly backups. They're stored in different formats
        too. NAS1 holds backups in <code>.tar.gz</code> format, while NAS2 just holds straight copies of the data. If someone's missing data, you can go find it in
        NAS2 and just copy straight into their directory. No unzipping required. These copies are created via Rsync, with massive custom commands in order to reduce
        the useless data being copied. For future reference, we try to minimize how many <code>.folders</code> we back up. This is because these folders often contain
        a ton of useless data, like various caches and configs. Rsync backups happen every Sunday at 1 AM. 
      </p>

      <h2 className="mb-4">Archives</h2>
      <p>
        Archives are stored on NAS1. These are monthly backups, and are currently not completely automated. These archives take a while to create, so 
      </p>
    </div>
  );
}

export {backups};