      //  START
      let profile_pics = document.querySelectorAll('img[alt$="profile picture"]')

      const hovering = new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
        view: window
      });

      for (let i = 0; i < 100; i++) {

        var profile_pic = profile_pics[i]
        profile_pic.dispatchEvent(hovering);

      }