<div class="header row align-items-center">
    <div class="col-6">
        <div class="d-flex p-4 align-items-center">
            <!-- <i class="fas fa-meteor text-white"></i> -->
            <img src="../../svelte-color.png" alt="svelte" class="svelte-logo">
            <span class="header-name ml-3">Silawfolio</span>
        </div>
    </div>
    <div class="col-6 d-flex justify-content-end align-items-center">
        <!-- <div class="profile-photo">

        </div> -->
        <div class="appbar p-4 d-flex justify-content-end">
            <a href="https://500px.com/p/luthfiaw_?view=photos" target="_blank" rel="noopener noreferrer" class="text-white">
                <i class="fab fa-500px mr-3"></i>
            </a>
            <a href="https://www.linkedin.com/in/luthfiaw/" target="_blank" rel="noopener noreferrer" class="text-white">
                <i class="fab fa-linkedin-in mx-3"/>
            </a>
            <a href="https://twitter.com/si__law" target="_blank" rel="noopener noreferrer" class="text-white">
                <i class="fab fa-twitter mx-3"></i>
            </a>
            <a href="https://dev.to/luthfiajiw" target="_blank" rel="noopener noreferrer" class="text-white">
                <i class="fab fa-dev mx-3"></i>
            </a>
            <a href="https://github.com/luthfiajiw" target="_blank" rel="noopener noreferrer" class="text-white">
                <i class="fab fa-github ml-3"></i>
            </a>
        </div>
    </div>
</div>

<style>
    i {
		font-size: 1.6rem;
	}
    .svelte-logo {
        width: 30px;
        height: 35px;
    }
    .profile-photo {
        background-color: #eee;
        height: 50px;
        width: 50px;
        margin-right: 1.2rem;
        border-radius: 50%;
        background-image: url('../../assets/photo-profile.jpg');
        background-position: center;
        background-size: cover;
    }
    .appbar a:hover {
        transition: all 0.5s ease 0s;
        transform: scale(1.2);
    }
    .header-name {
        color: white;
        font-size: 1.6rem;
    }

    @media only screen and (max-width: 768px) {
        i {
            font-size: 18px;
        }
        .profile-photo {
            height: 40px;
            width: 40px;
        }
        .fa-500px, .fa-linkedin-in, .fa-twitter, .fa-dev, .fa-github {
            margin-left: 0px !important;
        }
        .header-name {
            font-size: 18px;
        }
        .svelte-logo {
            width: 25px;
            height: 30px;
        }
    }
</style>