<script>

import Divider from "./components/Divider.svelte";

</script>

<div class="techs container-md mt-4 mb-5">
    <div class="pt-5">
        <Divider />
    </div>
    <h3 class="pt-3">Teknologi</h3>
    <p class="tech-desc">
        Saya memiliki pengalaman menggunakan berbagai macam teknologi dalam dunia frontend hingga backend.
    </p>
    <div class="row card-row">
        <div class="card-tech">
            <img src="../../assets/flutter-icon.svg" alt="icon" height="25">
            <p class="card-tech-title mt-2 pt-1">
                Flutter
            </p>
            <p class="card-tech-desc mb-5">
                Berpengalaman dalam membangun aplikasi mobile dengan flutter.
            </p>
            <!-- <a href="/" class="see-project">Lihat Proyek</a> -->
        </div>
        <div class="mx-4"></div>
        <div class="card-tech">
            <i class="fab fa-react card-tech-ic"></i>
            <p class="card-tech-title mt-2">
                React
            </p>
            <p class="card-tech-desc mb-5">
                Memiliki pengalaman dalam membangun aplikasi web berbasis React JS.
            </p>
            <!-- <a href="/" class="see-project">Lihat Proyek</a> -->
        </div>
        <div class="mx-4"></div>
        <div class="card-tech">
            <i class="fab fa-node-js card-tech-ic"></i>
            <p class="card-tech-title mt-2">
                Restful API
            </p>
            <p class="card-tech-desc mb-5">
                Memiliki pengalaman dalam membuat Restful API dengan Express JS.
            </p>
            <!-- <a href="/" class="see-project">Lihat Proyek</a> -->
        </div>
    </div>
</div>

<style>
    h3 {
        font-size: 56px;
        font-weight: 800;
        background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .card-row {
        margin-top: 3rem;
    }
    .card-tech {
        width: 250px;
        padding: 1rem;
        border-radius: 4px;
    }
    .tech-desc {
        max-width: 800px;
        font-size: 24px;
        line-height: 40px;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.5);
    }
    .card-tech-ic {
        color: #FFFFFF;
        font-size: 24px;
    }
    .card-tech-title {
        font-weight: 700;
        font-size: 24px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
    }
    .card-tech-desc {
        color: rgba(255, 255, 255, 0.5);
    }
    .see-project {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
    }

    .card-tech:hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: all 0.5s ease 0s;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    @media only screen and (max-width: 768px) {
        .card-row {
            margin-top: 0rem;
        }
        .card-tech {
            width: 100%;
            margin-left: 2rem;
            margin-right: 2rem;
            text-align: center;
        }
        .card-tech:hover {
            transform: scale(1);
        }
        h3 {
            font-size: 32px;
            padding-top: 0px;
            margin-bottom: 18px;
        }
        .tech-desc {
            font-size: 16px;
            line-height: 24px;
        }
    }
</style>