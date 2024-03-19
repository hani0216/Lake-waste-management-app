import React from 'react';

function ProfileBox() {
  return (
    <div>
        <div class="card">
        <div className='infobox' >
                    <div class="cover-photo">
            <img src="https://i.imgur.com/KykRUCV.jpeg" class="profile"></img>
        </div>
        <h3 class="profile-name">Essm l profile</h3>
        <p class="about">UI/UX Designer Front End Developer</p>
        <p class="about">Mail</p>
        <p class="about">Adresse</p>
        <p class="about">Num Tel</p>
        <p class="about">Taux Actuel</p>

        <div class="icons">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
        </div>
    </div>
        </div>

      </div>
  );
}

export default ProfileBox;
