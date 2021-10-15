const raikou = () => {
  return (
    <div>
      <h2 className="mb-4">Raikou</h2>

      <p>
        Raikou is slowly becoming more important for our web presence. With Raikou, we can customize images served from it, which includes things like
        cropping, changing dimensions and aspect ratios, and some basic CSS image manipulation by just using the url. Raikou serves as a centralization of 
        our images so we can serve them all from the same place. This allows us to keep images in one place without copying them to different websites, and
        on top of that, we can manipulate them easily without ever having to go open up CSS docs or opening up an image editor.
      </p>

      <p>
        There are two parts to Raikou, the <a href="http://bioinfocore.usu.edu/rkfe/" rel="noreferrer" target="_blank">front end</a> and
        the <a href="http://bioinfocore.usu.edu/raikou/" target="_blank" rel="noreferrer">back end</a>.
      </p>

      <h4>Front End</h4>

      <p>
        The front end is pretty self-explanatory. You can just click on an image or folder. Clicking on images will open them in a new tab. It's not exactly finished
        but it does still serve its purpose. The back end is really where things start getting a little complicated.
      </p>

      <h4>Back End - REST APIs</h4>

      <p>
        The back end is a REST API. You should probably know what that term means, as it's pretty much how every web service here works, whether it was made by me
        or by a researcher. A REST API gives us a way to interact with a server to make it do stuff. Let's say we have a server that can create users and also allows
        us to get users by their ID. For this example, this hypothetical server is located at <code>test.com/api</code>. To create a user, there might be an endpoint 
        at <code>test.com/api/users/add</code>, and we would send a post request (not super important what that means right now) to create a user. Maybe we create a user with the
        ID of 'itsme'. We could then send a get request to <code>test.com/api/users/id/itsme</code> and get our user from the server. This gives us a convenient way to 
        instruct the server just by using web URLs. 
      </p>

      <h4>Back End - Raikou</h4>

      <p>
        Now that we have somewhat of an understanding of how web servers work, it's now time to explain how Raikou works 
        (there should also be official docs, we'll see if I finish those by the time I leave). Raikou is served 
        from <a href="http://bioinfocore.usu.edu/raikou">http://bioinfocore.usu.edu/raikou/</a>. Any url paths talked about here should be assumed to be at the end of 
        that url. The first path is <code>/header-img</code>. This is the header image seen on the Bioinfo site, and changes automatically based on the season.
        This one isn't super important, but know it's there. There are three other important paths, and they will be discussed below.
      </p>

      <h4>Back End - Image Only</h4>

      <p>
        The <code>/image</code> prefix is for just getting an image without any modifications. Try clicking 
        here: <a href="http://bioinfocore.usu.edu/raikou/image/biocluster/dna.jpg" target="_blank" rel="noreferrer">http://bioinfocore.usu.edu/raikou/image/biocluster/dna.jpg</a>. 
        Notice that after <code>/image</code> there is a file path. You're not going to remember these, so for this, it's best to use the front end to get your
        URLs. 
      </p>

      <h4>Back End - Raw Processing</h4>

      <p>
        This is for when you don't want to change the aspect ratio of the image but you still need to change the dimensions. There are a few parameters you'll need 
        to input into the URL. Those are the width, height, and the position (though position is optional). Let's take the following URL:<br></br><br></br>

        <code>http://bioinfocore.usu.edu/raikou/image/raw/biocluster/dna.jpg?h=300&w=600</code><br></br><br></br>

        Go ahead and put it into your browser, and then try this URL:<br></br><br></br>

        <code>http://bioinfocore.usu.edu/raikou/image/raw/biocluster/dna.jpg?h=300&w=600&c=b</code>

        <br></br><br></br>

        Notice how the second image seems to be centered near the bottom. No CSS at all, just a simple web request. Let's demystify those letters.<br></br>
        <br></br>

        <ul>
          <li><code>h</code> - That's the height of the image. Pretty simple, right?</li>
          <li><code>w</code> - The width, again, super simple.</li>
          <li>
            <code>c</code> - 'c' stands for center. This is where the image centers. There are 5 values: t, b, c, l, r. These are top, bottom, center, left, right.
            Notice how in the URL above, the value 'b' was used. If your image is wider than it is tall, you can use left and right. Try reversing the 
            width and height values (<code>w</code> and <code>h</code>) and then changing the value of <code>c</code> to either l or r. Center is the 
            default value.
          </li>
        </ul>
      </p>

      <h4>Back End - Aspect Ratio Processing</h4>

      <p>
        Use this option for when you want to do some more advanced image operations. You can do simple aspect ratios, but you can also extract parts of an image 
        as well. Maybe you have an image where you just want a certain part of the center but you don't want the entire image. Extraction is a good tool for this.
        First, let's talk aspect ratios. Maybe you don't want hard dimensions, but you just need some aspect. <br></br><br></br>

        <code>http://bioinfocore.usu.edu/raikou/image/aspect/biocluster/dna.jpg?h=4&w=3</code><br></br><br></br>

        The above will give you an image that is in a 4:3 aspect ratio. If the image can't be contorted to those dimensions, then the image will be as close as possible
        to the ratio. Feel free to play around with the dimensions to get a feel for it. 

      </p>

      <h4>Deploying Raikou</h4>

      <p>
        Image servers can be costly. Luckily, Raikou isn't served from any ordinary computer. It can take advantage of the Head node's 128 threads 
        (though it shouldn't use them all, about 100 threads should suffice). This means more images served concurrently. 
      </p>
    </div>
  )
}

export {raikou};
